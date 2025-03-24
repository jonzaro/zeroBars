import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'tactical-backpack',
    name: 'ZB-1 Tactical Backpack',
    price: 189.99,
    description: 'Urban-ready tactical backpack with modular storage system and weatherproof construction.',
    images: [
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80'
    ],
    features: [
      'Weatherproof 1000D Cordura construction',
      'Modular attachment system',
      'Quick-access compartments',
      'Padded laptop sleeve (up to 15")',
      'YKK AquaGuard zippers'
    ]
  },
  {
    id: 'messenger-bag',
    name: 'ZB-2 Messenger Bag',
    price: 159.99,
    description: 'Versatile messenger bag with MOLLE system and convertible strap design.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80'
    ],
    features: [
      'Ambidextrous strap system',
      'MOLLE/PALS attachment points',
      'Water-resistant coating',
      'Internal organization',
      'Reinforced carrying handle'
    ]
  },
  {
    id: 'waist-pack',
    name: 'ZB-3 Waist Pack',
    price: 129.99,
    description: 'Technical waist pack with expandable storage and multi-wear options.',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80'
    ],
    features: [
      'Cross-body or waist wear options',
      'Expandable main compartment',
      'Quick-release buckle system',
      'Hidden security pocket',
      'Reflective details'
    ]
  }
];