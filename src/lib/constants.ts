export const SITE = {
  name: "La Mia Patata",
  tagline: "Un solo ingrediente. Infinite possibilità.",
  description: "Gastronomia specializzata in ricette a base di patata, senza servizio al tavolo",
  phone: "+39 0541 000000",
  phoneLink: "tel:+390541000000",
  email: "info@lamiapatata.it",
  emailLink: "mailto:info@lamiapatata.it",
  whatsapp: "https://wa.me/390000000000",
  address: "Viale Dante / Via Ceccarini, Riccione (RN)",
  mapsUrl: "https://maps.google.com/?q=44.0063,12.6566",
  hours: "12:00 - 24:00",
  hoursDetailed: "Lunedì - Domenica: 12:00 - 24:00",
  seats: "40-50",
  social: {
    instagram: "https://instagram.com/lamiapatata",
    tiktok: "https://tiktok.com/@lamiapatata",
    facebook: "https://facebook.com/lamiapatata",
  },
} as const;

export type AllergenCode = "GF" | "U" | "L" | "P" | "C" | "M";

export const ALLERGEN_LABELS: Record<AllergenCode, string> = {
  GF: "Senza Glutine",
  U: "Uova",
  L: "Latticini",
  P: "Pesce",
  C: "Crostacei",
  M: "Molluschi",
};

export interface MenuItem {
  name: string;
  description: string;
  longDescription?: string;
  ingredients?: string[];
  allergens: AllergenCode[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "fritti",
    name: "Fritti",
    description: "Croccantezze multicolor in farina gluten free. Dalla buccia ai fiammiferi arcobaleno.",
    image: "/images/menu-fritti.jpg",
    items: [
      {
        name: "Buccia Multicolor",
        description: "Bucce di patate miste croccanti in farina GF",
        longDescription: "Sottili e croccanti bucce di patate gialle, rosse e viola, fritte alla perfezione. Uno snack leggero e saporito che valorizza ogni parte del tubero, offrendo una consistenza unica e un gusto rustico.",
        ingredients: ["Patate gialle", "Patate rosse", "Patate viola", "Farina di riso (GF)", "Olio di semi di girasole alto oleico", "Sale marino"],
        allergens: ["GF"],
        image: "/images/item-fritti-buccia.jpg"
      },
      {
        name: "Stick Gialla",
        description: "Bastoncini di patata gialla fritta in farina GF",
        longDescription: "Il classico intramontabile: bastoncini di patata a pasta gialla selezionata, croccanti fuori e morbidi dentro. Preparati con una panatura leggera di farina senza glutine per una doratura perfetta e una digeribilità superiore.",
        ingredients: ["Patate a pasta gialla", "Farina di riso (GF)", "Olio di semi di girasole", "Sale fino"],
        allergens: ["GF"],
        image: "/images/item-fritti-stick.jpg"
      },
      {
        name: "Chips Multicolor",
        description: "Chips di patate colorate, leggere e croccanti",
        longDescription: "Chips artigianali tagliate sottilissime a mano, realizzate con un mix equilibrato di patate gialle, rosse e viola. La loro croccantezza cristallina esalta i diversi sapori naturali delle varietà di patata utilizzate.",
        ingredients: ["Patate gialle", "Patate rosse", "Patate viola", "Olio di semi di girasole", "Sale marino"],
        allergens: ["GF"],
        image: "/images/item-fritti-chips.jpg"
      },
      {
        name: "Fiammiferi Multicolor",
        description: "Julienne di patate, zucchine e carote in farina GF",
        longDescription: "Una julienne vivace e colorata di patate, zucchine e carote fresche. La panatura leggera gluten-free avvolge ogni 'fiammifero', creando un mix croccante che esalta la dolcezza naturale delle verdure.",
        ingredients: ["Patate", "Zucchine fresche", "Carote", "Farina di riso (GF)", "Olio di semi di girasole", "Sale"],
        allergens: ["GF"],
        image: "/images/item-fritti-fiammiferi.jpg"
      },
      {
        name: "Twister",
        description: "Patata rossa o gialla arrotolata su spiedo",
        longDescription: "Una scenografica spirale di patata intera (varietà rossa o gialla) sapientemente tagliata su uno spiedo e fritta intera. Il risultato è una consistenza sorprendente: croccante lungo i bordi e tenera al cuore.",
        ingredients: ["Patata intera selezionata", "Olio di semi di girasole", "Sale marino", "Mix di spezie mediterranee (opzionale)"],
        allergens: ["GF"],
        image: "/images/item-fritti-twister.jpg"
      },
    ],
  },
  {
    id: "forno",
    name: "Forno",
    description: "Patate aromatizzate con olio EVO, aglio, rosmarino, salvia e timo.",
    image: "/images/menu-forno.jpg",
    items: [
      {
        name: "Gialla al Rosmarino",
        description: "Olio EVO, aglio, rosmarino, salvia, timo",
        longDescription: "Cubetti di patata gialla cotti lentamente al forno fino a ottenere una crosticina dorata. L'aromatizzazione classica con olio extravergine di oliva e un trito fresco di erbe mediterranee regala un profumo e un sapore di casa.",
        ingredients: ["Patate a pasta gialla", "Olio EVO", "Aglio in camicia", "Rosmarino fresco", "Salvia", "Timo", "Sale e pepe"],
        allergens: ["GF"],
        image: "/images/item-forno-rosmarino.jpg"
      },
      {
        name: "Rossa al Parmigiano e Speck",
        description: "Crema di parmigiano, burro, latte, noce moscata, speck",
        longDescription: "Una ricetta ricca e avvolgente: patate rosse al forno condite con una vellutata crema al Parmigiano Reggiano. Il tocco finale di speck croccante aggiunge una nota sapida e affumicata che equilibra la dolcezza della crema.",
        ingredients: ["Patate rosse", "Parmigiano Reggiano DOP", "Speck dell'Alto Adige", "Latte intero", "Burro", "Noce moscata", "Sale"],
        allergens: ["GF", "L"],
        image: "/images/item-forno-speck.jpg"
      },
      {
        name: "Gialla Soffiate",
        description: "Patata gialla soffice al forno, aromatizzata",
        longDescription: "Patate gialle lavorate per ottenere una consistenza interna soffice come una nuvola, mantenendo una superficie esterna delicatamente croccante. Un contorno elegante e leggero, ideale per apprezzare la purezza dell'ingrediente.",
        ingredients: ["Patate gialle", "Olio EVO", "Aromi naturali", "Sale marino"],
        allergens: ["GF"],
        image: "/images/item-forno-soffiate.jpg"
      },
    ],
  },
  {
    id: "puree",
    name: "Purè",
    description: "Purè vellutato con patata, burro e parmigiano. La comfort food italiana nella sua essenza.",
    image: "/images/menu-puree.jpg",
    items: [
      {
        name: "Polpette al Sugo",
        description: "Polpette di vitello con pomodoro pelato e scalogno",
        longDescription: "Il massimo della tradizione italiana: un purè di patate liscio e burroso che accoglie polpette di vitello tenere, cotte lentamente in un sugo di pomodoro profumato allo scalogno. Un piatto che scalda il cuore.",
        ingredients: ["Patate", "Carne di vitello scelta", "Pomodori pelati San Marzano", "Scalogno", "Burro", "Parmigiano Reggiano", "Latte", "Uova", "Sale e basilico"],
        allergens: ["GF", "U", "L"],
        image: "/images/item-puree-polpette.jpg"
      },
      {
        name: "Polipo e Olive Nere",
        description: "Polipo, aglio, prezzemolo, vino bianco, olive e capperi",
        longDescription: "Un abbinamento gourmet che porta il mare nel piatto. Il purè vellutato fa da base a un polipo tenerissimo, saltato in padella con olive taggiasche, capperi e una sfumatura di vino bianco per un gusto mediterraneo intenso.",
        ingredients: ["Patate", "Polipo fresco", "Olive nere taggiasche", "Capperi", "Vino bianco", "Aglio", "Prezzemolo fresco", "Olio EVO", "Burro", "Sale"],
        allergens: ["GF", "L", "M"],
        image: "/images/item-puree-polipo-2.jpg"
      },
    ],
  },
  {
    id: "gnocchi",
    name: "Gnocchi",
    description: "Gnocchi di patata in farina gluten free, soffici e leggeri, con sughi d'autore.",
    image: "/images/menu-gnocchi.jpg",
    items: [
      {
        name: "4 Formaggi",
        description: "Parmigiano, gorgonzola, taleggio, scamorza",
        longDescription: "Gnocchi di patate fatti in casa, conditi con una salsa densa e cremosa realizzata fondendo quattro eccellenze casearie italiane. Il mix perfetto tra la dolcezza del taleggio e il carattere del gorgonzola.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Parmigiano Reggiano", "Gorgonzola DOP", "Taleggio", "Scamorza affumicata", "Latte", "Burro", "Sale"],
        allergens: ["GF", "U", "L"],
        image: "/images/item-gnocchi-4formaggi.jpg"
      },
      {
        name: "Carbonara",
        description: "Pecorino, uovo, pepe nero, parmigiano e bacon",
        longDescription: "La celebre ricetta romana reinterpretata sui nostri gnocchi. Una crema dorata a base di tuorli d'uovo e pecorino romano, arricchita da pepe nero macinato fresco e bacon croccante per un'esplosione di sapore sapido e deciso.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Tuorli d'uovo", "Pecorino Romano DOP", "Parmigiano Reggiano", "Bacon croccante", "Pepe nero", "Sale"],
        allergens: ["GF", "U", "L"],
        image: "/images/item-gnocchi-carbonara.jpg"
      },
      {
        name: "Sorrentina",
        description: "Pomodori pelati, scalogno, basilico, parmigiano",
        longDescription: "Un classico della cucina campana: gnocchi morbidi immersi in un sugo di pomodoro San Marzano verace, profumato al basilico fresco. Una spolverata generosa di parmigiano completa questo piatto fresco e solare.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Pomodori pelati", "Scalogno", "Basilico fresco", "Parmigiano Reggiano", "Olio EVO", "Sale"],
        allergens: ["GF", "U", "L"],
        image: "/images/item-gnocchi-sorrentina.jpg"
      },
      {
        name: "Funghi e Salsiccia",
        description: "Champignon, scalogno, salsiccia artigianale, vino rosso",
        longDescription: "Un condimento rustico e saporito: funghi champignon trifolati con salsiccia di suino artigianale, sfumata al vino rosso per una nota aromatica profonda. Un abbinamento autunnale che si sposa divinamente con la morbidezza degli gnocchi.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Funghi champignon", "Salsiccia fresca di suino", "Vino rosso", "Scalogno", "Olio EVO", "Sale e prezzemolo"],
        allergens: ["GF", "U"],
        image: "/images/item-gnocchi-funghi.jpg"
      },
      {
        name: "Gamberi e Zucchine",
        description: "Gamberi argentini al brandy, zucchine con basilico",
        longDescription: "Un'opzione raffinata e leggera: gamberi argentini sfumati al brandy che incontrano la dolcezza delle zucchine spadellate. Il basilico fresco aggiunge una nota aromatica che esalta la freschezza degli ingredienti di mare.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Gamberi argentini", "Zucchine", "Brandy", "Aglio", "Basilico fresco", "Olio EVO", "Sale"],
        allergens: ["GF", "U", "C"],
        image: "/images/item-gnocchi-gamberi.jpg"
      },
    ],
  },
  {
    id: "barchetta",
    name: "Barchetta",
    description: "Patata lessa a forma di barchetta, riempita con ingredienti freschi e creativi.",
    image: "/images/menu-barchetta.jpg",
    items: [
      {
        name: "Viola Salmone",
        description: "Patata viola, salmone marinato agli agrumi, guacamole",
        longDescription: "Una splendida patata viola tagliata a barchetta, farcita con un fresco guacamole artigianale e sormontata da tartare di salmone marinato agli agrumi. Un piatto colorato, salutare e ricco di contrasti gustativi.",
        ingredients: ["Patata viola", "Salmone fresco", "Avocado", "Lime", "Arancia", "Olio EVO", "Sale e pepe rosa"],
        allergens: ["P"],
        image: "/images/item-barchetta-salmone.jpg"
      },
      {
        name: "Viola Polipo",
        description: "Patata viola, polipo, olive taggiasche e capperi",
        longDescription: "L'eleganza della patata viola si sposa con la tradizione marinara. La barchetta accoglie un'insalata di polipo tenero, olive taggiasche saporite e capperi dissalati, il tutto condito con olio extravergine d'oliva di alta qualità.",
        ingredients: ["Patata viola", "Polipo fresco", "Olive taggiasche", "Capperi", "Prezzemolo", "Olio EVO", "Sale"],
        allergens: ["M"],
        image: "/images/item-barchetta-polipo.jpg"
      },
      {
        name: "Rossa Funghi, Salsiccia e Taleggio",
        description: "Patata rossa con funghi, salsiccia e taleggio fondente",
        longDescription: "Una proposta intensa e gratificante: barchetta di patata rossa farcita con un mix di funghi saltati e salsiccia artigianale, il tutto gratinato con taleggio DOP fondente che unisce i sapori in un abbraccio cremoso.",
        ingredients: ["Patata rossa", "Funghi misti", "Salsiccia di suino", "Taleggio DOP", "Olio EVO", "Aglio", "Sale"],
        allergens: ["L"],
        image: "/images/item-barchetta-funghi.jpg"
      },
      {
        name: "Gialla Picanha e Chimichurri",
        description: "Patata gialla with picanha alle erbe e salsa chimichurri",
        longDescription: "Un incontro tra Italia e Sud America: barchetta di patata gialla che ospita fettine di picanha di manzo cucinata a bassa temperatura e rifinita con una salsa chimichurri aromatica e leggermente piccante.",
        ingredients: ["Patata gialla", "Picanha di manzo", "Prezzemolo", "Origano", "Aglio", "Aceto di vino rosso", "Peperoncino", "Olio EVO", "Sale"],
        allergens: [],
        image: "/images/item-barchetta-picanha.jpg"
      },
    ],
  },
  {
    id: "schiacciata",
    name: "Schiacciata",
    description: "Patata schiacciata e croccante come pane, farcita con ingredienti selezionati.",
    image: "/images/menu-schiacciata.jpg",
    items: [
      {
        name: "Viola Funghi e Salsiccia",
        description: "Schiacciata di patata viola con funghi e salsiccia",
        longDescription: "Due dischi di patata viola schiacciati e cotti sulla piastra fino a diventare croccanti, che racchiudono un ripieno generoso di funghi trifolati e salsiccia saporita. Una reinterpretazione innovativa del panino classico.",
        ingredients: ["Patata viola", "Funghi champignon", "Salsiccia fresca", "Olio EVO", "Aglio", "Sale"],
        allergens: [],
        image: "/images/item-schiacciata-funghi.jpg"
      },
      {
        name: "Rossa Speck e Brie",
        description: "Schiacciata di patata rossa con speck e brie cremoso",
        longDescription: "La schiacciata di patata rossa, sottile e croccante, fa da guscio a fette di speck saporito e brie fondente. Il calore della patata scioglie dolcemente il formaggio, creando un contrasto perfetto con la sapidità dello speck.",
        ingredients: ["Patata rossa", "Speck dell'Alto Adige", "Formaggio Brie", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/images/item-schiacciata-speck.jpg"
      },
    ],
  },
  {
    id: "waffle",
    name: "Waffle",
    description: "Waffle di patata croccante fuori, morbido dentro. Base per abbinamenti gourmet.",
    image: "/images/menu-waffle.jpg",
    items: [
      {
        name: "Rossa Uovo e Avocado",
        description: "Waffle di patata rossa, uovo sodo, avocado e salsa all'erba cipollina",
        longDescription: "Un waffle salato innovativo preparato con patata rossa, servito con fette di avocado fresco, uovo sodo biologico e una delicata salsa allo yogurt arricchita da erba cipollina fresca. Perfetto per un brunch o un pranzo leggero.",
        ingredients: ["Patata rossa", "Uovo sodo", "Avocado", "Yogurt greco", "Erba cipollina", "Olio EVO", "Sale"],
        allergens: ["U", "L"],
        image: "/images/item-waffle-uovo.jpg"
      },
      {
        name: "Gialla Salmone e Burro Salato",
        description: "Waffle di patata gialla, salmone fresco marinato e burro salato",
        longDescription: "Il waffle di patata gialla acquista una nota lussuosa grazie all'abbinamento con salmone fresco marinato in casa. Una punta di burro salato di alta qualità si scioglie sul waffle caldo, esaltando la sapidità del pesce.",
        ingredients: ["Patata gialla", "Salmone fresco marinato", "Burro salato", "Aneto", "Pepe nero", "Sale"],
        allergens: ["P", "L"],
        image: "/images/item-waffle-salmone.jpg"
      },
    ],
  },
  {
    id: "vapore",
    name: "Vapore",
    description: "Patate al vapore, leggere e digeribili. Abbinamenti freschi e mediterranei.",
    image: "/images/menu-vapore.jpg",
    items: [
      {
        name: "Mediterranea",
        description: "Feta greca, San Marzano, cipolla di Tropea, olive taggiasche, fiori di cappero",
        longDescription: "La freschezza assoluta: patate al vapore servite fredde con un'esplosione di sapori mediterranei. Feta greca sbriciolata, pomodori San Marzano dolcissimi, cipolla di Tropea croccante, olive e fiori di cappero profumati.",
        ingredients: ["Patate", "Feta greca", "Pomodori San Marzano", "Cipolla rossa di Tropea", "Olive taggiasche", "Fiori di cappero", "Origano", "Olio EVO"],
        allergens: ["L"],
        image: "/images/item-vapore-mediterranea.jpg"
      },
      {
        name: "Polipo, Olive e Julienne",
        description: "Polipo con julienne di verdure, olive taggiasche, prezzemolo e limone",
        longDescription: "Un'insalata di mare leggera e raffinata. Il polipo tenero cotto al vapore incontra la croccantezza di una julienne di verdure fresche di stagione, arricchita da olive taggiasche e un'emulsione di limone e olio EVO.",
        ingredients: ["Patate", "Polipo fresco", "Zucchine", "Carote", "Olive taggiasche", "Limone", "Prezzemolo", "Olio EVO", "Sale"],
        allergens: ["M"],
        image: "/images/item-vapore-polipo.jpg"
      },
      {
        name: "Gamberi e Zucchine",
        description: "Gamberi argentini e zucchine con olio EVO e basilico",
        longDescription: "Un abbinamento semplice ma perfetto. Patate e gamberi argentini cotti dolcemente al vapore, serviti con zucchine novelle spadellate e un profumo intenso di basilico fresco. Una scelta salutare senza rinunciare al gusto.",
        ingredients: ["Patate", "Gamberi argentini", "Zucchine", "Basilico fresco", "Olio EVO", "Sale marino"],
        allergens: ["C"],
        image: "/images/item-vapore-gamberi.jpg"
      },
      {
        name: "Uovo, Avocado e Salmone",
        description: "Uovo sodo, avocado fresco e salmone marinato",
        longDescription: "Un piatto bilanciato e ricco di nutrienti: le patate al vapore fanno da base a fette di avocado cremoso, uovo sodo cotto alla perfezione e filetti di salmone marinato agli agrumi. Una proposta completa e soddisfacente.",
        ingredients: ["Patate", "Salmone marinato", "Avocado", "Uovo sodo", "Olio EVO", "Sale", "Pepe nero"],
        allergens: ["U", "P"],
        image: "/images/item-vapore-uovo.jpg"
      },
    ],
  },
  {
    id: "jacket",
    name: "Jacket",
    description: "La patata intera al forno, aperta e ripiena generosamente. Il piatto signature.",
    image: "/images/menu-jacket.jpg",
    items: [
      {
        name: "Carbonara",
        description: "Pecorino romano, uovo, pepe nero, parmigiano e bacon croccante",
        longDescription: "La nostra interpretazione della Jacket Potato romana. Una patata intera di grandi dimensioni, cotta al forno fino a diventare tenera, aperta e farcita con una ricca crema carbonara, pecorino e bacon saporito.",
        ingredients: ["Patata intera", "Tuorli d'uovo", "Pecorino Romano", "Parmigiano Reggiano", "Bacon croccante", "Pepe nero", "Sale"],
        allergens: ["U", "L"],
        image: "/images/item-jacket-carbonara.jpg"
      },
      {
        name: "Speck e Brie",
        description: "Speck croccante e brie fondente",
        longDescription: "Una Jacket Potato classica e intramontabile: il calore del tubero cotto al forno fonde lentamente le fette di brie, mentre lo speck croccante aggiunge una nota di fumo e croccantezza a ogni boccone.",
        ingredients: ["Patata intera", "Speck dell'Alto Adige", "Formaggio Brie", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/images/item-jacket-speck.jpg"
      },
      {
        name: "Salsiccia, Porcini e Gorgonzola",
        description: "Salsiccia artigianale, funghi porcini e gorgonzola DOP",
        longDescription: "Per i palati più esigenti: patata intera farcita con funghi porcini trifolati, salsiccia saporita e una generosa dose di gorgonzola DOP che rende il tutto incredibilmente cremoso e saporito.",
        ingredients: ["Patata intera", "Funghi porcini", "Salsiccia di suino", "Gorgonzola DOP", "Olio EVO", "Aglio", "Sale"],
        allergens: ["L"],
        image: "/images/item-jacket-salsiccia.jpg"
      },
    ],
  },
  {
    id: "tramezzino",
    name: "Tramezzino",
    description: "Il tramezzino reinterpretato: due fette di patata schiacciata al posto del pane.",
    image: "/images/menu-tramezzino.jpg",
    items: [
      {
        name: "Prosciutto Cotto e Brie",
        description: "Prosciutto cotto di qualità e brie cremoso",
        longDescription: "L'idea geniale: due fette di patata schiacciate e grigliate che sostituiscono il pane, farcite con prosciutto cotto scelto e brie fondente. Un'alternativa senza glutine al tramezzino tradizionale, calda e filante.",
        ingredients: ["Patate", "Prosciutto cotto di alta qualità", "Formaggio Brie", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/images/item-tramezzino-prosciutto.jpg"
      },
      {
        name: "Speck, Taleggio e Zucchine",
        description: "Speck stagionato, taleggio fondente e zucchine grigliate",
        longDescription: "Un tramezzino di patate dal gusto deciso: speck croccante e taleggio fondente si uniscono alle zucchine grigliate per un ripieno ricco e bilanciato, racchiuso tra due fette di patata perfettamente dorate.",
        ingredients: ["Patate", "Speck", "Taleggio DOP", "Zucchine grigliate", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/images/item-tramezzino-speck.jpg"
      },
    ],
  },
];

export const STATS = [
  { value: "40-50", label: "Coperti" },
  { value: "12H", label: "Orario" },
  { value: "100%", label: "Passione" },
  { value: "A+", label: "Qualità" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Qualità Premium",
    description: "Patate selezionate e sughi fatti in casa",
    icon: "Award",
  },
  {
    title: "Velocità",
    description: "Servizio rapido senza attese",
    icon: "Zap",
  },
  {
    title: "Innovazione",
    description: "Ricette uniche e sfiziose",
    icon: "Sparkles",
  },
  {
    title: "Esperienza",
    description: "Solo ingredienti italiani d'eccellenza",
    icon: "Heart",
  },
] as const;
