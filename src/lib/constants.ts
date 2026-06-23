export const SITE = {
  name: "La Mia Patata",
  tagline: "Un solo ingrediente. Infinite possibilità.",
  description: "Gastronomia specializzata in ricette a base di patata, senza servizio al tavolo",
  phone: "+39 0541 000000",
  phoneLink: "tel:+390541000000",
  email: "info@lamiapatata.it",
  emailLink: "mailto:info@lamiapatata.it",
  whatsapp: "https://wa.me/390000000000",
  address: "Piazzale Ceccarini 6, Riccione (RN)",
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
  price?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
}

export const SAUCES = [
  { name: "Yogurt Erba Cipollina", image: "/menu-items/SALSA YOGURT ERBA CIPOLLINA.jpg" },
  { name: "Senape", image: "/menu-items/SALSA SENAPE.jpg" },
  { name: "Segreta della Patata", image: "/menu-items/SALSA SEGRETA PATATA.jpg" },
  { name: "Maionese al Basilico", image: "/menu-items/SALSA MAIONESE BASILICO.jpg" },
  { name: "Ketchup", image: "/menu-items/SALSA KETCHUP.jpg" },
  { name: "Chimichurri", image: "/menu-items/SALSA CHIMICHURRI.jpg" },
  { name: "Caesar", image: "/menu-items/SALSA CEASER.jpg" },
  { name: "Spinaci", image: "/menu-items/SALSA SPINACI.jpg" },
] as const;

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
        longDescription: "Sottili e croccanti bucce di patate gialle, rosse e viola, fritte alla perfezione.",
        ingredients: ["Patate gialle", "Patate rosse", "Patate viola", "Farina di riso (GF)", "Olio di semi di girasole", "Sale marino"],
        allergens: ["GF"],
        image: "/menu-items/BUCCIA MULTICOLOR.jpg",
        price: 7,
      },
      {
        name: "Stick Gialla",
        description: "Bastoncini di patata gialla fritta in farina GF",
        longDescription: "Il classico intramontabile: bastoncini di patata a pasta gialla, croccanti fuori e morbidi dentro.",
        ingredients: ["Patate a pasta gialla", "Farina di riso (GF)", "Olio di semi di girasole", "Sale fino"],
        allergens: ["GF"],
        image: "/menu-items/STICK GIALLA.jpg",
        price: 7,
      },
      {
        name: "Chips",
        description: "Chips di patate gialle e viola, leggere e croccanti",
        longDescription: "Chips artigianali tagliate sottilissime a mano, realizzate con un mix di patate gialle e viola.",
        ingredients: ["Patate gialle", "Patate viola", "Olio di semi di girasole", "Sale marino"],
        allergens: ["GF"],
        image: "/menu-items/CHIPS GIALLE E VIOLA.png",
        price: 7,
      },
      {
        name: "Fiammiferi",
        description: "Julienne di patate, zucchine e carote in farina GF",
        longDescription: "Una julienne vivace e colorata di patate, zucchine e carote fresche, croccanti in farina gluten-free.",
        ingredients: ["Patate", "Zucchine fresche", "Carote", "Farina di riso (GF)", "Olio di semi di girasole", "Sale"],
        allergens: ["GF"],
        image: "/menu-items/FIAMMIFERI_.jpg",
        price: 7,
      },
      {
        name: "Croquettone",
        description: "Croccante croquetta di patata ripiena",
        longDescription: "Una generosa croquetta di patata, croccante esternamente e soffice all'interno, ripiena con ingredienti selezionati.",
        ingredients: ["Patate", "Farina di riso (GF)", "Olio di semi di girasole", "Sale"],
        allergens: ["GF"],
        image: "/menu-items/CROQUETTONE.jpg",
        price: 10,
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
        longDescription: "Cubetti di patata gialla cotti lentamente al forno con olio extravergine di oliva e erbe mediterranee fresche.",
        ingredients: ["Patate a pasta gialla", "Olio EVO", "Aglio in camicia", "Rosmarino fresco", "Salvia", "Timo", "Sale e pepe"],
        allergens: ["GF"],
        image: "/menu-items/GIALLA ROSMARINO.jpg",
        price: 9,
      },
      {
        name: "Rossa al Parmigiano e Speck",
        description: "Crema di parmigiano, burro, latte, noce moscata, speck",
        longDescription: "Patate rosse al forno condite con una vellutata crema al Parmigiano Reggiano e speck croccante.",
        ingredients: ["Patate rosse", "Parmigiano Reggiano DOP", "Speck dell'Alto Adige", "Latte intero", "Burro", "Noce moscata", "Sale"],
        allergens: ["GF", "L"],
        image: "/menu-items/ROSSA PARMIGIANO SPECK.jpg",
        price: 11,
      },
      {
        name: "Gialla Novella",
        description: "Patata gialla novella al forno, leggera e saporita",
        longDescription: "Patate gialle novelle cotte al forno, leggere e digeribili, esaltate da un semplice condimento di olio EVO e sale marino.",
        ingredients: ["Patate gialle novelle", "Olio EVO", "Sale marino"],
        allergens: ["GF"],
        image: "/menu-items/GIALLA NOVELLA FORNO.png",
        price: 9,
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
        longDescription: "Purè di patate liscio e burroso con polpette di vitello tenere, cotte lentamente in un sugo di pomodoro profumato allo scalogno.",
        ingredients: ["Patate", "Carne di vitello", "Pomodori pelati San Marzano", "Scalogno", "Burro", "Parmigiano Reggiano", "Latte", "Uova", "Sale e basilico"],
        allergens: ["GF", "U", "L"],
        image: "/menu-items/PUREE POLPETTE SUGO.jpg",
        price: 13,
      },
      {
        name: "Polipo, Olive Nere e Julienne",
        description: "Polipo, aglio, prezzemolo, vino bianco, olive e capperi",
        longDescription: "Purè vellutato con polipo tenero, olive taggiasche, capperi e una julienne di verdure fresche.",
        ingredients: ["Patate", "Polipo fresco", "Olive nere taggiasche", "Capperi", "Vino bianco", "Aglio", "Prezzemolo fresco", "Olio EVO", "Burro", "Sale"],
        allergens: ["GF", "L", "M"],
        image: "/menu-items/PUREE POLIPO OLIVE.jpg",
        price: 16,
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
        longDescription: "Gnocchi di patate fatti in casa con una salsa densa e cremosa di quattro eccellenze casearie italiane.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Parmigiano Reggiano", "Gorgonzola DOP", "Taleggio", "Scamorza affumicata", "Latte", "Burro", "Sale"],
        allergens: ["GF", "U", "L"],
        image: "/menu-items/GNOCCHI 4 FORMAGGI.jpg",
        price: 12,
      },
      {
        name: "Carbonara",
        description: "Pecorino, uovo, pepe nero, parmigiano e bacon",
        longDescription: "La celebre ricetta romana reinterpretata sui nostri gnocchi con crema di tuorli, pecorino e bacon croccante.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Tuorli d'uovo", "Pecorino Romano DOP", "Parmigiano Reggiano", "Bacon croccante", "Pepe nero", "Sale"],
        allergens: ["GF", "U", "L"],
        image: "/menu-items/GNOCCHI CARBONARA.png",
        price: 13,
      },
      {
        name: "Sorrentina",
        description: "Pomodori pelati, scalogno, basilico, parmigiano",
        longDescription: "Gnocchi morbidi immersi in un sugo di pomodoro San Marzano verace, profumato al basilico fresco.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Pomodori pelati", "Scalogno", "Basilico fresco", "Parmigiano Reggiano", "Olio EVO", "Sale"],
        allergens: ["GF", "U", "L"],
        image: "/menu-items/GNOCCHI SORRENTINA.jpg",
        price: 11,
      },
      {
        name: "Funghi Porcini e Salsiccia",
        description: "Champignon, scalogno, salsiccia artigianale, vino rosso",
        longDescription: "Funghi champignon trifolati con salsiccia di suino artigianale, sfumata al vino rosso.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Funghi champignon", "Salsiccia fresca di suino", "Vino rosso", "Scalogno", "Olio EVO", "Sale e prezzemolo"],
        allergens: ["GF", "U"],
        image: "/menu-items/GNOCCHI FUNGHI SALSICCIA.jpg",
        price: 14,
      },
      {
        name: "Gamberi e Zucchine",
        description: "Gamberi argentini al brandy, zucchine con basilico",
        longDescription: "Gamberi argentini sfumati al brandy con zucchine spadellate e basilico fresco.",
        ingredients: ["Gnocchi di patate (Farina GF)", "Gamberi argentini", "Zucchine", "Brandy", "Aglio", "Basilico fresco", "Olio EVO", "Sale"],
        allergens: ["GF", "U", "C"],
        image: "/menu-items/GNOCCHI GAMBERI ZUCCHINE.jpg",
        price: 16,
      },
    ],
  },
  {
    id: "barchetta",
    name: "Barchetta",
    description: "Patata lessa a forma di barchetta, riempita con ingredienti freschi e creativi. Il piatto signature.",
    image: "/images/menu-barchetta.jpg",
    items: [
      {
        name: "Viola Salmone",
        description: "Patata viola, salmone marinato agli agrumi, guacamole",
        longDescription: "Patata viola a barchetta farcita con guacamole artigianale e tartare di salmone marinato agli agrumi.",
        ingredients: ["Patata viola", "Salmone fresco", "Avocado", "Lime", "Arancia", "Olio EVO", "Sale e pepe rosa"],
        allergens: ["P"],
        image: "/menu-items/BARCHETTA SALMONE.png",
        price: 16,
      },
      {
        name: "Viola Polipo e Olive",
        description: "Patata viola, polipo, olive taggiasche e capperi",
        longDescription: "Patata viola a barchetta con insalata di polipo tenero, olive taggiasche e capperi dissalati.",
        ingredients: ["Patata viola", "Polipo fresco", "Olive taggiasche", "Capperi", "Prezzemolo", "Olio EVO", "Sale"],
        allergens: ["M"],
        image: "/menu-items/BARCHETTA POLPO.jpg",
        price: 16,
      },
      {
        name: "Rossa Funghi, Salsiccia e Taleggio",
        description: "Patata rossa con funghi, salsiccia e taleggio fondente",
        longDescription: "Barchetta di patata rossa farcita con funghi saltati, salsiccia artigianale e taleggio DOP fondente.",
        ingredients: ["Patata rossa", "Funghi misti", "Salsiccia di suino", "Taleggio DOP", "Olio EVO", "Aglio", "Sale"],
        allergens: ["L"],
        image: "/menu-items/BARCHETTA PORCINI SALSICCIA.jpg",
        price: 14,
      },
      {
        name: "Gialla Picanha e Chimichurri",
        description: "Patata gialla con picanha alle erbe e salsa chimichurri",
        longDescription: "Barchetta di patata gialla con fettine di picanha di manzo e salsa chimichurri aromatica.",
        ingredients: ["Patata gialla", "Picanha di manzo", "Prezzemolo", "Origano", "Aglio", "Aceto di vino rosso", "Peperoncino", "Olio EVO", "Sale"],
        allergens: [],
        image: "/menu-items/BARCHETTA PICANHA CHIMICHURRI.jpg",
        price: 15,
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
        longDescription: "Due dischi di patata viola schiacciati e croccanti, ripieni di funghi trifolati e salsiccia saporita.",
        ingredients: ["Patata viola", "Funghi champignon", "Salsiccia fresca", "Olio EVO", "Aglio", "Sale"],
        allergens: [],
        image: "/menu-items/SCHIACCIATA VIOLA SALSICCIA FUNGHI.png",
        price: 12,
      },
      {
        name: "Rossa Speck e Brie",
        description: "Schiacciata di patata rossa con speck e brie cremoso",
        longDescription: "Schiacciata di patata rossa croccante con speck saporito e brie fondente.",
        ingredients: ["Patata rossa", "Speck dell'Alto Adige", "Formaggio Brie", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/menu-items/SCHIACCIATA ROSSA SPECK BRIE.png",
        price: 11,
      },
      {
        name: "Rossa Uovo e Avocado",
        description: "Schiacciata di patata rossa con uovo sodo e avocado",
        longDescription: "Schiacciata di patata rossa farcita con uovo sodo, avocado fresco e salsa all'erba cipollina.",
        ingredients: ["Patata rossa", "Uovo sodo", "Avocado", "Erba cipollina", "Olio EVO", "Sale"],
        allergens: ["U"],
        image: "/menu-items/SCHICCIATA ROSSA UOVA AVOCADO.jpg",
        price: 13,
      },
      {
        name: "Gialla Salmone e Burro Salato",
        description: "Schiacciata di patata gialla con salmone e burro salato",
        longDescription: "Schiacciata di patata gialla con salmone fresco marinato e burro salato di alta qualità.",
        ingredients: ["Patata gialla", "Salmone fresco marinato", "Burro salato", "Aneto", "Pepe nero", "Sale"],
        allergens: ["P", "L"],
        image: "/menu-items/SCHIACCIATA SALMONE BURRO.png",
        price: 13,
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
        longDescription: "Patate al vapore con feta greca, pomodori San Marzano, cipolla di Tropea, olive e fiori di cappero.",
        ingredients: ["Patate", "Feta greca", "Pomodori San Marzano", "Cipolla rossa di Tropea", "Olive taggiasche", "Fiori di cappero", "Origano", "Olio EVO"],
        allergens: ["L"],
        image: "/menu-items/VAPORE MEDITERRANEA.jpg",
        price: 11,
      },
      {
        name: "Polipo, Olive Nere e Julienne di Verdure",
        description: "Polipo con julienne di verdure, olive taggiasche, prezzemolo e limone",
        longDescription: "Polipo tenero al vapore con julienne di verdure fresche, olive taggiasche e emulsione di limone.",
        ingredients: ["Patate", "Polipo fresco", "Zucchine", "Carote", "Olive taggiasche", "Limone", "Prezzemolo", "Olio EVO", "Sale"],
        allergens: ["M"],
        image: "/menu-items/VAPORE POLPO OLIVE JULIENNE.jpg",
        price: 16,
      },
      {
        name: "Gamberi e Zucchine",
        description: "Gamberi argentini e zucchine con olio EVO e basilico",
        longDescription: "Gamberi argentini al vapore con zucchine novelle spadellate e basilico fresco.",
        ingredients: ["Patate", "Gamberi argentini", "Zucchine", "Basilico fresco", "Olio EVO", "Sale marino"],
        allergens: ["C"],
        image: "/menu-items/VAPORE GAMBERI ZUCCHINE.jpg",
        price: 16,
      },
      {
        name: "Uovo, Avocado e Salmone",
        description: "Uovo sodo, avocado fresco e salmone marinato",
        longDescription: "Patate al vapore con fette di avocado, uovo sodo e filetti di salmone marinato agli agrumi.",
        ingredients: ["Patate", "Salmone marinato", "Avocado", "Uovo sodo", "Olio EVO", "Sale", "Pepe nero"],
        allergens: ["U", "P"],
        image: "/menu-items/VAPORE SALMONE UOVA AVOCADO.jpg",
        price: 16,
      },
    ],
  },
  {
    id: "jacket",
    name: "Jacket",
    description: "La patata intera al forno, aperta e ripiena generosamente.",
    image: "/images/menu-jacket.jpg",
    items: [
      {
        name: "Carbonara",
        description: "Pecorino romano, uovo, pepe nero, parmigiano e bacon croccante",
        longDescription: "Patata intera al forno farcita con ricca crema carbonara, pecorino e bacon saporito.",
        ingredients: ["Patata intera", "Tuorli d'uovo", "Pecorino Romano", "Parmigiano Reggiano", "Bacon croccante", "Pepe nero", "Sale"],
        allergens: ["U", "L"],
        image: "/menu-items/JACKET CARBONARA.jpg",
        price: 13,
      },
      {
        name: "Speck e Brie",
        description: "Speck croccante e brie fondente",
        longDescription: "Patata intera al forno con speck croccante e brie fondente.",
        ingredients: ["Patata intera", "Speck dell'Alto Adige", "Formaggio Brie", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/images/item-jacket-speck.jpg",
        price: 14,
      },
      {
        name: "Salsiccia, Porcini e Gorgonzola",
        description: "Salsiccia artigianale, funghi porcini e gorgonzola DOP",
        longDescription: "Patata intera al forno con funghi porcini trifolati, salsiccia saporita e gorgonzola DOP.",
        ingredients: ["Patata intera", "Funghi porcini", "Salsiccia di suino", "Gorgonzola DOP", "Olio EVO", "Aglio", "Sale"],
        allergens: ["L"],
        image: "/menu-items/JACKET SALSICCIA PORCINI GORGONZOLA.jpg",
        price: 15,
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
        name: "Speck e Taleggio",
        description: "Speck stagionato e taleggio fondente",
        longDescription: "Due fette di patata schiacciate con speck croccante e taleggio fondente.",
        ingredients: ["Patate", "Speck", "Taleggio DOP", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/menu-items/TRAMEZZINO SPECK TALEGGIO.jpg",
        price: 12,
      },
      {
        name: "Cotto al Forno e Brie",
        description: "Prosciutto cotto di qualità e brie cremoso",
        longDescription: "Due fette di patata schiacciate con prosciutto cotto scelto e brie fondente.",
        ingredients: ["Patate", "Prosciutto cotto di alta qualità", "Formaggio Brie", "Olio EVO", "Sale"],
        allergens: ["L"],
        image: "/menu-items/TRAMEZZINO COTTO BRIE_.jpg",
        price: 12,
      },
      {
        name: "Roast Beef",
        description: "Roast beef marinato alle erbe",
        longDescription: "Due fette di patata schiacciate con fette di roast beef marinato alle erbe aromatiche.",
        ingredients: ["Patate", "Roast beef", "Erbe aromatiche", "Olio EVO", "Sale"],
        allergens: [],
        image: "/menu-items/TRAMEZZINO ROAST-BEEF_.jpg",
        price: 15,
      },
      {
        name: "Porchetta",
        description: "Porchetta artigianale croccante",
        longDescription: "Due fette di patata schiacciate con porchetta artigianale croccante.",
        ingredients: ["Patate", "Porchetta artigianale", "Olio EVO", "Sale"],
        allergens: [],
        image: "/menu-items/TRAMEZZINO PORCHETTA.jpg",
        price: 12,
      },
      {
        name: "Salmone e Avocado",
        description: "Salmone fresco marinato e avocado cremoso",
        longDescription: "Due fette di patata schiacciate con salmone fresco marinato e fette di avocado.",
        ingredients: ["Patate", "Salmone fresco marinato", "Avocado", "Olio EVO", "Sale"],
        allergens: ["P"],
        image: "/menu-items/TRAMEZZINO SALMONE AVOCADO.jpg",
        price: 16,
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

export const CHEF = {
  name: "Stefano Maiullo",
  title: "Corporate Chef",
  image: "/chef.png",
  bio: "Per tutti è lo chef dei Vip. Stefano Maiullo, cuoco di fama internazionale, è stato selezionato per contribuire alla nascita del progetto NEOM in Arabia Saudita. Ha lavorato a stretto contatto con il pluripremiato chef 3 stelle Michelin Norbert Niederkofler. Con una carriera che attraversa Miami, Parigi, Zurich, Londra e l'Arabia Saudita, lo Chef Maiullo ha avuto l'onore di far assaggiare i suoi piatti a personaggi di un certo livello, inclusi i membri della famiglia reale saudita. Ospite di X-Factor e Italia's Got Talent, è un personaggio eclettico che porta a La Mia Patata un'esperienza unica.",
  instagram: "https://instagram.com/maiullo_stefano_chef",
} as const;

export const BUSINESS_SERVICES = [
  {
    title: "Catering Privato",
    description: "Servizi di catering d'elite per eventi privati, cerimonie e ricevimenti. Menu personalizzati con la stessa qualità della nostra gastronomia.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Hotel & Resort",
    description: "Collaborazioni con hotel e resort per servizi di ristorazione, menu della carta e buffet esclusivi. Soluzioni su misura per ogni struttura.",
    icon: "Building2",
  },
  {
    title: "Eventi Aziendali",
    description: "Catering per eventi corporate, meeting, conferenze e team building. Presentazioni impeccabili e menu raffinati per impressionare i vostri ospiti.",
    icon: "Briefcase",
  },
  {
    title: "Feste & Celebrazioni",
    description: "Per matrimoni, compleanni e ogni tipo di festa. Creiamo esperienze culinarie uniche che i vostri ospiti non dimenticheranno.",
    icon: "PartyPopper",
  },
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
