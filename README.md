# Gioele – Abschlussprüfung Trainer (Realschule Mainburg, Bayern)

App di studio **offline-first, 100% in tedesco** per preparare Gioele alle 4 prove scritte del **Realschulabschluss 2026** (Wahlpflichtfächergruppe IIIa): Deutsch, Französisch, Englisch, Mathematik II.

## Uso quotidiano
- Apri l'app (link GitHub Pages qui sotto) oppure doppio click su `index.html` (funziona offline).
- Scegli la materia in alto → vedi il **countdown** alla prova.
- Sezione **„Heute"**: cosa studiare oggi. **Lernplan**: piano fino all'esame.
- Esercizi: leggi, prova, poi **„Lösung zeigen"** → segna **Richtig/Falsch** (alimenta progressi + lista errori).
- **Simulation** con timer; **Fehler/Wiederholen** per il ripasso; **Fortschritt** per i progressi.

## Date d'esame 2026
Deutsch 24.06 · Französisch 25.06 · Englisch 26.06 · Mathematik II 29.06.

## Salvataggio dei dati (importante)
- I progressi (Lernprotokoll, errori, statistiche) si salvano nel **browser** (`localStorage`) del dispositivo.
- Sono **locali al dispositivo/browser**: per spostarli o non perderli, usa **Esporta/Importa** il file JSON di backup dall'app.
- Aggiornando l'app i dati restano (lo schema viene migrato senza cancellare lo storico).

## Materie
- **Deutsch:** TGA-Trainer A–D, cataloghi Textsorten e rhetorische Mittel, Übungstexte con Musterlösung, materialbasierte Erörterung.
- **Mathematik:** 28 esercizi verificati (Funktionen, Geometrie & Trigonometrie, Raumgeometrie, Daten & Zufall), figure, Teil A/B, Simulation 170 min.
- **Englisch / Französisch:** tutte le aree d'esame con esercizi originali e soluzioni.

## Aggiornare / segnalare bug
Manda a Pasquale (o a Claude Code) il feedback di Gioele ("qui la soluzione è sbagliata", "aggiungi esercizi di X"): si corregge il file dati relativo, si esegue `node tools/verify.mjs` (deve essere verde) e si fa commit + push. I contenuti stanno in `data/*.js`, il motore in `index.html`.

## Tecnica
Vanilla HTML/CSS/JS, niente framework/CDN. Verifica anti-bug: `node tools/verify.mjs`.

## Link GitHub Pages
→ _(verrà inserito dopo la pubblicazione)_
