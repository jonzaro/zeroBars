import { Product } from "../types";

export const products: Product[] = [
  {
    id: "pack",
    name: "Off-Grid Pack",
    price: 110,
    description:
      "Urban-ready tactical backpack with modular storage system and weatherproof construction.",
    images: ["src/assets/TacBag.jpg", "src/assets/TacBag.jpg"],
    features: [
      "Weatherproof 1000D Cordura construction",
      "Modular attachment system",
      "Quick-access compartments",
      'Padded laptop sleeve (up to 15")',
      "YKK AquaGuard zippers",
    ],
  },

  {
    id: "fanny",
    name: "Blackout Fanny",
    price: 40,
    description:
      "Technical waist pack with expandable storage and multi-wear options.",
    images: ["src/assets/Fanny.jpg", "src/assets/Fanny.jpg"],
    features: [
      "Cross-body or waist wear options",
      "Expandable main compartment",
      "Quick-release buckle system",
      "Hidden security pocket",
      "Reflective details",
    ],
  },
  {
    id: "sling-bag",
    name: "Onyx Sling ",
    price: 65,
    description:
      "Versatile messenger bag with MOLLE system and convertible strap design.",
    images: ["src/assets/Sling.jpg", "src/assets/Sling.jpg"],
    features: [
      "Ambidextrous strap system",
      "MOLLE/PALS attachment points",
      "Water-resistant coating",
      "Internal organization",
      "Reinforced carrying handle",
    ],
  },
];
