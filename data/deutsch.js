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
,
{
  "id": "uebungstexte_xl",
  "title": "&Uuml;bungstexte XL (Pr&uuml;fungsl&auml;nge)",
  "intro": "<p>L&auml;ngere Texte wie in der echten Pr&uuml;fung &ndash; mit markierten Schl&uuml;sselstellen und kompletter Musterl&ouml;sung A&ndash;D.</p>",
  "theory": "<p>Drei <b>originale</b> Übungstexte in <b>Prüfungslänge</b>. Lies jeden Text 2×, markiere die wichtigen Stellen, schreibe selbst einen TGA (A–D) und vergleiche mit der Musterlösung.</p><hr><h3>Text 1 — &bdquo;Der letzte Bus&ldquo; (Kurzgeschichte, 2024)</h3><p style='font-style:italic'>(1) Der Regen klatschte gegen die Scheiben des Wartehäuschens, als Jonas auf den letzten Bus wartete. (2) Es war kurz nach elf, und die Straße lag verlassen da wie ein ausgewaschenes Tuch. (3) Nur die Leuchtreklame der Tankstelle gegenüber blinkte müde vor sich hin, rot, dann dunkel, dann wieder rot. (4) Jonas zog den Reißverschluss seiner Jacke bis zum Kinn und vergrub die Hände in den Taschen. (5) Er wollte nur noch nach Hause, ins Bett, weg von diesem nassen, kalten Abend. (6) Da hörte er die Stimmen. (7) Drei ältere Jungen waren um einen kleineren Schüler herumgetreten, vielleicht zwölf Jahre alt, der seinen Rucksack an die Brust drückte wie einen Schutzschild. (8) „Gib schon her, oder soll ich nachhelfen?“, sagte der Größte und stieß den Kleinen gegen die Glaswand. (9) Jonas’ Herz begann zu hämmern. (10) Geht mich nichts an, dachte er und starrte auf die Pfütze zu seinen Füßen, in der sich das rote Licht spiegelte. (11) Doch der kleine Junge sah ihn an, nur eine halbe Sekunde lang, mit Augen, die um Hilfe schrien, ohne dass sein Mund ein Wort sagte. (12) In diesem Blick lag etwas, das Jonas nicht mehr losließ. (13) Er dachte an seinen eigenen kleinen Bruder, an die Art, wie der manchmal die Schultern hochzog, wenn er Angst hatte. (14) Sein Mund war trocken, seine Knie fühlten sich an wie Pudding. (15) „Was soll ich tun?“, flüsterte er sich selbst zu. (16) Wegrennen wäre so leicht gewesen. (17) Stattdessen holte er tief Luft, zog sein Handy aus der Tasche und ging einen Schritt aus dem Wartehäuschen heraus. (18) „Lasst ihn in Ruhe“, sagte er, und seine Stimme zitterte nur ein wenig. (19) „Ich habe die Polizei schon gewählt.“ (20) Es war eine Lüge, aber sie wirkte. (21) Die drei Jungen drehten sich um, musterten ihn, taxierten die Lage. (22) Eine Ewigkeit verging, in der nur der Regen redete. (23) Dann zuckte der Größte mit den Schultern, spuckte aus und murmelte etwas, das wie „nicht wert“ klang. (24) Die drei schlenderten davon, betont langsam, um ihr Gesicht zu wahren. (25) Der kleine Junge stand noch immer da, den Rucksack umklammert, und atmete stoßweise. (26) „Danke“, brachte er heraus, kaum hörbar. (27) Jonas nickte nur, weil er fürchtete, dass seine Stimme ihn jetzt verraten würde. (28) Der Bus bog um die Ecke, seine Scheinwerfer schnitten zwei helle Bahnen in den Regen. (29) Als Jonas einstieg, zitterten seine Hände noch, aber tief in seiner Brust wuchs etwas Warmes, Festes. (30) Er hatte nicht weggesehen. (31) Und zum ersten Mal seit langer Zeit war er stolz auf den Jungen, der er war.</p><h4>Wichtige Stellen (Markierungen)</h4><ul><li><b>Z. 1-3</b> — „Der Regen klatschte gegen die Scheiben ... blinkte müde vor sich hin“ <br><span style='color:#37c2a8'>&rarr; Atmosphärische Eingangsbeschreibung mit Personifikationen (der Regen klatscht, die Reklame blinkt müde); schafft eine bedrohliche, einsame Stimmung, die den Konflikt vorbereitet. Wichtig für die sprachliche Analyse (B III).</span></li><li><b>Z. 2</b> — „verlassen da wie ein ausgewaschenes Tuch“ <br><span style='color:#37c2a8'>&rarr; Vergleich (Komparation mit „wie“); unterstreicht die Verlassenheit und Schutzlosigkeit des Schauplatzes. Klassischer Beleg für ein sprachliches Mittel (B III).</span></li><li><b>Z. 7</b> — „drückte seinen Rucksack an die Brust wie einen Schutzschild“ <br><span style='color:#37c2a8'>&rarr; Vergleich; charakterisiert das Opfer als ängstlich und wehrlos und verstärkt die moralische Dringlichkeit. Nützlich für B III und für die Charakteristik der Nebenfigur.</span></li><li><b>Z. 10</b> — „Geht mich nichts an, dachte er“ <br><span style='color:#37c2a8'>&rarr; Innerer Monolog / Gedankenrede; zeigt Jonas’ erste Reaktion des Wegsehens und damit den inneren Konflikt. Zentraler Beleg für die Charakteristik (B V) und die Intention (B IV).</span></li><li><b>Z. 11-12</b> — „mit Augen, die um Hilfe schrien, ohne dass sein Mund ein Wort sagte“ <br><span style='color:#37c2a8'>&rarr; Wendepunkt der Geschichte; der stumme Blick löst Jonas’ Umdenken aus. Entscheidend für die Inhaltsangabe (B I) und die Intention (B IV).</span></li><li><b>Z. 14</b> — „seine Knie fühlten sich an wie Pudding“ <br><span style='color:#37c2a8'>&rarr; Vergleich / bildhafte Sprache; macht Jonas’ körperliche Angst anschaulich und glaubwürdig. Beleg für B III und B V (Charakter: er handelt trotz Angst).</span></li><li><b>Z. 15</b> — „Was soll ich tun?“, flüsterte er sich selbst zu <br><span style='color:#37c2a8'>&rarr; Rhetorische bzw. an sich selbst gerichtete Frage; verdeutlicht das Schwanken zwischen Wegsehen und Eingreifen. Wichtig für B III und B IV.</span></li><li><b>Z. 17-19</b> — „holte er tief Luft ... Ich habe die Polizei schon gewählt.“ <br><span style='color:#37c2a8'>&rarr; Höhepunkt der Handlung: Jonas greift ein. Beleg für seinen Mut und für die Botschaft der Geschichte (B I, B IV, B V).</span></li><li><b>Z. 22</b> — „Eine Ewigkeit verging, in der nur der Regen redete.“ <br><span style='color:#37c2a8'>&rarr; Personifikation (der Regen redet) und Hyperbel (Ewigkeit); dehnt die Spannung im Moment der Entscheidung. Ergiebiger Beleg für B III.</span></li><li><b>Z. 30-31</b> — „Er hatte nicht weggesehen ... stolz auf den Jungen, der er war.“ <br><span style='color:#37c2a8'>&rarr; Schlusspointe und Wandlung der Figur; fasst die Intention zusammen (Zivilcourage lohnt sich, inneres Wachstum). Schlüsselstelle für B IV und B V.</span></li></ul><hr><h3>Text 2 — &bdquo;Zwei Wege im Schnee&ldquo; (Kurzgeschichte, 2023)</h3><p style='font-style:italic'>(1) Den ganzen Winter über waren Lena und Mira unzertrennlich gewesen, zwei Hälften eines Apfels, wie Miras Großmutter immer sagte. (2) Sie teilten das Pausenbrot, die Geheimnisse und den langen Schulweg durch den verschneiten Park. (3) Doch an diesem Montag lag etwas Fremdes in der Luft, kalt und scharf wie der Frost auf den Ästen. (4) In der großen Pause stand Lena plötzlich bei Carla und ihrer Clique, der Gruppe, zu der alle gehören wollten. (5) Sie lachten über jemanden, und Lena lachte mit, lauter als nötig. (6) Mira blieb am Rand des Schulhofs stehen, allein, und spürte, wie ihr die Kälte in die Finger kroch. (7) Am nächsten Tag wartete Mira wie immer an der alten Eiche am Parkeingang. (8) Lena kam, aber sie kam nicht allein. (9) „Wir gehen heute den anderen Weg“, sagte Carla, ohne Mira anzusehen, als wäre sie aus Glas. (10) Lena zögerte. (11) Ihr Blick wanderte zwischen Mira und Carla hin und her wie ein Pendel, das nicht zur Ruhe kommt. (12) „Komm schon“, drängte Carla und hakte sich bei Lena unter. (13) „Oder willst du etwa lieber mit der da gehen?“ (14) Mira sagte nichts. (15) Sie sah nur ihre Freundin an, all die geteilten Pausenbrote in den Augen, all die Geheimnisse. (16) Einen Moment lang war es so still, dass man die Schneeflocken fallen hören konnte. (17) Dann senkte Lena den Kopf und ging mit Carla davon, ihre Schritte hinterließen zwei Spuren, die sich von Miras entfernten. (18) Mira stand allein im Schnee, und in ihrer Brust zog sich etwas zusammen wie eine Faust. (19) Den ganzen Tag fühlte sich die Schule an wie ein zu großer, leerer Raum. (20) Doch am Nachmittag, als Mira nach Hause ging, hörte sie Schritte hinter sich, schnell und atemlos. (21) „Mira, warte!“ (22) Es war Lena, die Mütze schief, die Wangen rot vor Kälte und vielleicht vor Scham. (23) „Es tut mir leid“, sagte sie und rang nach Worten. (24) „Ich wollte einfach dazugehören. Aber dort drüben … da musste ich über andere lachen, um selbst nicht ausgelacht zu werden. Das bin nicht ich.“ (25) Mira schwieg lange. (26) Verzeihen ist nicht leicht, dachte sie, wenn der Riss so frisch ist. (27) „Es hat wehgetan“, sagte sie schließlich leise. (28) „Ich weiß“, antwortete Lena. (29) Zwei Mädchen standen sich im fallenden Schnee gegenüber, und langsam, ganz langsam, fanden ihre Schritte wieder denselben Weg. (30) Manche Freundschaften, dachte Mira, zerbrechen nicht am Sturm, sondern wachsen daran.</p><h4>Wichtige Stellen (Markierungen)</h4><ul><li><b>Z. 1</b> — „zwei Hälften eines Apfels“ <br><span style='color:#37c2a8'>&rarr; Metapher für die enge Freundschaft; etabliert gleich zu Beginn das zentrale Thema und den späteren Bruch als Gegensatz. Wichtig für B III und B I.</span></li><li><b>Z. 3</b> — „kalt und scharf wie der Frost auf den Ästen“ <br><span style='color:#37c2a8'>&rarr; Vergleich, der die innere Stimmung (Bedrohung der Freundschaft) auf die winterliche Umgebung überträgt. Beleg für B III.</span></li><li><b>Z. 9</b> — „ohne Mira anzusehen, als wäre sie aus Glas“ <br><span style='color:#37c2a8'>&rarr; Vergleich; verdeutlicht die Demütigung und das Übersehenwerden Miras. Beleg für B III und für die Charakteristik Carlas.</span></li><li><b>Z. 11</b> — „wie ein Pendel, das nicht zur Ruhe kommt“ <br><span style='color:#37c2a8'>&rarr; Vergleich; zeigt Lenas inneren Zwiespalt zwischen Freundschaft und Gruppenzugehörigkeit. Zentraler Beleg für B III und B V.</span></li><li><b>Z. 13</b> — „Oder willst du etwa lieber mit der da gehen?“ <br><span style='color:#37c2a8'>&rarr; Rhetorische Frage als Druckmittel; charakterisiert Carla als manipulativ und macht den Gruppenzwang sichtbar. Beleg für B III und B IV.</span></li><li><b>Z. 16</b> — „so still, dass man die Schneeflocken fallen hören konnte“ <br><span style='color:#37c2a8'>&rarr; Hyperbel; dehnt den Spannungsmoment der Entscheidung und betont die Bedeutung des Augenblicks. Beleg für B III.</span></li><li><b>Z. 17</b> — „ihre Schritte hinterließen zwei Spuren, die sich von Miras entfernten“ <br><span style='color:#37c2a8'>&rarr; Symbol/Bild für den Bruch der Freundschaft; Wendepunkt der Handlung. Wichtig für B I und B IV.</span></li><li><b>Z. 18</b> — „zog sich etwas zusammen wie eine Faust“ <br><span style='color:#37c2a8'>&rarr; Vergleich; macht Miras seelischen Schmerz körperlich spürbar. Beleg für B III und B V.</span></li><li><b>Z. 24</b> — „Ich wollte einfach dazugehören ... Das bin nicht ich.“ <br><span style='color:#37c2a8'>&rarr; Schlüsselstelle für Lenas Charakterisierung und die Intention: Gruppenzwang gegen die eigene Identität. Beleg für B IV und B V.</span></li><li><b>Z. 30</b> — „zerbrechen nicht am Sturm, sondern wachsen daran“ <br><span style='color:#37c2a8'>&rarr; Metaphorische Schlusspointe; fasst die Botschaft der Geschichte zusammen (echte Freundschaft übersteht Konflikte). Schlüssel für B IV.</span></li></ul><hr><h3>Text 3 — &bdquo;Das Foto auf dem Küchentisch&ldquo; (Romanauszug, 2024)</h3><p style='font-style:italic'>(1) Seit drei Wochen lag das Foto auf dem Küchentisch, mit der Bildseite nach unten, wie ein Geheimnis, das niemand aussprechen wollte. (2) Tarek hatte es zufällig in einer alten Schublade gefunden, zwischen Rechnungen und vergilbten Briefen. (3) Es zeigte seinen Vater als jungen Mann, lachend, den Arm um einen anderen Mann gelegt, der Tarek seltsam vertraut vorkam. (4) „Wer ist das?“, hatte er gefragt, und zum ersten Mal hatte er seinen Vater zögern sehen, als hätte die Frage einen Schalter umgelegt. (5) „Das war mein Bruder“, hatte der Vater schließlich gesagt, mit einer Stimme, die belegt klang wie ein altes Radio. (6) „Dein Onkel. Wir haben seit zwanzig Jahren nicht mehr gesprochen.“ (7) Tarek hatte gar nicht gewusst, dass er einen Onkel besaß. (8) An diesem Abend saß die Familie schweigend beim Essen, und das Klappern der Gabeln klang lauter als jedes Wort. (9) „Warum?“, fragte Tarek schließlich. (10) Sein Vater legte das Besteck zur Seite, als wäre es plötzlich zu schwer geworden. (11) „Wir haben uns zerstritten, damals, wegen einer Sache, die heute klein erscheint und damals riesengroß war“, sagte er. (12) „Stolz ist eine Mauer, mein Junge. Man baut sie Stein für Stein, und irgendwann ist sie so hoch, dass man den anderen nicht mehr sieht.“ (13) Tarek dachte an seinen eigenen Streit mit seinem besten Freund, der nun schon Monate dauerte, wegen einer Lappalie, an deren Anlass er sich kaum noch erinnerte. (14) In dieser Nacht konnte er nicht schlafen. (15) Das Gesicht des fremden Onkels verfolgte ihn, dieses Lachen, das dem seines Vaters so ähnlich war. (16) Am nächsten Morgen schob er das Foto über den Tisch, zurück zu seinem Vater. (17) „Ruf ihn an“, sagte Tarek leise. (18) „Bevor die Mauer zu hoch wird.“ (19) Sein Vater sah ihn lange an, und in seinen Augen lag etwas, das Tarek noch nie gesehen hatte: die Angst eines erwachsenen Mannes. (20) „Was, wenn er auflegt?“, fragte der Vater, und auf einmal klang er selbst wie ein kleiner Junge. (21) „Was, wenn er nicht auflegt?“, gab Tarek zurück. (22) Lange Zeit geschah nichts. (23) Dann stand der Vater auf, ging zum Telefon und hielt den Hörer in der Hand, als wäge er sein ganzes Leben darin. (24) Seine Finger zitterten, als er die Nummer wählte, die er nach zwanzig Jahren noch immer auswendig kannte. (25) Es klingelte einmal, zweimal, dreimal. (26) Tarek hielt den Atem an. (27) Dann hörte er die Stimme seines Vaters, brüchig und voller Hoffnung zugleich: „Hallo, Karim. Ich bin’s.“ (28) Und während sein Vater sprach, mit Tränen in den Augen und einem zaghaften Lächeln, verstand Tarek zum ersten Mal, dass auch Erwachsene noch lernen, zu verzeihen. (29) Am Abend rief er seinen besten Freund an. (30) Manche Mauern, dachte er, reißt man besser ein, solange man noch die Kraft dazu hat.</p><h4>Wichtige Stellen (Markierungen)</h4><ul><li><b>Z. 1</b> — „wie ein Geheimnis, das niemand aussprechen wollte“ <br><span style='color:#37c2a8'>&rarr; Vergleich/Personifikation; macht das Foto zum Symbol des Familiengeheimnisses und eröffnet das Thema. Wichtig für B III und B I.</span></li><li><b>Z. 4</b> — „als hätte die Frage einen Schalter umgelegt“ <br><span style='color:#37c2a8'>&rarr; Vergleich; zeigt die plötzliche Veränderung im Vater und deutet einen schmerzhaften Hintergrund an. Beleg für B III und B V.</span></li><li><b>Z. 5</b> — „mit einer Stimme, die belegt klang wie ein altes Radio“ <br><span style='color:#37c2a8'>&rarr; Vergleich; veranschaulicht die Bewegtheit und Mühe des Vaters beim Sprechen. Beleg für B III.</span></li><li><b>Z. 8</b> — „das Klappern der Gabeln klang lauter als jedes Wort“ <br><span style='color:#37c2a8'>&rarr; Hyperbel; verdeutlicht das beklemmende Schweigen und die Spannung in der Familie. Beleg für B III.</span></li><li><b>Z. 12</b> — „Stolz ist eine Mauer ... dass man den anderen nicht mehr sieht.“ <br><span style='color:#37c2a8'>&rarr; Zentrale Metapher des Textes; das Leitbild der Mauer trägt die ganze Botschaft. Schlüsselstelle für B III und B IV.</span></li><li><b>Z. 13</b> — „dachte an seinen eigenen Streit ... wegen einer Lappalie“ <br><span style='color:#37c2a8'>&rarr; Parallele zwischen Vater und Sohn; verbindet die Generationen und treibt Tareks Handeln an. Wichtig für B I und B V.</span></li><li><b>Z. 19-20</b> — „die Angst eines erwachsenen Mannes ... klang er selbst wie ein kleiner Junge“ <br><span style='color:#37c2a8'>&rarr; Charakterisierung des Vaters; zeigt seine Verletzlichkeit und kehrt das Verhältnis Vater-Sohn kurz um. Beleg für B V und B IV.</span></li><li><b>Z. 21</b> — „Was, wenn er nicht auflegt?“ <br><span style='color:#37c2a8'>&rarr; Rhetorische Frage als hoffnungsvolle Gegenfrage; markiert Tareks Reife und den Wendepunkt zur Versöhnung. Beleg für B III und B IV.</span></li><li><b>Z. 23</b> — „hielt den Hörer in der Hand, als wäge er sein ganzes Leben darin“ <br><span style='color:#37c2a8'>&rarr; Vergleich; verdeutlicht die enorme Bedeutung des Augenblicks der Entscheidung. Beleg für B III.</span></li><li><b>Z. 30</b> — „Manche Mauern ... reißt man besser ein, solange man noch die Kraft dazu hat.“ <br><span style='color:#37c2a8'>&rarr; Metaphorische Schlusspointe, die das Leitbild aufgreift und die Intention zusammenfasst. Schlüssel für B IV.</span></li></ul>",
  "tgaTrainer": {
    "title": "Komplette Musterl&ouml;sungen A&ndash;D",
    "intro": "<p>Schreibe erst selbst, dann vergleiche Schritt f&uuml;r Schritt.</p>",
    "steps": [
      {
        "label": "Text 1 &middot; A",
        "title": "Einleitung (Teil A)",
        "muster": "Die Kurzgeschichte „Der letzte Bus“ von Mara Lindqvist aus dem Jahr 2024 thematisiert die Zivilcourage eines Jugendlichen, der sich an einer Bushaltestelle entscheiden muss, ob er bei einer Bedrohung eingreift oder wegsieht."
      },
      {
        "label": "Text 1 &middot; BI",
        "title": "Inhalt (B I)",
        "muster": "Der Schüler Jonas wartet an einem regnerischen Abend allein auf den letzten Bus (vgl. Z. 1-5). Plötzlich beobachtet er, wie drei ältere Jungen einen kleineren Schüler bedrängen und ihm seinen Rucksack abnehmen wollen (vgl. Z. 6-8). Zunächst will Jonas wegsehen, weil ihn die Situation nichts angeht (vgl. Z. 10). Erst der stumme, hilfesuchende Blick des kleinen Jungen lässt ihn umdenken (vgl. Z. 11-12). Obwohl er große Angst hat, tritt er aus dem Wartehäuschen, droht mit der Polizei und vertreibt so die drei Jugendlichen (vgl. Z. 17-24). Der bedrängte Junge bedankt sich, und Jonas steigt in den Bus, stolz darauf, nicht weggesehen zu haben (vgl. Z. 26-31)."
      },
      {
        "label": "Text 1 &middot; BII",
        "title": "Textsorte belegen (B II)",
        "muster": "Bei dem Text handelt es sich um eine Kurzgeschichte. Dafür sprechen mehrere typische Merkmale: Die Handlung setzt unvermittelt ein, ohne lange Einleitung (vgl. Z. 1). Es gibt nur wenige Figuren und einen knappen, eng begrenzten Schauplatz, nämlich die Bushaltestelle in der Nacht (vgl. Z. 1-2). Die Geschichte schildert ein einziges, alltägliches, aber bedeutsames Ereignis und besitzt einen deutlichen Wendepunkt (vgl. Z. 11-12). Das Ende ist offen-andeutend und pointiert, da nur die innere Veränderung der Hauptfigur beschrieben wird (vgl. Z. 30-31)."
      },
      {
        "label": "Text 1 &middot; BIII",
        "title": "Sprachliche Analyse (B III)",
        "muster": "Der Text ist durch bildhafte Sprache geprägt, die Stimmung und Gefühle veranschaulicht. Zum einen verwendet die Autorin Personifikationen, etwa wenn die Leuchtreklame „müde vor sich hin“ blinkt (Z. 3) oder „nur der Regen redete“ (Z. 22). Dadurch wirkt die nächtliche Szene lebendig und zugleich bedrohlich und einsam. Zum anderen finden sich zahlreiche Vergleiche, beispielsweise „verlassen da wie ein ausgewaschenes Tuch“ (Z. 2) und „seine Knie fühlten sich an wie Pudding“ (Z. 14). Diese machen die Verlassenheit des Ortes und Jonas’ körperliche Angst für den Leser anschaulich nachvollziehbar. Schließlich setzt die Autorin den inneren Monolog ein, etwa „Geht mich nichts an, dachte er“ (Z. 10) und die an sich selbst gerichtete Frage „Was soll ich tun?“ (Z. 15). Dadurch erhält der Leser unmittelbaren Einblick in Jonas’ Zwiespalt und kann seine Entscheidung mitfühlen."
      },
      {
        "label": "Text 1 &middot; BIV",
        "title": "Intention (B IV)",
        "muster": "Mit ihrer Kurzgeschichte möchte die Autorin verdeutlichen, dass Zivilcourage nicht bedeutet, keine Angst zu haben, sondern trotz der Angst zu handeln. Der Leser soll erkennen, dass Wegsehen bequem ist (vgl. Z. 10, Z. 16), das Eingreifen jedoch innere Stärke schenkt (vgl. Z. 29-31). Die Geschichte appelliert besonders an junge Menschen, in bedrohlichen Situationen Verantwortung zu übernehmen und schwächeren Personen zu helfen."
      },
      {
        "label": "Text 1 &middot; BV",
        "title": "Charakteristik (B V)",
        "muster": "Die Hauptfigur der Geschichte ist der Jugendliche Jonas. Über sein Äußeres erfährt der Leser wenig; erwähnt wird nur, dass er bei Kälte den Reißverschluss seiner Jacke „bis zum Kinn“ zieht (vgl. Z. 4), was ihn als frierenden, müden Schüler zeigt. Sein Verhalten ist zunächst von Zurückhaltung geprägt: Er will nach Hause und redet sich ein, die Situation gehe ihn nichts an (vgl. Z. 5, Z. 10). Als er jedoch den hilfesuchenden Blick bemerkt, überwindet er seine Angst, tritt vor und droht mit der Polizei (vgl. Z. 17-19). Daraus lässt sich auf seinen Charakter schließen: Jonas ist mitfühlend, denn er denkt an seinen kleinen Bruder (vgl. Z. 13), und er ist mutig, weil er trotz zitternder Hände und weicher Knie handelt (vgl. Z. 14, Z. 29). Insgesamt entwickelt er sich von einem unsicheren Wegseher zu einem verantwortungsbewussten jungen Mann, der stolz auf seine Entscheidung ist (vgl. Z. 30-31)."
      },
      {
        "label": "Text 1 &middot; C",
        "title": "Stellungnahme (C)",
        "muster": "Meiner Meinung nach ist Zivilcourage, wie sie Jonas zeigt, gerade heute besonders wichtig. Ein erstes Argument dafür ist, dass viele Menschen in Notsituationen wegsehen, weil sie Angst haben oder denken, es gehe sie nichts an. Wenn jedoch niemand eingreift, fühlen sich Täter ermutigt und Opfer bleiben allein. Ein Beispiel hierfür sind Vorfälle in öffentlichen Verkehrsmitteln, bei denen Umstehende nur zuschauen, statt zu helfen oder wenigstens Hilfe zu holen. Ein zweites Argument ist, dass man, wie der Text zeigt, oft schon mit kleinen Mitteln helfen kann, etwa indem man laut wird oder die Polizei ruft, ohne sich selbst in Gefahr zu bringen (vgl. Z. 18-19). Allerdings muss man auch bedenken, dass Eingreifen nicht immer ungefährlich ist; deshalb ist es klug, im Zweifel zuerst Hilfe zu holen, statt körperlich einzugreifen. Insgesamt bin ich überzeugt, dass jeder Mensch die Verantwortung hat, in seinem Rahmen hinzuschauen und zu handeln, denn nur so bleibt eine Gemeinschaft sicher und menschlich."
      },
      {
        "label": "Text 1 &middot; D",
        "title": "Schreibaufgabe (D)",
        "muster": "Weiterführende Schreibaufgabe (innerer Monolog): Verfasse den inneren Monolog von Jonas, während er im Bus sitzt und nach Hause fährt (vgl. Z. 28-31). – Mögliche Ausführung: „So, jetzt sitze ich hier, und meine Hände zittern immer noch. Eben hätte ich am liebsten einfach weggeschaut, mich hingesetzt und gehofft, dass alles vorbeigeht. Wie oft habe ich das schon getan? Aber dieser Blick … dieser kleine Junge hat mich angesehen wie damals mein Bruder, wenn er Angst hatte. Da konnte ich nicht mehr anders. Mein Herz hat geklopft wie verrückt, und ich war sicher, dass meine Stimme bricht. Trotzdem habe ich es gesagt. Und es hat funktioniert. Vielleicht war es nur Glück, vielleicht hätte es auch schiefgehen können. Aber zum ersten Mal seit Langem habe ich nicht weggesehen. Und wisst ihr was? Das fühlt sich verdammt gut an.“"
      },
      {
        "label": "Text 2 &middot; A",
        "title": "Einleitung (Teil A)",
        "muster": "Die Kurzgeschichte „Zwei Wege im Schnee“ von Annelie Brandt aus dem Jahr 2023 thematisiert die Freundschaft zweier Mädchen, die durch Gruppenzwang auf die Probe gestellt wird, und die Frage, ob Treue oder Anpassung stärker ist."
      },
      {
        "label": "Text 2 &middot; BI",
        "title": "Inhalt (B I)",
        "muster": "Lena und Mira sind beste Freundinnen, die alles miteinander teilen (vgl. Z. 1-2). Als Lena Anschluss an Carlas beliebte Clique sucht, beginnt sie, sich von Mira abzuwenden (vgl. Z. 4-5). Am Parkeingang wird Mira von Carla offen übergangen, und Lena geht trotz sichtbaren Zögerns mit der Gruppe davon (vgl. Z. 7-17). Mira bleibt verletzt und allein zurück (vgl. Z. 18-19). Am Nachmittag jedoch läuft Lena ihr nach, entschuldigt sich und gesteht, dass sie sich in der Gruppe verstellen musste (vgl. Z. 20-24). Nach einem ehrlichen Gespräch über den zugefügten Schmerz versöhnen sich die beiden Mädchen langsam wieder (vgl. Z. 27-29)."
      },
      {
        "label": "Text 2 &middot; BII",
        "title": "Textsorte belegen (B II)",
        "muster": "Der Text ist eine Kurzgeschichte, was sich an mehreren Merkmalen zeigt. Die Handlung beginnt unmittelbar mitten im Geschehen und umfasst nur einen kurzen Zeitraum von wenigen Tagen (vgl. Z. 1-4). Es treten wenige Figuren auf, und der Schauplatz ist auf Schulhof und Park begrenzt (vgl. Z. 4, Z. 7). Die Geschichte konzentriert sich auf ein einziges, alltägliches Ereignis aus dem Leben Jugendlicher, nämlich einen Freundschaftskonflikt, und enthält einen klaren Wendepunkt (vgl. Z. 17). Typisch ist außerdem die verdichtete, bildhafte Sprache sowie das andeutende, hoffnungsvolle Ende (vgl. Z. 29-30)."
      },
      {
        "label": "Text 2 &middot; BIII",
        "title": "Sprachliche Analyse (B III)",
        "muster": "Die Autorin arbeitet stark mit bildhafter Sprache, um Gefühle und Beziehungen zu verdeutlichen. Auffällig sind die Metaphern, etwa „zwei Hälften eines Apfels“ (Z. 1) für die enge Verbundenheit und das Schlussbild, Freundschaften könnten „am Sturm ... wachsen“ (Z. 30). Sie verdeutlichen Anfang und Botschaft der Geschichte. Daneben verwendet die Autorin zahlreiche Vergleiche, beispielsweise Lenas schwankenden Blick „wie ein Pendel, das nicht zur Ruhe kommt“ (Z. 11) und Miras Schmerz, der sich „zusammen[zieht] wie eine Faust“ (Z. 18). Diese machen den inneren Zwiespalt und das Leid für den Leser greifbar. Schließlich setzt sie eine rhetorische Frage als Druckmittel ein: „Oder willst du etwa lieber mit der da gehen?“ (Z. 13). Dadurch wird der Gruppenzwang, dem Lena ausgesetzt ist, besonders eindringlich spürbar."
      },
      {
        "label": "Text 2 &middot; BIV",
        "title": "Intention (B IV)",
        "muster": "Die Autorin möchte zeigen, wie stark der Wunsch dazuzugehören sein kann und welchen Druck Gruppen auf Einzelne ausüben (vgl. Z. 12-13, Z. 24). Zugleich macht sie deutlich, dass echte Freundschaft und Treue zu sich selbst wichtiger sind als die Anerkennung einer beliebten Clique. Der Leser soll erkennen, dass man seine wahren Freunde nicht für oberflächliche Beliebtheit aufgeben sollte und dass ehrliche Entschuldigungen Konflikte überwinden können (vgl. Z. 23-30)."
      },
      {
        "label": "Text 2 &middot; BV",
        "title": "Charakteristik (B V)",
        "muster": "Eine zentrale Figur der Geschichte ist Lena. Über ihr Äußeres erfährt man erst gegen Ende Genaueres, etwa dass sie mit „schiefer Mütze“ und vor Kälte und Scham „roten Wangen“ hinter Mira herläuft (vgl. Z. 22). Ihr Verhalten ist zunächst widersprüchlich: Sie lacht in der Clique „lauter als nötig“ mit (vgl. Z. 5) und geht trotz Zögerns mit Carla davon (vgl. Z. 10-17), kehrt aber später reuevoll zu Mira zurück (vgl. Z. 20-21). Daraus ergibt sich ihr Charakter: Lena ist einerseits unsicher und beeinflussbar, weil sie unbedingt dazugehören will (vgl. Z. 24). Andererseits ist sie im Kern ehrlich und gewissenhaft, denn sie erkennt ihren Fehler, entschuldigt sich offen und steht zu ihren Gefühlen („Das bin nicht ich“, Z. 24). Insgesamt durchläuft sie eine Entwicklung von der angepassten Mitläuferin zur Freundin, die zu ihrer wahren Identität zurückfindet."
      },
      {
        "label": "Text 2 &middot; C",
        "title": "Stellungnahme (C)",
        "muster": "Ich finde, die Geschichte zeigt sehr treffend, wie schwer es Jugendlichen fällt, dem Gruppendruck zu widerstehen. Ein erstes Argument ist, dass der Wunsch dazuzugehören in unserem Alter besonders groß ist; niemand möchte ausgeschlossen oder ausgelacht werden. Genau das beschreibt Lena, wenn sie sagt, sie habe über andere gelacht, „um selbst nicht ausgelacht zu werden“ (Z. 24). Ein Beispiel dafür sind Klassenchats, in denen viele mitlästern, obwohl sie es eigentlich nicht wollen. Ein zweites Argument ist jedoch, dass solche Anpassung unglücklich macht, weil man sich verstellt und seine echten Freunde verliert. Wahre Freunde, wie Mira, halten auch dann zu einem, wenn es schwierig wird. Man könnte einwenden, dass es manchmal vernünftig ist, sich anzupassen, um Streit zu vermeiden. Doch wenn Anpassung bedeutet, andere zu verletzen oder sich selbst zu verraten, ist der Preis zu hoch. Deshalb bin ich überzeugt, dass man zu seinen wahren Freunden und zu sich selbst stehen sollte, auch wenn das Mut kostet."
      },
      {
        "label": "Text 2 &middot; D",
        "title": "Schreibaufgabe (D)",
        "muster": "Weiterführende Schreibaufgabe (Tagebucheintrag): Schreibe Miras Tagebucheintrag am Abend dieses Tages (vgl. Z. 29-30). – Mögliche Ausführung: „Liebes Tagebuch, was für ein Tag. Heute Morgen dachte ich noch, ich hätte meine beste Freundin verloren. Als Lena einfach mit Carla weggegangen ist und mich angesehen hat, als wäre ich aus Glas, ist in mir etwas zerbrochen. Den ganzen Vormittag fühlte sich die Schule leer und kalt an. Aber dann, auf dem Heimweg, ist sie mir nachgelaufen. Sie hat geweint und gesagt, dass sie sich dort verstellen musste und dass das nicht sie sei. Ich war so wütend und gleichzeitig so erleichtert. Verzeihen fällt mir schwer, der Schmerz sitzt noch tief. Aber ich glaube, ich will es versuchen. Vielleicht hatte Miras Oma recht: Manche Freundschaften zerbrechen nicht am Sturm, sondern werden danach sogar stärker. Gute Nacht.“"
      },
      {
        "label": "Text 3 &middot; A",
        "title": "Einleitung (Teil A)",
        "muster": "Der Romanauszug „Das Foto auf dem Küchentisch“ von Yusuf Erdem aus dem Jahr 2024 thematisiert einen Familienkonflikt und die Frage, ob Vergebung über jahrzehntealten Streit und Stolz siegen kann."
      },
      {
        "label": "Text 3 &middot; BI",
        "title": "Inhalt (B I)",
        "muster": "Der Jugendliche Tarek findet zufällig ein altes Foto, das seinen Vater mit dessen unbekanntem Bruder zeigt (vgl. Z. 2-3). Auf Tareks Nachfrage erfährt er, dass sich sein Vater vor zwanzig Jahren mit diesem Bruder zerstritten hat und seither keinen Kontakt mehr pflegt (vgl. Z. 5-6). Der Vater erklärt, der Stolz habe wie eine Mauer zwischen ihnen gestanden (vgl. Z. 11-12). Tarek erkennt darin eine Ähnlichkeit zu seinem eigenen Streit mit seinem besten Freund (vgl. Z. 13). Am nächsten Morgen ermutigt er seinen Vater, den Onkel anzurufen (vgl. Z. 16-18). Nach langem Zögern wählt der Vater die Nummer und meldet sich bei seinem Bruder (vgl. Z. 23-27). Bewegt von dieser Versöhnung ruft schließlich auch Tarek seinen Freund an (vgl. Z. 28-29)."
      },
      {
        "label": "Text 3 &middot; BII",
        "title": "Textsorte belegen (B II)",
        "muster": "Der Text ist als Romanauszug gekennzeichnet. Darauf deuten mehrere Merkmale hin: Die Handlung wirkt wie ein Ausschnitt aus einem größeren Zusammenhang, denn es werden Vorgeschichten angedeutet, die über die Szene hinausreichen, etwa der zwanzig Jahre zurückliegende Streit (vgl. Z. 6, Z. 11). Im Gegensatz zur Kurzgeschichte werden die Figuren und ihre Beziehungen ausführlicher entfaltet, und es gibt mehrere zeitliche Stufen (Fund des Fotos, Abendessen, Nacht, nächster Morgen, Abend) (vgl. Z. 1, Z. 8, Z. 14, Z. 16, Z. 29). Zudem ist eine personale Erzählperspektive erkennbar, die das Geschehen aus Tareks Sicht und mit Einblick in seine Gedanken schildert (vgl. Z. 13, Z. 28)."
      },
      {
        "label": "Text 3 &middot; BIII",
        "title": "Sprachliche Analyse (B III)",
        "muster": "Der Auszug ist durch eine eindringliche Bildsprache geprägt. Das wichtigste Mittel ist die Leitmetapher der Mauer: „Stolz ist eine Mauer ... irgendwann ist sie so hoch, dass man den anderen nicht mehr sieht“ (Z. 12), die am Schluss wieder aufgegriffen wird („Manche Mauern ... reißt man besser ein“, Z. 30). Dadurch wird der abstrakte Begriff des Stolzes anschaulich und bildet das gedankliche Gerüst des Textes. Daneben verwendet der Autor zahlreiche Vergleiche, etwa die Stimme des Vaters, die „belegt klang wie ein altes Radio“ (Z. 5), oder den Hörer in der Hand, „als wäge er sein ganzes Leben darin“ (Z. 23). Diese verdeutlichen die innere Bewegung und das Gewicht des Augenblicks. Schließlich setzt der Autor rhetorische Fragen ein, die im Dialog gegeneinanderstehen: „Was, wenn er auflegt?“ (Z. 20) und „Was, wenn er nicht auflegt?“ (Z. 21). Dadurch werden Angst und Hoffnung wirkungsvoll kontrastiert."
      },
      {
        "label": "Text 3 &middot; BIV",
        "title": "Intention (B IV)",
        "muster": "Der Autor möchte zeigen, dass Stolz und verletzter Ehrgeiz Menschen über Jahre voneinander trennen können, dass Versöhnung jedoch in jedem Alter möglich ist (vgl. Z. 12, Z. 28). Der Leser soll erkennen, dass es Mut erfordert, den ersten Schritt zu tun, dieser Mut sich aber lohnt. Zugleich verdeutlicht der Text, dass auch Erwachsene nicht fehlerfrei sind und noch lernen müssen zu verzeihen (vgl. Z. 28). Insgesamt appelliert der Auszug daran, Konflikte nicht aufzuschieben, sondern aktiv beizulegen, „solange man noch die Kraft dazu hat“ (Z. 30)."
      },
      {
        "label": "Text 3 &middot; BV",
        "title": "Charakteristik (B V)",
        "muster": "Eine zentrale Figur ist Tareks Vater. Über sein Äußeres wird wenig gesagt; sichtbar werden vor allem seine zitternden Finger beim Wählen (vgl. Z. 24) und die Tränen in seinen Augen (vgl. Z. 28), die seine innere Bewegung spiegeln. Sein Verhalten ist zunächst von Verschlossenheit geprägt: Er zögert bei Tareks Fragen (vgl. Z. 4), spricht stockend über den Bruder (vgl. Z. 5) und schweigt beim Essen (vgl. Z. 8). Erst auf Drängen seines Sohnes überwindet er sich zum Anruf (vgl. Z. 23-27). Daraus lässt sich sein Charakter ableiten: Der Vater ist stolz und verschlossen, was ihn lange am Versöhnen gehindert hat (vgl. Z. 11-12); zugleich ist er nachdenklich und einsichtig, denn er erkennt seinen Fehler und benennt ihn offen mit dem Bild der Mauer. Außerdem zeigt er sich verletzlich, als ihn die Angst „eines erwachsenen Mannes“ überkommt und er „wie ein kleiner Junge“ klingt (vgl. Z. 19-20). Letztlich findet er den Mut zur Versöhnung und wächst so über seinen Stolz hinaus."
      },
      {
        "label": "Text 3 &middot; C",
        "title": "Stellungnahme (C)",
        "muster": "Ich halte die Botschaft des Textes, dass man Konflikte beilegen sollte, solange es noch möglich ist, für sehr überzeugend. Ein erstes Argument ist, dass Streit, der zu lange dauert, oft seinen ursprünglichen Anlass verliert; man weiß am Ende gar nicht mehr genau, warum man eigentlich böse ist. Genau das beschreibt der Text, wenn der Vater von einer Sache spricht, „die heute klein erscheint und damals riesengroß war“ (Z. 11). Ein Beispiel dafür sind Familien, in denen Verwandte jahrelang nicht miteinander reden und es bei einer Beerdigung bitter bereuen. Ein zweites Argument ist, dass Versöhnung erleichtert und glücklich macht, wie man an den Tränen und dem Lächeln des Vaters sieht (vgl. Z. 28). Natürlich kann man einwenden, dass es schwer ist, den ersten Schritt zu machen, weil man Angst vor Zurückweisung hat. Doch wie Tarek treffend sagt, lohnt es sich, die Hoffnung über die Angst zu stellen (vgl. Z. 21). Deshalb bin ich überzeugt, dass es klüger und mutiger ist, eine Hand auszustrecken, als hinter einer Mauer aus Stolz allein zu bleiben."
      },
      {
        "label": "Text 3 &middot; D",
        "title": "Schreibaufgabe (D)",
        "muster": "Weiterführende Schreibaufgabe (Brief): Verfasse den Brief, den Tarek am selben Abend an seinen zerstrittenen besten Freund schreibt, bevor er ihn anruft (vgl. Z. 29). – Mögliche Ausführung: „Lieber Jonas, ich weiß, wir haben seit Monaten kein Wort mehr miteinander gewechselt, und ehrlich gesagt erinnere ich mich kaum noch, worüber wir uns überhaupt gestritten haben. Heute habe ich etwas erlebt, das mir die Augen geöffnet hat. Mein Vater hat zwanzig Jahre nicht mit seinem eigenen Bruder gesprochen, nur aus Stolz. Heute hat er ihn endlich angerufen, mit zitternden Händen, und es hat sich gelohnt. Er sagt, Stolz sei eine Mauer, die man Stein für Stein baut, bis man den anderen nicht mehr sieht. Ich will nicht, dass zwischen uns auch so eine Mauer wächst. Es tut mir leid, was immer ich falsch gemacht habe. Lass uns reden, bevor es zu spät ist. Dein Tarek.“"
      }
    ]
  },
  "exercises": [
    {
      "id": "d-xl-01",
      "area": "uebungstexte_xl",
      "difficulty": 3,
      "prompt": "Schreibe zu Text 1 (&bdquo;Der letzte Bus&ldquo;) einen vollst&auml;ndigen <b>Einleitungssatz (Teil A)</b> mit allen f&uuml;nf Pflichtangaben.",
      "solutionSteps": [
        "Nenne Textsorte, Titel, Autor/in, Erscheinungsjahr und Thema.",
        "Formuliere im Pr&auml;sens, in einem Satz."
      ],
      "answer": "Die Kurzgeschichte „Der letzte Bus“ von Mara Lindqvist aus dem Jahr 2024 thematisiert die Zivilcourage eines Jugendlichen, der sich an einer Bushaltestelle entscheiden muss, ob er bei einer Bedrohung eingreift oder wegsieht."
    },
    {
      "id": "d-xl-02",
      "area": "uebungstexte_xl",
      "difficulty": 3,
      "prompt": "Schreibe zu Text 2 (&bdquo;Zwei Wege im Schnee&ldquo;) einen vollst&auml;ndigen <b>Einleitungssatz (Teil A)</b> mit allen f&uuml;nf Pflichtangaben.",
      "solutionSteps": [
        "Nenne Textsorte, Titel, Autor/in, Erscheinungsjahr und Thema.",
        "Formuliere im Pr&auml;sens, in einem Satz."
      ],
      "answer": "Die Kurzgeschichte „Zwei Wege im Schnee“ von Annelie Brandt aus dem Jahr 2023 thematisiert die Freundschaft zweier Mädchen, die durch Gruppenzwang auf die Probe gestellt wird, und die Frage, ob Treue oder Anpassung stärker ist."
    },
    {
      "id": "d-xl-03",
      "area": "uebungstexte_xl",
      "difficulty": 3,
      "prompt": "Schreibe zu Text 3 (&bdquo;Das Foto auf dem Küchentisch&ldquo;) einen vollst&auml;ndigen <b>Einleitungssatz (Teil A)</b> mit allen f&uuml;nf Pflichtangaben.",
      "solutionSteps": [
        "Nenne Textsorte, Titel, Autor/in, Erscheinungsjahr und Thema.",
        "Formuliere im Pr&auml;sens, in einem Satz."
      ],
      "answer": "Der Romanauszug „Das Foto auf dem Küchentisch“ von Yusuf Erdem aus dem Jahr 2024 thematisiert einen Familienkonflikt und die Frage, ob Vergebung über jahrzehntealten Streit und Stolz siegen kann."
    }
  ]
}
  ]
});
