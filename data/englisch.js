/* ============================================================
   FACH: Englisch  ·  Abschlussprüfung 26.06.2026
   Realschule Mainburg · Mittlere Reife · WPF-Gruppe IIIa
   Klassisches <script>, KEIN ES-Modul. Ruft APP.register auf.
   Alle Inhalte ORIGINAL. Umlaute als HTML-Entities.
   exercise.id global eindeutig (Präfix e-).
   ============================================================ */
APP.register({
  id: "englisch",
  name: "Englisch",
  examISO: "2026-06-26",
  examInfo: "Listening Comprehension &middot; Reading &amp; Mediation &middot; Use of English &middot; Guided Writing &middot; Speaking Test &middot; ca. 90&ndash;120 Minuten (schriftlich) + Speaking &middot; 26.06.2026",
  examMinutes: 120,
  note: "<b>So gehst du vor:</b> Beim <b>Listening</b> zuerst die Fragen lesen, dann gezielt h&ouml;ren. Beim <b>Reading</b> Schl&uuml;sselw&ouml;rter unterstreichen. Bei der <b>Mediation</b> antwortest du auf <b>Deutsch</b> &ndash; sinngem&auml;&szlig;, nicht Wort f&uuml;r Wort. Beim <b>Writing</b> erst stichpunktartig planen, dann schreiben, am Ende auf Tenses und Rechtschreibung pr&uuml;fen. &mdash; Die Inhalte orientieren sich am offiziellen Format der Realschule Bayern; es werden keine echten Pr&uuml;fungstexte verwendet. Audio kann sp&auml;ter erg&auml;nzt werden &ndash; die Transkripte stehen vollst&auml;ndig hier.",

  lernplan: [
    { dateISO: "2026-06-07", areaId: "listening",
      focus: "<b>Start:</b> Listening &ndash; das erste Transkript lesen, dann die Fragen beantworten. Auf Zahlen, Zeiten und Namen achten." },
    { dateISO: "2026-06-09", areaId: "reading",
      focus: "Reading: beide Originaltexte lesen und alle Fragen schriftlich beantworten (true/false begr&uuml;nden!)." },
    { dateISO: "2026-06-11", areaId: "mediation",
      focus: "Mediation &uuml;ben: englischen Text lesen, deutsche Fragen sinngem&auml;&szlig; auf <b>Deutsch</b> beantworten. Keine W&ouml;rter erfinden." },
    { dateISO: "2026-06-13", areaId: "use_of_english",
      focus: "Use of English: Tenses und Conditionals wiederholen. Grammatik-Trainer durcharbeiten." },
    { dateISO: "2026-06-16", areaId: "use_of_english",
      focus: "Use of English: Passive, Reported Speech, Relative Clauses, Gerund/Infinitive trainieren." },
    { dateISO: "2026-06-19", areaId: "writing",
      focus: "Guided Writing: Thema 1 (E-Mail) nach Checkliste schreiben, dann mit Mustertext vergleichen." },
    { dateISO: "2026-06-22", areaId: "writing",
      focus: "Guided Writing: Thema 2 (Opinion / Blog comment) schreiben. Useful phrases einbauen." },
    { dateISO: "2026-06-24", areaId: "speaking",
      focus: "Speaking Test &uuml;ben: Picture description laut sprechen, Rollenspiel und Diskussionsfragen durchgehen." },
    { dateISO: "2026-06-25", areaId: "vokabeln",
      focus: "Generalprobe: Vokabeln wiederholen (Topics) und ein komplettes Reading + Writing unter Zeitdruck." }
  ],

  areas: [

    /* ===================================================== */
    /* BEREICH 1: Listening Comprehension (Transkript + Aufgaben) */
    /* ===================================================== */
    {
      id: "listening",
      title: "Listening Comprehension",
      intro: "<p>In der Pr&uuml;fung h&ouml;rst du die Texte zweimal. Hier stehen die vollst&auml;ndigen <b>Transkripte</b> (du kannst sie lesen oder dir vorlesen lassen). Lies zuerst die Fragen, h&ouml;re/lies dann gezielt und achte auf <b>Zahlen, Zeiten, Orte und Namen</b>.</p>",
      theory:
        "<h3>Strategie f&uuml;r das Listening</h3>" +
        "<ul>" +
        "<li><b>Vor dem H&ouml;ren:</b> Fragen lesen und Schl&uuml;sselw&ouml;rter markieren. So wei&szlig;t du, worauf du achten musst.</li>" +
        "<li><b>Beim ersten H&ouml;ren:</b> den Gesamtzusammenhang erfassen (Wer? Wo? Worum geht es?).</li>" +
        "<li><b>Beim zweiten H&ouml;ren:</b> gezielt die Details (numbers, times, prices, names) erg&auml;nzen.</li>" +
        "<li><b>Multiple choice:</b> falsche Optionen ausschlie&szlig;en. Achtung vor <i>distractors</i> (Infos, die genannt, aber wieder verworfen werden).</li>" +
        "</ul>",
      examples: [
        { title: "Transcript 1 &ndash; Announcement at a train station",
          html: "<p style='font-style:italic'>" +
            "&bdquo;Good afternoon, ladies and gentlemen. This is an announcement for all passengers travelling to Munich. " +
            "The 3:15 train to Munich Central Station will depart from platform 7 instead of platform 4 today. " +
            "We are sorry for the delay of about ten minutes, which is caused by repair work on the line. " +
            "Passengers with a window seat reservation in coach number 12 are kindly asked to move to coach number 9. " +
            "The dining car is located in the middle of the train. Thank you for travelling with us, and have a pleasant journey.&ldquo;</p>" },
        { title: "Transcript 2 &ndash; A phone call about a part-time job",
          html: "<p style='font-style:italic'>" +
            "<b>Emma:</b> Hello, this is Emma speaking. I&rsquo;m calling about the weekend job at the caf&eacute; you advertised online.<br>" +
            "<b>Mr&nbsp;Brown:</b> Oh, great! Thanks for calling, Emma. The job is for Saturdays and Sundays, from nine in the morning until two in the afternoon.<br>" +
            "<b>Emma:</b> That sounds good. What exactly would I have to do?<br>" +
            "<b>Mr&nbsp;Brown:</b> Mostly serving customers, making coffee and clearing the tables. No kitchen work. We pay nine pounds fifty an hour.<br>" +
            "<b>Emma:</b> Perfect. Do I need any experience?<br>" +
            "<b>Mr&nbsp;Brown:</b> Not really, we&rsquo;ll train you. But you should be friendly and on time. Can you start next Saturday?<br>" +
            "<b>Emma:</b> Yes, absolutely. Thank you very much!&rdquo;</p>" }
      ],
      exercises: [
        { id: "e-li-01", area: "listening", difficulty: 1,
          prompt: "<b>Transcript&nbsp;1:</b> From which platform will the train to Munich leave today?",
          solutionSteps: [
            "Listen for the word &bdquo;platform&ldquo;.",
            "Note that the platform was changed &ndash; give the NEW one."
          ],
          answer: "From platform 7 (instead of platform 4)." },

        { id: "e-li-02", area: "listening", difficulty: 2,
          prompt: "<b>Transcript&nbsp;1:</b> Why is the train delayed, and how long is the delay?",
          solutionSteps: [
            "Listen for a reason (because / caused by).",
            "Listen for a number of minutes."
          ],
          answer: "It is delayed by about ten minutes because of repair work on the line." },

        { id: "e-li-03", area: "listening", difficulty: 2,
          prompt: "<b>Transcript&nbsp;2:</b> What are Emma&rsquo;s working hours and how much will she be paid?",
          solutionSteps: [
            "Find the days and the times mentioned by Mr&nbsp;Brown.",
            "Find the amount of money per hour."
          ],
          answer: "Saturdays and Sundays from 9 a.m. to 2 p.m.; she will be paid &pound;9.50 (nine pounds fifty) per hour." },

        { id: "e-li-04", area: "listening", difficulty: 2,
          prompt: "<b>Transcript&nbsp;2:</b> Does Emma need work experience for the job? Explain.",
          solutionSteps: [
            "Listen to Mr&nbsp;Brown&rsquo;s answer to her question about experience.",
            "Note what he says she SHOULD be instead."
          ],
          answer: "No, she does not need experience &ndash; she will be trained. But she should be friendly and on time (punctual)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 2: Reading / Leseverstehen (Originaltexte + Fragen) */
    /* ===================================================== */
    {
      id: "reading",
      title: "Reading / Leseverstehen",
      intro: "<p>Lies die <b>originalen</b> englischen Texte genau und beantworte die Fragen <b>auf Englisch</b>. Bei <i>true/false</i> immer mit einer Textstelle begr&uuml;nden. Markiere Schl&uuml;sselw&ouml;rter, bevor du antwortest.</p>",
      leseverstehen: {
        title: "Reading comprehension &ndash; two original texts",
        text:
          "<h3>Text 1 &ndash; A New School Garden</h3>" +
          "<p><i>Last spring, the students of Greenfield School started an unusual project. Behind the old gym there was a piece of land that nobody used. " +
          "It was full of weeds and rubbish. Mrs Carter, the biology teacher, had an idea: why not turn it into a school garden? " +
          "At first, many students laughed. &ldquo;Gardening is boring,&rdquo; they said. But after the first weekend, things changed. " +
          "The class cleaned the area, dug the soil and planted vegetables, herbs and flowers. By June, the first tomatoes and salad were ready. " +
          "Now the garden is the most popular place at school. Some students even come during the holidays to water the plants. " +
          "&ldquo;We learn more here than in any book,&rdquo; says fourteen-year-old Leon. &ldquo;And the food we grow tastes much better than anything from the shop.&rdquo;</i></p>" +
          "<hr>" +
          "<h3>Text 2 &ndash; Lost in London</h3>" +
          "<p><i>When Sophie arrived in London for the first time, she felt both excited and nervous. She had won a one-week language trip and was staying with a host family in the north of the city. " +
          "On her second day, she decided to explore the centre on her own. Everything went well until she wanted to go back. " +
          "She took the wrong underground line and suddenly found herself in a part of the city she did not know. Her phone battery was almost empty. " +
          "Sophie tried to stay calm. She walked up to a friendly-looking woman at a bus stop and asked for help. The woman not only explained the way but also walked with her to the right station. " +
          "&ldquo;Don&rsquo;t worry, love, London can be confusing for everyone,&rdquo; she said with a smile. That evening, Sophie wrote in her diary: &lsquo;Today I learned that asking for help is not a weakness &ndash; and that strangers can be very kind.&rsquo;</i></p>",
        questions: [
          { q: "Text&nbsp;1: What did the piece of land behind the gym look like before the project?",
            a: "It was unused and full of weeds and rubbish." },
          { q: "Text&nbsp;1: How did the students&rsquo; opinion about the garden change?",
            a: "At first they thought gardening was boring and laughed, but later the garden became the most popular place at school." },
          { q: "Text&nbsp;1: True or false? &bdquo;The students only work in the garden during school lessons.&ldquo; Give a reason.",
            a: "False. Some students even come during the holidays to water the plants." },
          { q: "Text&nbsp;2: Why did Sophie get lost in London?",
            a: "She took the wrong underground (tube) line and ended up in a part of the city she did not know." },
          { q: "Text&nbsp;2: How did the woman at the bus stop help Sophie?",
            a: "She not only explained the way but also walked with Sophie to the right station." },
          { q: "Text&nbsp;2: What did Sophie learn from this experience?",
            a: "That asking for help is not a weakness and that strangers can be very kind." }
        ]
      },
      exercises: [
        { id: "e-rd-01", area: "reading", difficulty: 1,
          prompt: "<b>Text&nbsp;1:</b> Who had the idea for the school garden, and what subject does this person teach?",
          solutionSteps: [
            "Scan the text for a name and a job.",
            "Find the sentence with the idea."
          ],
          answer: "Mrs Carter, the biology teacher, had the idea." },

        { id: "e-rd-02", area: "reading", difficulty: 2,
          prompt: "<b>Text&nbsp;2:</b> Find a quotation that shows the woman was kind and reassuring. Write it down.",
          solutionSteps: [
            "Look for direct speech (in quotation marks).",
            "Choose the sentence that calms Sophie down."
          ],
          answer: "&bdquo;Don&rsquo;t worry, love, London can be confusing for everyone.&ldquo;" },

        { id: "e-rd-03", area: "reading", difficulty: 3,
          prompt: "<b>Text&nbsp;1:</b> Leon says: &bdquo;We learn more here than in any book.&ldquo; Explain in your own words what he means.",
          solutionSteps: [
            "Think about practical (hands-on) learning versus learning only from books.",
            "Use your own words, do not just copy."
          ],
          answer: "He means that working in the garden teaches them real, practical things (e.g. how plants grow, teamwork, patience) which you cannot learn just by reading a book." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 3: Mediation (Englischer Text → Antwort auf Deutsch) */
    /* ===================================================== */
    {
      id: "mediation",
      title: "Mediation (Englisch &rarr; Deutsch)",
      intro: "<p>Bei der <b>Mediation</b> liest du einen englischen Text und beantwortest <b>deutsche</b> Fragen <b>auf Deutsch</b>. Du &uuml;bertr&auml;gst den Inhalt <b>sinngem&auml;&szlig;</b> &ndash; du &uuml;bersetzt NICHT Wort f&uuml;r Wort. Gib nur die gefragten Informationen wieder.</p>",
      theory:
        "<h3>So gelingt die Mediation</h3>" +
        "<ul>" +
        "<li>Lies die <b>deutsche Frage</b> zuerst &ndash; sie sagt dir, welche Information du suchst.</li>" +
        "<li>Suche die passende Stelle im englischen Text.</li>" +
        "<li>Gib den Inhalt <b>auf Deutsch und in eigenen Worten</b> wieder &ndash; sachlich und vollst&auml;ndig.</li>" +
        "<li><b>Nicht</b> &uuml;bersetzen, <b>nicht</b> alles wiedergeben, <b>nicht</b> auf Englisch antworten.</li>" +
        "<li>Wenn die Frage einen Adressaten nennt (z.&nbsp;B. &bdquo;Erkl&auml;re deiner Mutter&ldquo;), passe den Ton an.</li>" +
        "</ul>",
      leseverstehen: {
        title: "Mediation &ndash; English text, German questions",
        text:
          "<h3>English source text &ndash; &bdquo;Summer Camp Information&ldquo;</h3>" +
          "<p><i>Welcome to Lakeside Summer Camp! Our camp is open to teenagers aged 12 to 16. " +
          "It takes place from the 3rd to the 17th of August. The camp is located near a beautiful lake about two hours from London. " +
          "During the two weeks, participants can choose from many activities: canoeing, climbing, photography and theatre. " +
          "Each day starts at 7:30 a.m. with a short morning run, followed by breakfast at 8:00. " +
          "Please note: mobile phones may only be used in the evening between 7 and 8 p.m. " +
          "The price for the whole camp is &pound;480, including accommodation, all meals and equipment. " +
          "Participants must bring waterproof clothes, sturdy shoes and a sleeping bag. " +
          "If you have any food allergies, please inform us at least two weeks before the camp begins.</i></p>",
        questions: [
          { q: "Dein j&uuml;ngerer Bruder (13) interessiert sich f&uuml;r das Camp. Erkl&auml;re ihm auf Deutsch: F&uuml;r welches Alter ist das Camp und wann findet es statt?",
            a: "Das Camp ist f&uuml;r Jugendliche zwischen 12 und 16 Jahren. Es findet vom 3. bis 17. August statt." },
          { q: "Deine Eltern fragen nach den Kosten. Was ist im Preis enthalten?",
            a: "Das Camp kostet 480 Pfund. Darin enthalten sind die Unterkunft, alle Mahlzeiten und die Ausr&uuml;stung." },
          { q: "Welche Regel gilt f&uuml;r Handys? Erkl&auml;re es auf Deutsch.",
            a: "Handys d&uuml;rfen nur abends zwischen 19 und 20 Uhr benutzt werden." },
          { q: "Was muss man unbedingt mitbringen, und worauf muss man die Veranstalter vorher hinweisen?",
            a: "Man muss wasserdichte Kleidung, feste Schuhe und einen Schlafsack mitbringen. Lebensmittelallergien muss man mindestens zwei Wochen vor Beginn mitteilen." }
        ]
      },
      exercises: [
        { id: "e-me-01", area: "mediation", difficulty: 2,
          prompt: "Eine Freundin versteht kein Englisch. Erkl&auml;re ihr auf <b>Deutsch</b>, wie der Tagesablauf im Camp morgens beginnt.",
          solutionSteps: [
            "Suche im Text die Uhrzeiten am Morgen.",
            "Antworte sinngem&auml;&szlig; auf Deutsch, nicht Wort f&uuml;r Wort."
          ],
          answer: "Der Tag beginnt um 7:30 Uhr mit einem kurzen Morgenlauf, danach gibt es um 8:00 Uhr Fr&uuml;hst&uuml;ck." },

        { id: "e-me-02", area: "mediation", difficulty: 2,
          prompt: "Nenne auf <b>Deutsch</b> drei Aktivit&auml;ten, die man im Camp ausw&auml;hlen kann.",
          solutionSteps: [
            "Suche die Aufz&auml;hlung der Aktivit&auml;ten (activities).",
            "&Uuml;bertrage die Begriffe sinngem&auml;&szlig; ins Deutsche."
          ],
          answer: "Zum Beispiel: Kanufahren, Klettern, Fotografie und Theater (drei davon gen&uuml;gen)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 4: Use of English (Grammar) */
    /* ===================================================== */
    {
      id: "use_of_english",
      title: "Use of English (Grammar)",
      intro: "<p>Im Teil <b>Use of English</b> geht es um die korrekte Grammatik: <b>Tenses, Conditionals, Passive, Reported Speech, Relative Clauses</b> und <b>Gerund/Infinitive</b>. Lies die Theorie, dann trainiere mit dem Grammatik-Trainer (tippe deine L&ouml;sung und vergleiche).</p>",
      theory:
        "<h3>&Uuml;berblick: die wichtigsten Grammatikthemen</h3>" +
        "<p><b>1. Tenses (Zeiten):</b></p>" +
        "<ul>" +
        "<li><b>Simple present</b> &ndash; Gewohnheiten/Fakten: <i>She <b>plays</b> tennis every Monday.</i> (Signal: every, usually, often)</li>" +
        "<li><b>Present progressive</b> &ndash; gerade jetzt: <i>She <b>is playing</b> tennis now.</i> (Signal: now, at the moment, Look!)</li>" +
        "<li><b>Simple past</b> &ndash; abgeschlossen, mit Zeitangabe: <i>We <b>visited</b> York in 2022.</i> (Signal: yesterday, last week, ago)</li>" +
        "<li><b>Present perfect</b> &ndash; Vergangenheit mit Bezug zur Gegenwart: <i>I <b>have</b> just <b>finished</b> my homework.</i> (Signal: just, already, yet, ever, never, since, for)</li>" +
        "<li><b>going-to future</b> (Pl&auml;ne) vs. <b>will</b> (spontane Entscheidung/Vorhersage).</li>" +
        "</ul>" +
        "<p><b>2. Conditionals (if-clauses):</b></p>" +
        "<ul>" +
        "<li><b>Type&nbsp;I</b> (real): <i>If it <b>rains</b>, we <b>will stay</b> at home.</i> (if + present, will + infinitive)</li>" +
        "<li><b>Type&nbsp;II</b> (unreal/now): <i>If I <b>had</b> more time, I <b>would learn</b> Spanish.</i> (if + past, would + infinitive)</li>" +
        "<li><b>Type&nbsp;III</b> (unreal/past): <i>If she <b>had studied</b>, she <b>would have passed</b>.</i> (if + past perfect, would have + 3rd form)</li>" +
        "</ul>" +
        "<p><b>3. Passive voice:</b> Form von <i>be</i> + 3.&nbsp;Verbform (past participle). <i>Active:</i> They <b>build</b> houses. &rarr; <i>Passive:</i> Houses <b>are built</b>. Der Handelnde steht mit <i>by</i>.</p>" +
        "<p><b>4. Reported speech (indirekte Rede):</b> Zeit um eine Stufe zur&uuml;ck (backshift): <i>&bdquo;I <b>am</b> tired&ldquo;</i> &rarr; <i>He said (that) he <b>was</b> tired.</i> Pronomen und Zeitangaben anpassen (now&rarr;then, today&rarr;that day, here&rarr;there).</p>" +
        "<p><b>5. Relative clauses:</b> <b>who</b> (Personen), <b>which</b> (Sachen), <b>that</b> (beides), <b>whose</b> (Besitz). Notwendige (defining) Relativs&auml;tze ohne Komma, zus&auml;tzliche (non-defining) mit Komma.</p>" +
        "<p><b>6. Gerund / Infinitive:</b> Nach bestimmten Verben steht das <b>Gerund</b> (-ing): <i>enjoy, finish, avoid, suggest, mind</i> &ndash; <i>I enjoy <b>reading</b>.</i> Nach anderen der <b>Infinitive</b> (to&nbsp;+): <i>want, decide, hope, promise, would like</i> &ndash; <i>I want <b>to read</b>.</i> Nach Pr&auml;positionen immer das Gerund: <i>good at <b>swimming</b></i>.</p>",
      grammatik: {
        title: "Grammar-Trainer &ndash; tippe die L&ouml;sung",
        theory: "<p>Setze die richtige Form ein. Tippe deine Antwort und vergleiche dann mit der L&ouml;sung. Achte auf Signalw&ouml;rter!</p>",
        items: [
          { q: "<b>Tenses:</b> Look! The dog ____ (to run) after the cat right now.", a: "is running" },
          { q: "<b>Tenses:</b> We ____ (to visit) our grandparents last weekend.", a: "visited" },
          { q: "<b>Tenses:</b> I ____ (to know) her since 2019.", a: "have known" },
          { q: "<b>Tenses:</b> She usually ____ (to walk) to school, but today she is taking the bus.", a: "walks" },
          { q: "<b>Conditional I:</b> If you ____ (to ask) him, he will help you.", a: "ask" },
          { q: "<b>Conditional II:</b> If I ____ (to be) you, I would apologise.", a: "were" },
          { q: "<b>Conditional III:</b> If they had left earlier, they ____ (to catch) the train.", a: "would have caught" },
          { q: "<b>Passive (present):</b> English ____ (to speak) all over the world.", a: "is spoken" },
          { q: "<b>Passive (past):</b> The letter ____ (to write) by Tom yesterday.", a: "was written" },
          { q: "<b>Reported speech:</b> &bdquo;I am hungry.&ldquo; &rarr; She said that she ____ hungry.", a: "was" },
          { q: "<b>Reported speech:</b> &bdquo;I will call you tomorrow.&ldquo; &rarr; He said that he ____ call me the next day.", a: "would" },
          { q: "<b>Relative clause:</b> That is the man ____ helped me. (Person)", a: "who" },
          { q: "<b>Relative clause:</b> This is the book ____ I told you about. (thing)", a: "which" },
          { q: "<b>Relative clause:</b> She is the girl ____ bike was stolen. (possession)", a: "whose" },
          { q: "<b>Gerund/Infinitive:</b> I enjoy ____ (to read) detective stories.", a: "reading" },
          { q: "<b>Gerund/Infinitive:</b> They decided ____ (to go) home early.", a: "to go" },
          { q: "<b>Gerund/Infinitive:</b> He is good at ____ (to swim).", a: "swimming" }
        ]
      },
      exercises: [
        { id: "e-ue-01", area: "use_of_english", difficulty: 2,
          prompt: "Put into the <b>passive voice</b>: &bdquo;The teacher corrects the tests.&ldquo;",
          solutionSteps: [
            "Find the object of the active sentence (the tests) &ndash; it becomes the new subject.",
            "Use a form of <i>be</i> + past participle (3rd form)."
          ],
          answer: "The tests are corrected (by the teacher)." },

        { id: "e-ue-02", area: "use_of_english", difficulty: 2,
          prompt: "Turn into <b>reported speech</b>: Anna said: &bdquo;I have lost my keys.&ldquo;",
          solutionSteps: [
            "Backshift the tense: present perfect &rarr; past perfect.",
            "Change the pronoun (I &rarr; she)."
          ],
          answer: "Anna said (that) she had lost her keys." },

        { id: "e-ue-03", area: "use_of_english", difficulty: 3,
          prompt: "Complete with the correct <b>conditional</b>: &bdquo;If I ____ (to win) the lottery, I ____ (to travel) around the world.&ldquo; Which type is it?",
          solutionSteps: [
            "Winning the lottery is unreal/unlikely &rarr; Conditional Type&nbsp;II.",
            "if + simple past, main clause: would + infinitive."
          ],
          answer: "&bdquo;If I won the lottery, I would travel around the world.&ldquo; &ndash; Conditional Type&nbsp;II (unreal present)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 5: Guided Writing (2 Themen + Checkliste + Mustertext) */
    /* ===================================================== */
    {
      id: "writing",
      title: "Guided Writing",
      intro: "<p>Beim <b>Guided Writing</b> bekommst du ein Thema mit Stichpunkten. Plane zuerst kurz, schreibe dann einen zusammenh&auml;ngenden Text (meist 120&ndash;180 W&ouml;rter) und nutze <b>useful phrases</b> und Konnektoren. Pr&uuml;fe am Ende Tenses und Rechtschreibung.</p>",
      theory:
        "<h3>Checkliste f&uuml;r jeden Schreibauftrag</h3>" +
        "<ul>" +
        "<li><b>Alle Stichpunkte</b> der Aufgabe bearbeitet? (Nichts vergessen!)</li>" +
        "<li><b>Textsorte</b> beachtet? (E-Mail/Brief: Anrede &amp; Gru&szlig;formel; Blog/Comment: Meinung &amp; Begr&uuml;ndung)</li>" +
        "<li><b>Aufbau:</b> Einleitung &ndash; Hauptteil (Abs&auml;tze) &ndash; Schluss.</li>" +
        "<li><b>Konnektoren</b> benutzt? (first, then, however, because, finally)</li>" +
        "<li><b>Tenses</b> korrekt und einheitlich? <b>Rechtschreibung</b> gepr&uuml;ft?</li>" +
        "<li><b>Anrede/Gru&szlig;:</b> informell <i>Dear Sam &hellip; Best wishes</i>; formell <i>Dear Sir or Madam &hellip; Yours faithfully</i>.</li>" +
        "</ul>" +
        "<h3>Useful phrases</h3>" +
        "<p><b>Opening:</b> <i>Thanks for your email. / I&rsquo;m writing to tell you about &hellip; / In my opinion, &hellip;</i><br>" +
        "<b>Giving opinion:</b> <i>I think / I believe that &hellip; / It seems to me that &hellip; / Personally, &hellip;</i><br>" +
        "<b>Pro &amp; contra:</b> <i>On the one hand &hellip; on the other hand &hellip; / However, &hellip; / Although &hellip;</i><br>" +
        "<b>Examples:</b> <i>For example, &hellip; / For instance, &hellip; / such as &hellip;</i><br>" +
        "<b>Ending:</b> <i>To sum up, &hellip; / All in all, &hellip; / Write back soon! / Looking forward to hearing from you.</i></p>",
      examples: [
        { title: "Thema 1 &ndash; Informal email (Aufgabe + Mustertext)",
          html:
            "<p><b>Task:</b> Your English friend Sam is going to visit you in Bavaria next month. Write an email (about 120&ndash;150 words). Include: (1)&nbsp;say how happy you are, (2)&nbsp;suggest two things you could do together, (3)&nbsp;tell Sam what clothes to bring, (4)&nbsp;ask one question about the visit.</p>" +
            "<p><b>Mustertext:</b></p>" +
            "<p style='font-style:italic'>Hi Sam,<br><br>" +
            "Thanks for your email &ndash; I&rsquo;m so happy that you&rsquo;re finally coming to Bavaria next month! I really can&rsquo;t wait to see you.<br><br>" +
            "There are lots of things we could do together. First, we could visit Munich and see the famous English Garden. Then, if the weather is nice, we could go hiking in the mountains near my town and have a picnic.<br><br>" +
            "Please bring warm clothes and a rain jacket, because the weather in the mountains can change very quickly. Comfortable walking shoes are a good idea, too.<br><br>" +
            "By the way, how long are you going to stay? Let me know so I can plan everything.<br><br>" +
            "Looking forward to seeing you!<br><br>" +
            "Best wishes,<br>Gioele</i></p>" },
        { title: "Thema 2 &ndash; Opinion / Blog comment (Aufgabe + Mustertext)",
          html:
            "<p><b>Task:</b> A blog asks: &bdquo;Should students wear school uniforms?&ldquo; Write a comment (about 150&ndash;180 words) in which you give your opinion. Include at least one argument <b>for</b> and one <b>against</b>, and end with your own conclusion.</p>" +
            "<p><b>Mustertext:</b></p>" +
            "<p style='font-style:italic'>In my opinion, school uniforms are an interesting but difficult topic.<br><br>" +
            "On the one hand, uniforms have clear advantages. First, everyone looks the same, so there is less pressure to wear expensive brands. This can reduce bullying and help students from poorer families feel equal. Moreover, uniforms save time in the morning because you don&rsquo;t have to think about what to wear.<br><br>" +
            "On the other hand, many students feel that uniforms take away their freedom. Clothes are an important way to show your personality, and a strict dress code can feel boring or unfair. In addition, uniforms can be quite expensive for parents.<br><br>" +
            "All in all, I can see both sides. Personally, I think a simple dress code would be a good compromise: it keeps things fair without forcing everyone to look exactly the same.</i></p>" }
      ],
      exercises: [
        { id: "e-wr-01", area: "writing", difficulty: 1,
          prompt: "Which <b>greeting</b> and <b>closing</b> do you use for (a) an informal email to a friend and (b) a formal letter to a person whose name you do not know?",
          solutionSteps: [
            "Informal: friendly opening and closing.",
            "Formal: &bdquo;Dear Sir or Madam&ldquo; goes with a fixed closing."
          ],
          answer: "(a) Informal: &bdquo;Hi Sam / Dear Sam&ldquo; &hellip; &bdquo;Best wishes / Write back soon&ldquo;. (b) Formal: &bdquo;Dear Sir or Madam&ldquo; &hellip; &bdquo;Yours faithfully&ldquo;." },

        { id: "e-wr-02", area: "writing", difficulty: 2,
          prompt: "Plan a short answer to Thema&nbsp;1: name <b>two activities</b> you could suggest to Sam and <b>one question</b> you could ask.",
          solutionSteps: [
            "Pick two realistic activities (sightseeing, hiking, sports &hellip;).",
            "Add one open question about the visit (dates, length, food &hellip;)."
          ],
          answer: "Example &ndash; Activities: visiting Munich (English Garden) and going hiking in the mountains. Question: &bdquo;How long are you going to stay?&ldquo; (other sensible answers are also correct)." }
      ]
    },

    /* ===================================================== */
    /* BEREICH 6: Speaking Test */
    /* ===================================================== */
    {
      id: "speaking",
      title: "Speaking Test",
      intro: "<p>Der <b>Speaking Test</b> besteht meist aus drei Teilen: (1)&nbsp;sich vorstellen / &uuml;ber sich sprechen, (2)&nbsp;ein <b>Bild beschreiben</b> oder eine Aufgabe l&ouml;sen, (3)&nbsp;ein <b>Gespr&auml;ch / Rollenspiel</b>. Sprich die folgenden Aufgaben laut &ndash; am besten mehrmals.</p>",
      theory:
        "<h3>Tipps f&uuml;r den Speaking Test</h3>" +
        "<ul>" +
        "<li><b>Sprich in ganzen S&auml;tzen</b> &ndash; keine Ein-Wort-Antworten. Begr&uuml;nde mit <i>because</i>.</li>" +
        "<li><b>Picture description</b> in drei Schritten: <i>In the picture I can see &hellip; (Gesamt)</i> &rarr; <i>In the foreground/background there is &hellip;</i> &rarr; <i>I think / It seems that &hellip; (Vermutung)</i>.</li>" +
        "<li>Bei Unsicherheit: <i>fillers</i> nutzen statt schweigen: <i>Well, &hellip; / Let me think &hellip; / That&rsquo;s a good question.</i></li>" +
        "<li>Beim Rollenspiel: <b>h&ouml;flich</b> sein, nachfragen, Vorschl&auml;ge machen: <i>How about &hellip;? / Why don&rsquo;t we &hellip;? / Shall we &hellip;?</i></li>" +
        "<li>Sprich <b>langsam und deutlich</b>, lieber einfacher und korrekt als kompliziert und falsch.</li>" +
        "</ul>" +
        "<h3>Useful phrases &ndash; speaking</h3>" +
        "<p><b>Describing a picture:</b> <i>In the foreground / In the background / On the left / On the right / At the top / At the bottom.</i><br>" +
        "<b>Speculating:</b> <i>It looks as if &hellip; / Maybe &hellip; / They might be &hellip; / I&rsquo;m not sure, but &hellip;</i><br>" +
        "<b>Agreeing / disagreeing:</b> <i>I agree with you. / That&rsquo;s true, but &hellip; / I see your point, however &hellip;</i></p>",
      examples: [
        { title: "Part 2 &ndash; Picture description (Mustermonolog)",
          html:
            "<p><b>Task:</b> Describe a photo that shows a busy outdoor market.</p>" +
            "<p style='font-style:italic'>&bdquo;In this picture I can see a busy outdoor market, probably in a town centre. In the foreground there are several stalls selling fresh fruit and vegetables. On the left, a woman is buying apples from a friendly seller. In the background I can see old buildings and a church tower, so it might be an old European town. The weather looks sunny because people are wearing light clothes. I think the photo shows a typical market day, and it seems that the atmosphere is lively and cheerful.&ldquo;</p>" },
        { title: "Part 3 &ndash; Role play (Beispiel-Dialog)",
          html:
            "<p><b>Situation:</b> You and a friend want to plan a free afternoon. Agree on what to do.</p>" +
            "<p style='font-style:italic'>" +
            "<b>A:</b> We&rsquo;ve got a free afternoon &ndash; how about going to the cinema?<br>" +
            "<b>B:</b> Hmm, I&rsquo;m not really in the mood for a film. Why don&rsquo;t we go to the swimming pool instead?<br>" +
            "<b>A:</b> That&rsquo;s a good idea, but it might be very crowded. Shall we go for a bike ride and then get an ice cream?<br>" +
            "<b>B:</b> Perfect! Let&rsquo;s meet at two o&rsquo;clock in front of the school. Don&rsquo;t forget your helmet!<br>" +
            "<b>A:</b> Great, see you then!&rdquo;</p>" }
      ],
      exercises: [
        { id: "e-sp-01", area: "speaking", difficulty: 1,
          prompt: "Introduce yourself in 4&ndash;5 full sentences (name, age, school, hobbies, one plan for the future). Speak aloud, then check against the sample.",
          solutionSteps: [
            "Use full sentences and connectors (and, because, in the future).",
            "Add a reason or detail to each point."
          ],
          answer: "Sample: &bdquo;Hello, my name is Gioele. I&rsquo;m sixteen years old and I go to the Realschule in Mainburg. In my free time I enjoy playing football and listening to music. In the future, I would like to do an apprenticeship, because I prefer practical work to studying at university.&ldquo;" },

        { id: "e-sp-02", area: "speaking", difficulty: 2,
          prompt: "Your partner suggests: &bdquo;Let&rsquo;s do our homework first.&ldquo; You disagree politely and make a different suggestion. What could you say?",
          solutionSteps: [
            "Disagree politely (I see your point, but &hellip;).",
            "Make a counter-suggestion (Why don&rsquo;t we &hellip;? / How about &hellip;?)."
          ],
          answer: "Example: &bdquo;I see your point, but I&rsquo;m really tired now. How about taking a short break first and doing the homework afterwards?&ldquo;" }
      ]
    },

    /* ===================================================== */
    /* BEREICH 7: Vokabeltrainer (EN ↔ DE) */
    /* ===================================================== */
    {
      id: "vokabeln",
      title: "Vokabeltrainer (EN &harr; DE)",
      intro: "<p>Klicke auf eine Zeile, um die &Uuml;bersetzung zu sehen. Decke die rechte Seite ab und pr&uuml;fe dich selbst. Die Vokabeln sind nach den wichtigsten <b>Topics</b> der Pr&uuml;fung sortiert.</p>",
      vokabeln: {
        title: "Wichtige Vokabeln nach Themen",
        items: [
          { front: "<b>&mdash; School &amp; Education &mdash;</b>", back: "&mdash; Schule &amp; Bildung &mdash;" },
          { front: "to take an exam", back: "eine Pr&uuml;fung ablegen" },
          { front: "to pass / to fail an exam", back: "eine Pr&uuml;fung bestehen / durchfallen" },
          { front: "a subject", back: "ein (Schul-)Fach" },
          { front: "homework (uncountable!)", back: "die Hausaufgaben" },
          { front: "an apprenticeship", back: "eine Ausbildung / Lehre" },
          { front: "knowledge", back: "das Wissen" },
          { front: "<b>&mdash; Environment &mdash;</b>", back: "&mdash; Umwelt &mdash;" },
          { front: "the environment", back: "die Umwelt" },
          { front: "climate change", back: "der Klimawandel" },
          { front: "to recycle / waste", back: "recyceln / der Abfall" },
          { front: "to reduce / to save energy", back: "verringern / Energie sparen" },
          { front: "renewable energy", back: "erneuerbare Energie" },
          { front: "pollution", back: "die Verschmutzung" },
          { front: "<b>&mdash; Travel &amp; Daily life &mdash;</b>", back: "&mdash; Reisen &amp; Alltag &mdash;" },
          { front: "to book a ticket", back: "ein Ticket buchen" },
          { front: "luggage (uncountable!)", back: "das Gep&auml;ck" },
          { front: "a journey / a trip", back: "eine Reise / ein Ausflug" },
          { front: "accommodation", back: "die Unterkunft" },
          { front: "to be in time / to be on time", back: "rechtzeitig sein / p&uuml;nktlich sein" },
          { front: "to look forward to (+ -ing)", back: "sich freuen auf" },
          { front: "<b>&mdash; Useful verbs &amp; phrases &mdash;</b>", back: "&mdash; N&uuml;tzliche Verben &amp; Wendungen &mdash;" },
          { front: "to suggest (doing) sth.", back: "etwas vorschlagen" },
          { front: "to decide to do sth.", back: "sich entscheiden, etwas zu tun" },
          { front: "to be afraid of", back: "Angst haben vor" },
          { front: "to make a decision", back: "eine Entscheidung treffen" },
          { front: "to be used to (+ -ing)", back: "gewohnt sein an" },
          { front: "to point out / to mention", back: "darauf hinweisen / erw&auml;hnen" }
        ]
      },
      exercises: [
        { id: "e-vo-01", area: "vokabeln", difficulty: 1,
          prompt: "Translate into English: &bdquo;eine Pr&uuml;fung bestehen&ldquo; and &bdquo;durchfallen&ldquo;.",
          solutionSteps: [
            "Topic: School &amp; Education.",
            "Both are verb + &bdquo;an exam&ldquo;."
          ],
          answer: "to pass an exam &ndash; to fail an exam." },

        { id: "e-vo-02", area: "vokabeln", difficulty: 2,
          prompt: "Two of these words are <b>uncountable</b> in English (no plural -s, no &bdquo;a&ldquo;): homework, luggage, ticket, journey. Which two?",
          solutionSteps: [
            "Think about which nouns you cannot count one by one.",
            "You cannot say &bdquo;a homework&ldquo; or &bdquo;two luggages&ldquo;."
          ],
          answer: "<b>homework</b> and <b>luggage</b> are uncountable (use &bdquo;some homework&ldquo;, &bdquo;a piece of luggage&ldquo;)." }
      ]
    }

  ]
});
