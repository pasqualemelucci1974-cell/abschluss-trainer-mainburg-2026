/* ============================================================
   FACH: Deutsch  ·  Abschlussprüfung 24.06.2026
   Realschule Mainburg · Mittlere Reife · WPF-Gruppe IIIa
   Klassisches <script>, KEIN ES-Modul. Ruft APP.register auf.
   Alle Inhalte ORIGINAL. Umlaute als HTML-Entities.
   ============================================================ */
APP.register({
  id: "deutsch",
  name: "Deutsch",
  examISO: "2026-06-24",
  examInfo: "Textgebundener Aufsatz (TGA) oder materialbasierte Er&ouml;rterung &middot; ca. 180 Minuten &middot; 24.06.2026",
  examMinutes: 180,
  note: "<b>So gehst du vor:</b> Lies den Text zwei Mal. Markiere Schl&uuml;sselstellen. Halte dich an die Gliederung A&ndash;D. Schreibe sachlich im <b>Pr&auml;sens</b> und belege jede Aussage am Text (Zeilenangabe). &mdash; Die Inhalte orientieren sich am offiziellen Format der Realschule Bayern; es werden keine echten Pr&uuml;fungstexte verwendet.",

  lernplan: [
    { dateISO: "2026-06-07", areaId: "tga",
      focus: "<b>Start:</b> Gliederung A&ndash;D verstehen. Im TGA-Trainer Schritt A (Einleitungssatz) und B&nbsp;I (Inhaltszusammenfassung) schreiben." },
    { dateISO: "2026-06-08", areaId: "kataloge_textsorten",
      focus: "Textsorten lernen: Kurzgeschichte, Reportage, Glosse, Kommentar, Satire, Parabel, Roman, Bericht &ndash; Merkmale wiederholen." },
    { dateISO: "2026-06-10", areaId: "kataloge_mittel",
      focus: "Rhetorische Mittel mit Beispiel UND Wirkung wiederholen (Metapher, Anapher, rhetorische Frage &hellip;)." },
    { dateISO: "2026-06-12", areaId: "uebungstexte",
      focus: "&Uuml;bungstext 1 &bdquo;Der letzte Bus&ldquo; komplett A&ndash;D bearbeiten, dann mit der Musterl&ouml;sung vergleichen." },
    { dateISO: "2026-06-15", areaId: "uebungstexte",
      focus: "&Uuml;bungstext 2 &bdquo;Das gefundene Handy&ldquo; komplett A&ndash;D schreiben (Klausurbedingungen: Zeit nehmen!)." },
    { dateISO: "2026-06-18", areaId: "tga",
      focus: "TGA: Sprachliche Analyse (B&nbsp;III) &ndash; rhetorische Mittel am Text belegen und ihre <b>Wirkung</b> beschreiben." },
    { dateISO: "2026-06-21", areaId: "rechtschreibung",
      focus: "Rechtschreibung &amp; Zeichensetzung: Komma bei Nebens&auml;tzen und w&ouml;rtlicher Rede, das/dass." },
    { dateISO: "2026-06-23", areaId: "tga",
      focus: "Generalprobe: einen kompletten TGA unter Zeitdruck schreiben. Schluss B&nbsp;V, C und D nicht vergessen!" }
  ],

  areas: [

    /* ===================================================== */
    /* BEREICH 1: TGA-Trainer (Gliederung A-D Schritt für Schritt) */
    /* ===================================================== */
    {
      id: "tga",
      title: "TGA &ndash; Trainer A&ndash;D",
      intro: "<p>Der <b>textgebundene Aufsatz (TGA)</b> folgt immer der Gliederung <b>A&ndash;D</b>. Hier trainierst du jeden Schritt einzeln. Schreibe selbst, dann &ouml;ffne die Musterl&ouml;sung zum Vergleich.</p>",
      theory:
        "<h3>Die Gliederung des TGA im &Uuml;berblick</h3>" +
        "<p><b>A &ndash; Einleitung:</b> Ein Einleitungssatz mit Textsorte, Titel, Autor/in, Erscheinungsjahr und Thema.</p>" +
        "<p><b>B &ndash; Hauptteil (I&ndash;V):</b></p>" +
        "<ul>" +
        "<li><b>B&nbsp;I</b> &ndash; Inhaltszusammenfassung (Pr&auml;sens, sachlich, eigene Worte).</li>" +
        "<li><b>B&nbsp;II</b> &ndash; Textsorte belegen (Merkmale am Text nachweisen).</li>" +
        "<li><b>B&nbsp;III</b> &ndash; Sprachliche Analyse: rhetorische Mittel <i>mit Wirkung</i>.</li>" +
        "<li><b>B&nbsp;IV</b> &ndash; Intention des Autors / der Autorin.</li>" +
        "<li><b>B&nbsp;V</b> &ndash; Charakteristik einer Figur (Aussehen, Verhalten, Charakter &ndash; jeweils belegt).</li>" +
        "</ul>" +
        "<p><b>C &ndash; Stellungnahme:</b> Eigene begr&uuml;ndete Meinung zum Thema oder zur Aussage des Textes.</p>" +
        "<p><b>D &ndash; Weiterf&uuml;hrende Schreibaufgabe:</b> z.&nbsp;B. Brief an eine Figur, innerer Monolog, alternatives Ende oder Tagebucheintrag.</p>" +
        "<p><b>Merke:</b> Pr&auml;sens, sachlicher Stil, eigene Worte, jede Behauptung mit Zeilenangabe belegen (Z.&nbsp;12).</p>",
      tgaTrainer: {
        title: "TGA-Trainer (Schritt f&uuml;r Schritt)",
        intro: "<p>Bearbeite die Punkte der Reihe nach. Schreibe zu jedem Punkt deinen eigenen Text in das Feld und vergleiche ihn anschlie&szlig;end mit der Musterl&ouml;sung.</p>",
        steps: [
          { label: "A.", title: "Informationen zum Text (Einleitungssatz)",
            hint: "Ein Satz mit f&uuml;nf Angaben: <b>Textsorte</b>, <b>Titel</b>, <b>Autor/in</b>, <b>Erscheinungsjahr</b>, <b>Thema</b>. Im Pr&auml;sens.",
            muster: "Die Kurzgeschichte &bdquo;Der letzte Bus&ldquo; von Lena Hartmann aus dem Jahr 2023 handelt von einem Jugendlichen, der durch einen verpassten Bus eine wichtige Entscheidung &uuml;ber Freundschaft treffen muss." },

          { label: "B. I.", title: "Inhaltszusammenfassung",
            hint: "Im <b>Pr&auml;sens</b>, sachlich und in eigenen Worten. Nur das Wichtigste: Wer? Wo? Was geschieht? Keine W&ouml;rtliche Rede zitieren, keine eigene Wertung.",
            muster: "Tom wartet abends allein an der Haltestelle auf den letzten Bus. Als dieser kommt, entdeckt er, dass sein Freund Jonas den Bus noch nicht erreicht hat. Tom z&ouml;gert, h&auml;lt schlie&szlig;lich aber die T&uuml;r auf und wartet auf Jonas, obwohl er dadurch selbst seinen Anschluss riskiert." },

          { label: "B. II.", title: "Textsorte belegen",
            hint: "Nenne die Textsorte und weise typische <b>Merkmale am Text</b> nach (z.&nbsp;B. bei der Kurzgeschichte: unvermittelter Anfang, Alltagssituation, offenes Ende, Wendepunkt).",
            muster: "Der Text ist eine Kurzgeschichte. Daf&uuml;r spricht der unvermittelte Einstieg mitten in die Handlung (Z.&nbsp;1), die knappe Alltagssituation an der Bushaltestelle, der Wendepunkt in dem Moment, in dem Tom z&ouml;gert (Z.&nbsp;14), sowie das offene Ende, das die Folgen seiner Entscheidung nicht verr&auml;t." },

          { label: "B. III.", title: "Sprachliche Analyse (mit Wirkung)",
            hint: "Suche rhetorische Mittel und beschreibe ihre <b>Wirkung</b>. Aufbau: Mittel benennen &rarr; Beispiel mit Zeilenangabe &rarr; Wirkung erkl&auml;ren.",
            muster: "Die kurzen, abgehackten S&auml;tze (Parataxe, Z.&nbsp;3&ndash;5) erzeugen Spannung und spiegeln Toms Nervosit&auml;t. Die Metapher &bdquo;sein Herz schlug bis zum Hals&ldquo; (Z.&nbsp;12) veranschaulicht seine Aufregung. Die rhetorische Frage &bdquo;Sollte er wirklich warten?&ldquo; (Z.&nbsp;13) zieht die Leser in seinen inneren Konflikt hinein." },

          { label: "B. IV.", title: "Intention (Absicht des Autors)",
            hint: "Was will der Autor / die Autorin beim Leser erreichen? Formuliere die <b>Botschaft</b> oder Wirkungsabsicht.",
            muster: "Die Autorin m&ouml;chte zeigen, dass wahre Freundschaft bedeutet, eigene Nachteile in Kauf zu nehmen. Sie regt die Leser dazu an, &uuml;ber den Wert von Verl&auml;sslichkeit und schnelle Entscheidungen nachzudenken." },

          { label: "B. V.", title: "Charakteristik einer Figur",
            hint: "Beschreibe <b>&Auml;u&szlig;eres</b>, <b>Verhalten</b> und <b>Charakter</b> einer Figur &ndash; jeweils am Text belegt. Vom Sichtbaren zum Inneren.",
            muster: "Tom wird als ruhiger, eher zur&uuml;ckhaltender Jugendlicher dargestellt. &Auml;u&szlig;erlich wirkt er unscheinbar in seiner Kapuzenjacke (Z.&nbsp;2). In seinem Verhalten zeigt sich Unsicherheit, als er z&ouml;gert (Z.&nbsp;13). Sein Charakter offenbart jedoch Loyalit&auml;t und Mut, da er trotz Risiko auf seinen Freund wartet (Z.&nbsp;16)." },

          { label: "C.", title: "Stellungnahme (eigene Meinung)",
            hint: "Deine <b>begr&uuml;ndete</b> Meinung. Aufbau: These &rarr; Argument &rarr; Beispiel/Begr&uuml;ndung. &bdquo;Ich&ldquo; ist hier erlaubt.",
            muster: "Ich finde, Tom handelt vorbildlich. Echte Freundschaft zeigt sich gerade in schwierigen Momenten. Wer einen Freund im Stich l&auml;sst, nur um keine eigenen Nachteile zu haben, riskiert das Vertrauen. Auch in meinem Alltag erlebe ich, dass kleine verl&auml;ssliche Gesten eine Freundschaft st&auml;rker machen als gro&szlig;e Versprechen." },

          { label: "D.", title: "Weiterf&uuml;hrende Schreibaufgabe",
            hint: "Kreative Aufgabe, z.&nbsp;B. <b>innerer Monolog</b>, Brief, Tagebucheintrag oder alternatives Ende. Bleibe nah an Figur und Situation des Textes.",
            muster: "<b>Innerer Monolog von Tom:</b> Wo bleibt Jonas nur? Der Fahrer schaut mich schon genervt an. Wenn ich jetzt einsteige, schaffe ich meinen Zug &ndash; aber Jonas steht dann allein im Dunkeln. Nein. So einer will ich nicht sein. Ich halte die T&uuml;r auf. Komm schon, Jonas, lauf!" }
        ]
      },
      exercises: [
        { id: "d-tga-01", area: "tga", difficulty: 1,
          prompt: "Welche <b>f&uuml;nf Angaben</b> m&uuml;ssen in einem vollst&auml;ndigen Einleitungssatz (Teil A) eines TGA enthalten sein?",
          solutionSteps: [
            "&Uuml;berlege, was die Leser zu Beginn &uuml;ber den Text wissen m&uuml;ssen.",
            "Formuliere den Satz im Pr&auml;sens und sachlich."
          ],
          answer: "Textsorte, Titel, Autor/in, Erscheinungsjahr und Thema." },

        { id: "d-tga-02", area: "tga", difficulty: 2,
          prompt: "Was geh&ouml;rt in Teil <b>B&nbsp;III</b> (sprachliche Analyse)? Nenne den dreistufigen Aufbau f&uuml;r jedes rhetorische Mittel.",
          solutionSteps: [
            "Zuerst das Mittel benennen.",
            "Dann ein Beispiel mit Zeilenangabe geben.",
            "Zuletzt die Wirkung auf die Leser erkl&auml;ren."
          ],
          answer: "1.&nbsp;Mittel benennen &ndash; 2.&nbsp;Beispiel mit Zeilenangabe &ndash; 3.&nbsp;Wirkung erkl&auml;ren. Ein rhetorisches Mittel ohne Wirkung bringt kaum Punkte." },

        { id: "d-tga-03", area: "tga", difficulty: 2,
          prompt: "In welcher <b>Zeitform</b> und in welchem <b>Stil</b> schreibst du die Inhaltszusammenfassung (B&nbsp;I)? Nenne au&szlig;erdem zwei Dinge, die dort NICHT hingeh&ouml;ren.",
          solutionSteps: [
            "Denke an die Regel f&uuml;r alle Nacherz&auml;hlungen von Texten.",
            "&Uuml;berlege, was eine sachliche Zusammenfassung von einer Wertung unterscheidet."
          ],
          answer: "Pr&auml;sens und sachlicher Stil in eigenen Worten. NICHT hinein geh&ouml;ren: eigene Meinung/Wertung sowie w&ouml;rtliche Zitate aus dem Text." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 2: Katalog Textsorten */
    /* ===================================================== */
    {
      id: "kataloge_textsorten",
      title: "Katalog: Textsorten",
      intro: "<p>F&uuml;r Teil <b>B&nbsp;II</b> musst du die Textsorte erkennen und ihre Merkmale am Text belegen. Hier sind die wichtigsten Textsorten mit ihren typischen Merkmalen.</p>",
      kataloge: {
        title: "Textsorten und ihre Merkmale",
        entries: [
          { term: "Kurzgeschichte",
            definition: "Kurze Erz&auml;hlung &uuml;ber einen Ausschnitt aus dem Alltag, meist mit einem Wendepunkt.",
            example: "Eine Alltagsszene an einer Bushaltestelle, die pl&ouml;tzlich eine Entscheidung verlangt.",
            effect: "Unvermittelter Anfang, wenige Figuren, straffe Handlung, offenes Ende, oft ein Wendepunkt &ndash; regt zum Nachdenken an." },

          { term: "Reportage",
            definition: "Lebendiger, tatsachenbetonter Augenzeugenbericht &uuml;ber ein reales Geschehen.",
            example: "Ein Reporter beschreibt direkt vom Ort eines Stadtfestes, was er sieht und h&ouml;rt.",
            effect: "Mischung aus Fakten und anschaulichen Szenen, oft Ich- oder Wir-Perspektive &ndash; macht ein Thema erlebbar und glaubw&uuml;rdig." },

          { term: "Glosse",
            definition: "Kurzer, pointierter Meinungstext, der ein Thema ironisch oder spitz kommentiert.",
            example: "Ein humorvoller Text dar&uuml;ber, warum Handy-Akkus immer im falschen Moment leer sind.",
            effect: "Ironie, &Uuml;bertreibung, Wortwitz &ndash; unterh&auml;lt und regt zugleich zum Nachdenken an." },

          { term: "Kommentar",
            definition: "Meinungstext, in dem der Autor ein aktuelles Thema klar bewertet und Stellung bezieht.",
            example: "Ein Zeitungsartikel, der das Handyverbot an Schulen ausdr&uuml;cklich bef&uuml;rwortet.",
            effect: "Klare These, Argumente, deutliche Wertung &ndash; will die Leser von einer Meinung &uuml;berzeugen." },

          { term: "Satire",
            definition: "Text, der Missst&auml;nde &uuml;bertrieben und spottend darstellt, um Kritik zu &uuml;ben.",
            example: "Eine &uuml;bertriebene Schilderung einer Beh&ouml;rde, in der nichts funktioniert.",
            effect: "&Uuml;bertreibung, Spott, Ironie &ndash; entlarvt Fehler und fordert zum Umdenken auf." },

          { term: "Parabel",
            definition: "Lehrhafte Erz&auml;hlung, deren Bildebene auf eine allgemeine Lehre &uuml;bertragen werden muss.",
            example: "Die Geschichte eines Wanderers, die eigentlich vom Umgang mit Problemen handelt.",
            effect: "Bildebene + Sachebene &ndash; der Leser muss die &uuml;bertragene Bedeutung selbst erschlie&szlig;en." },

          { term: "Roman",
            definition: "Langer erz&auml;hlender Prosatext mit ausgebauter Handlung und mehreren Figuren.",
            example: "Ein Auszug aus einem Jugendroman &uuml;ber das erste Schuljahr in einer neuen Stadt.",
            effect: "Vielf&auml;ltige Figuren, mehrere Handlungsstr&auml;nge, ausf&uuml;hrliche Beschreibungen &ndash; im TGA wird meist nur ein Ausschnitt analysiert." },

          { term: "Bericht",
            definition: "Sachlicher, knapper Text, der ein Geschehen genau und nachpr&uuml;fbar wiedergibt.",
            example: "Ein Unfallbericht, der Ort, Zeit, Beteiligte und Hergang nennt.",
            effect: "Sachlich, im Pr&auml;teritum, beantwortet die W-Fragen (Wer? Was? Wann? Wo? Wie? Warum?) &ndash; informiert objektiv." }
        ]
      },
      exercises: [
        { id: "d-ts-01", area: "kataloge_textsorten", difficulty: 1,
          prompt: "Nenne <b>vier typische Merkmale</b> einer Kurzgeschichte.",
          solutionSteps: [
            "Denke an Anfang, Umfang und Ende.",
            "&Uuml;berlege, welche Wirkung das offene Ende hat."
          ],
          answer: "Unvermittelter Anfang, knappe Alltagshandlung, wenige Figuren, h&auml;ufig ein Wendepunkt und ein offenes Ende." },

        { id: "d-ts-02", area: "kataloge_textsorten", difficulty: 2,
          prompt: "Worin unterscheiden sich ein <b>Bericht</b> und ein <b>Kommentar</b>?",
          solutionSteps: [
            "&Uuml;berlege, ob eine Meinung vorkommen darf.",
            "Achte auf Sachlichkeit und Wertung."
          ],
          answer: "Der Bericht gibt ein Geschehen sachlich und objektiv wieder (keine Meinung). Der Kommentar bewertet ein Thema und will mit Argumenten von einer Meinung &uuml;berzeugen." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 3: Katalog rhetorische Mittel */
    /* ===================================================== */
    {
      id: "kataloge_mittel",
      title: "Katalog: Rhetorische Mittel",
      intro: "<p>F&uuml;r Teil <b>B&nbsp;III</b> brauchst du rhetorische Mittel <b>mit Beispiel und Wirkung</b>. Lerne sie zu erkennen und ihre Wirkung zu erkl&auml;ren.</p>",
      kataloge: {
        title: "Rhetorische Mittel: Beispiel &amp; Wirkung",
        entries: [
          { term: "Metapher",
            definition: "Bildhafter Ausdruck, bei dem ein Wort in &uuml;bertragener Bedeutung verwendet wird.",
            example: "&bdquo;ein Meer aus Tr&auml;nen&ldquo;",
            effect: "Veranschaulicht, weckt Vorstellung und Gef&uuml;hl, verdichtet eine Aussage." },

          { term: "Vergleich",
            definition: "Zwei Dinge werden mit &bdquo;wie&ldquo; oder &bdquo;als&ldquo; verkn&uuml;pft.",
            example: "&bdquo;Er war schnell wie der Wind.&ldquo;",
            effect: "Macht eine Eigenschaft anschaulich und nachvollziehbar." },

          { term: "Personifikation",
            definition: "Etwas Unbelebtes erh&auml;lt menschliche Eigenschaften.",
            example: "&bdquo;Die Sonne lacht.&ldquo;",
            effect: "Belebt die Beschreibung und erzeugt N&auml;he zum Leser." },

          { term: "Anapher",
            definition: "Wiederholung desselben Wortes / derselben W&ouml;rter am Satz- oder Versanfang.",
            example: "&bdquo;Ich kam. Ich sah. Ich siegte.&ldquo;",
            effect: "Betont, verst&auml;rkt eindringlich, erzeugt Rhythmus." },

          { term: "Rhetorische Frage",
            definition: "Frage, auf die keine Antwort erwartet wird, weil sie schon feststeht.",
            example: "&bdquo;Wer w&uuml;rde das nicht wollen?&ldquo;",
            effect: "Bindet die Leser ein, regt zum Nachdenken an, unterstreicht eine Meinung." },

          { term: "Hyperbel",
            definition: "Starke &Uuml;bertreibung.",
            example: "&bdquo;Ich habe dir das schon tausendmal gesagt.&ldquo;",
            effect: "Verst&auml;rkt eine Aussage, kann emotional oder humorvoll wirken." },

          { term: "Ironie",
            definition: "Das Gegenteil des Gemeinten wird gesagt.",
            example: "&bdquo;Na, das hast du ja toll gemacht.&ldquo; (gemeint: schlecht)",
            effect: "&Uuml;bt versteckte Kritik, kann spotten oder unterhalten." },

          { term: "Parataxe (Satzreihung)",
            definition: "Aneinanderreihung kurzer Haupts&auml;tze.",
            example: "&bdquo;Er rannte. Er st&uuml;rzte. Er stand wieder auf.&ldquo;",
            effect: "Erzeugt Tempo, Spannung und Unruhe." },

          { term: "Aufz&auml;hlung",
            definition: "Mehrere gleichrangige Begriffe werden hintereinander genannt.",
            example: "&bdquo;B&uuml;cher, Hefte, Stifte, Mappen.&ldquo;",
            effect: "Betont F&uuml;lle und Vielfalt, kann etwas anschaulich oder &uuml;berw&auml;ltigend wirken lassen." }
        ]
      },
      exercises: [
        { id: "d-rm-01", area: "kataloge_mittel", difficulty: 1,
          prompt: "Bestimme das rhetorische Mittel und nenne seine Wirkung: <b>&bdquo;Die Wellen fl&uuml;sterten am Strand.&ldquo;</b>",
          solutionSteps: [
            "&Uuml;berlege: Bekommt etwas Unbelebtes eine menschliche F&auml;higkeit?",
            "Fl&uuml;stern k&ouml;nnen eigentlich nur Menschen."
          ],
          answer: "Personifikation. Wirkung: belebt die Naturbeschreibung und erzeugt eine ruhige, stimmungsvolle Atmosph&auml;re." },

        { id: "d-rm-02", area: "kataloge_mittel", difficulty: 2,
          prompt: "Bestimme das rhetorische Mittel und seine Wirkung: <b>&bdquo;Muss ich denn immer alles selbst machen?&ldquo;</b>",
          solutionSteps: [
            "Erwartet der Sprecher wirklich eine Antwort?",
            "Welche Haltung dr&uuml;ckt die Frage aus?"
          ],
          answer: "Rhetorische Frage. Wirkung: unterstreicht den &Auml;rger des Sprechers und bezieht den Zuh&ouml;rer ein, ohne eine echte Antwort zu erwarten." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 4: Übungstexte (ORIGINAL) mit kompletter Musterlösung A-D */
    /* ===================================================== */
    {
      id: "uebungstexte",
      title: "&Uuml;bungstexte mit Musterl&ouml;sung",
      intro: "<p>Zwei <b>originale</b> kurze &Uuml;bungstexte. Lies den Text, schreibe selbst einen kompletten TGA (A&ndash;D) und vergleiche dann mit der ausf&uuml;hrlichen Musterl&ouml;sung.</p>",
      theory:
        "<h3>&Uuml;bungstext 1 &ndash; &bdquo;Der letzte Bus&ldquo; (Kurzgeschichte, original)</h3>" +
        "<p style='font-style:italic'>" +
        "(1)&nbsp;Der Regen tropfte vom Vordach der Haltestelle. (2)&nbsp;Tom zog die Kapuze tiefer ins Gesicht und starrte auf die leere Stra&szlig;e. (3)&nbsp;Noch zwei Minuten. (4)&nbsp;Dann kam der letzte Bus. (5)&nbsp;Dann war Schluss. " +
        "(6)&nbsp;Sein Handy zeigte eine Nachricht von Jonas: &bdquo;Warte auf mich, bin gleich da!&ldquo; (7)&nbsp;Tom seufzte. (8)&nbsp;Jonas war immer zu sp&auml;t. " +
        "(9)&nbsp;Zwei gelbe Lichter tauchten aus dem Dunkel auf. (10)&nbsp;Der Bus. (11)&nbsp;Die T&uuml;ren zischten. (12)&nbsp;Toms Herz schlug bis zum Hals. (13)&nbsp;Sollte er wirklich warten? (14)&nbsp;Der Fahrer sah ihn fragend an. " +
        "(15)&nbsp;Tom drehte sich um. (16)&nbsp;Am Ende der Stra&szlig;e rannte eine Gestalt. (17)&nbsp;&bdquo;Moment noch&ldquo;, sagte Tom und hielt die T&uuml;r auf." +
        "</p>" +
        "<hr>" +
        "<h3>&Uuml;bungstext 2 &ndash; &bdquo;Das gefundene Handy&ldquo; (Kurzgeschichte, original)</h3>" +
        "<p style='font-style:italic'>" +
        "(1)&nbsp;Auf der Parkbank lag ein Handy. (2)&nbsp;Mia sah sich um. (3)&nbsp;Niemand da. (4)&nbsp;Das Display leuchtete noch. (5)&nbsp;&bdquo;Mama&ldquo;, stand auf dem Bildschirm, &bdquo;14 Anrufe in Abwesenheit&ldquo;. " +
        "(6)&nbsp;Mia z&ouml;gerte. (7)&nbsp;Das neueste Modell. (8)&nbsp;So eines hatte sie sich schon lange gew&uuml;nscht. (9)&nbsp;Niemand h&auml;tte es gemerkt. " +
        "(10)&nbsp;Doch dann dachte sie an die vielen Anrufe. (11)&nbsp;Irgendwo machte sich gerade jemand gro&szlig;e Sorgen. (12)&nbsp;Mia nahm das Handy und ging zur Polizeiwache. (13)&nbsp;Ihr Wunschtraum wog pl&ouml;tzlich weniger als das gute Gef&uuml;hl in ihrer Brust." +
        "</p>",
      tgaTrainer: {
        title: "Komplette Musterl&ouml;sung A&ndash;D",
        intro: "<p>Hier siehst du, wie eine vollst&auml;ndige Bearbeitung beider Texte aussehen kann. Schreibe erst selbst, dann vergleiche!</p>",
        steps: [
          { label: "Text 1 &middot; A", title: "Einleitung &ndash; &bdquo;Der letzte Bus&ldquo;",
            hint: "Textsorte, Titel, Autor/in, Jahr, Thema.",
            muster: "Die original verfasste Kurzgeschichte &bdquo;Der letzte Bus&ldquo; (2023) handelt von einem Jugendlichen, der an einer Bushaltestelle zwischen seinem eigenen Vorteil und der Treue zu seinem Freund entscheiden muss." },
          { label: "Text 1 &middot; B I", title: "Inhalt",
            muster: "Tom wartet im Regen auf den letzten Bus. Sein Freund Jonas k&uuml;ndigt per Nachricht an, gleich da zu sein, ist aber wie immer zu sp&auml;t. Als der Bus kommt, z&ouml;gert Tom. Im letzten Moment sieht er Jonas heranrennen und h&auml;lt die T&uuml;r auf, um auf ihn zu warten." },
          { label: "Text 1 &middot; B II", title: "Textsorte belegen",
            muster: "Der Text ist eine Kurzgeschichte: Er beginnt unvermittelt mitten in der Szene (Z.&nbsp;1), schildert eine knappe Alltagssituation, besitzt einen klaren Wendepunkt, als Tom z&ouml;gert (Z.&nbsp;13), und endet offen (Z.&nbsp;17), ohne die Folgen zu verraten." },
          { label: "Text 1 &middot; B III", title: "Sprache (mit Wirkung)",
            muster: "Die kurzen S&auml;tze (Parataxe, Z.&nbsp;3&ndash;5) erzeugen Spannung. Die Metapher &bdquo;Toms Herz schlug bis zum Hals&ldquo; (Z.&nbsp;12) verdeutlicht seine Aufregung. Die rhetorische Frage &bdquo;Sollte er wirklich warten?&ldquo; (Z.&nbsp;13) zieht die Leser in den inneren Konflikt." },
          { label: "Text 1 &middot; B IV", title: "Intention",
            muster: "Die Geschichte will zeigen, dass Freundschaft Verl&auml;sslichkeit verlangt, auch wenn dies eigene Nachteile bedeutet. Sie regt zum Nachdenken &uuml;ber Loyalit&auml;t an." },
          { label: "Text 1 &middot; B V", title: "Charakteristik Tom",
            muster: "Tom wirkt zun&auml;chst zur&uuml;ckhaltend (Kapuze, Z.&nbsp;2) und unsicher (er z&ouml;gert, Z.&nbsp;13). Letztlich erweist er sich jedoch als loyal und mutig, da er trotz Risiko auf Jonas wartet (Z.&nbsp;17)." },
          { label: "Text 1 &middot; C", title: "Stellungnahme",
            muster: "Ich finde Toms Entscheidung richtig. Freundschaft beweist sich in solchen Momenten. Wer nur an den eigenen Vorteil denkt, verliert auf Dauer das Vertrauen anderer." },
          { label: "Text 1 &middot; D", title: "Innerer Monolog",
            muster: "Komm schon, Jonas, lauf! Der Fahrer wird ungeduldig, aber ich kann dich doch nicht im Regen stehen lassen. Ein Bus f&auml;hrt morgen wieder &ndash; ein guter Freund nicht." },

          { label: "Text 2 &middot; A", title: "Einleitung &ndash; &bdquo;Das gefundene Handy&ldquo;",
            hint: "Textsorte, Titel, Jahr, Thema.",
            muster: "Die original verfasste Kurzgeschichte &bdquo;Das gefundene Handy&ldquo; (2024) handelt von einem M&auml;dchen, das ein wertvolles Handy findet und zwischen Versuchung und Ehrlichkeit w&auml;hlen muss." },
          { label: "Text 2 &middot; B I", title: "Inhalt",
            muster: "Mia findet auf einer Parkbank ein neuwertiges Handy mit zahlreichen Anrufen einer besorgten Mutter. Kurz ist sie versucht, es zu behalten, entscheidet sich dann aber, es zur Polizei zu bringen, weil sie an die Sorge der Besitzerin denkt." },
          { label: "Text 2 &middot; B II", title: "Textsorte belegen",
            muster: "Auch dieser Text ist eine Kurzgeschichte: unvermittelter Einstieg (Z.&nbsp;1), kurze Alltagssituation, ein innerer Wendepunkt (Z.&nbsp;10) und ein knappes, deutendes Ende (Z.&nbsp;13)." },
          { label: "Text 2 &middot; B III", title: "Sprache (mit Wirkung)",
            muster: "Die knappen S&auml;tze am Anfang (Z.&nbsp;1&ndash;4) wirken sachlich und bauen Spannung auf. Der Gegensatz (Antithese) zwischen &bdquo;Wunschtraum&ldquo; und &bdquo;gutem Gef&uuml;hl&ldquo; (Z.&nbsp;13) verdeutlicht Mias inneren Konflikt und die Aufl&ouml;sung." },
          { label: "Text 2 &middot; B IV", title: "Intention",
            muster: "Die Autorin will zeigen, dass Ehrlichkeit ein besseres Gef&uuml;hl schenkt als materieller Gewinn. Sie ermutigt die Leser, sich in andere hineinzuversetzen." },
          { label: "Text 2 &middot; B V", title: "Charakteristik Mia",
            muster: "Mia ist nachdenklich und einf&uuml;hlsam. Zwar versp&uuml;rt sie zun&auml;chst Versuchung (Z.&nbsp;7&ndash;9), doch ihr Mitgef&uuml;hl (Z.&nbsp;11) und ihr Gewissen setzen sich durch &ndash; sie handelt verantwortungsbewusst." },
          { label: "Text 2 &middot; C", title: "Stellungnahme",
            muster: "Mias Entscheidung ist vorbildlich. Ehrlichkeit zahlt sich aus, weil sie Vertrauen schafft und man sich selbst gut f&uuml;hlt. Ein Handy ersetzt kein reines Gewissen." },
          { label: "Text 2 &middot; D", title: "Tagebucheintrag",
            muster: "Liebes Tagebuch, heute h&auml;tte ich fast einen Fehler gemacht. Das Handy lag einfach da, so verlockend. Aber als ich an die vielen Anrufe dachte, wusste ich, was richtig ist. Jetzt bin ich froh &ndash; und ein bisschen stolz." }
        ]
      },
      exercises: [
        { id: "d-ut-01", area: "uebungstexte", difficulty: 2,
          prompt: "Bestimme im &Uuml;bungstext 1 (&bdquo;Der letzte Bus&ldquo;) den <b>Wendepunkt</b> und begr&uuml;nde deine Wahl.",
          solutionSteps: [
            "Suche die Stelle, an der sich Toms Verhalten entscheidend &auml;ndert.",
            "Achte auf den Moment des Z&ouml;gerns und der Entscheidung."
          ],
          answer: "Der Wendepunkt liegt in Z.&nbsp;13 (&bdquo;Sollte er wirklich warten?&ldquo;) bis Z.&nbsp;17: Hier entscheidet sich Tom gegen den eigenen Vorteil und f&uuml;r seinen Freund &ndash; die Geschichte kippt von Zweifel zu loyalem Handeln." },

        { id: "d-ut-02", area: "uebungstexte", difficulty: 3,
          prompt: "Schreibe einen vollst&auml;ndigen <b>Einleitungssatz (Teil A)</b> zum &Uuml;bungstext 2 (&bdquo;Das gefundene Handy&ldquo;) mit allen f&uuml;nf Pflichtangaben.",
          solutionSteps: [
            "Nenne Textsorte, Titel, Erscheinungsjahr und Thema.",
            "Formuliere im Pr&auml;sens."
          ],
          answer: "Beispiel: &bdquo;Die Kurzgeschichte &sbquo;Das gefundene Handy&lsquo; (2024) handelt von einem M&auml;dchen, das ein wertvolles Handy findet und sich zwischen Versuchung und Ehrlichkeit entscheiden muss.&ldquo;" }
      ]
    },


    /* ===================================================== */
    /* BEREICH 6: Rechtschreibung & Zeichensetzung */
    /* ===================================================== */
    {
      id: "rechtschreibung",
      title: "Rechtschreibung &amp; Zeichensetzung",
      intro: "<p>Sprachrichtigkeit z&auml;hlt in der Pr&uuml;fung. Hier die wichtigsten Stolpersteine als Merkhilfe &ndash; mit &Uuml;bungen.</p>",
      theory:
        "<h3>Merkhilfe &ndash; die h&auml;ufigsten Fehler</h3>" +
        "<p><b>1. das oder dass?</b> &bdquo;das&ldquo; (mit einem s) kann man durch <i>dieses/welches/jenes</i> ersetzen (Artikel/Relativpronomen). &bdquo;dass&ldquo; leitet einen Nebensatz ein (Konjunktion).<br>" +
        "Beispiel: &bdquo;Das Buch, <i>das</i> du liest&hellip;&ldquo; / &bdquo;Ich hoffe, <i>dass</i> du kommst.&ldquo;</p>" +
        "<p><b>2. Komma bei Nebens&auml;tzen:</b> Nebens&auml;tze werden mit Komma abgetrennt (oft eingeleitet durch <i>weil, dass, obwohl, wenn, der/die/das</i>).<br>" +
        "Beispiel: &bdquo;Er bleibt zu Hause, <b>weil</b> es regnet.&ldquo;</p>" +
        "<p><b>3. Komma bei w&ouml;rtlicher Rede:</b> Der Begleitsatz wird durch Komma abgetrennt; das Satzzeichen der Rede steht in den Anf&uuml;hrungszeichen.<br>" +
        "Beispiel: &bdquo;Ich komme gleich&ldquo;, sagte sie.</p>" +
        "<p><b>4. Gro&szlig;- und Kleinschreibung:</b> Nomen und Nominalisierungen gro&szlig; (das Laufen, beim Essen). Signalw&ouml;rter: Artikel, &bdquo;beim&ldquo;, &bdquo;das&ldquo;.</p>" +
        "<p><b>5. seit / seid:</b> &bdquo;seit&ldquo; = Zeit; &bdquo;seid&ldquo; = Form von &bdquo;sein&ldquo; (ihr seid).</p>" +
        "<p><b>Tipp:</b> Lass am Ende 5&ndash;10 Minuten zum <b>Korrekturlesen</b>: erst das/dass, dann Kommas, dann Gro&szlig;schreibung pr&uuml;fen.</p>",
      exercises: [
        { id: "d-rs-01", area: "rechtschreibung", difficulty: 1,
          prompt: "das oder dass? &bdquo;Ich glaube, ____ er recht hat.&ldquo; Begr&uuml;nde.",
          solutionSteps: [
            "Versuche, das Wort durch &sbquo;dieses/welches&lsquo; zu ersetzen.",
            "Geht das nicht, leitet es einen Nebensatz ein."
          ],
          answer: "&bdquo;dass&ldquo; &ndash; es leitet hier einen Nebensatz ein und l&auml;sst sich nicht durch &sbquo;dieses&lsquo; ersetzen." },

        { id: "d-rs-02", area: "rechtschreibung", difficulty: 2,
          prompt: "Setze die Kommas: <b>&bdquo;Er rief mir zu warte auf mich weil ich gleich da bin.&ldquo;</b>",
          solutionSteps: [
            "Finde die w&ouml;rtliche Rede / den Aufforderungsteil.",
            "Trenne den Nebensatz mit &sbquo;weil&lsquo; ab."
          ],
          answer: "&bdquo;Er rief mir zu: &sbquo;Warte auf mich, weil ich gleich da bin.&lsquo;&ldquo; &ndash; Komma vor &bdquo;weil&ldquo; (Nebensatz), Doppelpunkt/Komma zur w&ouml;rtlichen Rede." },

        { id: "d-rs-03", area: "rechtschreibung", difficulty: 1,
          prompt: "seit oder seid? &bdquo;Ihr ____ schon lange meine besten Freunde, ____ wir uns kennen.&ldquo;",
          solutionSteps: [
            "Erstes Wort: Form von &sbquo;sein&lsquo; (ihr&hellip;).",
            "Zweites Wort: gibt einen Zeitpunkt/Zeitraum an."
          ],
          answer: "&bdquo;Ihr <b>seid</b> schon lange meine besten Freunde, <b>seit</b> wir uns kennen.&ldquo; (seid = sein; seit = Zeit)" }
      ]
    }

  ]
});
