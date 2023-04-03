let locale = "fr",
logo = document.querySelector('#logo'),
button = document.querySelector('button');

const translations = {

  // EN

  "en": {

    "h1": "Study day in the framework of the Modular Laboratory 2022/2023",

    "header-p": "For this study day around the project Species Without Spaces, Thomas Pausz invites speakers whose interdisciplinary practices use ecological fiction (or eco-fiction) as an engine for research and creation.",


    "sch-1": "Reception", "sch-2": "Ecofictions & Interspecies Media", "sch-3": "Thinking with the ruderal plants",
    "sch-4": "Break", "sch-5": "Personal development for houseplants", "sch-6": "Moderated discussion",
    "sch-7": "Lunch Break","sch-8": "Name, describe, plot, tell, feel", "sch-9": "Discussion with the audience",

    "about-1": "The Species Without Spaces project is part of Thomas Pausz's artistic practice, which aims to propose new forms of narratives of the environment and inter-species relations through the creation of media ecosystems mixing documentary work, fiction and digital creation. Pausz's approach is relational, and multiplies points of view, changes of scale and temporality to compose a contemporary experience of the 'more than human' landscape.",
    "about-2": "Beyond or below technological progress, can we conceive poetic correspondences between inhabited landscapes and forms of mediation and spatialization, which mobilize both digital tools and sensitive physical interfaces? What is the place of human and non-human bodies in these devices? In parallel to the images and sounds that are intimately linked to our cultural relationship to the landscape, can we share non-human perceptions, intensities, phantom aromas?",
    "about-3": "As part of his artistic research residency at Laboratoire Modulaire in 2022 and 2023, Thomas Pausz is particularly interested in protected coastal ecosystems and the ecology of intertidal zones in the Normandy region, in partnership with local scientific research institutes such as the C.R.E.C. Marine Station and the Institut Mémoires de l'Édition Contemporaine (IMEC). The Species without Spaces project has ecological stakes and is accompanied by critical reflections and public colloquia on the role of emerging media constellations in the habitability of the environment. These reflections will be the subject of a first publication tracing the artistic research in the fall of 2023.",

    "conf": "Conferences",

    "more": "READ MORE",

    "location": "Study day on Thursday, April 13, 2023 from 10:00 am to 12:30 pm and from 2:00pm to 5:00pm. Auditorium of ésam - site de Caen",

    "art-job": "Artist",

    "conf-thomas-about1": "The Species Without Spaces project is part of Thomas Pausz's artistic practice, which aims to propose new forms of narratives of the environment and inter-species relations through the creation of media ecosystems mixing documentary work, fiction and digital creation. Pausz's approach is relational, and multiplies points of view, changes of scale and temporalities to compose a contemporary experience of the 'more than human' landscape",
    "conf-thomas-about2": "Beyond or below the technological progress, can we conceive poetic correspondences between inhabited landscapes and forms of mediation and spatialization, which mobilize both digital tools and sensitive physical interfaces? What is the place of human and non-human bodies in these devices? In parallel to the images and sounds that are intimately linked to our cultural relationship to the landscape, can we share non-human perceptions, intensities, ghostly aromas?",
    "conf-thomas-about3": "As part of his artistic research residency at Laboratoire Modulaire in 2022 and 2023, Thomas Pausz is particularly interested in protected coastal ecosystems and the ecology of intertidal zones in the Normandy region, in partnership with local scientific research institutes such as the C.R.E.C. Marine Station and the Institut Mémoires de l'Édition Contemporaine (IMEC). The Species without Spaces project has ecological stakes and is accompanied by critical reflections and public colloquia on the role of emerging media constellations in the habitability of the environment. These reflections will be the subject of a first publication tracing the artistic research in the fall of 2023.",
    "about-thomas1": "Thomas Pausz (France / Iceland) is an artist with a Master's degree from the Royal College of Arts in London and a License in Philosophy from the Sorbonne in Paris. Pausz is engaged in transdisciplinary research on the new horizons of technology in relation to the living. Through exhibitions and collaborations with scientific teams and ethical think tanks, Pausz's work contributes to central debates of contemporary society such as the impact of humans in the environment and the future of ecosystems",
    "about-thomas2": "Pausz has initiated a Master's degree in Experimental Design at the Iceland University of The Arts in Reykjavik, where he holds the position of Associate Professor.",

    "conf-teresa-about": "Some plant species are called ruderal, from the Latin rudus, ruderis: rubble, rubble, ruins. Ruderal plants are those that grow spontaneously in anthropized environments, such as the debris heaps evoked by the etymology. Thriving in the everyday ruins of capitalism, ruderal plants are much more than the «weeds» of cities and industrial sites, the victorious «colonizers» of wastelands and urine-saturated tree stands: they help us think about our contemporary condition.",
    "teresa-job": "Researcher, Author",
    "teresa-about": "Teresa Castro is a lecturer in film and audiovisual studies at the Université Sorbonne Nouvelle. Former postdoctoral researcher at the musée du quai Branly (Paris) and at the Max Planck Institute for the History of Science (Berlin), part of her research focuses on eco-criticism and plant life forms in visual culture. In this context, she has published «The Mediated Plant» (E-flux, 2019), «Common Grounds: Thinking With Ruderal Plants About Other (Filmic) Histories» (Philosophies, 2023) co-edited with Perig Pitrou and Marie Rebecchi the collective work Puissance du végétal et cinéma animiste. La vitalité révélée par la technique (Dijon, Presses du réel, 2020).",

    "conf-stephane-about": "Stéphane Degoutin and Gwenola Wagon conduct investigations by searching the Internet, drifting in the space of hyperinformation, telling post-cybernetic fables, tinkering with alternative ways of living, in the form of films, books and installations. They fight against the programmed obsolescence of man, denounce the automation of the treatment of products, of the living and of data, propose to researchers to live in the forest, naked but connected, experiment alternative ways of life in the society of hyper-information, investigate the Umwelt of the Internet, collect the viral images of the society of trash, explore the mythology of the international airport, organize burn-out parties, advocate inter-species love, capture the vital breath that circulates in artificial mountains, drift thanks to geolocation technologies used against the grain, make miniature inhabitable paradises, analyze the city after the public space, hijack a search engine, invent utopias for peripheral areas, survey the virtual globe, roam the Parisian suburbs and criss-cross the concrete islands. ",
    "about-stephane1": "Artist, writer, director and researcher. His research focuses on the societal implications of infrastructures, on humanity after man. His works investigate situations of ambivalence, between war and dance or between architecture and pleasure, and on the programmed obsolescence of man. His artistic production is varied, including films, interactive works, installations, performances and books. Most of his work is built in partnership with Gwenola Wagon. They question the places of the Internet, algorithms, urban lifestyle, work and conduct experiments on behavior.",
    "about-stephane2": "In 2006, Stéphane Degoutin published Prisonniers volontaires du rêve américain, an essay on the phenomenon of closed residential subdivisions in the United States. In 2019, he is defending a thesis in spatial planning and urbanism entitled Société-nuage, under the direction of Antoine Picon at the Université Paris-Est-Marne-la-Vallée. He teaches at the École Nationale Supérieure des Arts Décoratifs. In 2015, he directed with Gwenola Wagon the film World Brain, which combines an investigation into the infrastructure of the Internet with a fictional story featuring a group of researchers going into the forest to try to survive using only the Internet.",
    "about-stephane3": "In 2019, he is directing with Pierre Cassou-Noguès and Gwenola Wagon the film Erewhon, which transposes the argument of Samuel Butler's 1872 novel of the same name to contemporary times.",

    "about-conf-kamil": "For as long as I've been an interface user, I've developed a passion for what goes on in screens. More recently, I noticed that in some screens you can observe others. In the creation of a fiction, it is also necessary to build fictional interfaces. This effect of setting in abyss with the screen in the screen extends the fiction of the universe in which it anchors us. I look at the computer screens with the same fascination as the one felt during a journey, to the discovery of a foreign television. A digital interface contains texts, language, typography, colors and images that are specific to a culture, a society, a civilization. Through this object we can discover and/or identify a world. Do the representations of these everyday technical objects have consequences on cinematographic creation? How are fictitious interfaces for the cinema conceived and realized? Who are the authors of these creations? What are the specificities of fictional interface design? Does this practice inspire interaction design?",
    "about-kamil1": "Kamil IZARET is a designer who focuses on human-computer interface design, with particular expertise in user interfaces. His passion for technology and film has led him to explore interface design in fiction. He recently completed a research paper on fictional interfaces.",
    "about-kamil2": "Since 2022 he has been a visiting lecturer at Iceland University of the Arts, participating in an artistic research on media ecosystems and interspecies relations.",

    "about-pauline1": "Pauline Briand is a journalist, author, environmental lawyer and graduate in ecosystem management sciences, she is a specialist in ecological issues and especially biodiversity. She has worked in consulting and law firms, in communication agencies and for associations on these subjects. She has also written for museums, publishing and online media",
    "about-pauline2": "Able to quickly grasp new themes, she has produced analyses and reports on a wide range of topics from the use of artificial intelligence in personal insurance, to international mechanisms to implement best practices in agricultural matters, to the circular economy.",
    "about-conf-pauline": "How to write from global changes and the reflections that accompany them? How to make tangible what is barely perceptible and give life to thought? Journalist and author, Pauline Briand will ask the question of how to put ecological issues into a narrative",
    "job-pauline": "Journalist, Author",
  },

  // FR

  "fr": {

    "h1": "Journée d’étude dans le cadre du Laboratoire Modulaire 2022/2023",

    "header-p": "Pour cette journée d'études autour du projet Espèces Sans Espaces, Thomas Pausz invite des intervenants dont les pratiques interdisciplinaires utilisent la fiction écologique (ou éco fiction) comme moteur de recherche et de création.",

    "sch-1": "Accueil", "sch-2": "Écofictions & Média Interespèces", "sch-3": "Penser avec les plantes rudérales",
    "sch-4": "Pause", "sch-5": "Développement personnel pour plantes d’intérieur", "sch-6": "Discussion modérée",
    "sch-7": "Pause méridienne","sch-8": "Nommer, décrire, tramer, dire, ressentir", "sch-9": "Échanges avec le public",

    "about-1": "Le projet Espèces Sans Espaces s’inscrit dans la pratique artistique de Thomas Pausz, qui vise à proposer de nouvelles formes de narrations de l’environnement et des relations inter-espèces par la création d'écosystèmes médiatiques mêlant travail documentaire, fiction et création numérique. La démarche de Pausz est relationnelle, et multiplie les points de vue, les changements d’échelles et de temporalités pour composer une experience contemporaine du paysage 'plus qu’humain'.",
    "about-2": "Au-delà ou en-deçà du progrès technologique, pouvons-nous concevoir des correspondances poétiques entre paysages habités et formes de médiation et de spatialisation, qui mobilisent à la fois des outils digitaux et des interfaces physiques sensibles? Quelle est la place des corps humains et non-humains dans ces dispositifs? En parallèle aux images et sons qui sont intimement liées à notre relation culturelle au paysage, pouvons-nous partager des perceptions non-humaines, des intensités, des arômes fantômes?",
    "about-3": "Dans le cadre de sa résidence de recherche artistique au Laboratoire Modulaire en 2022 et 2023, Thomas Pausz s’intéresse particulièrement aux écosystèmes côtiers protégés et à l’écologie des zones intertidales de la région Normandie, en partenariat avec des instituts de recherches scientifiques locaux comme la Station Marine du C.R.E.C. et l’Institut Mémoires de l'Édition Contemporaine (IMEC). Le projet Espèces sans Espaces a des enjeux écologiques et s’accompagne de réflexions critiques et de colloques publics sur le rôle des constellations médiatiques émergentes dans l’habitabilité de l'environnement. Ces réflexions feront l’objet d’une première publication retraçant la recherche artistique à l'automne 2023.",

    "conf": "Conférences",

    "more": "EN SAVOIR PLUS",

    "location": "Journée d’études le jeudi 13 avril 2023 de 10h à 12h30 et de 14h à 17h. Auditorium de l’ésam – site de Caen",

    "art-job": "Artiste",

    "conf-thomas-about1": "Le projet Espèces Sans Espaces s’inscrit dans la pratique artistique de Thomas Pausz, qui vise à proposer de nouvelles formes de narrations de l’environnement et des relations inter-espèces par la création d'écosystèmes médiatiques mêlant travail documentaire, fiction et création numérique. La démarche de Pausz est relationnelle, et multiplie les points de vue, les changements d’échelles et de temporalités pour composer une experience contemporaine du paysage 'plus qu’humain'",
    "conf-thomas-about2": "Au-delà ou en-deçà du progrès technologique, pouvons-nous concevoir des correspondances poétiques entre paysages habités et formes de médiation et de spatialisation, qui mobilisent à la fois des outils digitaux et des interfaces physiques sensibles? Quelle est la place des corps humains et non-humains dans ces dispositifs? En parallèle aux images et sons qui sont intimement liées à notre relation culturelle au paysage, pouvons-nous partager des perceptions non-humaines, des intensités, des arômes fantômes?",
    "conf-thomas-about3": "Dans le cadre de sa résidence de recherche artistique au Laboratoire Modulaire en 2022 et 2023, Thomas Pausz s’intéresse particulièrement aux écosystèmes côtiers protégés et à l’écologie des zones intertidales de la région Normandie, en partenariat avec des instituts de recherches scientifiques locaux comme la Station Marine du C.R.E.C. et l’Institut Mémoires de l'Édition Contemporaine (IMEC). Le projet Espèces sans Espaces a des enjeux écologiques et s’accompagne de réflexions critiques et de colloques publics sur le rôle des constellations médiatiques émergentes dans l’habitabilité de l'environnement. Ces réflexions feront l’objet d’une première publication retraçant la recherche artistique à l'automne 2023.",
    "about-thomas1": "Thomas Pausz (France / Islande) est un artiste diplômé du Master du Royal College of Arts de Londres et titulaire d’une License de Philosophie de la Sorbonne à Paris. Pausz est engagé dans une recherche transdisciplinaire sur les nouveaux horizons de la technologie en relation au vivant. à travers expositions et collaborations avec des équipes scientifiques et comités de réflexion éthiques, le travail de Pausz contribue aux débats centraux de la société contemporaine tels que l’impact de l’humain dans l’environnement et le futur des écosystèmes.",
    "about-thomas2": "Pausz a initié un Master en Design Expérimental à l’Iceland University of The Arts de Reykjavik, où il occupe la position de Professeur Associé.",

    "conf-teresa-about": "Certaines espèces végétales sont qualifiées de rudérales, du latin rudus, ruderis : décombres, gravats, ruines. Les plantes rudérales sont celles qui poussent spontanément dans des milieux anthropisés, comme les tas de débris évoqués par l’étymologie. S’épanouissant dans les ruines quotidiennes du capitalisme, les plantes rudérales sont bien plus que les « mauvaises herbes » des villes et des sites industriels, les « colonisatrices » victorieuses des friches et des pieds d’arbre saturés d’urine : elles nous aident à penser notre condition contemporaine.",
    "teresa-job": "Chercheuse, Autrice",
    "teresa-about": "Teresa Castro est maîtresse de conférences en études cinématographiques et audiovisuelles à l’Université Sorbonne Nouvelle. Ancienne chercheuse postdoctorale au musée du quai Branly (Paris) et à l’Institut Max Planck d’histoire des sciences (Berlin), une partie de ses recherches porte sur l’éco-criticisme et les formes de vie végétales dans la culture visuelle. Dans ce cadre, elle a publié «The Mediated Plant» (E-flux, 2019), «Common Grounds: Thinking With Ruderal Plants About Other (Filmic) Histories» (Philosophies, 2023) coédité avec Perig Pitrou et Marie Rebecchi l’ouvrage collectif Puissance du végétal et cinéma animiste. La vitalité révélée par la technique (Dijon, Presses du réel, 2020).",

    "conf-stephane-about": "Stéphane Degoutin et Gwenola Wagon conduisent des enquêtes en fouillant Internet, dérivent dans l’espace de l’hyperinformation, racontent des fables post-cybernétiques, bricolent des modes de vie alternatifs, sous la forme de films, de livres et d’installations. Ils luttent contre l’obsolescence programmée de l’homme, dénoncent l’automatisation du traitement des produits, du vivant et des données, proposent à des chercheurs de vivre dans la forêt, nus mais connectés, expérimentent des modes de vie alternatifs dans la société de l’hyper-information, enquêtent sur l'Umwelt d'Internet, collectent les images virales de la société du trash, explorent la mythologie de l’aéroport international, organisent des burn-out parties, prônent l’amour inter-espèces, capturent le souffle vital qui circule dans les montagnes artificielles, dérivent grâce à des technologies de géolocalisation utilisées à contre-emploi, fabriquent des paradis miniatures habitables, analysent la ville après l'espace public, détournent un moteur de recherche, inventent des utopies pour des zones périphériques, arpentent le globe virtuel, parcourent les banlieues parisiennes et sillonnent les îles de béton.",
    "about-stephane1": "Artiste, écrivain, réalisateur et chercheur. Ses recherches portent sur les implications sociétales des infrastructures, sur l’humanité après l’homme. Ses œuvres enquêtent sur des situations d’ambivalence, entre guerre et danse ou entre architecture et plaisir, et sur l’obsolescence programmée de l’homme. Il réalise une production artistique variée, comportant des films, des œuvres interactives, des installations, des performances et des livres. La majorité de son travail est construit en partenariat avec Gwenola Wagon. Ils s’interrogent sur les lieux d’Internet, les algorithmes, le mode de vie urbain, le travail et mènent des expériences sur le comportement.",
    "about-stephane2": "En 2006, Stéphane Degoutin publie Prisonniers volontaires du rêve américain, essai sur le phénomène des lotissements résidentiels fermés aux États-Unis. Il soutient, en 2019, une thèse en aménagement de l'espace, urbanisme intitulée Société-nuage, sous la direction d'Antoine Picon à l'Université Paris-Est-Marne-la-Vallée. Il enseigne à l’École Nationale Supérieure des Arts Décoratifs. En 2015, il réalise avec Gwenola Wagon le film World Brain, qui combine une enquête sur les infrastructures d'Internet et une fiction mettant en scène un groupe de chercheurs partant dans la forêt pour tenter d'y survivre en utilisant uniquement Internet.",
    "about-stephane3": "En 2019, il réalise avec Pierre Cassou-Noguès et Gwenola Wagon le film Erewhon, qui transpose l'argumentaire du roman éponyme de 1872 de Samuel Butler à l'époque contemporaine.",

    "about-conf-kamil": "Depuis aussi longtemps que je suis devenu utilisateur d’interfaces, j’ai développé une passion pour ce qu’il se passe dans les écrans. Plus récemment, j’ai remarqué que dans certains écrans on pouvait en observer d’autres. Dans la création d'une fiction, il faut également construire des interfaces fictionnelles. Cet effet de mise en abîme avec l'écran dans l'écran prolonge la fiction de l’univers dans lequel elle nous ancre. Je regarde les écrans informatiques avec la même fascination que celle éprouvée lors d’un voyage, à la découverte d’une télévision étrangère. Une interface numérique comporte des textes, une langue, des typographies, des couleurs et des images qui sont propres à une culture, une société, une civilisation. À travers cet objet on peut découvrir et/ou identifier un monde. Les représentations de ces objets techniques du quotidien, ont-elles des conséquences sur la création cinématographique ? Comment sont pensées et réalisées les interfaces fictives pour le cinéma ? Qui sont les auteurs de ces créations ? Quelles sont les spécificités du design des interfaces fictionnelles ? Cette pratique inspire-t-elle le design d’interaction?",
    "about-kamil1": "Kamil IZARET est un designer qui se concentre sur la conception d'interfaces homme-machine, avec une expertise particulière dans les interfaces utilisateur. Sa passion pour la technologie et le cinéma l'a conduit à explorer la conception d'interfaces dans la fiction. Il a récemment achevé un mémoire de recherche sur les interfaces fictionnelles.",
    "about-kamil2": "Depuis 2022 il intervient à l’Iceland University of the Arts, et participe à une recherche artistique sur les écosystèmes médiatiques et les relations inter-espèces.",

    "about-pauline1": "Pauline Briand est journaliste, autrice, juriste en droit de l’environnement et diplômée en sciences de gestion des écosystèmes, elle est spécialiste des questions d’écologie et tout particulièrement de biodiversité. Sur ces sujets, elle a travaillé en cabinet de conseil et d’avocats, en agence communication et pour des associations. Elle a également écrit pour des musées, pour l’édition et des médias en ligne.",
    "about-pauline2": "Capable de se saisir rapidement de nouvelles thématiques, elle a produit des analyses et des rapports sur un grand nombre de sujets allant de l’utilisation de l’intelligence artificielle dans l’assurance de personnes, aux mécanismes internationaux visant à mettre en place de meilleures pratiques en matières agricoles, à l’économie circulaire.",
    "about-conf-pauline": "Comment écrire à partir des changements globaux et des réflexions qui les accompagnent ? Comment rendre tangible ce qui est à peine perceptible et donner vie à la pensée ? Journaliste et autrice, Pauline Briand posera la question de la mise en récit des enjeux écologiques.",
    "job-pauline": "Journaliste, Autrice",

  },

};

document.addEventListener("DOMContentLoaded", () => {

  localeSwitcher()

});

button.addEventListener("click", () => {
  if (locale === "fr"){
    locale = "en"
  } else {
    locale = "fr"
  }
  localeSwitcher()
})

function localeSwitcher() {
  document

  .querySelectorAll("[data-i18n-key]")

  .forEach(translateElement);


  logo.src = "../img/logo_" + locale + ".svg"

}

function translateElement(element) {

  const key = element.getAttribute("data-i18n-key");

  const translation = translations[locale][key];

  element.innerText = translation;

  console.log("Content Translated")

}