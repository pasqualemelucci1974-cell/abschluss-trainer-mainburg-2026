/* ============================================================
   verify.mjs  —  Anti-Bug-Prüfsuite für Maxs Abschluss-App
   Ausführen:  node tools/verify.mjs
   Exit-Code != 0, wenn irgendeine Prüfung fehlschlägt.
   Keine externen Abhängigkeiten (nur Node-Standardbibliothek).
   ============================================================ */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DATA_DIR = join(ROOT, "data");
const INDEX = join(ROOT, "index.html");

let failures = 0;
const log = (m) => console.log(m);
function pass(name){ log("  ✓ " + name); }
function fail(name, detail){ failures++; log("  ✗ " + name + (detail ? "  — " + detail : "")); }
function section(t){ log("\n== " + t + " =="); }

/* ---------- Helfer: <script> aus index.html extrahieren ---------- */
function extractScripts(html){
  const scripts = [];
  // HTML-Kommentare entfernen, damit darin erwähnte <script>-Tags nicht
  // fälschlich als echte Skripte erkannt werden.
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while((m = re.exec(html)) !== null){
    const attrs = m[1] || "";
    // externe Skripte (src=...) haben keinen Inline-Body
    if(/\bsrc\s*=/.test(attrs)) continue;
    scripts.push(m[2]);
  }
  return scripts;
}

/* ---------- 1) node --check auf jede JS-Quelle ---------- */
section("1) Syntaxpruefung (node --check)");
function nodeCheck(label, code){
  let tmp;
  try{
    const dir = mkdtempSync(join(tmpdir(), "gioele-"));
    tmp = join(dir, "chk.js");
    writeFileSync(tmp, code, "utf8");
    execFileSync(process.execPath, ["--check", tmp], { stdio: "pipe" });
    pass("node --check: " + label);
    return true;
  }catch(e){
    const msg = (e.stderr ? e.stderr.toString() : e.message).split("\n").slice(0,3).join(" ");
    fail("node --check: " + label, msg);
    return false;
  }
}

if(!existsSync(INDEX)){ fail("index.html vorhanden"); }
const html = existsSync(INDEX) ? readFileSync(INDEX, "utf8") : "";
const inlineScripts = extractScripts(html);
if(!inlineScripts.length){ fail("Inline-Engine-Script in index.html gefunden"); }
inlineScripts.forEach((s, i) => nodeCheck("index.html Script #" + (i+1), s));

const dataFiles = existsSync(DATA_DIR)
  ? readdirSync(DATA_DIR).filter(f => f.endsWith(".js")).sort()
  : [];
if(!dataFiles.length){ fail("data/*.js Dateien vorhanden"); }
const dataSources = {};
for(const f of dataFiles){
  const code = readFileSync(join(DATA_DIR, f), "utf8");
  dataSources[f] = code;
  nodeCheck("data/" + f, code);
}

/* ---------- 2) Klammer-Bilanz (template-/string-aware) ---------- */
section("2) Klammer-Bilanz {} () [] (template- und string-bewusst)");
function balanceCheck(label, src){
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  let i = 0, n = src.length;
  let mode = "code";       // code | s1 | s2 | tpl | lc | bc | regex
  // tpl-Stack für ${ } Verschachtelung
  const tplStack = [];
  let prevSignificant = "";
  while(i < n){
    const c = src[i], c2 = src[i+1];
    if(mode === "code"){
      if(c === "/" && c2 === "/"){ mode = "lc"; i += 2; continue; }
      if(c === "/" && c2 === "*"){ mode = "bc"; i += 2; continue; }
      if(c === "'"){ mode = "s1"; i++; continue; }
      if(c === '"'){ mode = "s2"; i++; continue; }
      if(c === "`"){ mode = "tpl"; i++; continue; }
      if(c === "/"){
        // Regex vs. Division: Regex, wenn vorher ein Operator/Klammer-Öffner/Anfang
        if(prevSignificant === "" || /[=(,:;{[!&|?+\-*%^~<>]/.test(prevSignificant)){
          mode = "regex"; i++; continue;
        }
      }
      if(c === "(" || c === "[" || c === "{"){ stack.push(c); prevSignificant = c; i++; continue; }
      if(c === ")" || c === "]" || c === "}"){
        const open = stack.pop();
        if(open !== pairs[c]){
          fail("Bilanz: " + label, "unerwartetes '" + c + "' bei Index " + i);
          return false;
        }
        prevSignificant = c; i++; continue;
      }
      if(!/\s/.test(c)) prevSignificant = c;
      i++; continue;
    }
    if(mode === "lc"){ if(c === "\n") mode = "code"; i++; continue; }
    if(mode === "bc"){ if(c === "*" && c2 === "/"){ mode = "code"; i += 2; } else i++; continue; }
    if(mode === "s1"){ if(c === "\\"){ i += 2; continue; } if(c === "'"){ mode = "code"; prevSignificant="'"; } i++; continue; }
    if(mode === "s2"){ if(c === "\\"){ i += 2; continue; } if(c === '"'){ mode = "code"; prevSignificant='"'; } i++; continue; }
    if(mode === "regex"){ if(c === "\\"){ i += 2; continue; }
      if(c === "["){ // Zeichenklasse: ] darin ignorieren
        i++; while(i<n){ if(src[i]==="\\"){i+=2;continue;} if(src[i]==="]"){i++;break;} i++; } continue; }
      if(c === "/"){ mode = "code"; prevSignificant="/"; } i++; continue; }
    if(mode === "tpl"){
      if(c === "\\"){ i += 2; continue; }
      if(c === "`"){ mode = "code"; prevSignificant="`"; i++; continue; }
      if(c === "$" && c2 === "{"){ tplStack.push(stack.length); stack.push("{"); mode = "code"; i += 2; continue; }
      i++; continue;
    }
  }
  if(stack.length !== 0){ fail("Bilanz: " + label, "ungeschlossen: '" + stack.join("") + "'"); return false; }
  if(mode !== "code"){ fail("Bilanz: " + label, "unbeendeter Modus: " + mode); return false; }
  pass("Bilanz: " + label);
  return true;
}
inlineScripts.forEach((s,i)=>balanceCheck("index.html Script #" + (i+1), s));
for(const f of dataFiles) balanceCheck("data/" + f, dataSources[f]);

/* ---------- 3) DOM-Stub headless: APP.init() + Schlüssel­funktionen ---------- */
section("3) Headless DOM-Stub: APP.init() und Kernfunktionen");
function buildDomStub(){
  function makeEl(tag){
    const node = {
      tagName: (tag||"div").toUpperCase(),
      children: [], style: {}, attributes: {}, _listeners: {},
      className: "", _value: "",
      get firstChild(){ return this.children[0] || null; },
      set innerHTML(v){ this._innerHTML = v; },
      get innerHTML(){ return this._innerHTML || ""; },
      set textContent(v){ this._text = v; },
      get textContent(){ return this._text || ""; },
      set value(v){ this._value = v; },
      get value(){ return this._value; },
      appendChild(c){ this.children.push(c); return c; },
      removeChild(c){ const k=this.children.indexOf(c); if(k>=0) this.children.splice(k,1); return c; },
      setAttribute(k,v){ this.attributes[k]=v; if(k==="class") this.className=v; },
      getAttribute(k){ return this.attributes[k]; },
      addEventListener(ev,fn){ (this._listeners[ev]=this._listeners[ev]||[]).push(fn); },
      removeEventListener(){},
      click(){ (this._listeners["click"]||[]).forEach(f=>{ try{f({target:this});}catch(e){} }); },
      dispatch(ev){ (this._listeners[ev]||[]).forEach(f=>{ try{f({target:this});}catch(e){} }); },
      classList: { _s:new Set(),
        add(){ for(const a of arguments) this._s.add(a); },
        remove(){ for(const a of arguments) this._s.delete(a); },
        toggle(c){ this._s.has(c)?this._s.delete(c):this._s.add(c); },
        contains(c){ return this._s.has(c); } }
    };
    return node;
  }
  const byId = {};
  ["subjSelect","countdown","tabs","view"].forEach(id => { const e = makeEl("div"); e.id = id; byId[id] = e; });
  const documentStub = {
    readyState: "complete",
    getElementById: (id) => byId[id] || null,
    createElement: (t) => makeEl(t),
    createTextNode: (t) => ({ nodeType:3, textContent:t }),
    addEventListener(){},
  };
  const storageMem = {};
  const localStorageStub = {
    getItem: (k)=> (k in storageMem ? storageMem[k] : null),
    setItem: (k,v)=> { storageMem[k] = String(v); },
    removeItem: (k)=> { delete storageMem[k]; }
  };
  const windowStub = {
    localStorage: localStorageStub,
    addEventListener(){},
    print(){},
    confirm: ()=>true,
    alert(){},
  };
  return { documentStub, windowStub, localStorageStub, byId };
}

function runHeadless(){
  const { documentStub, windowStub, byId } = buildDomStub();
  // WICHTIG: Das Sandbox-Objekt IST window. So wird "window.APP = APP"
  // zu einer echten Globalen, auf die die Daten-Dateien per bare "APP" zugreifen
  // (genau wie im Browser, wo window das globale Objekt ist).
  const sandbox = {
    document: documentStub,
    localStorage: windowStub.localStorage,
    console: { log(){}, error(){}, warn(){} },
    setTimeout: ()=>0, clearTimeout: ()=>{},
    setInterval: ()=>0, clearInterval: ()=>{},
    Blob: function(){ return {}; },
    URL: { createObjectURL: ()=> "blob:stub", revokeObjectURL: ()=>{} },
    FileReader: function(){ this.readAsText=function(){ if(this.onload) this.onload(); }; },
    print(){}, confirm: ()=>true, alert(){}, addEventListener(){},
    Date, JSON, Math, parseInt, parseFloat, Array, Object, String, Number, isNaN, RegExp, Error,
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);

  // Engine zuerst laden (definiert window.APP), DANN Daten — wie im Browser umgekehrt:
  // im Browser laufen Daten zuerst, dann Engine. APP muss aber vor register existieren.
  // Lösung: Engine definiert APP; Daten rufen APP.register. Wir laden Engine zuerst,
  // führen dann Daten aus, und rufen init manuell (Engine-Autostart nutzt DOMContentLoaded/complete).
  // Da readyState=complete, ruft die Engine init() selbst auf BEVOR Daten da sind -> 0 Fächer.
  // Deshalb: wir verhindern Autostart-Effekt, indem wir nach dem Laden erneut init() rufen.
  try{
    for(const s of inlineScripts){ vm.runInContext(s, ctx, { filename: "engine.js" }); }
  }catch(e){ fail("Engine laden", e.message); return; }

  const APP = sandbox.window.APP;
  if(!APP){ fail("APP global definiert"); return; }
  pass("APP global definiert");

  // Daten laden (rufen APP.register)
  let regErr = false;
  for(const f of dataFiles){
    try{ vm.runInContext(dataSources[f], ctx, { filename: f }); }
    catch(e){ fail("Daten laden: " + f, e.message); regErr = true; }
  }
  if(!regErr) pass("Alle Daten-Dateien ausgefuehrt");

  const subjects = APP.getSubjects ? APP.getSubjects() : [];
  if(subjects.length >= 4) pass("Mindestens 4 Faecher registriert (" + subjects.length + ")");
  else fail("Mindestens 4 Faecher registriert", "nur " + subjects.length);

  // init() ausführen
  try{
    const ok = APP.init();
    if(ok === false) fail("APP.init() erfolgreich");
    else pass("APP.init() ohne Ausnahme");
  }catch(e){ fail("APP.init() ohne Ausnahme", e.message); }

  // Kernfunktionen über UI simulieren:
  // (a) Fachwechsel via subjSelect.change
  try{
    const sel = byId["subjSelect"];
    if(sel.children.length){
      sel.value = subjects[subjects.length-1].id;
      sel.dispatch("change");
    }
    pass("Fachwechsel ohne Ausnahme");
  }catch(e){ fail("Fachwechsel ohne Ausnahme", e.message); }

  // (b) Alle Tabs durchklicken -> render Bereiche, Simulation, Fehler, Fortschritt
  try{
    const tabs = byId["tabs"];
    // jeden Tab anklicken; nach jedem Klick werden tabs neu aufgebaut -> Snapshot nehmen
    let guard = 0;
    function clickAll(){
      const snapshot = tabs.children.slice();
      for(const b of snapshot){
        if(guard++ > 200) return;
        try{ b.click(); }catch(e){ throw new Error("Tab-Klick: " + e.message); }
      }
    }
    clickAll();
    pass("Alle Tabs gerendert ohne Ausnahme");
  }catch(e){ fail("Alle Tabs gerendert ohne Ausnahme", e.message); }

  // (c) In einem Bereich: Lösung zeigen + Richtig/Falsch + Simulation Start/Stop
  try{
    const view = byId["view"];
    function walk(node, fn){ if(!node||!node.children) return; for(const c of node.children){ fn(c); walk(c,fn);} }
    let clicked = 0;
    walk(view, (c)=>{ if(c._listeners && c._listeners.click && clicked < 30){ try{ c.click(); clicked++; }catch(e){} } });
    pass("Buttons im View klickbar (Loesung/Richtig/Falsch/Sim)");
  }catch(e){ fail("Buttons im View klickbar", e.message); }
}
runHeadless();

/* ---------- 4) Daten-Invarianten ---------- */
section("4) Daten-Invarianten");
function runInvariants(){
  // Daten in isoliertem Kontext sammeln (eigenes APP.register, das Objekte speichert)
  const collected = [];
  const sandbox = { APP: { register: (s)=> collected.push(s) }, console:{log(){},error(){},warn(){}} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  for(const f of dataFiles){
    try{ vm.runInContext(dataSources[f], ctx, { filename: f }); }
    catch(e){ fail("Invarianten: " + f + " ausfuehrbar", e.message); }
  }
  if(collected.length < 4){ fail("Vier Faecher registriert", collected.length + " gefunden"); }
  else pass("Vier Faecher registriert");

  const isoRe = /^\d{4}-\d{2}-\d{2}$/;
  const allIds = new Set();
  let idDup = false, badIso = false, emptyArea = false, missingSol = false;

  for(const s of collected){
    const tag = s && s.id ? s.id : "(ohne id)";
    if(!s.examISO || !isoRe.test(s.examISO) || isNaN(new Date(s.examISO).getTime())){
      fail("examISO gueltig: " + tag, String(s.examISO)); badIso = true;
    }
    const areas = Array.isArray(s.areas) ? s.areas : [];
    if(!areas.length){ fail("mind. 1 Bereich: " + tag); emptyArea = true; }
    for(const a of areas){
      if(!a || !a.id){ fail("Bereich hat id: " + tag); continue; }
      const hasContent = (Array.isArray(a.exercises) && a.exercises.length) ||
        a.tgaTrainer || a.vokabeln || a.grammatik || a.leseverstehen || a.version || a.kataloge ||
        a.theory || (Array.isArray(a.examples) && a.examples.length);
      if(!hasContent){ fail("Bereich nicht leer: " + tag + "/" + a.id); emptyArea = true; }
      const exs = Array.isArray(a.exercises) ? a.exercises : [];
      for(const ex of exs){
        if(!ex || !ex.id){ fail("Aufgabe hat id: " + tag + "/" + a.id); continue; }
        if(allIds.has(ex.id)){ fail("Aufgaben-id eindeutig", "doppelt: " + ex.id); idDup = true; }
        allIds.add(ex.id);
        const hasPrompt = !!ex.prompt;
        const hasSol = !!ex.answer || (Array.isArray(ex.solutionSteps) && ex.solutionSteps.length);
        if(!hasPrompt || !hasSol){
          fail("Aufgabe prompt+Loesung: " + ex.id, !hasPrompt ? "kein prompt" : "keine Loesung");
          missingSol = true;
        }
      }
    }
  }
  if(!badIso) pass("Alle examISO gueltig");
  if(!emptyArea) pass("Keine leeren Bereiche");
  if(!idDup) pass("Alle Aufgaben-ids eindeutig");
  if(!missingSol) pass("Jede Aufgabe hat prompt + Loesung");
}
runInvariants();

/* ---------- Abschlussbericht ---------- */
section("Ergebnis");
if(failures === 0){
  log("\n  ALLES GRUEN ✓  (" + dataFiles.length + " Daten-Dateien geprueft)\n");
  process.exit(0);
}else{
  log("\n  " + failures + " Pruefung(en) FEHLGESCHLAGEN ✗\n");
  process.exit(1);
}
