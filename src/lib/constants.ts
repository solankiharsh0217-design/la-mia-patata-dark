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
      { name: "Buccia Multicolor", description: "Bucce di patate miste croccanti in farina GF", allergens: ["GF"], image: "/images/item-fritti-buccia.jpg" },
      { name: "Stick Gialla", description: "Bastoncini di patata gialla fritta in farina GF", allergens: ["GF"], image: "/images/item-fritti-stick.jpg" },
      { name: "Chips Multicolor", description: "Chips di patate colorate, leggere e croccanti", allergens: ["GF"], image: "/images/item-fritti-chips.jpg" },
      { name: "Fiammiferi Multicolor", description: "Julienne di patate, zucchine e carote in farina GF", allergens: ["GF"], image: "/images/item-fritti-fiammiferi.jpg" },
      { name: "Twister", description: "Patata rossa o gialla arrotolata su spiedo", allergens: ["GF"], image: "/images/item-fritti-twister.jpg" },
    ],
  },
  {
    id: "forno",
    name: "Forno",
    description: "Patate aromatizzate con olio EVO, aglio, rosmarino, salvia e timo.",
    image: "/images/menu-forno.jpg",
    items: [
      { name: "Gialla al Rosmarino", description: "Olio EVO, aglio, rosmarino, salvia, timo", allergens: ["GF"], image: "/images/item-forno-rosmarino.jpg" },
      { name: "Rossa al Parmigiano e Speck", description: "Crema di parmigiano, burro, latte, noce moscata, speck", allergens: ["GF", "L"], image: "/images/item-forno-speck.jpg" },
      { name: "Gialla Soffiate", description: "Patata gialla soffice al forno, aromatizzata", allergens: ["GF"], image: "/images/item-forno-soffiate.jpg" },
    ],
  },
  {
    id: "puree",
    name: "Purè",
    description: "Purè vellutato con patata, burro e parmigiano. La comfort food italiana nella sua essenza.",
    image: "/images/menu-puree.jpg",
    items: [
      { name: "Polpette al Sugo", description: "Polpette di vitello con pomodoro pelato e scalogno", allergens: ["GF", "U", "L"], image: "/images/item-puree-polpette.jpg" },
      { name: "Polipo e Olive Nere", description: "Polipo, aglio, prezzemolo, vino bianco, olive e capperi", allergens: ["GF", "L", "M"], image: "/images/item-puree-polipo-2.jpg" },
    ],
  },
  {
    id: "gnocchi",
    name: "Gnocchi",
    description: "Gnocchi di patata in farina gluten free, soffici e leggeri, con sughi d'autore.",
    image: "/images/menu-gnocchi.jpg",
    items: [
      { name: "4 Formaggi", description: "Parmigiano, gorgonzola, taleggio, scamorza", allergens: ["GF", "U", "L"], image: "/images/item-gnocchi-4formaggi.jpg" },
      { name: "Carbonara", description: "Pecorino, uovo, pepe nero, parmigiano e bacon", allergens: ["GF", "U", "L"], image: "/images/item-gnocchi-carbonara.jpg" },
      { name: "Sorrentina", description: "Pomodori pelati, scalogno, basilico, parmigiano", allergens: ["GF", "U", "L"], image: "/images/item-gnocchi-sorrentina.jpg" },
      { name: "Funghi e Salsiccia", description: "Champignon, scalogno, salsiccia artigianale, vino rosso", allergens: ["GF", "U"], image: "/images/item-gnocchi-funghi.jpg" },
      { name: "Gamberi e Zucchine", description: "Gamberi argentini al brandy, zucchine con basilico", allergens: ["GF", "U", "C"], image: "/images/item-gnocchi-gamberi.jpg" },
    ],
  },
  {
    id: "barchetta",
    name: "Barchetta",
    description: "Patata lessa a forma di barchetta, riempita con ingredienti freschi e creativi.",
    image: "/images/menu-barchetta.jpg",
    items: [
      { name: "Viola Salmone", description: "Patata viola, salmone marinato agli agrumi, guacamole", allergens: ["P"], image: "/images/item-barchetta-salmone.jpg" },
      { name: "Viola Polipo", description: "Patata viola, polipo, olive taggiasche e capperi", allergens: ["M"], image: "/images/item-barchetta-polipo.jpg" },
      { name: "Rossa Funghi, Salsiccia e Taleggio", description: "Patata rossa con funghi, salsiccia e taleggio fondente", allergens: ["L"], image: "/images/item-barchetta-funghi.jpg" },
      { name: "Gialla Picanha e Chimichurri", description: "Patata gialla with picanha alle erbe e salsa chimichurri", allergens: [], image: "/images/item-barchetta-picanha.jpg" },
    ],
  },
  {
    id: "schiacciata",
    name: "Schiacciata",
    description: "Patata schiacciata e croccante come pane, farcita con ingredienti selezionati.",
    image: "/images/menu-schiacciata.jpg",
    items: [
      { name: "Viola Funghi e Salsiccia", description: "Schiacciata di patata viola con funghi e salsiccia", allergens: [], image: "/images/item-schiacciata-funghi.jpg" },
      { name: "Rossa Speck e Brie", description: "Schiacciata di patata rossa con speck e brie cremoso", allergens: ["L"], image: "/images/item-schiacciata-speck.jpg" },
    ],
  },
  {
    id: "waffle",
    name: "Waffle",
    description: "Waffle di patata croccante fuori, morbido dentro. Base per abbinamenti gourmet.",
    image: "/images/menu-waffle.jpg",
    items: [
      { name: "Rossa Uovo e Avocado", description: "Waffle di patata rossa, uovo sodo, avocado e salsa all'erba cipollina", allergens: ["U", "L"], image: "/images/item-waffle-uovo.jpg" },
      { name: "Gialla Salmone e Burro Salato", description: "Waffle di patata gialla, salmone fresco marinato e burro salato", allergens: ["P", "L"], image: "/images/item-waffle-salmone.jpg" },
    ],
  },
  {
    id: "vapore",
    name: "Vapore",
    description: "Patate al vapore, leggere e digeribili. Abbinamenti freschi e mediterranei.",
    image: "/images/menu-vapore.jpg",
    items: [
      { name: "Mediterranea", description: "Feta greca, San Marzano, cipolla di Tropea, olive taggiasche, fiori di cappero", allergens: ["L"], image: "/images/item-vapore-mediterranea.jpg" },
      { name: "Polipo, Olive e Julienne", description: "Polipo con julienne di verdure, olive taggiasche, prezzemolo e limone", allergens: ["M"], image: "/images/item-vapore-polipo.jpg" },
      { name: "Gamberi e Zucchine", description: "Gamberi argentini e zucchine con olio EVO e basilico", allergens: ["C"], image: "/images/item-vapore-gamberi.jpg" },
      { name: "Uovo, Avocado e Salmone", description: "Uovo sodo, avocado fresco e salmone marinato", allergens: ["U", "P"], image: "/images/item-vapore-uovo.jpg" },
    ],
  },
  {
    id: "jacket",
    name: "Jacket",
    description: "La patata intera al forno, aperta e ripiena generosamente. Il piatto signature.",
    image: "/images/menu-jacket.jpg",
    items: [
      { name: "Carbonara", description: "Pecorino romano, uovo, pepe nero, parmigiano e bacon croccante", allergens: ["U", "L"], image: "/images/item-jacket-carbonara.jpg" },
      { name: "Speck e Brie", description: "Speck croccante e brie fondente", allergens: ["L"], image: "/images/item-jacket-speck.jpg" },
      { name: "Salsiccia, Porcini e Gorgonzola", description: "Salsiccia artigianale, funghi porcini e gorgonzola DOP", allergens: ["L"], image: "/images/item-jacket-salsiccia.jpg" },
    ],
  },
  {
    id: "tramezzino",
    name: "Tramezzino",
    description: "Il tramezzino reinterpretato: due fette di patata schiacciata al posto del pane.",
    image: "/images/menu-tramezzino.jpg",
    items: [
      { name: "Prosciutto Cotto e Brie", description: "Prosciutto cotto di qualità e brie cremoso", allergens: ["L"], image: "/images/item-tramezzino-prosciutto.jpg" },
      { name: "Speck, Taleggio e Zucchine", description: "Speck stagionato, taleggio fondente e zucchine grigliate", allergens: ["L"], image: "/images/item-tramezzino-speck.jpg" },
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
ription: "Solo ingredienti italiani d'eccellenza",
    icon: "Heart",
  },
] as const;
