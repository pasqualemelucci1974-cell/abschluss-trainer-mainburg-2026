# Abschlussprüfung-Trainer (Realschule Mainburg, Bayern)

App di studio **offline-first, 100% in tedesco** per preparare le 4 prove scritte del **Realschulabschluss 2026** (Wahlpflichtfächergruppe IIIa): Deutsch, Französisch, Englisch, Mathematik II.

## Uso quotidiano
- Apri il link GitHub Pages, oppure doppio click su `index.html` (funziona offline).
- Scegli la materia in alto → vedi il **countdown** alla prova.
- Sezione **„Heute"**: cosa studiare oggi. **Lernplan**: piano fino all'esame.
- Esercizi: prova, poi **„Lösung zeigen"** → segna **Richtig/Falsch** (alimenta progressi + lista errori).
- **Simulation** con timer; **Fehler/Wiederholen** per il ripasso; **Fortschritt** per i progressi.

## Date d'esame 2026
Deutsch 24.06 · Französisch 25.06 · Englisch 26.06 · Mathematik II 29.06.

## Salvataggio dei dati
- I progressi si salvano nel **browser** del dispositivo (`localStorage`), locali al dispositivo.
- Per non perderli / spostarli: usa **Esporta/Importa** il file JSON di backup dall'app.
- Aggiornando l'app i dati restano.

## Materie
- **Deutsch:** TGA-Trainer A–D + cataloghi Textsorten e rhetorische Mittel + Übungstexte con Musterlösung (focus sul TGA).
- **Mathematik:** 28 esercizi verificati (Funktionen, Geometrie & Trigonometrie, Raumgeometrie, Daten & Zufall), figure, Teil A/B, Simulation 170 min.
- **Englisch / Französisch:** tutte le aree d'esame con esercizi originali e soluzioni.

## Aggiornare / correggere
I contenuti stanno in `data/*.js`, il motore in `index.html`. Dopo ogni modifica eseguire `node tools/verify.mjs` (deve essere **verde**), poi commit + push.

## Tecnica
Vanilla HTML/CSS/JS, niente framework/CDN. Suite anti-bug: `node tools/verify.mjs`.
