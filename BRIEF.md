# BRIEF — App di preparazione all'Abschlussprüfung di Gioele
**Realschule Bayern · Mittlere Reife · Wahlpflichtfächergruppe IIIa · Mainburg**

> Questo file è la specifica completa che **Claude Code** deve leggere e seguire.
> Lingua per il genitore: italiano. **L'APP (interfaccia + spiegazioni + esercizi) deve essere AL 100% IN TEDESCO.**

---

## 0. Obiettivo
Costruire un'app di studio **offline-first**, **interamente in tedesco**, ospitata su **GitHub Pages**, per preparare Gioele alle **4 prove scritte** della Mittlere Reife. Deve essere migliore di Gemini/NotebookLM: matematica resa correttamente, figure disegnate, **esercizi originali** nello stile delle prove bavaresi, **soluzioni verificate**, piano giorno-per-giorno, tracciamento progressi, stampa/PDF. Deve essere **a prova di bug** (vedi §4) e **mantenibile nel tempo** (aggiornamenti + correzioni via Git).

## 1. Materie e date d'esame 2026
Fonte ufficiale: Verkündungsplattform Bayern (BayMBl. 2025 Nr. 98). Tutte alle 8:30 (Deutsch in una finestra 8:00–13:00).

| Materia | Data 2026 | Durata | Formato chiave |
|---|---|---|---|
| **Deutsch** | Mi **24.06.2026** | 240 min (finestra) | TGA *oppure* materialbasierte Erörterung |
| **Französisch** | Do **25.06.2026** | 140 min | Compréhension orale/écrite, Version (F→D), Production écrite, Production orale (DELF B1 integrato) |
| **Englisch** | Fr **26.06.2026** | ~135 min scritto | Listening + (Reading/Mediation, Use of English, Guided Writing) + Speaking Test |
| **Mathematik II** | Mo **29.06.2026** | 170 min | Teil A (senza calcolatrice) + Teil B |

Ogni materia ha un **countdown** alla propria data nell'app.

## 2. Architettura (data-driven, no build, offline + GitHub Pages)
- **Vanilla HTML/CSS/JS puro.** Niente framework, niente bundler, niente npm a runtime, **niente CDN** (deve funzionare offline).
- **Classic `<script>` tags**, NON ES-modules (`type="module"` è bloccato da CORS su `file://`). Così l'app gira sia con doppio-click in locale (`file://`) sia su GitHub Pages.
- **Separazione motore/contenuti:**
  - `index.html` → guscio + motore (engine) + CSS.
  - `data/deutsch.js`, `data/mathematik.js`, `data/englisch.js`, `data/franzoesisch.js` → ogni file registra una materia con `APP.register({...})`.
- **Modello dati per materia:**
  ```js
  APP.register({
    id: "deutsch",
    name: "Deutsch",
    examISO: "2026-06-24",
    examInfo: "TGA / materialbasierte Erörterung · 24.06.2026",
    areas: [
      {
        id: "tga",
        title: "Textgebundener Aufsatz (TGA)",
        theory: "<p>…HTML in tedesco…</p>",
        figures: ["<svg>…</svg>"],      // opzionale
        examples: [{ title, html }],     // svolti
        exercises: [
          { id:"d-tga-01", area:"tga", difficulty:1,
            prompt:"…", solutionSteps:["…","…"], answer:"…" }
        ]
      }
    ],
    // strutture specifiche opzionali (vedi §5): vokabeln, grammatik, leseverstehen, version, tgaTrainer…
  });
  ```
- Aggiungere contenuti = **modificare i file dati**, mai il motore → meno bug, facile da estendere.

## 3. Motore — funzionalità generiche (UI in tedesco)
1. **Fächerwechsel** (selettore materia) in alto.
2. **Countdown** "Noch X Tage bis zur Prüfung" per la materia attiva (calcolato dalla data del dispositivo).
3. **Seitenleiste/Navigation:** Heute · Lernplan · (aree della materia) · Simulation · Fehler/Wiederholen · Fortschritt.
4. **„Heute"**: mostra il compito del giorno secondo il Lernplan, in base alla data odierna.
5. **Lernplan** giorno-per-giorno fino alla data d'esame della materia.
6. **Aufgaben-Viewer:** consegna → "Lösung zeigen" rivela passi + risposta; pulsanti "Richtig/Falsch" che alimentano progressi e lista errori.
7. **Simulation** con timer (durata reale o ridotta) e rivelazione soluzioni alla fine.
8. **Fehler/Wiederholen:** raccoglie ciò che Gioele ha sbagliato per ripasso mirato.
9. **Fortschritt:** barra globale + statistiche per area (salvate in `localStorage`).
10. **Drucken/PDF** (CSS print).
11. **TGA-Trainer** dedicato per Deutsch (vedi §5.1).

## 4. Robustezza ("a prova di bug") + verifica automatica — OBBLIGATORIO
**Difese nel codice:**
- Wrapper `storage` su `localStorage` con `try/catch` e **fallback in memoria** (così funziona anche in anteprima/in privato).
- `APP.init()` avvolto in `try/catch`: se qualcosa fallisce, mostra un riquadro d'errore amichevole **in tedesco**, mai pagina bianca.
- Rendering difensivo: salta elementi malformati senza crashare; **ogni materia renderizzata in `try/catch`** così un bug in una non blocca le altre.
- ID unici per ogni esercizio/area.

**Suite di verifica automatica — `tools/verify.mjs` (Node):** da eseguire **prima di ogni commit**, deve passare tutta verde. Controlli minimi:
1. **Sintassi:** `node --check` su `index.html`-script estratto e su ogni `data/*.js`.
2. **Bilanciamento** di `{}`, `()`, `[]` con scanner **consapevole dei template literal** e delle stringhe (per evitare il caso "due errori che si compensano").
3. **DOM-stub headless:** definisce `document`/`window` minimi, carica motore + dati, esegue `APP.init()` e le funzioni chiave (cambio materia, render aree, simulazione, rivela soluzione, reset) → nessuna eccezione.
4. **Invarianti dati:** ogni materia ha `examISO` valido; ogni area non vuota; ogni esercizio ha `prompt` + (`answer` o `solutionSteps`); nessun `id` duplicato; nessun riferimento a funzioni/variabili inesistenti.
5. Report finale: ✓/✗ per categoria; exit code ≠ 0 se qualcosa fallisce.

> Claude Code deve **iterare (genera → verifica → corregge) finché `node tools/verify.mjs` è tutto verde**, e solo allora committare.

## 5. Contenuti per materia (in TEDESCO, originali)
> **Copyright:** scrivere **esercizi e testi ORIGINALI nello stile** delle prove bavaresi. **Non copiare** testi di prove reali. Basarsi su formati e temi ricorrenti degli anni precedenti.

### 5.1 Deutsch — priorità assoluta: TGA dalla A alla Z (Gioele deve migliorare molto)
Implementare un **TGA-Trainer** che guida passo-passo secondo la Gliederung ufficiale:
- **A. Informationen zum Text / Texthintergrund** — Einleitungssatz: Autor, Titel, Textsorte, Erscheinungsjahr, Thema.
- **B. Texterschließung**
  - **I. Inhaltszusammenfassung** (Präsens, sachlich, eigene Worte).
  - **II. Textsorte belegen** — Merkmale am Text nachweisen. Textsorten: **Kurzgeschichte, Reportage, Glosse, Kommentar, Satire, Parabel, Roman, Bericht**.
  - **III. Sprachliche Analyse** — rhetorische/sprachliche Mittel + **Wirkung**, Satzbau, Wortwahl, Sprachebene (Hoch-/Standard-/Umgangssprache/Dialekt).
  - **IV. Intention des Verfassers**.
  - **V. Charakteristik** einer Person (bei literarischen Texten).
- **C. Stellungnahme** zum Text/Thema (begründete eigene Meinung).
- **D. Weiterführende Schreibaufgabe** (z. B. innerer Monolog, Tagebucheintrag, Brief, Dialog, Fortsetzung).

Inoltre includere:
- **Katalog der Textsorten** con Merkmale (per riconoscerle in fretta).
- **Katalog rhetorischer Mittel** con Beispiel **e Wirkung** (Metapher, Vergleich, Alliteration, Anapher, rhetorische Frage, Ironie, Hyperbel, Personifikation, Klimax, Parallelismus…).
- **Übungstexte originali in tedesco** (corti) con **Musterlösung completa** secondo la Gliederung A–D, e una modalità "Schritt für Schritt" in cui Gioele scrive la sua risposta per ogni punto e poi confronta con il modello.
- **Secondaria:** struttura della **materialbasierte Erörterung** (Einleitung → Argumente mit Belegen/Material → Gegenargumente → begründetes Fazit).
- Promemoria su **Rechtschreibung/Zeichensetzung/Grammatik** (vengono valutate).

### 5.2 Mathematik II (riusare il lavoro già verificato)
- **Seed:** il file `Gioele_Mathe_Trainer.html` (già costruito e verificato; verrà messo nella cartella `seeds/`). Claude Code deve **estrarre da lì** la teoria, le **figure SVG** e i **28 esercizi verificati** e trasformarli in `data/mathematik.js`, **traducendo in tedesco** le parti italiane.
- 4 aree: **Funktionen** (Parabeln: Scheitelpunktform/Mitternachtsformel; Exponentialfunktionen Wachstum/Zerfall) · **Geometrie & Trigonometrie** (Sinussatz/Kosinussatz, Kreissektor, Vierecke) · **Raumgeometrie** (Pyramide/Kegel/Kugel/Zylinder/Prisma, Rotationskörper, Pyramidenstumpf, zentrische Streckung, Strahlensatz, V(x)-Extremwert) · **Daten & Zufall** (Baumdiagramm/Pfadregel/Gegenereignis, Kombinatorik).
- Struttura **Teil A (taschenrechnerfrei)** + **Teil B**; simulazione 170 min. Raumgeometrie/Rotationskörper è il punto debole → più esercizi guidati lì.

### 5.3 Englisch (26.06.2026)
Aree (Bereiche) come nella prova:
- **Listening / Hörverstehen** — offline: fornire **transcript** + compiti (Multiple Choice, Notizen, Fragen). Nota nell'app: l'audio si può aggiungere dopo.
- **Reading / Leseverstehen** — testi **originali** in inglese + domande di comprensione + chiave.
  - **Mediation:** domande **in tedesco** su un testo inglese, **risposta in tedesco**.
- **Use of English** — Wortschatz + Grammatik (tenses, conditionals, passive, reported speech, relative clauses, gerund/infinitive).
- **Guided Writing** — scegliere 1 di 2 temi, scrivere un testo strutturato; checklist di struttura + **Mustertext** + *useful phrases*.
- **Speaking Test** — schede con domande tipiche + frasi utili.
- **Vokabeltrainer** per temi (EN↔DE) e **Grammatik-Trainer** con esercizi + soluzioni.
- Concetto di **Rahmenthema** (tema-cornice della prova).

### 5.4 Französisch (25.06.2026, IIIa)
Aree come nella prova (DELF B1 integrato):
- **Compréhension de l'oral (Hörverstehen)** — transcript + compiti (audio aggiungibile dopo).
- **Compréhension des écrits (Leseverstehen)** — testi **originali** in francese + domande + chiave.
- **Version** — **traduzione Francese→Tedesco** con traduzione modello.
- **Production écrite** — consegne + **texte modèle** + *expressions utiles*.
- **Production orale (Sprechfertigkeit)**.
- **Vokabeltrainer** tematico (FR↔DE) e **Grammatik-Trainer:** présent, passé composé, imparfait, futur, conditionnel I/II, subjonctif (basi), pronoms, négation, accord.

## 6. Note oneste (importante)
- Per **Mathematik** i contenuti derivano dal materiale reale di Gioele (verificato).
- Per **Deutsch/Englisch/Französisch** i contenuti partono da **ricerca sui formati ufficiali Realschule Bayern e dai pattern degli anni precedenti** (non da prove personali di Gioele, che non abbiamo). Nell'app, una breve nota lo dice.
- Per migliorare ancora: aggiungere col tempo **prove originali** degli anni passati (es. quaderni STARK "Realschulabschluss 2026 Bayern" per Deutsch/Englisch/Französisch; l'archivio ISB/mebis è riservato ai docenti). Si possono caricare foto come per Mathe e io/Claude Code le trasformiamo in nuovi esercizi.

## 7. Skill di Claude Code consigliate
- **frontend-design** (UI pulita, "exam-paper", accessibile, responsive).
- Lo **skill-creator/eval** per costruire la suite di verifica, se utile.
- Git per commit/branch/push e GitHub Pages.

## 8. Struttura del repository
```
gioele-abschluss/
├─ index.html              # motore + UI + CSS (tutto in tedesco)
├─ data/
│  ├─ deutsch.js
│  ├─ mathematik.js
│  ├─ englisch.js
│  └─ franzoesisch.js
├─ tools/
│  └─ verify.mjs           # suite di verifica (deve passare prima di ogni commit)
├─ seeds/
│  └─ Gioele_Mathe_Trainer.html   # sorgente Mathe già verificata
├─ README.md               # come usare, come aggiornare, link GitHub Pages
└─ .nojekyll               # evita problemi di Pages con le sottocartelle
```

## 9. Definition of Done
- [ ] Tutta l'interfaccia, le spiegazioni e gli esercizi sono **in tedesco**.
- [ ] 4 materie registrate con date e countdown corretti.
- [ ] Deutsch: TGA-Trainer A–D + cataloghi + ≥2 Übungstexte con Musterlösung.
- [ ] Mathematik: 28 esercizi verificati + figure, Teil A/B, simulazione 170 min.
- [ ] Englisch & Französisch: tutte le aree con esercizi originali + soluzioni/chiavi.
- [ ] Funziona **offline** (doppio-click) **e** su **GitHub Pages**.
- [ ] `node tools/verify.mjs` → **tutto verde**.
- [ ] `README.md` con link Pages e istruzioni di aggiornamento.
- [ ] Commit + push su GitHub; Pages attivo.
