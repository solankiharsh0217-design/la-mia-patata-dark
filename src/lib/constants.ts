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

export const MENU_CATEGORIES = [
  {
    id: "baked",
    name: "Baked Potato",
    description: "La firma del locale. Patata al forno aperta al momento con sughi a scelta.",
    items: [
      { name: "Carbonara", description: "Pecorino, guanciale, uovo" },
      { name: "Ragù", description: "Brasato di manzo" },
      { name: "4 Formaggi", description: "Mozzarella, gorgonzola, fontina, parmigiano" },
      { name: "Salmone", description: "Salmone affumicato, crema di formaggio" },
      { name: "Cacio e Pepe", description: "Pecorino romano, pepe nero" },
      { name: "Burro di Normandia", description: "Burro salato, erba cipollina" },
      { name: "Gorgonzola", description: "Gorgonzola dolce, noci" },
    ],
  },
  {
    id: "friti",
    name: "Fritti & Street",
    description: "Patatine fritte croccanti e sfiziosità da passeggio.",
    items: [
      { name: "Patatine Fritte", description: "Croccanti, sale rosmarino" },
      { name: "Crocchette", description: "Patata e mozzarella, panatura artigianale" },
      { name: "Patata Tornado", description: "Lo sfidONE da mezzo metro su spiedo" },
    ],
  },
  {
    id: "bolliti",
    name: "Bolliti & Insalate",
    description: "Opzioni più leggere per ogni palato.",
    items: [
      { name: "Insalata Mediterranea", description: "Pomodori, olive, mozzarella" },
      { name: "Polipo e Patate", description: "Polipo bollito, patate, prezzemolo" },
      { name: "Patate e Zucchine", description: "Zucchine grigliate, patate, feta" },
    ],
  },
  {
    id: "purezza",
    name: "Purè & Forno",
    description: "Purè cremoso e piatti al forno con condimenti italiani.",
    items: [
      { name: "Purè con Polpette", description: "Polpette di manzo, formaggio filante" },
      { name: "Parmigiana di Patate", description: "Pomodoro, mozzarella, basilico" },
      { name: "Patate al Forno", description: "Rosmarino, aglio, parmigiano" },
    ],
  },
] as const;

export const STATS = [
  { value: "€25", label: "Scontrino Medio" },
  { value: "<10%", label: "Food Cost" },
  { value: "€75-90K", label: "Investimento" },
  { value: "40-50", label: "Coperti" },
  { value: "12H", label: "Orario" },
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