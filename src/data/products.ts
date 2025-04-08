import TacBagImage from "../assets/TacBag.jpg";
import FannyImage from "../assets/Fanny.jpg";
import SlingImage from "../assets/Sling.jpg";
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "pack",
    name: "Off-Grid Pack",
    price: 110,
    pmntLink: "https://buy.stripe.com/dR66oNcUvay68RacMO",
    description:
      "Urban-ready tactical backpack with modular storage system and weatherproof construction.",
    images: [TacBagImage, TacBagImage],
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
    pmntLink: "https://buy.stripe.com/cN2dRf1bN21AgjC4gg",
    description:
      "Technical waist pack with expandable storage and multi-wear options.",
    images: [FannyImage, FannyImage],
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
    pmntLink: "https://buy.stripe.com/aEU3cB6w75dM8Ra145",
    description:
      "Versatile messenger bag with MOLLE system and convertible strap design.",
    images: [SlingImage, SlingImage],
    features: [
      "Ambidextrous strap system",
      "MOLLE/PALS attachment points",
      "Water-resistant coating",
      "Internal organization",
      "Reinforced carrying handle",
    ],
  },
];
