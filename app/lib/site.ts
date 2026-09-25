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
  terrace: "/terrace.jpg",
  dish: "/terrace.jpg",
  interior: "/interior.jpg",
  experience: "/terrace2.jpg",
  logo: "/le_vinci_logo.jpg",
} as const;

export const menuSections = [
  {
    name: "Les entrées froides",
    eyebrow: "Pour commencer",
    items: [
      {
        name: "Carpaccio de bœuf",
        description: "",
        price: "13,80 €",
      },
      {
        name: "Melon jambon cru",
        description: "",
        price: "10,80 €",
      },
    ],
  },
  {
    name: "Les salades estivales",
    eyebrow: "Fraîcheur",
    items: [
      {
        name: "Salade de la mer",
        description: "",
        price: "24 €",
      },
      {
        name: "Salade César",
        description: "",
        price: "17,80 €",
      },
      {
        name: "Salade californienne",
        description: "",
        price: "17,80 €",
      },
      {
        name: "Salade paysanne",
        description: "",
        price: "17,80 €",
      },
    ],
  },
  {
    name: "Les bowls chauds & froids",
    eyebrow:
      "Fèves de soja, tomates cerises, carottes, radis, avocat, maïs, riz noir, granberry, sésame, banane plantain, sauce de la cheffe",
    items: [
      {
        name: "Bowl végétarien (falafel)",
        description: "",
        price: "17,80 €",
      },
      {
        name: "Bowl océan (saumon, scampis)",
        description: "",
        price: "24 €",
      },
      {
        name: 'Bowl "Crousty Chicken"',
        description: "",
        price: "19 €",
      },
      {
        name: "Bowl italien (jambon cru, mozzarella)",
        description: "",
        price: "19 €",
      },
    ],
  },
  {
    name: "Les plats froids",
    eyebrow: "Accompagnés de frites",
    items: [
      {
        name: "Vitello tonnato",
        description: "",
        price: "24 €",
      },
      {
        name: "Carpaccio de bœuf XL",
        description: "",
        price: "24 €",
      },
      {
        name: "Tartare de bœuf classique",
        description: "",
        price: "22 €",
      },
      {
        name: "Tartare de bœuf thaï",
        description: "",
        price: "24 €",
      },
      {
        name: "Tartare de bœuf à l'italienne",
        description: "",
        price: "24 €",
      },
    ],
  },
  {
    name: "Les poissons",
    eyebrow: "Selon arrivage",
    items: [
      {
        name: "Carpe à la semoule",
        description: "Frites et salade verte",
        price: "22 €",
      },
      {
        name: "Poissons selon arrivage",
        description: "Consultez notre ardoise",
        price: "affichage à l'ardoise",
      },
    ],
  },
  {
    name: "Les plats traditionnels",
    eyebrow:
      "Garniture au choix : frites, tagliatelles, spaetzles, riz ou légumes",
    items: [
      {
        name: "Bouchée à la reine",
        description: "",
        price: "23 €",
      },
      {
        name: "Émincé de rognons de veau à la moutarde",
        description: "",
        price: "23 €",
      },
    ],
  },
  {
    name: "Les viandes",
    eyebrow:
      "Garniture au choix : frites, tagliatelles, spaetzles, riz ou légumes",
    items: [
      {
        name: "Cordon bleu de veau",
        description: "Sauce forestière",
        price: "25,80 €",
      },
      {
        name: "Escalope de veau",
        description: "Sauce forestière",
        price: "23 €",
      },
      {
        name: "Escalope de veau viennoise",
        description: "Sauce forestière",
        price: "24 €",
      },
      {
        name: "Onglet de bœuf",
        description:
          "Sauce au choix : échalotes, poivre ou beurre maître d'hôtel",
        price: "24 €",
      },
    ],
  },
  {
    name: "Les burgers",
    eyebrow: "Maison",
    items: [
      {
        name: "Rösti burger",
        description: "",
        price: "18,80 €",
      },
      {
        name: "Burger au lard fumé",
        description: "",
        price: "17,80 €",
      },
    ],
  },
  {
    name: "Les tartes flambées",
    eyebrow: "Accompagnées de salade",
    items: [
      {
        name: "Tarte flambée traditionnelle",
        description: "",
        price: "13 €",
      },
      {
        name: "Tarte flambée au saumon",
        description: "",
        price: "15 €",
      },
    ],
  },
  {
    name: "Les pizzas",
    eyebrow: "Pâte maison à l'huile d'olive",
    items: [
      {
        name: "Pizza orientale",
        description: "",
        price: "15,80 €",
      },
      {
        name: "Pizza reine",
        description: "",
        price: "15,80 €",
      },
      {
        name: "Pizza margherita",
        description: "",
        price: "13,80 €",
      },
      {
        name: "Pizza aux fruits de mer",
        description: "",
        price: "16,80 €",
      },
    ],
  },
  {
    name: "Menu enfant",
    eyebrow: "Pour les moins de 12 ans",
    items: [
      {
        name: "Menu enfant",
        description:
          "Nuggets maison, frites, salade, glace 2 boules et jus de fruits",
        price: "12,50 €",
      },
    ],
  },
] as const;
