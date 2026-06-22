/* ============================================================
   FACH: Mathematik II  ·  Abschlusspr&uuml;fung 29.06.2026
   Realschule Mainburg (Bayern) · Wahlpflichtf&auml;chergruppe IIIa
   Klassisches <script>, KEIN ES-Modul. Ruft genau einmal APP.register auf.
   Inhalte aus dem verifizierten Seed (Max_Mathe_Trainer.html),
   aus dem Italienischen ins Deutsche &uuml;bersetzt. Mathematik unver&auml;ndert.
   ============================================================ */
APP.register({
  id: "mathematik",
  name: "Mathematik II",
  examISO: "2026-06-29",
  examInfo: "Teil A (taschenrechnerfrei, nur Formelsammlung) + Teil B (mit Taschenrechner) · Mo 29.06.2026, 08:30",
  examMinutes: 170,
  note: "Hinweis: Originale &Uuml;bungsinhalte im Stil der bayerischen Realschulpr&uuml;fung (ISB) 2020&ndash;2025. Alle L&ouml;sungen wurden von Hand gepr&uuml;ft. Schwerpunkt: <b>Raumgeometrie</b> (Rotationsk&ouml;rper) &ndash; das ist der gewichtigste Teil.",
  lernplan: [
    { dateISO: "2026-06-08", areaId: "funktionen", focus: "Parabeln: Scheitelpunkt- &amp; Normalform und der Scheitelpunkt." },
    { dateISO: "2026-06-09", areaId: "funktionen", focus: "Nullstellen &amp; Mitternachtsformel &ndash; auch taschenrechnerfrei." },
    { dateISO: "2026-06-10", areaId: "funktionen", focus: "Exponentialfunktionen: Wachstum und Zerfall, %-Satz pro Jahr." },
    { dateISO: "2026-06-12", areaId: "geometrie", focus: "Sinussatz &amp; Kosinussatz an beliebigen Dreiecken." },
    { dateISO: "2026-06-13", areaId: "geometrie", focus: "Kreissektor, Kreisbogen und Umfang." },
    { dateISO: "2026-06-15", areaId: "raum", focus: "Prisma &amp; Zylinder: Volumen und Oberfl&auml;che." },
    { dateISO: "2026-06-16", areaId: "raum", focus: "Pyramide gr&uuml;ndlich: Volumen und Oberfl&auml;che mit den H&ouml;hen." },
    { dateISO: "2026-06-17", areaId: "raum", focus: "Kegel &amp; Kugel." },
    { dateISO: "2026-06-18", areaId: "raum", focus: "Rotationsk&ouml;rper &#9888;: in Zylinder/Kegel/Kugel zerlegen." },
    { dateISO: "2026-06-19", areaId: "raum", focus: "Pyramide mit x &ndash; V(x), Extremwert (maximales Volumen)." },
    { dateISO: "2026-06-20", areaId: "raum", focus: "Schr&auml;gbild &amp; zentrische Streckung (k&sup2; / k&sup3;)." },
    { dateISO: "2026-06-22", areaId: "daten", focus: "Baumdiagramm &amp; Pfadregel: Wahrscheinlichkeit mit B&auml;umen." },
    { dateISO: "2026-06-23", areaId: "daten", focus: "Kombinatorik &amp; &bdquo;mindestens&ldquo; (Gegenereignis)." },
    { dateISO: "2026-06-28", areaId: "funktionen", focus: "Leichte Wiederholung + Formelsammlung. Ausruhen." }
  ],
  areas: [
    /* ================= FUNKTIONEN ================= */
    {
      id: "funktionen",
      title: "Funktionen",
      intro: "<p class=\"lead\">Zwei Funktionsfamilien: die <b>Parabeln</b> (Grad 2) und die <b>Exponentialfunktionen</b> (Wachstum/Zerfall).</p>",
      theory: "<h3>Parabel &ndash; die drei Formen</h3>" +
        "<p><b>Normalform:</b> y = a&middot;x&sup2; + b&middot;x + c</p>" +
        "<p><b>Scheitelpunktform</b> (Scheitel S(x&#8320;|y&#8320;)): y = a&middot;(x &minus; x&#8320;)&sup2; + y&#8320;</p>" +
        "<p>Der <b>Scheitelpunkt</b> ist der h&ouml;chste bzw. tiefste Punkt. Von der Scheitelpunktform zur Normalform: das Quadrat ausmultiplizieren.</p>" +
        "<p><b>Mitternachtsformel</b> (Nullstellen von a&middot;x&sup2;+b&middot;x+c=0):<br>x&#8321;,&#8322; = (&minus;b &plusmn; &radic;(b&sup2; &minus; 4ac)) / (2a)</p>" +
        "<h3>Exponentialfunktion</h3>" +
        "<p>y = a &middot; q<sup>x</sup> &nbsp;&ndash;&nbsp; q&gt;1 &rarr; <b>Wachstum</b>, 0&lt;q&lt;1 &rarr; <b>Zerfall</b>.</p>" +
        "<p>J&auml;hrliche &Auml;nderung in %: (q &minus; 1)&middot;100. Z.&nbsp;B. q=1,1 &rarr; +10&nbsp;% pro Jahr; q=0,97 &rarr; &minus;3&nbsp;% pro Jahr.</p>",
      figures: [
        "<svg class=\"fig\" viewBox=\"0 0 360 280\" style=\"max-width:360px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><line x1=\"26\" y1=\"140\" x2=\"334\" y2=\"140\" stroke=\"#9aa7a0\" stroke-width=\"1.4\"/><line x1=\"212\" y1=\"26\" x2=\"212\" y2=\"254\" stroke=\"#9aa7a0\" stroke-width=\"1.4\"/><polyline fill=\"none\" stroke=\"#13565b\" stroke-width=\"2.4\" points=\"26,159 60,121 95,90 130,67 160,54 173,52 195,57 230,79 265,108 300,146 334,191\"/><circle r=\"4\" fill=\"#e7a614\" stroke=\"#c4880a\" cx=\"173\" cy=\"52\"/><text x=\"180\" y=\"46\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">S(&minus;1|3)</text></svg>"
      ],
      examples: [
        {
          title: "Musterl&ouml;sung &ndash; von der Scheitelpunktform zur Normalform",
          html: "<p>Die Parabel p hat den Scheitel <b>S(&minus;2 | 1,5)</b> und die Form y = &minus;0,5&middot;x&sup2; + b&middot;x + c. Bestimme b und c.</p>" +
            "<ol>" +
            "<li>Scheitelpunktform mit a = &minus;0,5 und Scheitel S(&minus;2|1,5):<br><i>y = &minus;0,5&middot;(x + 2)&sup2; + 1,5</i></li>" +
            "<li>Quadrat ausmultiplizieren: (x+2)&sup2; = x&sup2; + 4x + 4:<br><i>y = &minus;0,5&middot;(x&sup2; + 4x + 4) + 1,5</i></li>" +
            "<li>&minus;0,5 ausmultiplizieren und konstante Terme zusammenfassen:<br><i>y = &minus;0,5x&sup2; &minus; 2x &minus; 2 + 1,5 = &minus;0,5x&sup2; &minus; 2x &minus; 0,5</i></li>" +
            "</ol>" +
            "<p><b>Ergebnis:</b> b = &minus;2 und c = &minus;0,5</p>"
        }
      ],
      exercises: [
        {
          id: "m-fkt-01", area: "funktionen", difficulty: 1,
          prompt: "<b>Nullstellen &middot; Teil A (taschenrechnerfrei).</b> Bestimme die Nullstellen von &nbsp; 0,5&middot;x&sup2; + x &minus; 4 = 0.",
          solutionSteps: [
            "Alles mit 2 multiplizieren, um den Bruch zu beseitigen: <i>x&sup2; + 2x &minus; 8 = 0</i>",
            "Faktorisieren (zwei Zahlen mit Produkt &minus;8 und Summe +2 &rarr; +4 und &minus;2): <i>(x + 4)(x &minus; 2) = 0</i>",
            "Ein Produkt ist 0, wenn ein Faktor 0 ist: <i>x + 4 = 0 oder x &minus; 2 = 0</i>"
          ],
          answer: "x&#8321; = &minus;4 ; x&#8322; = 2"
        },
        {
          id: "m-fkt-02", area: "funktionen", difficulty: 1,
          prompt: "<b>Scheitelpunktform.</b> Schreibe y = &minus;0,25&middot;(x + 1)&sup2; + 3 in <b>Normalform</b> und gib den Scheitelpunkt an.",
          solutionSteps: [
            "(x+1)&sup2; = x&sup2; + 2x + 1 ausmultiplizieren: <i>y = &minus;0,25&middot;(x&sup2; + 2x + 1) + 3</i>",
            "Ausmultiplizieren und zusammenfassen: <i>y = &minus;0,25x&sup2; &minus; 0,5x &minus; 0,25 + 3</i>"
          ],
          answer: "y = &minus;0,25x&sup2; &minus; 0,5x + 2,75 ; Scheitel S(&minus;1 | 3)"
        },
        {
          id: "m-fkt-03", area: "funktionen", difficulty: 2,
          prompt: "<b>Exponentialfunktion &middot; Zerfall.</b> Ein Elektroauto verliert an Wert: y = 450 &middot; 0,97<sup>x</sup> (y in 100&nbsp;&euro;, x in Jahren). Um wie viel % sinkt der Wert pro Jahr? Wie viel ist es nach 5 Jahren wert?",
          solutionSteps: [
            "Der Faktor q = 0,97. &Auml;nderung = (q&minus;1)&middot;100: <i>(0,97 &minus; 1)&middot;100 = &minus;3&nbsp;% &rarr; &minus;3&nbsp;% pro Jahr</i>",
            "Nach 5 Jahren: x = 5: <i>y = 450 &middot; 0,97&#8309; = 450 &middot; 0,8587 &asymp; 386,4</i>"
          ],
          answer: "&minus;3&nbsp;% pro Jahr ; nach 5 Jahren &asymp; 386 (also &asymp; 38.640&nbsp;&euro;)"
        },
        {
          id: "m-fkt-04", area: "funktionen", difficulty: 2,
          prompt: "<b>Exponentialfunktion &middot; Wachstum.</b> Die Kegelrobben wachsen: y = 3300 &middot; 1,1<sup>x</sup> ab 2011 (x in Jahren). In welchem Jahr &uuml;berschreiten sie <b>20.000</b> Robben?",
          solutionSteps: [
            "Ungleichung aufstellen: <i>3300 &middot; 1,1&#739; &gt; 20000</i>",
            "Durch 3300 teilen: <i>1,1&#739; &gt; 6,0606</i>",
            "Logarithmus: x &gt; ln(6,0606) / ln(1,1): <i>x &gt; 1,8018 / 0,0953 &asymp; 18,9</i>",
            "Es braucht ein ganzes Jahr &rarr; x = 19. Jahr = 2011 + 19 = 2030"
          ],
          answer: "Ab 2030 (x = 19)"
        },
        {
          id: "m-fkt-05", area: "funktionen", difficulty: 2,
          prompt: "<b>Exponentialfunktion &middot; Staatsverschuldung.</b> Schulden: y = 1600 &middot; 1,03<sup>x</sup> (Milliarden &euro;, ab 2025). Um wie viel % w&auml;chst sie pro Jahr? Wie hoch ist sie am 1.1.2045?",
          solutionSteps: [
            "q = 1,03 &rarr; &Auml;nderung (q&minus;1)&middot;100: <i>(1,03 &minus; 1)&middot;100 = +3&nbsp;% pro Jahr</i>",
            "1.1.2045 &rarr; x = 20: <i>y = 1600 &middot; 1,03&sup2;&#8304; = 1600 &middot; 1,8061</i>"
          ],
          answer: "+3&nbsp;% pro Jahr ; &asymp; 2890 Milliarden &euro;"
        }
      ]
    },

    /* ================= GEOMETRIE & TRIGONOMETRIE ================= */
    {
      id: "geometrie",
      title: "Geometrie &amp; Trigonometrie",
      intro: "<p class=\"lead\">Berechnungen an beliebigen Dreiecken (<b>Sinussatz/Kosinussatz</b>), Kreissektoren und besonderen Vierecken.</p>",
      theory: "<h3>Beliebiges Dreieck</h3>" +
        "<p><b>Sinussatz:</b> a / sin&nbsp;&alpha; = b / sin&nbsp;&beta; = c / sin&nbsp;&gamma;</p>" +
        "<p><b>Kosinussatz:</b> a&sup2; = b&sup2; + c&sup2; &minus; 2&middot;b&middot;c&middot;cos&nbsp;&alpha;</p>" +
        "<p>Kosinussatz, wenn du 2 Seiten + den eingeschlossenen Winkel kennst, oder 3 Seiten. Sinussatz, wenn du eine Seite mit ihrem Gegenwinkel hast.</p>" +
        "<p><b>Fl&auml;che:</b> A = &frac12;&middot;a&middot;b&middot;sin&nbsp;&gamma;</p>" +
        "<h3>Kreis &ndash; Sektor und Bogen</h3>" +
        "<p>Bogen <b>(Kreisbogen)</b> b = 2&middot;&pi;&middot;r&middot;(&alpha;/360&deg;) &nbsp;&middot;&nbsp; Sektor <b>(Kreissektor)</b> A = &pi;&middot;r&sup2;&middot;(&alpha;/360&deg;)</p>" +
        "<h3>Besondere Vierecke</h3>" +
        "<p><b>Trapez:</b> A = ((a + c)/2)&middot;h. <b>Drachenviereck</b>, <b>Raute</b>: A = (e&middot;f)/2 (Diagonalen).</p>",
      figures: [
        "<svg class=\"fig\" viewBox=\"0 0 300 220\" style=\"max-width:300px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><polygon fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\" points=\"40,180 260,180 180,50\"/><text x=\"30\" y=\"196\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">A</text><text x=\"262\" y=\"196\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">B</text><text x=\"184\" y=\"44\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">C</text><text x=\"150\" y=\"196\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">c</text><text x=\"232\" y=\"118\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">a</text><text x=\"98\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">b</text></svg>",
        "<svg class=\"fig\" viewBox=\"0 0 300 200\" style=\"max-width:300px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><polygon fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\" points=\"30,170 270,170 200,50 100,50\"/><line x1=\"100\" y1=\"50\" x2=\"100\" y2=\"170\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><text x=\"22\" y=\"186\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">A</text><text x=\"272\" y=\"186\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">B</text><text x=\"205\" y=\"46\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">C</text><text x=\"86\" y=\"46\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">D</text><text x=\"78\" y=\"115\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">h</text></svg>"
      ],
      examples: [
        {
          title: "Musterl&ouml;sung &ndash; Kosinussatz + Sinussatz",
          html: "<p>In einem Dreieck: b = 10&nbsp;cm, c = 8&nbsp;cm, Winkel &alpha; = 70&deg; (zwischen b und c). Berechne die Seite a und den Winkel &beta;.</p>" +
            "<ol>" +
            "<li>Zwei Seiten und der eingeschlossene Winkel &rarr; Kosinussatz: <i>a&sup2; = 10&sup2; + 8&sup2; &minus; 2&middot;10&middot;8&middot;cos70&deg;</i></li>" +
            "<li>Berechnen (cos70&deg; &asymp; 0,342): <i>a&sup2; = 100 + 64 &minus; 160&middot;0,342 = 164 &minus; 54,72 = 109,28</i></li>" +
            "<li>Wurzel ziehen: <i>a = &radic;109,28 &asymp; 10,45&nbsp;cm</i></li>" +
            "<li>Jetzt Sinussatz f&uuml;r &beta;: <i>sin&nbsp;&beta; = b&middot;sin&nbsp;&alpha; / a = 10&middot;0,9397 / 10,45 &asymp; 0,8992</i></li>" +
            "<li>Arkussinus: <i>&beta; = sin&#8315;&sup1;(0,8992) &asymp; 64,0&deg;</i></li>" +
            "</ol>" +
            "<p><b>Ergebnis:</b> a &asymp; 10,45&nbsp;cm ; &beta; &asymp; 64,0&deg;</p>"
        }
      ],
      exercises: [
        {
          id: "m-geo-01", area: "geometrie", difficulty: 3,
          prompt: "<b>Gleichschenkliges Trapez.</b> Trapez ABCD: |AB| = 11&nbsp;cm, |AE| = 4&nbsp;cm (Projektion der Schenkelseite), Winkel BAD = 60&deg;, H&ouml;he DE. Berechne DE, die kurze Seite DC und die Fl&auml;che A.",
          solutionSteps: [
            "Im rechtwinkligen Dreieck ADE ist DE die Gegenkathete zu 60&deg;: <i>DE = AE&middot;tan60&deg; = 4&middot;&radic;3 &asymp; 6,93&nbsp;cm</i>",
            "Die kurze Seite = lange Grundseite minus zwei gleiche Projektionen: <i>DC = AB &minus; 2&middot;AE = 11 &minus; 8 = 3&nbsp;cm</i>",
            "Trapezfl&auml;che = (Summe der Grundseiten)/2 &middot; H&ouml;he: <i>A = (11 + 3)/2 &middot; 4&radic;3 = 7&middot;4&radic;3 = 28&radic;3</i>"
          ],
          answer: "DE = 4&radic;3 &asymp; 6,93&nbsp;cm ; DC = 3&nbsp;cm ; A = 28&radic;3 &asymp; 48,50&nbsp;cm&sup2;"
        },
        {
          id: "m-geo-02", area: "geometrie", difficulty: 2,
          prompt: "<b>Kreissektor.</b> Kreissektor mit Radius r = 4&nbsp;cm und Mittelpunktswinkel &alpha; = 100&deg;. Berechne den Bogen (<b>Kreisbogen</b>) und die Fl&auml;che des Sektors.",
          solutionSteps: [
            "Bogen = Umfang &middot; Winkelanteil: <i>b = 2&middot;&pi;&middot;4&middot;(100/360) = 8&pi;&middot;0,2778 &asymp; 6,98&nbsp;cm</i>",
            "Sektorfl&auml;che = Kreisfl&auml;che &middot; Anteil: <i>A = &pi;&middot;4&sup2;&middot;(100/360) = 16&pi;&middot;0,2778 &asymp; 13,96&nbsp;cm&sup2;</i>"
          ],
          answer: "Bogen &asymp; 6,98&nbsp;cm ; A_Sektor &asymp; 13,96&nbsp;cm&sup2;"
        },
        {
          id: "m-geo-03", area: "geometrie", difficulty: 3,
          prompt: "<b>Kosinussatz &middot; 3 Seiten.</b> Dreieck mit den Seiten a = 7, b = 9, c = 6. Berechne den Winkel &alpha; (gegen&uuml;ber a).",
          solutionSteps: [
            "Kosinussatz nach cos&nbsp;&alpha; aufgel&ouml;st: <i>cos&nbsp;&alpha; = (b&sup2; + c&sup2; &minus; a&sup2;) / (2&middot;b&middot;c)</i>",
            "Einsetzen: <i>cos&nbsp;&alpha; = (81 + 36 &minus; 49)/(2&middot;9&middot;6) = 68/108 = 0,6296</i>",
            "Arkuskosinus: <i>&alpha; = cos&#8315;&sup1;(0,6296) &asymp; 50,96&deg;</i>"
          ],
          answer: "&alpha; &asymp; 50,96&deg;"
        },
        {
          id: "m-geo-04", area: "geometrie", difficulty: 2,
          prompt: "<b>Halbkreis.</b> Halbkreis mit Radius |AM| = 4&nbsp;cm. Berechne den vollst&auml;ndigen Bogen BA (halber Umfang) und den <b>Umfang</b> der Figur Halbkreis = Bogen + Durchmesser.",
          solutionSteps: [
            "Halber Umfang = H&auml;lfte von 2&pi;r: <i>Bogen = &pi;&middot;r = &pi;&middot;4 &asymp; 12,57&nbsp;cm</i>",
            "Durchmesser = 2r: <i>d = 2&middot;4 = 8&nbsp;cm</i>",
            "Umfang = Bogen + Durchmesser: <i>u = 12,57 + 8 = 20,57&nbsp;cm</i>"
          ],
          answer: "Bogen &asymp; 12,57&nbsp;cm ; u &asymp; 20,57&nbsp;cm"
        }
      ]
    },

    /* ================= RAUMGEOMETRIE ================= */
    {
      id: "raum",
      title: "Raumgeometrie",
      intro: "<p class=\"lead\">Die K&ouml;rper &ndash; der wichtigste Teil. Das ist der Block mit dem gr&ouml;&szlig;ten Gewicht (die gro&szlig;en B-Aufgaben). Lerne diese Formeln aus der <b>Formelsammlung</b> auswendig.</p>",
      theory: "<h3>Prisma &amp; Zylinder</h3>" +
        "<p><b>Prisma:</b> V = G&middot;h &nbsp;&middot;&nbsp; O = 2&middot;G + M (M = u&middot;h)</p>" +
        "<p><b>Zylinder:</b> V = &pi;&middot;r&sup2;&middot;h &nbsp;&middot;&nbsp; O = 2&middot;&pi;&middot;r&middot;(r + h)</p>" +
        "<h3>Pyramide</h3>" +
        "<p><b>Pyramide:</b> V = &frac13;&middot;G&middot;h &nbsp;&middot;&nbsp; O = G + M</p>" +
        "<p>F&uuml;r O braucht man die H&ouml;hen der Seitenfl&auml;chen (<b>h&#8328; = H&ouml;he der Seitenfl&auml;che</b>), gefunden mit Pythagoras. Apothema bei quadratischer Grundfl&auml;che: h&#8328; = &radic;(h&sup2; + (a/2)&sup2;).</p>" +
        "<h3>Kegel &amp; Kugel</h3>" +
        "<p><b>Kegel:</b> V = &frac13;&middot;&pi;&middot;r&sup2;&middot;h &nbsp;&middot;&nbsp; O = &pi;&middot;r&middot;(r + s) &nbsp;&middot;&nbsp; s = &radic;(r&sup2; + h&sup2;)</p>" +
        "<p><b>Kugel:</b> V = &frac43;&middot;&pi;&middot;r&sup3; &nbsp;&middot;&nbsp; O = 4&middot;&pi;&middot;r&sup2;</p>" +
        "<h3>Rotationsk&ouml;rper &amp; mehr</h3>" +
        "<p>Ein <b>Rotationsk&ouml;rper</b> entsteht, indem man eine Figur um eine Achse dreht: zerlege ihn in Zylinder + Kegel + (halbe) Kugel und addiere die Volumina. <b>Zentrische Streckung</b>: skalierst du mit k, so gilt f&uuml;r Fl&auml;chen A&prime; = k&sup2;&middot;A und f&uuml;r Volumina V&prime; = k&sup3;&middot;V.</p>",
      figures: [
        "<svg class=\"fig\" viewBox=\"0 0 300 240\" style=\"max-width:300px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><polygon fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\" points=\"60,180 200,170 250,200 110,210\"/><line x1=\"155\" y1=\"40\" x2=\"60\" y2=\"180\" stroke=\"#13565b\" stroke-width=\"1.8\"/><line x1=\"155\" y1=\"40\" x2=\"200\" y2=\"170\" stroke=\"#13565b\" stroke-width=\"1.8\"/><line x1=\"155\" y1=\"40\" x2=\"250\" y2=\"200\" stroke=\"#13565b\" stroke-width=\"1.8\"/><line x1=\"155\" y1=\"40\" x2=\"110\" y2=\"210\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><line x1=\"155\" y1=\"40\" x2=\"155\" y2=\"190\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><text x=\"150\" y=\"34\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">S</text><text x=\"162\" y=\"120\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">h</text></svg>",
        "<svg class=\"fig\" viewBox=\"0 0 240 240\" style=\"max-width:240px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><ellipse cx=\"120\" cy=\"60\" rx=\"70\" ry=\"20\" fill=\"none\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><path fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\" d=\"M50 60 L50 190 A70 20 0 0 0 190 190 L190 60\"/><ellipse cx=\"120\" cy=\"60\" rx=\"70\" ry=\"20\" fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\"/><line x1=\"120\" y1=\"60\" x2=\"120\" y2=\"190\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><text x=\"124\" y=\"130\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">h</text><text x=\"150\" y=\"76\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">r</text></svg>",
        "<svg class=\"fig\" viewBox=\"0 0 260 240\" style=\"max-width:260px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><ellipse cx=\"130\" cy=\"190\" rx=\"80\" ry=\"22\" fill=\"none\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><path fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\" d=\"M130 40 L50 190 A80 22 0 0 0 210 190 Z\"/><line x1=\"130\" y1=\"40\" x2=\"130\" y2=\"190\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><line x1=\"130\" y1=\"190\" x2=\"210\" y2=\"190\" stroke=\"#46555c\" stroke-width=\"1.3\"/><text x=\"160\" y=\"118\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">s</text><text x=\"118\" y=\"120\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">h</text><text x=\"165\" y=\"206\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">r</text></svg>",
        "<svg class=\"fig\" viewBox=\"0 0 220 220\" style=\"max-width:220px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><circle cx=\"110\" cy=\"110\" r=\"80\" fill=\"rgba(19,86,91,.08)\" stroke=\"#13565b\" stroke-width=\"1.8\"/><ellipse cx=\"110\" cy=\"110\" rx=\"80\" ry=\"24\" fill=\"none\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><line x1=\"110\" y1=\"110\" x2=\"190\" y2=\"110\" stroke=\"#46555c\" stroke-width=\"1.3\"/><circle r=\"3\" fill=\"#e7a614\" cx=\"110\" cy=\"110\"/><text x=\"145\" y=\"104\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">r</text></svg>",
        "<svg class=\"fig\" viewBox=\"0 0 260 230\" style=\"max-width:260px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><path fill=\"rgba(31,42,48,.16)\" stroke=\"#46555c\" stroke-width=\"1.4\" d=\"M50 60 L130 60 L130 150 A60 60 0 0 1 10 150 Z\"/><ellipse cx=\"130\" cy=\"105\" rx=\"14\" ry=\"45\" fill=\"none\" stroke=\"#13565b\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"210\" stroke=\"#9aa7a0\" stroke-width=\"1.4\"/><text x=\"118\" y=\"30\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1f2a30\">Achse</text><text x=\"30\" y=\"54\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#1f2a30\">Zylinder + Halbkugel</text></svg>"
      ],
      examples: [
        {
          title: "Musterl&ouml;sung &ndash; Pyramide: Volumen &amp; Oberfl&auml;che",
          html: "<p>Pyramide mit quadratischer Grundfl&auml;che: Seite a = 6&nbsp;cm, H&ouml;he h = 4&nbsp;cm. Berechne das Volumen V und die Gesamtoberfl&auml;che O.</p>" +
            "<ol>" +
            "<li>Quadratische Grundfl&auml;che: G = a&sup2;: <i>G = 6&sup2; = 36&nbsp;cm&sup2;</i></li>" +
            "<li>Volumen der Pyramide: <i>V = &frac13;&middot;G&middot;h = &frac13;&middot;36&middot;4 = 48&nbsp;cm&sup3;</i></li>" +
            "<li>Apothema der Seitenfl&auml;che (Pythagoras): h&#8328; = &radic;(h&sup2; + (a/2)&sup2;): <i>h&#8328; = &radic;(4&sup2; + 3&sup2;) = &radic;25 = 5&nbsp;cm</i></li>" +
            "<li>Mantel = 4 Dreiecke: M = &frac12;&middot;Umfang&middot;h&#8328; = &frac12;&middot;(4&middot;6)&middot;5: <i>M = &frac12;&middot;24&middot;5 = 60&nbsp;cm&sup2;</i></li>" +
            "<li>Oberfl&auml;che = Grundfl&auml;che + Mantel: <i>O = G + M = 36 + 60 = 96&nbsp;cm&sup2;</i></li>" +
            "</ol>" +
            "<p><b>Ergebnis:</b> V = 48&nbsp;cm&sup3; ; O = 96&nbsp;cm&sup2;</p>"
        }
      ],
      exercises: [
        {
          id: "m-rau-01", area: "raum", difficulty: 2,
          prompt: "<b>Pyramide &middot; Volumen.</b> Pyramide mit quadratischer Grundfl&auml;che, Seite a = 8&nbsp;cm und H&ouml;he h = 9&nbsp;cm. Berechne das Volumen.",
          solutionSteps: [
            "Grundfl&auml;che: <i>G = 8&sup2; = 64&nbsp;cm&sup2;</i>",
            "Volumen: <i>V = &frac13;&middot;64&middot;9 = 192&nbsp;cm&sup3;</i>"
          ],
          answer: "V = 192&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-02", area: "raum", difficulty: 2,
          prompt: "<b>Zylinder.</b> Zylinder mit Radius r = 3&nbsp;cm und H&ouml;he h = 6&nbsp;cm. Berechne V und O.",
          solutionSteps: [
            "Volumen: <i>V = &pi;&middot;3&sup2;&middot;6 = 54&pi; &asymp; 169,65&nbsp;cm&sup3;</i>",
            "Gesamtoberfl&auml;che: <i>O = 2&pi;&middot;3&middot;(3 + 6) = 54&pi; &asymp; 169,65&nbsp;cm&sup2;</i>"
          ],
          answer: "V &asymp; 169,65&nbsp;cm&sup3; ; O &asymp; 169,65&nbsp;cm&sup2;"
        },
        {
          id: "m-rau-03", area: "raum", difficulty: 3,
          prompt: "<b>Kegel.</b> Kegel mit r = 3&nbsp;cm und h = 4&nbsp;cm. Berechne die Mantellinie s, das Volumen V und die Oberfl&auml;che O.",
          solutionSteps: [
            "Mantellinie (Pythagoras): <i>s = &radic;(3&sup2; + 4&sup2;) = &radic;25 = 5&nbsp;cm</i>",
            "Volumen: <i>V = &frac13;&middot;&pi;&middot;3&sup2;&middot;4 = 12&pi; &asymp; 37,70&nbsp;cm&sup3;</i>",
            "Oberfl&auml;che: <i>O = &pi;&middot;3&middot;(3 + 5) = 24&pi; &asymp; 75,40&nbsp;cm&sup2;</i>"
          ],
          answer: "s = 5&nbsp;cm ; V &asymp; 37,70&nbsp;cm&sup3; ; O &asymp; 75,40&nbsp;cm&sup2;"
        },
        {
          id: "m-rau-04", area: "raum", difficulty: 1,
          prompt: "<b>Kugel.</b> Kugel mit Radius r = 3&nbsp;cm. Berechne V und O.",
          solutionSteps: [
            "Volumen: <i>V = &frac43;&middot;&pi;&middot;3&sup3; = 36&pi; &asymp; 113,10&nbsp;cm&sup3;</i>",
            "Oberfl&auml;che: <i>O = 4&middot;&pi;&middot;3&sup2; = 36&pi; &asymp; 113,10&nbsp;cm&sup2;</i>"
          ],
          answer: "V &asymp; 113,10&nbsp;cm&sup3; ; O &asymp; 113,10&nbsp;cm&sup2;"
        },
        {
          id: "m-rau-05", area: "raum", difficulty: 3,
          prompt: "<b>Rotationsk&ouml;rper &middot; zusammengesetzt.</b> Ein K&ouml;rper entsteht durch Drehung: ein Zylinder (r = 3, h = 6) mit einem Kegel (r = 3, h = 4) darauf. Berechne das Gesamtvolumen.",
          solutionSteps: [
            "Volumen des Zylinders: <i>V&#8321; = &pi;&middot;3&sup2;&middot;6 = 54&pi; &asymp; 169,65&nbsp;cm&sup3;</i>",
            "Volumen des Kegels: <i>V&#8322; = &frac13;&middot;&pi;&middot;3&sup2;&middot;4 = 12&pi; &asymp; 37,70&nbsp;cm&sup3;</i>",
            "Addieren: <i>V = 54&pi; + 12&pi; = 66&pi; &asymp; 207,35&nbsp;cm&sup3;</i>"
          ],
          answer: "V &asymp; 207,35&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-06", area: "raum", difficulty: 2,
          prompt: "<b>Kegel durch Rotation (wie Pr&uuml;fung 2020).</b> Dreht man ein rechtwinkliges Dreieck um eine Kathete, entsteht ein Kegel mit Volumen 134&nbsp;cm&sup3; und Radius r = 4&nbsp;cm. Berechne die H&ouml;he (Kathete AE).",
          solutionSteps: [
            "Kegelformel nach h aufgel&ouml;st: <i>134 = &frac13;&middot;&pi;&middot;4&sup2;&middot;h</i>",
            "h isolieren: <i>h = 134&middot;3 / (16&middot;&pi;) = 402 / 50,27 &asymp; 8,0</i>"
          ],
          answer: "AE &asymp; 8,00&nbsp;cm"
        },
        {
          id: "m-rau-07", area: "raum", difficulty: 3,
          prompt: "<b>Rotationsk&ouml;rper &middot; Sanduhr.</b> Eine Sanduhr entsteht durch Drehung zweier Dreiecke: es sind <b>zwei gleiche Kegel, an der Spitze verbunden</b>, jeder mit r = 3&nbsp;cm und h = 5&nbsp;cm. Berechne das Gesamtvolumen.",
          solutionSteps: [
            "Volumen eines Kegels: <i>V_Kegel = &frac13;&middot;&pi;&middot;3&sup2;&middot;5 = 15&pi; &asymp; 47,12&nbsp;cm&sup3;</i>",
            "Es sind zwei gleiche Kegel: <i>V = 2&middot;15&pi; = 30&pi;</i>"
          ],
          answer: "V = 30&pi; &asymp; 94,25&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-08", area: "raum", difficulty: 3,
          prompt: "<b>Rotationsk&ouml;rper &middot; Spielzeugkreisel.</b> Ein Kreisel = <b>Zylinder</b> (r = 2&nbsp;cm, h = 3&nbsp;cm) mit einem <b>Kegel</b> (r = 2&nbsp;cm, h = 6&nbsp;cm) darauf. Berechne das Volumen.",
          solutionSteps: [
            "Zylinder: <i>V&#8321; = &pi;&middot;2&sup2;&middot;3 = 12&pi; &asymp; 37,70&nbsp;cm&sup3;</i>",
            "Kegel: <i>V&#8322; = &frac13;&middot;&pi;&middot;2&sup2;&middot;6 = 8&pi; &asymp; 25,13&nbsp;cm&sup3;</i>",
            "Addieren: <i>V = 12&pi; + 8&pi; = 20&pi;</i>"
          ],
          answer: "V = 20&pi; &asymp; 62,83&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-09", area: "raum", difficulty: 2,
          prompt: "<b>Rotationsk&ouml;rper &middot; Pflanzschale (Halbkugel).</b> Eine Schale ist eine <b>Halbkugel</b> mit Radius r = 6&nbsp;cm. Berechne das Volumen.",
          solutionSteps: [
            "Volumen der ganzen Kugel: <i>V_Kugel = &frac43;&middot;&pi;&middot;6&sup3; = 288&pi;</i>",
            "H&auml;lfte: <i>V = &frac12;&middot;288&pi; = 144&pi;</i>"
          ],
          answer: "V = 144&pi; &asymp; 452,39&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-10", area: "raum", difficulty: 3,
          prompt: "<b>Rotationsk&ouml;rper &middot; Zylinder + Halbkugel.</b> Ein K&ouml;rper ist ein <b>Zylinder</b> (r = 3&nbsp;cm, h = 4&nbsp;cm) mit einer <b>Halbkugel</b> (r = 3&nbsp;cm) darauf. Berechne das Gesamtvolumen.",
          solutionSteps: [
            "Zylinder: <i>V&#8321; = &pi;&middot;3&sup2;&middot;4 = 36&pi; &asymp; 113,10&nbsp;cm&sup3;</i>",
            "Halbkugel = halbe Kugel: <i>V&#8322; = &frac12;&middot;&frac43;&middot;&pi;&middot;3&sup3; = 18&pi; &asymp; 56,55&nbsp;cm&sup3;</i>",
            "Addieren: <i>V = 36&pi; + 18&pi; = 54&pi;</i>"
          ],
          answer: "V = 54&pi; &asymp; 169,65&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-11", area: "raum", difficulty: 3,
          prompt: "<b>Pyramide mit x &middot; Extremwert.</b> Das Volumen einer Pyramide h&auml;ngt von x ab: V(x) = &minus;0,25&middot;x&sup2; + 3&middot;x &nbsp;(0 &lt; x &lt; 12, in cm&sup3;). F&uuml;r welches x ist das Volumen <b>maximal</b> (maximales Volumen)? Wie gro&szlig; ist es?",
          solutionSteps: [
            "V(x) ist eine nach unten ge&ouml;ffnete Parabel (a&lt;0): das Maximum liegt im Scheitel: <i>x = &minus;b/(2a) = &minus;3 / (2&middot;(&minus;0,25))</i>",
            "Berechnen: <i>x = &minus;3 / (&minus;0,5) = 6</i>",
            "x = 6 in V(x) einsetzen: <i>V(6) = &minus;0,25&middot;36 + 3&middot;6 = &minus;9 + 18 = 9</i>"
          ],
          answer: "Maximum bei x = 6&nbsp;cm ; V_max = 9&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-12", area: "raum", difficulty: 3,
          prompt: "<b>Pyramide mit x &middot; Extremwert.</b> F&uuml;r die Punkte P&#8345; ist das Volumen V(x) = &minus;2&middot;x&sup2; + 12&middot;x &nbsp;(0 &lt; x &lt; 6). Bestimme das <b>maximale Volumen</b> und den Wert von x.",
          solutionSteps: [
            "Scheitel der Parabel (Maximum): <i>x = &minus;b/(2a) = &minus;12 / (2&middot;(&minus;2)) = 3</i>",
            "Einsetzen: <i>V(3) = &minus;2&middot;9 + 12&middot;3 = &minus;18 + 36 = 18</i>"
          ],
          answer: "Maximum bei x = 3 ; V_max = 18&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-13", area: "raum", difficulty: 4,
          prompt: "<b>Pyramide mit x &middot; &bdquo;Zeigen Sie V(x)&ldquo;.</b> Eine Pyramide hat eine rechteckige Grundfl&auml;che mit den Seiten x und 6&nbsp;cm und die H&ouml;he h = (10 &minus; 0,5&middot;x)&nbsp;cm. <b>Zeige</b>, dass V(x) = 20x &minus; x&sup2;, und berechne dann V f&uuml;r x = 4.",
          solutionSteps: [
            "Grundfl&auml;che G = Seite &middot; Seite: <i>G = x &middot; 6 = 6x</i>",
            "Volumen der Pyramide = &frac13;&middot;G&middot;h: <i>V(x) = &frac13;&middot;6x&middot;(10 &minus; 0,5x)</i>",
            "&frac13;&middot;6x = 2x vereinfachen und ausmultiplizieren: <i>V(x) = 2x&middot;(10 &minus; 0,5x) = 20x &minus; x&sup2;</i>",
            "F&uuml;r x = 4 (Gegenprobe: G=24, h=8, V=&frac13;&middot;24&middot;8=64): <i>V(4) = 20&middot;4 &minus; 4&sup2; = 80 &minus; 16 = 64</i>"
          ],
          answer: "V(x) = 20x &minus; x&sup2; ; V(4) = 64&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-14", area: "raum", difficulty: 2,
          prompt: "<b>Zentrische Streckung &middot; Volumen.</b> Eine Pyramide hat das Volumen V = 240&nbsp;cm&sup3;. Sie wird mit dem Faktor k = 0,5 <b>verkleinert</b> (zentrische Streckung). Welches Volumen hat die kleine Pyramide?",
          solutionSteps: [
            "Volumina skalieren mit k&sup3; (drei Dimensionen): <i>V&prime; = k&sup3;&middot;V = 0,5&sup3;&middot;240</i>",
            "0,5&sup3; = 0,125 berechnen: <i>V&prime; = 0,125&middot;240 = 30</i>"
          ],
          answer: "V&prime; = 30&nbsp;cm&sup3;"
        },
        {
          id: "m-rau-15", area: "raum", difficulty: 2,
          prompt: "<b>Zentrische Streckung &middot; Oberfl&auml;che.</b> Eine Fl&auml;che misst A = 80&nbsp;cm&sup2;. Sie wird mit dem Faktor k = 1,5 <b>vergr&ouml;&szlig;ert</b>. Wie gro&szlig; ist die neue Fl&auml;che?",
          solutionSteps: [
            "Fl&auml;chen skalieren mit k&sup2; (zwei Dimensionen): <i>A&prime; = k&sup2;&middot;A = 1,5&sup2;&middot;80</i>",
            "1,5&sup2; = 2,25 berechnen: <i>A&prime; = 2,25&middot;80 = 180</i>"
          ],
          answer: "A&prime; = 180&nbsp;cm&sup2;"
        }
      ]
    },

    /* ================= DATEN & ZUFALL ================= */
    {
      id: "daten",
      title: "Daten &amp; Zufall",
      intro: "<p class=\"lead\">Baumdiagramme (<b>Baumdiagramm</b>), Pfadregeln und das Z&auml;hlen der F&auml;lle.</p>",
      theory: "<h3>Die Regeln</h3>" +
        "<p><b>Pfadregel</b> (entlang eines Pfades): man <b>multipliziert</b> &middot; <b>Summenregel</b> (mehrere Pfade): man <b>addiert</b>.</p>" +
        "<p><b>Gegenereignis</b> (&bdquo;mindestens eins&ldquo;): P(&bdquo;mindestens 1&ldquo;) = 1 &minus; P(&bdquo;keins&ldquo;)</p>" +
        "<p><b>Mit Zur&uuml;cklegen</b>: die Wahrscheinlichkeiten bleiben gleich. <b>Ohne Zur&uuml;cklegen</b>: sie &auml;ndern sich (ein Element weniger).</p>" +
        "<h3>Kombinatorik</h3>" +
        "<p>W&auml;hlt man aus n M&ouml;glichkeiten f&uuml;r k Pl&auml;tze, mit Wiederholung: <b>n<sup>k</sup></b> Kombinationen.</p>" +
        "<p>Z.&nbsp;B. 5 Tasten, Melodie aus 4 T&ouml;nen (Wiederholung erlaubt) &rarr; 5&#8308; = 625. Oder 5 Tiere, 3 Teile &rarr; 5&sup3; = 125 Figuren.</p>",
      figures: [
        "<svg class=\"fig\" viewBox=\"0 0 300 220\" style=\"max-width:300px;background:#fff;border:1px solid #ddd2bd;border-radius:10px\"><line x1=\"50\" y1=\"110\" x2=\"150\" y2=\"55\" stroke=\"#46555c\" stroke-width=\"1.3\"/><line x1=\"50\" y1=\"110\" x2=\"150\" y2=\"165\" stroke=\"#46555c\" stroke-width=\"1.3\"/><line x1=\"150\" y1=\"55\" x2=\"250\" y2=\"30\" stroke=\"#46555c\" stroke-width=\"1.3\"/><line x1=\"150\" y1=\"55\" x2=\"250\" y2=\"80\" stroke=\"#46555c\" stroke-width=\"1.3\"/><line x1=\"150\" y1=\"165\" x2=\"250\" y2=\"140\" stroke=\"#46555c\" stroke-width=\"1.3\"/><line x1=\"150\" y1=\"165\" x2=\"250\" y2=\"190\" stroke=\"#46555c\" stroke-width=\"1.3\"/><circle r=\"15\" cx=\"50\" cy=\"110\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><circle r=\"15\" cx=\"150\" cy=\"55\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><circle r=\"15\" cx=\"150\" cy=\"165\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><circle r=\"13\" cx=\"250\" cy=\"30\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><circle r=\"13\" cx=\"250\" cy=\"80\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><circle r=\"13\" cx=\"250\" cy=\"140\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><circle r=\"13\" cx=\"250\" cy=\"190\" fill=\"#fff\" stroke=\"#13565b\" stroke-width=\"1.6\"/><text x=\"95\" y=\"76\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#1f2a30\">p</text><text x=\"92\" y=\"148\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#1f2a30\">1&minus;p</text></svg>"
      ],
      examples: [
        {
          title: "Musterl&ouml;sung &ndash; Baumdiagramm mit und ohne Zur&uuml;cklegen",
          html: "<p>Eine Urne enth&auml;lt 3 rote und 2 blaue Kugeln. Du ziehst 2 Kugeln. Berechne P(2 rote) und P(mindestens 1 rote) &ndash; sowohl <b>mit</b> als auch <b>ohne Zur&uuml;cklegen</b>.</p>" +
            "<ol>" +
            "<li>Mit Zur&uuml;cklegen: P(rot) = 3/5 jedes Mal. Pfadregel (multiplizieren): <i>P(2 rote) = (3/5)&middot;(3/5) = 9/25 = 0,36</i></li>" +
            "<li>&bdquo;Mindestens 1 rote&ldquo; = 1 &minus; P(keine rote) = 1 &minus; (2/5)&sup2;: <i>1 &minus; 4/25 = 21/25 = 0,84</i></li>" +
            "<li>Ohne Zur&uuml;cklegen: die 2. Ziehung hat ein Element weniger: <i>P(2 rote) = (3/5)&middot;(2/4) = 6/20 = 0,30</i></li>" +
            "<li>&bdquo;Mindestens 1&ldquo; = 1 &minus; P(keine) = 1 &minus; (2/5)&middot;(1/4): <i>1 &minus; 2/20 = 1 &minus; 0,10 = 0,90</i></li>" +
            "</ol>" +
            "<p><b>Ergebnis:</b> Mit Z.: 0,36 und 0,84 | Ohne Z.: 0,30 und 0,90</p>"
        }
      ],
      exercises: [
        {
          id: "m-dat-01", area: "daten", difficulty: 2,
          prompt: "<b>Kombinatorik &middot; Teil A.</b> Eine Melodie verwendet die Tasten C, D, E, G, A (5 Tasten). Sie ist 4 T&ouml;ne lang und jede Taste darf sich wiederholen. Wie viele verschiedene Melodien sind m&ouml;glich?",
          solutionSteps: [
            "5 M&ouml;glichkeiten f&uuml;r jeden der 4 T&ouml;ne &rarr; n^k: <i>5&#8308; = 5&middot;5&middot;5&middot;5</i>"
          ],
          answer: "625 verschiedene Melodien"
        },
        {
          id: "m-dat-02", area: "daten", difficulty: 1,
          prompt: "<b>Kombinatorik &middot; Tierbilder.</b> Ein Spiel setzt Tiere aus Kopf, Rumpf, Beine zusammen, jeweils aus 5 Tieren gew&auml;hlt. Wie viele verschiedene Figuren? Und wie gro&szlig; ist die Wahrscheinlichkeit, genau ein &bdquo;echtes&ldquo; Tier zu ziehen (3 gleiche Teile)?",
          solutionSteps: [
            "3 Teile, je 5 M&ouml;glichkeiten: <i>5&sup3; = 125 Figuren</i>",
            "Echte = 5 (alle 3 vom gleichen Tier). Wahrscheinlichkeit = g&uuml;nstige/gesamt: <i>P = 5/125 = 1/25 = 0,04</i>"
          ],
          answer: "125 Figuren ; P(echt) = 0,04 = 4&nbsp;%"
        },
        {
          id: "m-dat-03", area: "daten", difficulty: 1,
          prompt: "<b>Gegenereignis.</b> Gleiches Spiel (125 Figuren). Wie gro&szlig; ist die Wahrscheinlichkeit, ein <b>Fantasietier</b> zu erhalten (also KEIN echtes Tier)?",
          solutionSteps: [
            "Gegenereignis zum echten Tier: <i>P = 1 &minus; 5/125 = 120/125</i>"
          ],
          answer: "P(Fantasietier) = 120/125 = 24/25 = 0,96 = 96&nbsp;%"
        },
        {
          id: "m-dat-04", area: "daten", difficulty: 1,
          prompt: "<b>Pfadregel.</b> Wieder 125 Figuren. Zwei der 5 Tiere sind Raubtiere (L&ouml;we, Tiger). Wie gro&szlig; ist die Wahrscheinlichkeit, dass ALLE 3 Teile von Raubtieren stammen?",
          solutionSteps: [
            "2 Raubtiere von 5 f&uuml;r jeden der 3 Teile (Pfadregel): <i>P = (2/5)&sup3; = 8/125</i>"
          ],
          answer: "P = 8/125 = 0,064 = 6,4&nbsp;%"
        }
      ]
    },
{
  "id": "mathematik_extra",
  "title": "Mathematik II – Prüfungstraining (Funktionen, Geometrie, Trigonometrie, Raumgeometrie, Daten & Zufall)",
  "intro": "<p>Gemischte Originalaufgaben auf Prüfungsniveau der Realschule Bayern mit ausführlichem Rechenweg.</p>",
  "exercises": [
    {
      "id": "m-extra-01",
      "area": "mathematik_extra",
      "difficulty": 1,
      "prompt": "Gegeben ist die lineare Funktion <b>f(x) = 2x − 6</b>. Berechne die <b>Nullstelle</b> (Schnittpunkt mit der x-Achse).",
      "solutionSteps": [
        "Für die Nullstelle setzt man f(x) = 0: 2x − 6 = 0",
        "Beide Seiten + 6: 2x = 6",
        "Beide Seiten : 2: x = 3"
      ],
      "answer": "Die Nullstelle liegt bei x = 3, also im Punkt N(3 | 0)."
    },
    {
      "id": "m-extra-02",
      "area": "mathematik_extra",
      "difficulty": 1,
      "prompt": "Bestimme die Steigung <b>m</b> der Geraden, die durch die Punkte <b>A(1 | 2)</b> und <b>B(5 | 10)</b> verläuft.",
      "solutionSteps": [
        "Steigungsformel: m = (y₂ − y₁) / (x₂ − x₁)",
        "Werte einsetzen: m = (10 − 2) / (5 − 1)",
        "Ausrechnen: m = 8 / 4 = 2"
      ],
      "answer": "Die Steigung beträgt m = 2."
    },
    {
      "id": "m-extra-03",
      "area": "mathematik_extra",
      "difficulty": 1,
      "prompt": "In einem rechtwinkligen Dreieck sind die Katheten <b>a = 6 cm</b> und <b>b = 8 cm</b>. Berechne mit dem <b>Satz des Pythagoras</b> die Hypotenuse c.",
      "solutionSteps": [
        "Satz des Pythagoras: c² = a² + b²",
        "Einsetzen: c² = 6² + 8² = 36 + 64 = 100",
        "Wurzel ziehen: c = √100 = 10"
      ],
      "answer": "Die Hypotenuse ist c = 10 cm."
    },
    {
      "id": "m-extra-04",
      "area": "mathematik_extra",
      "difficulty": 1,
      "prompt": "Berechne den <b>Mittelwert (arithmetisches Mittel)</b> der folgenden Messwerte: 12, 15, 9, 14, 10.",
      "solutionSteps": [
        "Mittelwert = Summe aller Werte / Anzahl der Werte",
        "Summe: 12 + 15 + 9 + 14 + 10 = 60",
        "Anzahl: 5 Werte → 60 / 5 = 12"
      ],
      "answer": "Der Mittelwert beträgt 12."
    },
    {
      "id": "m-extra-05",
      "area": "mathematik_extra",
      "difficulty": 2,
      "prompt": "Eine quadratische Funktion lautet <b>f(x) = x² − 4x − 5</b>. Berechne die <b>Nullstellen</b> mit der Mitternachtsformel.",
      "solutionSteps": [
        "Allgemeine Form: ax² + bx + c mit a = 1, b = −4, c = −5",
        "Mitternachtsformel: x = (−b ± √(b² − 4ac)) / (2a)",
        "Diskriminante: b² − 4ac = (−4)² − 4·1·(−5) = 16 + 20 = 36",
        "Wurzel: √36 = 6",
        "x = (4 ± 6) / 2 → x₁ = (4 + 6)/2 = 5 und x₂ = (4 − 6)/2 = −1"
      ],
      "answer": "Die Nullstellen sind x₁ = 5 und x₂ = −1."
    },
    {
      "id": "m-extra-06",
      "area": "mathematik_extra",
      "difficulty": 2,
      "prompt": "Bestimme den <b>Scheitelpunkt</b> der Parabel <b>f(x) = x² − 6x + 11</b> durch quadratische Ergänzung.",
      "solutionSteps": [
        "Term betrachten: x² − 6x + 11",
        "Quadratische Ergänzung: (6/2)² = 3² = 9 ergänzen und wieder abziehen",
        "x² − 6x + 9 − 9 + 11 = (x − 3)² + 2",
        "Scheitelform f(x) = (x − 3)² + 2 → Scheitel bei x = 3, y = 2"
      ],
      "answer": "Der Scheitelpunkt ist S(3 | 2)."
    },
    {
      "id": "m-extra-07",
      "area": "mathematik_extra",
      "difficulty": 2,
      "prompt": "In einem rechtwinkligen Dreieck (rechter Winkel bei C) ist der Winkel <b>α = 35°</b> und die Hypotenuse <b>c = 12 cm</b>. Berechne die Gegenkathete <b>a</b> mit dem Sinus. (Runde auf 2 Dezimalstellen.)",
      "solutionSteps": [
        "Definition: sin(α) = Gegenkathete / Hypotenuse = a / c",
        "Nach a umstellen: a = c · sin(α)",
        "Einsetzen: a = 12 · sin(35°)",
        "sin(35°) ≈ 0,5736 → a ≈ 12 · 0,5736 = 6,8832"
      ],
      "answer": "Die Gegenkathete beträgt a ≈ 6,88 cm."
    },
    {
      "id": "m-extra-08",
      "area": "mathematik_extra",
      "difficulty": 2,
      "prompt": "Ein <b>Zylinder</b> hat den Radius <b>r = 5 cm</b> und die Höhe <b>h = 10 cm</b>. Berechne das <b>Volumen V</b>. (π ≈ 3,1416; runde auf 1 Dezimalstelle.)",
      "solutionSteps": [
        "Volumenformel Zylinder: V = π · r² · h",
        "Einsetzen: V = π · 5² · 10 = π · 25 · 10 = 250 · π",
        "Ausrechnen: V ≈ 250 · 3,1416 = 785,4"
      ],
      "answer": "Das Volumen beträgt V ≈ 785,4 cm³."
    },
    {
      "id": "m-extra-09",
      "area": "mathematik_extra",
      "difficulty": 2,
      "prompt": "Aus einer Urne mit <b>4 roten</b>, <b>3 blauen</b> und <b>5 grünen</b> Kugeln wird eine Kugel gezogen. Berechne die <b>Wahrscheinlichkeit</b>, eine blaue Kugel zu ziehen (als Bruch und in Prozent).",
      "solutionSteps": [
        "Gesamtanzahl der Kugeln: 4 + 3 + 5 = 12",
        "Günstige Fälle (blau): 3",
        "P(blau) = günstige / mögliche = 3/12 = 1/4",
        "In Prozent: 1/4 = 0,25 = 25 %"
      ],
      "answer": "P(blau) = 1/4 = 25 %."
    },
    {
      "id": "m-extra-10",
      "area": "mathematik_extra",
      "difficulty": 3,
      "prompt": "Eine <b>quadratische Pyramide</b> hat die Grundkantenlänge <b>a = 6 cm</b> und die Körperhöhe <b>h = 4 cm</b>. Berechne a) das <b>Volumen V</b> und b) die <b>Oberfläche O</b> (Grundfläche + 4 Seitendreiecke).",
      "solutionSteps": [
        "a) Volumen: V = (1/3) · G · h mit Grundfläche G = a² = 6² = 36",
        "V = (1/3) · 36 · 4 = (1/3) · 144 = 48",
        "b) Für die Oberfläche wird die Höhe der Seitendreiecke (Apothem hₐ) gebraucht.",
        "hₐ ergibt sich aus Pythagoras: hₐ² = h² + (a/2)² = 4² + 3² = 16 + 9 = 25 → hₐ = 5",
        "Fläche eines Seitendreiecks: A_Δ = (1/2) · a · hₐ = (1/2) · 6 · 5 = 15",
        "Mantel M = 4 · 15 = 60; Grundfläche G = 36",
        "Oberfläche O = G + M = 36 + 60 = 96"
      ],
      "answer": "a) V = 48 cm³.   b) O = 96 cm² (Grundfläche 36 cm² + Mantel 60 cm²)."
    },
    {
      "id": "m-extra-11",
      "area": "mathematik_extra",
      "difficulty": 3,
      "prompt": "Ein <b>Kegel</b> hat den Radius <b>r = 3 cm</b> und die Höhe <b>h = 4 cm</b>. Berechne a) die <b>Mantellinie s</b>, b) das <b>Volumen V</b> und c) die <b>Mantelfläche M</b>. (π ≈ 3,1416; runde auf 1 Dezimalstelle.)",
      "solutionSteps": [
        "a) Mantellinie mit Pythagoras: s² = r² + h² = 3² + 4² = 9 + 16 = 25 → s = 5",
        "b) Volumen Kegel: V = (1/3) · π · r² · h = (1/3) · π · 9 · 4 = 12 · π ≈ 37,7",
        "c) Mantelfläche: M = π · r · s = π · 3 · 5 = 15 · π ≈ 47,1"
      ],
      "answer": "a) s = 5 cm.   b) V ≈ 37,7 cm³.   c) M ≈ 47,1 cm²."
    },
    {
      "id": "m-extra-12",
      "area": "mathematik_extra",
      "difficulty": 3,
      "prompt": "In einem rechtwinkligen Dreieck (rechter Winkel bei C) sind die Katheten <b>Gegenkathete a = 7 cm</b> und <b>Ankathete b = 4 cm</b> zum Winkel α gegeben. Berechne den Winkel <b>α</b> mit dem Tangens. (Runde auf eine Dezimalstelle.)",
      "solutionSteps": [
        "Definition: tan(α) = Gegenkathete / Ankathete = a / b",
        "Einsetzen: tan(α) = 7 / 4 = 1,75",
        "Umkehrfunktion anwenden: α = tan⁻¹(1,75)",
        "α ≈ 60,255°"
      ],
      "answer": "Der Winkel beträgt α ≈ 60,3°."
    },
    {
      "id": "m-extra-13",
      "area": "mathematik_extra",
      "difficulty": 3,
      "prompt": "Zwei Geraden sind gegeben: <b>g: y = 2x − 1</b> und <b>h: y = −x + 5</b>. Berechne den <b>Schnittpunkt S</b> beider Geraden.",
      "solutionSteps": [
        "Im Schnittpunkt sind beide y-Werte gleich: 2x − 1 = −x + 5",
        "+ x auf beiden Seiten: 3x − 1 = 5",
        "+ 1: 3x = 6 → x = 2",
        "x in eine Gleichung einsetzen: y = 2·2 − 1 = 3"
      ],
      "answer": "Der Schnittpunkt ist S(2 | 3)."
    },
    {
      "id": "m-extra-14",
      "area": "mathematik_extra",
      "difficulty": 3,
      "prompt": "Eine Münze wird <b>zweimal</b> geworfen. Berechne mit einem Baumdiagramm die Wahrscheinlichkeit, <b>genau einmal Kopf</b> zu werfen.",
      "solutionSteps": [
        "Jeder Wurf: P(Kopf) = 1/2, P(Zahl) = 1/2",
        "Günstige Pfade für genau einmal Kopf: (Kopf, Zahl) und (Zahl, Kopf)",
        "P(Kopf, Zahl) = 1/2 · 1/2 = 1/4",
        "P(Zahl, Kopf) = 1/2 · 1/2 = 1/4",
        "Pfade addieren (Summenregel): 1/4 + 1/4 = 2/4 = 1/2"
      ],
      "answer": "P(genau einmal Kopf) = 1/2 = 50 %."
    }
  ]
}
  ]
});
