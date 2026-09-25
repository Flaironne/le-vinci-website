export const siteConfig = {
  name: "Le Vinci",
  tagline: "Cuisine française traditionnelle",
  description:
    "Le Vinci, restaurant français traditionnel à Sausheim. Une cuisine généreuse et authentique dans une ambiance chaleureuse.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://le-vinci.fr",
  address: {
    street: "71 Grand Rue",
    postalCode: "68390",
    city: "Sausheim",
    country: "FR",
  },
  phone: "03 89 56 53 40",
  phoneHref: "tel:+33389565340",
  hours: [
    { days: "Lundi - Mardi", hours: "12h00 - 14h00" },
    { days: "Mercredi - Samedi", hours: "12h00 - 14h00" },
    { days: "Mercredi - Samedi", hours: "19h00 - 22h00" },
  ],
  social: {
    facebook: "[À COMPLÉTER]",
  },
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La carte" },
  { href: "/a-propos", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
] as const;

export const restaurantImages = {
  hero: "/restaurant.jpg",
  terrace: "/terrace.jpg",
  dish: "/terrace.jpg",
  interior: "/interior.jpg",
  experience: "/terrace2.jpg",
  logo: "/le_vinci_logo.jpg",
} as const;

export const menuSections = [
  {
    name: "Les entrées",
    eyebrow: "Pour commencer",
    items: [
      {
        name: "Terrine de campagne maison",
        description: "Condiment de saison, pain grillé",
        price: "11 €",
      },
      {
        name: "Salade gourmande du Vinci",
        description: "Œuf poché, légumes croquants, vinaigrette maison",
        price: "13 €",
      },
      {
        name: "Tarte fine aux légumes",
        description: "Crème légère aux herbes fraîches",
        price: "12 €",
      },
    ],
  },
  {
    name: "Les plats",
    eyebrow: "La maison",
    items: [
      {
        name: "Bouchée à la reine",
        description: "Volaille, champignons et sauce veloutée, frites maison",
        price: "21 €",
      },
      {
        name: "Suggestion du moment",
        description: "Selon l'arrivage et l'inspiration de notre cuisine",
        price: "[À COMPLÉTER]",
      },
      {
        name: "Filet de poisson rôti",
        description: "Légumes de saison, beurre blanc citronné",
        price: "24 €",
      },
    ],
  },
  {
    name: "Les desserts",
    eyebrow: "La note sucrée",
    items: [
      {
        name: "Tarte aux fruits de saison",
        description: "Pâte sablée, crème légère",
        price: "8 €",
      },
      {
        name: "Café gourmand",
        description: "Assortiment de douceurs maison",
        price: "9 €",
      },
      {
        name: "Dessert du jour",
        description: "Demandez la suggestion à notre équipe",
        price: "8 €",
      },
    ],
  },
  {
    name: "Les boissons",
    eyebrow: "À partager",
    items: [
      {
        name: "Vins d'Alsace",
        description: "Au verre ou à la bouteille",
        price: "[À COMPLÉTER]",
      },
      {
        name: "Eaux minérales",
        description: "Plate ou pétillante",
        price: "[À COMPLÉTER]",
      },
      {
        name: "Café / Thé",
        description: "Sélection de boissons chaudes",
        price: "[À COMPLÉTER]",
      },
    ],
  },
] as const;
