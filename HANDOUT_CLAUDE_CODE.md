# HANDOUT per Claude Code — App di studio di Gioele

> Incollalo in una sessione `claude` aperta **nella cartella del progetto di Gioele**
> (dove hai messo `BRIEF.md` e `seeds/Gioele_Mathe_Trainer.html`).

---

Sei lo sviluppatore di un'app di studio per mio figlio **Gioele**: Realschule in Bayern (Mainburg), Mittlere Reife, Wahlpflichtfächergruppe **IIIa**, quattro prove scritte. Costruiscila e poi mantienila nel tempo insieme a me.

## Date d'esame 2026 (ufficiali)
Deutsch **24.06** · Französisch **25.06** · Englisch **26.06** · Mathematik II **29.06**. Tutte alle 8:30; Mathe 170 min con **Teil A senza calcolatrice** + Teil B.

## Cosa ho già preparato (è nella cartella del progetto)
- **`BRIEF.md`** — specifica completa: architettura data-driven, contenuti per materia in tedesco, struttura del TGA, formati di Englisch/Französisch, suite anti-bug, Definition of Done. **Leggila per intero.**
- **`seeds/Gioele_Mathe_Trainer.html`** — app di Mathe **già costruita, debuggata e verificata**. Contiene: **28 esercizi verificati**, **figure SVG** disegnate, teoria e mappa argomenti delle 4 aree (Funktionen · Geometrie & Trigonometrie · Raumgeometrie · Daten & Zufall), struttura Teil A/Teil B, simulazione 170 min. È il **seme** per la matematica: estrai da qui i contenuti e **traducili in tedesco**.
- Le ~60 foto delle prove reali di Mathe di Gioele sono **già distillate** in quel file: non ti servono gli originali. Per Deutsch/Englisch/Französisch **non ho materiale personale**: usa i formati ufficiali della Realschule Bayern e i pattern degli anni precedenti, scrivendo esercizi **originali**. (Se in futuro metto foto/PDF di nuove prove in una cartella `material/`, le userai per generare nuovi esercizi.)

## La tua libertà
La mia specifica è un punto di partenza solido, **non una gabbia**. Valuta le **skill** disponibili (es. `frontend-design`) e scegli l'approccio migliore: se trovi un'architettura o strumenti migliori, **usali o riprogetta tu l'app**. Decidi tu dettagli tecnici e UX — purché valgano i requisiti non negoziabili qui sotto.

## Requisiti NON negoziabili
1. **App al 100% in TEDESCO** (interfaccia, spiegazioni, esercizi). Solo `README`/file per me possono restare in italiano.
2. **Offline-first + pubblicabile su GitHub Pages.** Deve funzionare anche aperta in locale, senza dipendere da CDN.
3. **4 materie** con **countdown** alla rispettiva data d'esame.
4. **Deutsch = priorità:** TGA-Trainer **passo-passo** (Gliederung A–D), cataloghi *Textsorten* e *rhetorische Mittel*, **≥2 Übungstexte originali con Musterlösung completa**. Gioele deve migliorare molto sul TGA.
5. **Mathematik:** riusa il seed (traducendo in tedesco), mantenendo Teil A/B e simulazione.
6. **Englisch & Französisch:** tutte le aree d'esame — Vokabeln, Grammatik, Leseverstehen, **Mediation** (EN) / **Version** F→D (FR), Textproduktion/Guided Writing, Hörverstehen come **transcript** — con esercizi **originali** e soluzioni/chiavi.
7. **Abitudine quotidiana:** una schermata **„Heute"** che ogni giorno dice a Gioele **cosa studiare** (piano fino all'esame), così apre l'app e sa subito cosa fare.
8. **Tutto si salva, si documenta, si rivede** (requisito centrale):
   - **Lernprotokoll / Lerntagebuch** persistente: ogni sessione registra **data, materia, argomenti, esercizi svolti, giusto/sbagliato, tempo impiegato** ed eventuali risposte scritte da Gioele.
   - Gioele può **rivedere lo storico**, **rifare gli esercizi** e **ristudiare qualunque cosa quando vuole**.
   - **Fortschritt** per materia/area + **lista errori** da ripassare.
   - **Persistenza robusta:** `localStorage` con fallback in memoria **+ Esporta/Importa** un file **JSON di backup** (così i dati non si perdono e si spostano tra dispositivi). Nota: l'hosting è statico (nessun server), i dati vivono nel browser → cura bene il backup. Se ritieni migliore un'altra soluzione, proponila.
9. **A prova di bug:**
   - Difese nel codice: `storage` in `try/catch`, `init()` in `try/catch` con **messaggio d'errore amichevole in tedesco** (mai pagina bianca), rendering **difensivo** per materia (un bug in una materia non blocca le altre).
   - Suite **`tools/verify.mjs`**: `node --check` su ogni JS; bilanciamento `{}()[]` **template-aware**; **DOM-stub headless** che esegue `init()` e le funzioni chiave; invarianti dati (id unici, date valide, ogni esercizio ha soluzione, aree non vuote).
   - Esegui `node tools/verify.mjs` e **itera finché è tutto verde** prima di ogni commit.
10. **Copyright:** esercizi e testi **originali**, mai copiati da prove reali.

## Procedura
- Costruisci a step: motore + Mathe → Deutsch → Englisch/Französisch. **Verifica dopo ogni step.**
- Crea `README.md` (uso quotidiano, come fare backup, come si aggiorna, link Pages) e `.nojekyll`.
- `git init` + commit con messaggi chiari. Poi guidami a **creare il repo su GitHub** e ad attivare **GitHub Pages**, e mostrami i comandi per il **push**. Non inventare credenziali: chiedimi ciò che ti serve.

## Manutenzione (come lavoreremo dopo)
- Ti manderò **bug report** o **feedback di Gioele** (es. "questa parte non funziona", "qui la soluzione è sbagliata", "aggiungi esercizi di X"). Per ognuno: individua/riproduci → correggi → `node tools/verify.mjs` → commit + push.
- **Importante:** non cancellare i **dati salvati di Gioele** (Lernprotokoll, progressi) passando da una versione all'altra. Se cambi lo schema dei dati, gestisci una **migrazione** che preserva lo storico.

## Alla fine dammi
Un riepilogo **per materia**, l'esito di `verify.mjs`, l'**URL di GitHub Pages**, una spiegazione di **come funziona il salvataggio/backup**, e 3 righe su **come ti manderò gli aggiornamenti**.
