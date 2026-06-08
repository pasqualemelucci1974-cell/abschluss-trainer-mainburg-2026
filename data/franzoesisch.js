/* ============================================================
   FACH: Französisch  ·  Abschlussprüfung 25.06.2026
   Realschule Mainburg · Mittlere Reife · WPF-Gruppe IIIa · DELF B1
   Klassisches <script>, KEIN ES-Modul. Ruft APP.register auf.
   Alle Inhalte ORIGINAL. Erkl&auml;rungen auf Deutsch.
   Umlaute/Sonderzeichen als HTML-Entities.
   ============================================================ */
APP.register({
  id: "franzoesisch",
  name: "Franz&ouml;sisch",
  lang: "fr-FR",
  examISO: "2026-06-25",
  examInfo: "Compr&eacute;hension de l&rsquo;oral &amp; des &eacute;crits, Version (F&rarr;D), Production &eacute;crite/orale &middot; Niveau DELF B1 &middot; 25.06.2026",
  examMinutes: 140,
  note: "<b>So gehst du vor:</b> Lies/h&ouml;re jeden Text zweimal. Bei der <i>compr&eacute;hension</i> zuerst die Fragen lesen, dann gezielt suchen. Bei der <i>production &eacute;crite</i> auf den Aufbau (Einleitung &ndash; Hauptteil &ndash; Schluss) und auf die Zeiten achten (<i>pr&eacute;sent, pass&eacute; compos&eacute;, imparfait, futur</i>). &mdash; Alle Texte und Aufgaben sind <b>original</b> im Stil der bayerischen Realschulpr&uuml;fung (DELF&nbsp;B1 integriert); es werden keine echten Pr&uuml;fungstexte verwendet.",

  lernplan: [
    { dateISO: "2026-06-07", areaId: "oral",
      focus: "<b>Start:</b> Compr&eacute;hension de l&rsquo;oral &ndash; den Transkript &bdquo;&Agrave; la boulangerie&ldquo; durcharbeiten und die Fragen beantworten." },
    { dateISO: "2026-06-09", areaId: "ecrits",
      focus: "Compr&eacute;hension des &eacute;crits: den Text &bdquo;Un &eacute;change scolaire&ldquo; lesen und alle Fragen mit Belegstelle beantworten." },
    { dateISO: "2026-06-11", areaId: "version",
      focus: "Version: die S&auml;tze Franz&ouml;sisch &rarr; Deutsch &uuml;bersetzen und mit dem Modell vergleichen." },
    { dateISO: "2026-06-13", areaId: "vokabeln",
      focus: "Vokabeltrainer FR&harr;DE: Themen &bdquo;&Eacute;cole&ldquo;, &bdquo;Famille&ldquo; und &bdquo;Quotidien&ldquo; wiederholen." },
    { dateISO: "2026-06-16", areaId: "grammatik",
      focus: "Grammatik: <i>pr&eacute;sent</i>, <i>pass&eacute; compos&eacute;</i> und <i>imparfait</i> &uuml;ben (Bildung &amp; Verwendung)." },
    { dateISO: "2026-06-18", areaId: "grammatik",
      focus: "Grammatik: <i>futur simple</i>, <i>conditionnel I/II</i>, <i>subjonctif</i>-Basis, Pronomen, Verneinung, <i>accord</i>." },
    { dateISO: "2026-06-21", areaId: "ecrite",
      focus: "Production &eacute;crite: einen Brief/eine E-Mail (mind. 120 W&ouml;rter) schreiben &ndash; mit den <i>expressions utiles</i>." },
    { dateISO: "2026-06-23", areaId: "orale",
      focus: "Production orale: sich zum Thema &bdquo;Mes loisirs&ldquo; eine Minute frei vorstellen und auf Fragen antworten." }
  ],

  areas: [

    /* ===================================================== */
    /* BEREICH 1: Compréhension de l'oral (Transcript + Aufgaben) */
    /* ===================================================== */
    {
      id: "oral",
      title: "Compr&eacute;hension de l&rsquo;oral",
      intro: "<p>In der Pr&uuml;fung h&ouml;rst du einen kurzen Dialog oder eine Durchsage zweimal. Hier kannst du dir den <b>Transkript</b> mit <b>&bdquo;Anh&ouml;ren&ldquo;</b> vorlesen lassen (das, was du h&ouml;ren w&uuml;rdest) und beantwortest dazu die Fragen. <b>Tipp:</b> Lies zuerst die Fragen, dann wei&szlig;t du, worauf du achten musst.</p>",
      theory:
        "<h3>Strategie f&uuml;r das H&ouml;rverstehen</h3>" +
        "<ul>" +
        "<li><b>Vor dem H&ouml;ren:</b> die Fragen lesen &ndash; markiere Schl&uuml;sselw&ouml;rter (Wer? Wo? Wann? Wie viel?).</li>" +
        "<li><b>Beim 1.&nbsp;H&ouml;ren:</b> auf das Hauptthema und die Stimmung achten (global).</li>" +
        "<li><b>Beim 2.&nbsp;H&ouml;ren:</b> auf Details achten (Zahlen, Uhrzeiten, Preise, Namen).</li>" +
        "<li><b>Signalw&ouml;rter f&uuml;r Zeiten:</b> <i>hier</i> (gestern), <i>aujourd&rsquo;hui</i> (heute), <i>demain</i> (morgen), <i>la semaine prochaine</i> (n&auml;chste Woche).</li>" +
        "</ul>",
      leseverstehen: {
        title: "Transcript &bdquo;&Agrave; la boulangerie&ldquo; (avec questions)",
        audio: true,
        lang: "fr-FR",
        text:
          "<p style='font-style:italic'>" +
          "<b>La vendeuse :</b> Bonjour&nbsp;! Vous d&eacute;sirez&nbsp;?<br>" +
          "<b>Lucas :</b> Bonjour, madame. Je voudrais deux croissants et une baguette, s&rsquo;il vous pla&icirc;t.<br>" +
          "<b>La vendeuse :</b> Tr&egrave;s bien. Et avec ceci&nbsp;?<br>" +
          "<b>Lucas :</b> C&rsquo;est l&rsquo;anniversaire de ma m&egrave;re aujourd&rsquo;hui. Vous avez un g&acirc;teau au chocolat&nbsp;?<br>" +
          "<b>La vendeuse :</b> Oui, bien s&ucirc;r. Il co&ucirc;te quinze euros. Je vous l&rsquo;emballe&nbsp;?<br>" +
          "<b>Lucas :</b> Oui, merci. &Ccedil;a fait combien en tout&nbsp;?<br>" +
          "<b>La vendeuse :</b> Alors&hellip; deux croissants, une baguette et le g&acirc;teau&nbsp;: &ccedil;a fait dix-huit euros cinquante.<br>" +
          "<b>Lucas :</b> Voil&agrave;. Bonne journ&eacute;e&nbsp;!<br>" +
          "<b>La vendeuse :</b> Merci, &agrave; vous aussi&nbsp;!" +
          "</p>",
        questions: [
          { q: "Wo spielt der Dialog (Ort)?", a: "In einer B&auml;ckerei (&agrave; la boulangerie)." },
          { q: "Was kauft Lucas insgesamt?", a: "Zwei Croissants, eine Baguette und einen Schokoladenkuchen." },
          { q: "Warum kauft Lucas einen Kuchen?", a: "Weil heute der Geburtstag seiner Mutter ist (&laquo;&nbsp;C&rsquo;est l&rsquo;anniversaire de ma m&egrave;re aujourd&rsquo;hui&nbsp;&raquo;)." },
          { q: "Wie viel kostet alles zusammen?", a: "18,50&nbsp;Euro (dix-huit euros cinquante)." }
        ]
      },
      exercises: [
        { id: "f-or-01", area: "oral", difficulty: 1,
          prompt: "H&ouml;rverstehen: Wie teuer ist allein der <b>Schokoladenkuchen</b> im Dialog &bdquo;&Agrave; la boulangerie&ldquo;?",
          solutionSteps: [
            "Suche im Transkript die Stelle, an der die Verk&auml;uferin den Preis des Kuchens nennt.",
            "&laquo;&nbsp;Il co&ucirc;te quinze euros.&nbsp;&raquo;"
          ],
          answer: "Der Kuchen kostet 15&nbsp;Euro (quinze euros)." },

        { id: "f-or-02", area: "oral", difficulty: 2,
          prompt: "Welche h&ouml;flichen Formulierungen benutzt Lucas, um etwas zu bestellen? Nenne <b>zwei</b> Beispiele aus dem Dialog.",
          solutionSteps: [
            "Suche nach H&ouml;flichkeitsformeln, mit denen man einen Wunsch ausdr&uuml;ckt.",
            "Achte auf &laquo;&nbsp;Je voudrais&hellip;&nbsp;&raquo; und &laquo;&nbsp;s&rsquo;il vous pla&icirc;t&nbsp;&raquo;."
          ],
          answer: "&laquo;&nbsp;Je voudrais deux croissants&hellip;&nbsp;&raquo; (Ich h&auml;tte gern&hellip;) und &laquo;&nbsp;s&rsquo;il vous pla&icirc;t&nbsp;&raquo; (bitte). Auch &laquo;&nbsp;Vous avez un g&acirc;teau&hellip;&nbsp;?&nbsp;&raquo; ist h&ouml;flich." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 2: Compréhension des écrits (Originaltext FR + Fragen) */
    /* ===================================================== */
    {
      id: "ecrits",
      title: "Compr&eacute;hension des &eacute;crits",
      intro: "<p>Lies den <b>originalen franz&ouml;sischen Text</b> und beantworte die Fragen. Belege deine Antworten m&ouml;glichst mit einer Stelle aus dem Text. <b>Tipp:</b> Unbekannte W&ouml;rter aus dem Zusammenhang erschlie&szlig;en, nicht jedes Wort nachschlagen.</p>",
      leseverstehen: {
        title: "Texte &bdquo;Un &eacute;change scolaire&ldquo; (texte original) + questions",
        text:
          "<p style='font-style:italic'>" +
          "Salut&nbsp;! Je m&rsquo;appelle Emma et j&rsquo;ai quinze ans. J&rsquo;habite &agrave; Lyon, dans le sud-est de la France. " +
          "Le mois dernier, j&rsquo;ai particip&eacute; &agrave; un &eacute;change scolaire avec une &eacute;cole allemande. " +
          "Pendant deux semaines, une fille allemande, Lena, a habit&eacute; chez moi, et ensuite je suis all&eacute;e chez elle, &agrave; Munich.<br><br>" +
          "Au d&eacute;but, j&rsquo;avais un peu peur de ne pas comprendre, parce que mon allemand n&rsquo;est pas parfait. " +
          "Mais Lena &eacute;tait tr&egrave;s gentille et patiente. Nous avons parl&eacute; un m&eacute;lange de fran&ccedil;ais, d&rsquo;allemand et d&rsquo;anglais&nbsp;! " +
          "&Agrave; Munich, j&rsquo;ai d&eacute;couvert beaucoup de choses&nbsp;: les bretzels, les march&eacute;s de No&euml;l et surtout, j&rsquo;ai am&eacute;lior&eacute; mon allemand tr&egrave;s vite.<br><br>" +
          "Ce que j&rsquo;ai pr&eacute;f&eacute;r&eacute;, c&rsquo;&eacute;tait la vie en famille. La famille de Lena m&rsquo;a accueillie comme leur propre fille. " +
          "Maintenant, Lena est ma meilleure amie &eacute;trang&egrave;re et nous nous &eacute;crivons presque tous les jours. " +
          "Je conseille &agrave; tout le monde de faire un &eacute;change&nbsp;: c&rsquo;est la meilleure fa&ccedil;on d&rsquo;apprendre une langue&nbsp;!" +
          "</p>",
        questions: [
          { q: "Wie alt ist Emma und wo wohnt sie?", a: "Emma ist 15&nbsp;Jahre alt und wohnt in Lyon, im S&uuml;dosten Frankreichs (&laquo;&nbsp;j&rsquo;ai quinze ans&hellip; J&rsquo;habite &agrave; Lyon&nbsp;&raquo;)." },
          { q: "Wie lange dauerte der Austausch und wohin reiste Emma?", a: "Zwei Wochen wohnte Lena bei Emma, danach fuhr Emma zu Lena nach M&uuml;nchen (&laquo;&nbsp;Pendant deux semaines&hellip; je suis all&eacute;e chez elle, &agrave; Munich&nbsp;&raquo;)." },
          { q: "Wovor hatte Emma am Anfang Angst?", a: "Sie hatte Angst, nichts zu verstehen, weil ihr Deutsch nicht perfekt ist (&laquo;&nbsp;j&rsquo;avais un peu peur de ne pas comprendre&nbsp;&raquo;)." },
          { q: "Was gefiel Emma am besten?", a: "Das Familienleben (&laquo;&nbsp;Ce que j&rsquo;ai pr&eacute;f&eacute;r&eacute;, c&rsquo;&eacute;tait la vie en famille&nbsp;&raquo;); Lenas Familie nahm sie wie ihre eigene Tochter auf." },
          { q: "Warum empfiehlt Emma einen Austausch?", a: "Weil es die beste Art ist, eine Sprache zu lernen (&laquo;&nbsp;c&rsquo;est la meilleure fa&ccedil;on d&rsquo;apprendre une langue&nbsp;&raquo;)." }
        ]
      },
      exercises: [
        { id: "f-ec-01", area: "ecrits", difficulty: 2,
          prompt: "<i>Vrai ou faux&nbsp;?</i> Begr&uuml;nde mit dem Text: &bdquo;Emma und Lena haben nach dem Austausch keinen Kontakt mehr.&ldquo;",
          solutionSteps: [
            "Suche im letzten Absatz, was &uuml;ber den heutigen Kontakt steht.",
            "&laquo;&nbsp;nous nous &eacute;crivons presque tous les jours&nbsp;&raquo; = wir schreiben uns fast t&auml;glich."
          ],
          answer: "<b>Faux</b> (falsch). Sie sind jetzt beste Freundinnen und schreiben sich fast jeden Tag (&laquo;&nbsp;nous nous &eacute;crivons presque tous les jours&nbsp;&raquo;)." },

        { id: "f-ec-02", area: "ecrits", difficulty: 2,
          prompt: "Welche drei Dinge hat Emma in M&uuml;nchen <b>entdeckt</b> (d&eacute;couvert)?",
          solutionSteps: [
            "Suche den Satz mit &laquo;&nbsp;j&rsquo;ai d&eacute;couvert beaucoup de choses&nbsp;&raquo;.",
            "Z&auml;hle die danach genannten Dinge auf."
          ],
          answer: "Die Brezeln (les bretzels), die Weihnachtsm&auml;rkte (les march&eacute;s de No&euml;l) und sie hat ihr Deutsch verbessert (am&eacute;lior&eacute; mon allemand)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 3: Version (Französisch → Deutsch) mit Modell */
    /* ===================================================== */
    {
      id: "version",
      title: "Version (F&rarr;D)",
      intro: "<p>Bei der <b>Version</b> &uuml;bersetzt du franz&ouml;sische S&auml;tze <b>sinngem&auml;&szlig;</b> ins Deutsche &ndash; nicht Wort f&uuml;r Wort, sondern in gutes Deutsch. Schreibe deine &Uuml;bersetzung ins Feld und vergleiche sie dann mit dem Modell.</p>",
      theory:
        "<h3>Tipps f&uuml;r eine gute &Uuml;bersetzung</h3>" +
        "<ul>" +
        "<li><b>Sinn vor Wort:</b> &Uuml;bersetze den Sinn, nicht jedes einzelne Wort.</li>" +
        "<li><b>Zeiten beachten:</b> <i>pass&eacute; compos&eacute;</i> / <i>imparfait</i> werden im Deutschen oft mit dem Pr&auml;teritum (oder Perfekt) wiedergegeben.</li>" +
        "<li><b>Feste Wendungen:</b> &laquo;&nbsp;il y a&nbsp;&raquo; = &bdquo;es gibt&ldquo;; &laquo;&nbsp;il fait beau&nbsp;&raquo; = &bdquo;das Wetter ist sch&ouml;n&ldquo;.</li>" +
        "<li><b>Wortstellung:</b> Im Deutschen kann die Reihenfolge anders sein als im Franz&ouml;sischen.</li>" +
        "</ul>",
      version: {
        title: "Version: Franz&ouml;sisch &rarr; Deutsch (mit Modell)",
        items: [
          { source: "Le matin, Marie prend son petit-d&eacute;jeuner avant d&rsquo;aller &agrave; l&rsquo;&eacute;cole.",
            target: "Am Morgen fr&uuml;hst&uuml;ckt Marie, bevor sie zur Schule geht." },
          { source: "Hier, nous sommes all&eacute;s au cin&eacute;ma avec mes amis.",
            target: "Gestern sind wir mit meinen Freunden ins Kino gegangen." },
          { source: "Quand j&rsquo;&eacute;tais petit, je passais toutes mes vacances chez mes grands-parents.",
            target: "Als ich klein war, verbrachte ich alle meine Ferien bei meinen Gro&szlig;eltern." },
          { source: "Il fait beau aujourd&rsquo;hui, alors nous allons nous promener dans le parc.",
            target: "Heute ist sch&ouml;nes Wetter, deshalb gehen wir im Park spazieren." },
          { source: "Si j&rsquo;avais plus de temps, je lirais davantage.",
            target: "Wenn ich mehr Zeit h&auml;tte, w&uuml;rde ich mehr lesen." }
        ]
      },
      exercises: [
        { id: "f-ver-01", area: "version", difficulty: 1,
          prompt: "&Uuml;bersetze ins Deutsche: <b>&laquo;&nbsp;Il y a beaucoup de monde dans la rue.&nbsp;&raquo;</b>",
          solutionSteps: [
            "&laquo;&nbsp;Il y a&nbsp;&raquo; ist eine feste Wendung: &bdquo;es gibt&ldquo;.",
            "&laquo;&nbsp;beaucoup de monde&nbsp;&raquo; bedeutet &bdquo;viele Leute&ldquo; (nicht: viel Welt)."
          ],
          answer: "Auf der Stra&szlig;e sind viele Leute. (W&ouml;rtlich: Es gibt viele Leute auf der Stra&szlig;e.)" },

        { id: "f-ver-02", area: "version", difficulty: 2,
          prompt: "&Uuml;bersetze ins Deutsche: <b>&laquo;&nbsp;Nous avons d&eacute;cid&eacute; de partir t&ocirc;t parce qu&rsquo;il pleuvait.&nbsp;&raquo;</b>",
          solutionSteps: [
            "&laquo;&nbsp;avons d&eacute;cid&eacute;&nbsp;&raquo; = pass&eacute; compos&eacute; &rarr; deutsches Perfekt/Pr&auml;teritum.",
            "&laquo;&nbsp;il pleuvait&nbsp;&raquo; = imparfait &rarr; &bdquo;es regnete&ldquo;."
          ],
          answer: "Wir haben beschlossen, fr&uuml;h aufzubrechen, weil es regnete." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 4: Production écrite (Aufgaben + Modelltext + expressions) */
    /* ===================================================== */
    {
      id: "ecrite",
      title: "Production &eacute;crite",
      intro: "<p>Bei der <b>production &eacute;crite</b> schreibst du selbst einen Text (Brief, E-Mail, Blogeintrag) von meist <b>120&ndash;150 W&ouml;rtern</b>. Hier findest du eine Beispielaufgabe, einen <b>Modelltext</b> und n&uuml;tzliche Wendungen (<i>expressions utiles</i>).</p>",
      theory:
        "<h3>Aufbau eines Briefes / einer E-Mail</h3>" +
        "<ul>" +
        "<li><b>Anrede:</b> <i>Cher Paul, / Salut Lucas, / Madame, Monsieur,</i> (formell).</li>" +
        "<li><b>Einleitung:</b> Grund des Schreibens nennen.</li>" +
        "<li><b>Hauptteil:</b> die Aufgabenpunkte abarbeiten (alle Stichpunkte beantworten!).</li>" +
        "<li><b>Schluss:</b> ein abschlie&szlig;ender Satz + Gru&szlig;.</li>" +
        "<li><b>Schlussformel:</b> <i>&Agrave; bient&ocirc;t&nbsp;! / Amicalement, / Cordialement,</i> (formell).</li>" +
        "</ul>" +
        "<p><b>Achte auf:</b> verschiedene Zeiten (pr&eacute;sent, pass&eacute; compos&eacute;, futur), Verbindungsw&ouml;rter (<i>d&rsquo;abord, ensuite, enfin</i>) und die Wortzahl.</p>",
      examples: [
        { title: "Aufgabe (consigne)",
          html: "<p><b>Sujet:</b> Du hast die Ferien bei deiner franz&ouml;sischen Brieffreundin verbracht. Schreibe ihr nach der R&uuml;ckkehr eine E-Mail (mind.&nbsp;120&nbsp;W&ouml;rter). Gehe auf folgende Punkte ein:</p>" +
                "<ul>" +
                "<li>Bedanke dich f&uuml;r die sch&ouml;ne Zeit.</li>" +
                "<li>Erz&auml;hle, was dir am besten gefallen hat (pass&eacute; compos&eacute;).</li>" +
                "<li>Beschreibe, was anders war als bei dir zu Hause.</li>" +
                "<li>Schlage vor, was ihr beim n&auml;chsten Mal zusammen machen k&ouml;nntet (futur).</li>" +
                "</ul>" },
        { title: "Modelltext (texte mod&egrave;le)",
          html: "<p style='font-style:italic'>Ch&egrave;re Camille,<br><br>" +
                "Je suis bien rentr&eacute;e &agrave; la maison et je voulais te remercier pour ces vacances formidables. " +
                "J&rsquo;ai pass&eacute; deux semaines merveilleuses chez toi&nbsp;!<br><br>" +
                "Ce que j&rsquo;ai pr&eacute;f&eacute;r&eacute;, c&rsquo;est notre journ&eacute;e &agrave; la plage&nbsp;: nous avons nag&eacute;, nous avons mang&eacute; des glaces et nous avons beaucoup ri. " +
                "Chez toi, les repas sont plus longs qu&rsquo;en Allemagne, et toute la famille mange ensemble&nbsp;: j&rsquo;ai trouv&eacute; &ccedil;a tr&egrave;s agr&eacute;able.<br><br>" +
                "La prochaine fois, tu viendras chez moi&nbsp;! Nous visiterons Munich et nous irons &agrave; la montagne. Ce sera g&eacute;nial.<br><br>" +
                "Merci encore pour tout. &Agrave; bient&ocirc;t&nbsp;!<br>" +
                "Amicalement,<br>Emma</p>" }
      ],
      exercises: [
        { id: "f-pe-01", area: "ecrite", difficulty: 1,
          prompt: "Nenne <b>drei n&uuml;tzliche Wendungen</b> (expressions utiles), mit denen man sich in einem Brief <b>bedankt</b> oder den Brief <b>abschlie&szlig;t</b>.",
          solutionSteps: [
            "Denke an Dank-Formeln und an Schlussgr&uuml;&szlig;e.",
            "Schlussformeln stehen ganz am Ende vor dem Namen."
          ],
          answer: "Dank: &laquo;&nbsp;Je voudrais te remercier pour&hellip;&nbsp;&raquo; / &laquo;&nbsp;Merci encore pour tout.&nbsp;&raquo; &ndash; Schluss: &laquo;&nbsp;&Agrave; bient&ocirc;t&nbsp;!&nbsp;&raquo;, &laquo;&nbsp;Amicalement,&nbsp;&raquo;, &laquo;&nbsp;Cordialement,&nbsp;&raquo; (formell)." },

        { id: "f-pe-02", area: "ecrite", difficulty: 2,
          prompt: "In welcher <b>Zeitform</b> beschreibst du, was du in den Ferien <b>erlebt</b> hast, und in welcher Zeitform sprichst du &uuml;ber das <b>n&auml;chste Mal</b>?",
          solutionSteps: [
            "Vergangene, abgeschlossene Erlebnisse stehen im pass&eacute; compos&eacute;.",
            "Zuk&uuml;nftige Pl&auml;ne stehen im futur (simple oder futur proche)."
          ],
          answer: "Erlebtes: <b>pass&eacute; compos&eacute;</b> (z.&nbsp;B. &laquo;&nbsp;nous avons nag&eacute;&nbsp;&raquo;). Pl&auml;ne: <b>futur</b> (z.&nbsp;B. &laquo;&nbsp;nous visiterons Munich&nbsp;&raquo; oder &laquo;&nbsp;nous allons visiter&nbsp;&raquo;)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 5: Production orale (Redemittel + Aufgaben) */
    /* ===================================================== */
    {
      id: "orale",
      title: "Production orale",
      intro: "<p>In der <b>m&uuml;ndlichen Pr&uuml;fung</b> stellst du dich vor, beschreibst ein Bild oder sprichst &uuml;ber ein Thema und antwortest auf Fragen. Hier &uuml;bst du n&uuml;tzliche Redemittel und Beispielfragen. <b>Sprich laut!</b></p>",
      theory:
        "<h3>Redemittel (expressions pour parler)</h3>" +
        "<ul>" +
        "<li><b>Sich vorstellen:</b> &laquo;&nbsp;Je m&rsquo;appelle&hellip;, j&rsquo;ai&hellip; ans, j&rsquo;habite &agrave;&hellip;&nbsp;&raquo;</li>" +
        "<li><b>Meinung:</b> &laquo;&nbsp;&Agrave; mon avis&hellip;&nbsp;&raquo; (meiner Meinung nach), &laquo;&nbsp;Je pense que&hellip;&nbsp;&raquo;, &laquo;&nbsp;Je trouve que&hellip;&nbsp;&raquo;</li>" +
        "<li><b>Vorlieben:</b> &laquo;&nbsp;J&rsquo;aime / J&rsquo;adore / Je d&eacute;teste&hellip;&nbsp;&raquo;, &laquo;&nbsp;Mon passe-temps pr&eacute;f&eacute;r&eacute; est&hellip;&nbsp;&raquo;</li>" +
        "<li><b>Ein Bild beschreiben:</b> &laquo;&nbsp;Sur cette photo, je vois&hellip;&nbsp;&raquo;, &laquo;&nbsp;Au premier plan&hellip; / &Agrave; l&rsquo;arri&egrave;re-plan&hellip;&nbsp;&raquo;</li>" +
        "<li><b>Zeit gewinnen:</b> &laquo;&nbsp;Alors&hellip;&nbsp;&raquo;, &laquo;&nbsp;Eh bien&hellip;&nbsp;&raquo;, &laquo;&nbsp;Attends, je r&eacute;fl&eacute;chis&hellip;&nbsp;&raquo;</li>" +
        "</ul>",
      examples: [
        { title: "Beispiel: sich vorstellen (Mes loisirs)",
          html: "<p style='font-style:italic'>&laquo;&nbsp;Bonjour&nbsp;! Je m&rsquo;appelle Max et j&rsquo;ai seize ans. J&rsquo;habite &agrave; Mainburg, en Bavi&egrave;re. " +
                "Pendant mon temps libre, j&rsquo;aime faire du sport et &eacute;couter de la musique. Mon passe-temps pr&eacute;f&eacute;r&eacute; est le foot, parce que j&rsquo;aime jouer en &eacute;quipe. " +
                "Le week-end, je sors souvent avec mes amis. &Agrave; mon avis, c&rsquo;est important d&rsquo;avoir des loisirs pour se d&eacute;tendre.&nbsp;&raquo;</p>" }
      ],
      exercises: [
        { id: "f-po-01", area: "orale", difficulty: 1,
          prompt: "Wie kannst du auf Franz&ouml;sisch deine <b>Meinung</b> einleiten? Nenne zwei Wendungen.",
          solutionSteps: [
            "Denke an Formeln, die &bdquo;meiner Meinung nach&ldquo; oder &bdquo;ich denke, dass&ldquo; bedeuten.",
            "Diese stehen meist am Satzanfang."
          ],
          answer: "&laquo;&nbsp;&Agrave; mon avis&hellip;&nbsp;&raquo; (meiner Meinung nach) und &laquo;&nbsp;Je pense que&hellip;&nbsp;&raquo; / &laquo;&nbsp;Je trouve que&hellip;&nbsp;&raquo; (ich denke/finde, dass&hellip;)." },

        { id: "f-po-02", area: "orale", difficulty: 2,
          prompt: "Beantworte m&uuml;ndlich (formuliere einen vollst&auml;ndigen franz&ouml;sischen Satz): <i>&laquo;&nbsp;Qu&rsquo;est-ce que tu fais pendant ton temps libre&nbsp;?&nbsp;&raquo;</i>",
          solutionSteps: [
            "Beginne mit &laquo;&nbsp;Pendant mon temps libre, j&rsquo;aime&hellip;&nbsp;&raquo;.",
            "Nenne eine Aktivit&auml;t im Infinitiv nach &laquo;&nbsp;j&rsquo;aime&nbsp;&raquo;."
          ],
          answer: "Beispiel: &laquo;&nbsp;Pendant mon temps libre, j&rsquo;aime faire du sport et &eacute;couter de la musique.&nbsp;&raquo; (In meiner Freizeit mache ich gern Sport und h&ouml;re Musik.)" }
      ]
    },

    /* ===================================================== */
    /* BEREICH 6: Vokabeltrainer FR↔DE */
    /* ===================================================== */
    {
      id: "vokabeln",
      title: "Vokabeltrainer FR&harr;DE",
      intro: "<p>Klicke auf eine Zeile, um die deutsche &Uuml;bersetzung zu sehen. Wiederhole die Themenfelder regelm&auml;&szlig;ig &ndash; ein guter Wortschatz hilft in allen Pr&uuml;fungsteilen.</p>",
      vokabeln: {
        title: "Wortschatz nach Themen (FR &harr; DE)",
        items: [
          { front: "&Eacute;cole &middot; l&rsquo;&eacute;l&egrave;ve", back: "Schule &middot; der/die Sch&uuml;ler(in)" },
          { front: "&Eacute;cole &middot; la mati&egrave;re", back: "das (Schul-)Fach" },
          { front: "&Eacute;cole &middot; les devoirs (m.)", back: "die Hausaufgaben" },
          { front: "&Eacute;cole &middot; la note", back: "die Note" },
          { front: "Famille &middot; les parents (m.)", back: "die Eltern" },
          { front: "Famille &middot; le fr&egrave;re / la s&oelig;ur", back: "der Bruder / die Schwester" },
          { front: "Famille &middot; les grands-parents (m.)", back: "die Gro&szlig;eltern" },
          { front: "Quotidien &middot; se lever", back: "aufstehen" },
          { front: "Quotidien &middot; le petit-d&eacute;jeuner", back: "das Fr&uuml;hst&uuml;ck" },
          { front: "Quotidien &middot; faire les courses", back: "einkaufen (gehen)" },
          { front: "Loisirs &middot; le temps libre", back: "die Freizeit" },
          { front: "Loisirs &middot; se promener", back: "spazieren gehen" },
          { front: "Connecteurs &middot; d&rsquo;abord / ensuite / enfin", back: "zuerst / dann / schlie&szlig;lich" },
          { front: "Opinion &middot; &agrave; mon avis", back: "meiner Meinung nach" },
          { front: "Temps &middot; hier / aujourd&rsquo;hui / demain", back: "gestern / heute / morgen" }
        ]
      },
      exercises: [
        { id: "f-vo-01", area: "vokabeln", difficulty: 1,
          prompt: "Wie hei&szlig;en auf Franz&ouml;sisch die drei Verbindungsw&ouml;rter f&uuml;r <b>&bdquo;zuerst &ndash; dann &ndash; schlie&szlig;lich&ldquo;</b>?",
          solutionSteps: [
            "Diese drei Wendungen strukturieren einen Text (z.&nbsp;B. in der production &eacute;crite).",
            "Denke an die Reihenfolge im Ablauf."
          ],
          answer: "&laquo;&nbsp;d&rsquo;abord&nbsp;&raquo; (zuerst), &laquo;&nbsp;ensuite&nbsp;&raquo; (dann/danach), &laquo;&nbsp;enfin&nbsp;&raquo; (schlie&szlig;lich)." },

        { id: "f-vo-02", area: "vokabeln", difficulty: 1,
          prompt: "&Uuml;bersetze ins Franz&ouml;sische: <b>die Hausaufgaben</b> und <b>einkaufen gehen</b>.",
          solutionSteps: [
            "&bdquo;Hausaufgaben&ldquo; steht im Franz&ouml;sischen im Plural mit Artikel.",
            "&bdquo;Einkaufen&ldquo; ist eine feste Wendung mit &laquo;&nbsp;faire&nbsp;&raquo;."
          ],
          answer: "&laquo;&nbsp;les devoirs&nbsp;&raquo; (die Hausaufgaben) und &laquo;&nbsp;faire les courses&nbsp;&raquo; (einkaufen gehen)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 7: Grammatik-Trainer (Zeiten, Pronomen, Verneinung, accord) */
    /* ===================================================== */
    {
      id: "grammatik",
      title: "Grammatik-Trainer",
      intro: "<p>Hier trainierst du die wichtigsten Grammatikthemen f&uuml;r die Pr&uuml;fung. Lies zuerst die Theorie, dann l&ouml;se die &Uuml;bungen (tippe deine Antwort, dann &bdquo;L&ouml;sung&ldquo;).</p>",
      theory:
        "<h3>&Uuml;berblick &uuml;ber die Zeiten und Strukturen</h3>" +
        "<p><b>1. Pr&eacute;sent (Gegenwart):</b> regelm&auml;&szlig;ige Verben auf <i>-er</i>: je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent.</p>" +
        "<p><b>2. Pass&eacute; compos&eacute; (abgeschlossene Vergangenheit):</b> <i>avoir</i> oder <i>&ecirc;tre</i> + Partizip. Mit <i>&ecirc;tre</i> stehen Bewegungsverben (aller, venir, partir&hellip;) und reflexive Verben; dann <b>accord</b> mit dem Subjekt: &laquo;&nbsp;elle est all<b>&eacute;e</b>&nbsp;&raquo;.</p>" +
        "<p><b>3. Imparfait (Beschreibung/Gewohnheit in der Vergangenheit):</b> Stamm der <i>nous</i>-Form + Endungen <i>-ais, -ais, -ait, -ions, -iez, -aient</i>. Verwendung: &bdquo;was war&ldquo;, &bdquo;was man immer tat&ldquo;.</p>" +
        "<p><b>4. Futur simple (Zukunft):</b> Infinitiv + <i>-ai, -as, -a, -ons, -ez, -ont</i> (je parler<b>ai</b>). Unregelm&auml;&szlig;ig: &ecirc;tre&rarr;ser-, avoir&rarr;aur-, aller&rarr;ir-, faire&rarr;fer-.</p>" +
        "<p><b>5. Conditionnel I (W&uuml;rde-Form / H&ouml;flichkeit):</b> Futur-Stamm + Imparfait-Endungen (je voudr<b>ais</b>, j&rsquo;aimer<b>ais</b>). <b>Conditionnel II (Vergangenheit):</b> conditionnel von avoir/&ecirc;tre + Partizip (j&rsquo;aurais fait).</p>" +
        "<p><b>6. Subjonctif (Basis):</b> nach &laquo;&nbsp;il faut que&nbsp;&raquo;, &laquo;&nbsp;je veux que&nbsp;&raquo;, &laquo;&nbsp;bien que&nbsp;&raquo;: &laquo;&nbsp;Il faut que tu <b>fasses</b> tes devoirs.&nbsp;&raquo;</p>" +
        "<p><b>7. Pronomen:</b> direktes Objekt <i>le/la/les</i>, indirektes Objekt <i>lui/leur</i>, &laquo;&nbsp;y&nbsp;&raquo; (Ort), &laquo;&nbsp;en&nbsp;&raquo; (Menge/de&hellip;). Stellung: <b>vor</b> dem Verb (&laquo;&nbsp;Je <b>le</b> vois.&nbsp;&raquo;).</p>" +
        "<p><b>8. Verneinung (n&eacute;gation):</b> <i>ne&hellip;pas</i>, <i>ne&hellip;plus</i> (nicht mehr), <i>ne&hellip;jamais</i> (nie), <i>ne&hellip;rien</i> (nichts), <i>ne&hellip;personne</i> (niemand). Im pass&eacute; compos&eacute;: &laquo;&nbsp;Je n&rsquo;ai <b>pas</b> mang&eacute;.&nbsp;&raquo;</p>" +
        "<p><b>9. Accord (Angleichung):</b> Adjektive richten sich nach Genus/Numerus: &laquo;&nbsp;un grand gar&ccedil;on / une grand<b>e</b> fille / des grand<b>es</b> filles&nbsp;&raquo;.</p>",
      grammatik: {
        title: "Grammatik-&Uuml;bungen (mit L&ouml;sung)",
        theory: "<p>Setze die richtige Form ein. Achte genau auf die geforderte Zeit bzw. Struktur (sie steht in Klammern).</p>",
        items: [
          { q: "<b>Pr&eacute;sent:</b> Nous (parler) ____ fran&ccedil;ais en classe.", a: "parlons" },
          { q: "<b>Pr&eacute;sent:</b> Elle (finir) ____ ses devoirs.", a: "finit" },
          { q: "<b>Pass&eacute; compos&eacute;:</b> Hier, j&rsquo; (manger) ____ une pizza. (avoir)", a: "ai mang&eacute;" },
          { q: "<b>Pass&eacute; compos&eacute; (&ecirc;tre + accord):</b> Marie (aller) ____ au cin&eacute;ma.", a: "est all&eacute;e" },
          { q: "<b>Imparfait:</b> Quand j&rsquo;&eacute;tais petit, je (jouer) ____ souvent dehors.", a: "jouais" },
          { q: "<b>Imparfait:</b> Il (faire) ____ beau ce jour-l&agrave;.", a: "faisait" },
          { q: "<b>Futur simple:</b> Demain, nous (visiter) ____ le mus&eacute;e.", a: "visiterons" },
          { q: "<b>Futur simple (irr&eacute;gulier):</b> L&rsquo;ann&eacute;e prochaine, je (&ecirc;tre) ____ en troisi&egrave;me.", a: "serai" },
          { q: "<b>Conditionnel I:</b> Je (vouloir) ____ un caf&eacute;, s&rsquo;il vous pla&icirc;t.", a: "voudrais" },
          { q: "<b>Conditionnel II:</b> Si tu avais r&eacute;vis&eacute;, tu (r&eacute;ussir) ____ l&rsquo;examen.", a: "aurais r&eacute;ussi" },
          { q: "<b>Subjonctif:</b> Il faut que tu (faire) ____ tes devoirs.", a: "fasses" },
          { q: "<b>Pronom (COD):</b> Tu vois le film&nbsp;? &ndash; Oui, je ____ vois. (le film &rarr; ?)", a: "le" },
          { q: "<b>Pronom (COI):</b> Tu parles &agrave; tes amis&nbsp;? &ndash; Oui, je ____ parle. (&agrave; mes amis &rarr; ?)", a: "leur" },
          { q: "<b>N&eacute;gation:</b> Verneine: &laquo;&nbsp;Je mange de la viande.&nbsp;&raquo; (ne&hellip;plus)", a: "Je ne mange plus de viande." },
          { q: "<b>Accord:</b> Setze das Adjektiv &laquo;&nbsp;blanc&nbsp;&raquo; richtig ein: une voiture ____ (blanc / fem. sing.).", a: "blanche (weiblich von &laquo;&nbsp;blanc&nbsp;&raquo;: &laquo;&nbsp;une voiture blanche&nbsp;&raquo;)" }
        ]
      },
      exercises: [
        { id: "f-gr-01", area: "grammatik", difficulty: 1,
          prompt: "Bilde das <b>pass&eacute; compos&eacute;</b> von &laquo;&nbsp;aller&nbsp;&raquo; f&uuml;r &laquo;&nbsp;elles&nbsp;&raquo; und erkl&auml;re den <i>accord</i>.",
          solutionSteps: [
            "&laquo;&nbsp;aller&nbsp;&raquo; bildet das pass&eacute; compos&eacute; mit &laquo;&nbsp;&ecirc;tre&nbsp;&raquo;.",
            "Bei &laquo;&nbsp;&ecirc;tre&nbsp;&raquo; richtet sich das Partizip nach dem Subjekt (weiblich Plural &rarr; +es)."
          ],
          answer: "&laquo;&nbsp;elles sont all<b>&eacute;es</b>&nbsp;&raquo;. Da das Hilfsverb &laquo;&nbsp;&ecirc;tre&nbsp;&raquo; ist, wird das Partizip an das Subjekt angeglichen: weiblich + Plural = &laquo;&nbsp;all&eacute;es&nbsp;&raquo;." },

        { id: "f-gr-02", area: "grammatik", difficulty: 2,
          prompt: "Wann benutzt man <b>imparfait</b> und wann <b>pass&eacute; compos&eacute;</b>? Erkl&auml;re den Unterschied an einem Beispiel.",
          solutionSteps: [
            "Imparfait: Beschreibung, Hintergrund, Gewohnheit (was war / was man immer tat).",
            "Pass&eacute; compos&eacute;: einmalige, abgeschlossene Handlung (was geschah dann)."
          ],
          answer: "Imparfait = Hintergrund/Gewohnheit, pass&eacute; compos&eacute; = einmalige Handlung. Beispiel: &laquo;&nbsp;Je <b>regardais</b> la t&eacute;l&eacute; (imparfait) quand le t&eacute;l&eacute;phone <b>a sonn&eacute;</b> (pass&eacute; compos&eacute;).&nbsp;&raquo; &ndash; Ich sah fern (Hintergrund), als das Telefon klingelte (pl&ouml;tzliche Handlung)." },

        { id: "f-gr-03", area: "grammatik", difficulty: 2,
          prompt: "Verneine den Satz mit <b>ne&hellip;jamais</b>: &laquo;&nbsp;Il arrive &agrave; l&rsquo;heure.&nbsp;&raquo;",
          solutionSteps: [
            "Die Verneinungsklammer steht um das konjugierte Verb.",
            "&laquo;&nbsp;ne&nbsp;&raquo; vor das Verb, &laquo;&nbsp;jamais&nbsp;&raquo; danach."
          ],
          answer: "&laquo;&nbsp;Il n&rsquo;arrive <b>jamais</b> &agrave; l&rsquo;heure.&nbsp;&raquo; (Er kommt nie p&uuml;nktlich.)" }
      ]
    }

  ]
});
