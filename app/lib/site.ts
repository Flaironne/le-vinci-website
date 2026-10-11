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
    facebook: "https://www.facebook.com/restaurantlevinci",
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
  terrace: "/terrace-v2.jpg",
  dish: "/terrace-v2.jpg",
  interior: "/interior.jpg",
  experience: "/salle.jpg",
  logo: "/le_vinci_logo.jpg",
} as const;

export const menuSections = [
  {
    name: "Les entrées",
    eyebrow: "Pour commencer",
    items: [
      {
        name: "Demi-douzaine d'escargots",
        description: "",
        price: "12,80 €",
      },
      {
        name: "Velouté de légumes",
        description: "",
        price: "6,80 €",
      },
      {
        name: "Salade vigneronne",
        description: "",
        price: "10,80 €",
      },
      {
        name: "Croustillant de chèvre au miel",
        description: "",
        price: "10,80 €",
      },
      {
        name: "Salade paysanne",
        description: "",
        price: "10,80 €",
      },
    ],
  },
  {
    name: "Les poissons",
    eyebrow: "Selon arrivage",
    items: [
      {
        name: "Carpes",
        description: "Frites, salade verte",
        price: "22 €",
      },
      {
        name: "Poisson du moment",
        description: "Selon l'arrivage, voir l'ardoise",
        price: "affichage à l'ardoise",
      },
    ],
  },
  {
    name: "Les plats traditionnels",
    eyebrow: "Garniture au choix : frites, tagliatelles, spaetzle ou légumes",
    items: [
      {
        name: "Bouchée à la reine",
        description: "",
        price: "23 €",
      },
      {
        name: "Émincés de rognons de veau",
        description: "",
        price: "23 €",
      },
    ],
  },
  {
    name: "Les viandes",
    eyebrow: "Garniture au choix : frites, tagliatelles, spaetzle ou légumes",
    items: [
      {
        name: "Onglet de bœuf",
        description:
          "Sauce au choix : poivre, échalotes ou beurre maître d'hôtel",
        price: "24 €",
      },
      {
        name: "Tartare de bœuf classique",
        description: "",
        price: "22 €",
      },
      {
        name: "Tartare de bœuf italien",
        description: "",
        price: "24 €",
      },
      {
        name: "Escalope de veau",
        description: "",
        price: "23 €",
      },
      {
        name: "Escalope viennoise",
        description: "",
        price: "24 €",
      },
      {
        name: "Cordon bleu classique",
        description: "",
        price: "25,80 €",
      },
      {
        name: "Cordon bleu au munster",
        description: "",
        price: "26,80 €",
      },
    ],
  },
  {
    name: "Menu enfant",
    eyebrow: "Pour les moins de 12 ans",
    items: [
      {
        name: "Menu enfant",
        description: "Nuggets maison, frites, salade, glace 2 boules, sirop",
        price: "12,50 €",
      },
    ],
  },
  {
    name: "Les tartes flambées",
    eyebrow: "Accompagnées d'une salade verte",
    items: [
      {
        name: "Tarte flambée traditionnelle",
        description: "",
        price: "13 €",
      },
      {
        name: "Tarte flambée alsacienne",
        description: "",
        price: "15 €",
      },
    ],
  },
] as const;
