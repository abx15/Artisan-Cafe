export interface MenuItem {
  id: string;
  name: string;
  category: 'cakes' | 'chocolates' | 'chaumin' | 'drinks';
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export const menuData: MenuItem[] = [
  // Cakes
  {
    id: 'cake-1',
    name: 'Velvet Rose Cake',
    category: 'cakes',
    price: 450,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    description: 'Luxurious red velvet layers with cream cheese frosting and edible rose petals.',
    featured: true,
  },
  {
    id: 'cake-2',
    name: 'Chocolate Truffle Delight',
    category: 'cakes',
    price: 520,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop',
    description: 'Rich Belgian chocolate cake with ganache layers and truffle shavings.',
    featured: true,
  },
  {
    id: 'cake-3',
    name: 'Mango Paradise',
    category: 'cakes',
    price: 480,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
    description: 'Fresh alphonso mango mousse on vanilla sponge with tropical fruit compote.',
  },
  {
    id: 'cake-4',
    name: 'Classic Tiramisu',
    category: 'cakes',
    price: 420,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    description: 'Traditional Italian coffee-soaked ladyfingers with mascarpone cream.',
  },
  {
    id: 'cake-5',
    name: 'Berry Bliss Cheesecake',
    category: 'cakes',
    price: 460,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
    description: 'Creamy New York cheesecake topped with mixed berry compote.',
  },

  // Chocolates
  {
    id: 'choco-1',
    name: 'Dark Truffle Collection',
    category: 'chocolates',
    price: 380,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop',
    description: 'Handcrafted 72% dark chocolate truffles with assorted ganache fillings.',
    featured: true,
  },
  {
    id: 'choco-2',
    name: 'Salted Caramel Bonbons',
    category: 'chocolates',
    price: 320,
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=300&fit=crop',
    description: 'Milk chocolate shells filled with sea salt caramel and butter.',
    featured: true,
  },
  {
    id: 'choco-3',
    name: 'Hazelnut Praline Box',
    category: 'chocolates',
    price: 350,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop',
    description: 'Roasted hazelnut praline enrobed in premium Belgian chocolate.',
  },
  {
    id: 'choco-4',
    name: 'Mint Chocolate Dreams',
    category: 'chocolates',
    price: 280,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop',
    description: 'Refreshing mint ganache covered in dark chocolate.',
  },
  {
    id: 'choco-5',
    name: 'Orange Zest Squares',
    category: 'chocolates',
    price: 300,
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=300&fit=crop',
    description: 'Zesty orange-infused white chocolate with candied orange peel.',
  },

  // Chaumin (Noodles)
  {
    id: 'chau-1',
    name: 'Spicy Szechuan Chaumin',
    category: 'chaumin',
    price: 180,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    description: 'Wok-tossed noodles with vegetables in fiery Szechuan sauce.',
    featured: true,
  },
  {
    id: 'chau-2',
    name: 'Chicken Hakka Noodles',
    category: 'chaumin',
    price: 220,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    description: 'Classic Indo-Chinese noodles with tender chicken and vegetables.',
    featured: true,
  },
  {
    id: 'chau-3',
    name: 'Veggie Supreme Chaumin',
    category: 'chaumin',
    price: 160,
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&h=300&fit=crop',
    description: 'Garden fresh vegetables stir-fried with egg noodles.',
  },
  {
    id: 'chau-4',
    name: 'Paneer Manchurian Noodles',
    category: 'chaumin',
    price: 200,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    description: 'Crispy paneer manchurian served over saucy noodles.',
  },
  {
    id: 'chau-5',
    name: 'Garlic Butter Noodles',
    category: 'chaumin',
    price: 170,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    description: 'Buttery garlic-infused noodles with herbs and parmesan.',
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Signature Espresso',
    category: 'drinks',
    price: 120,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
    description: 'Single origin arabica beans pulled to perfection.',
    featured: true,
  },
  {
    id: 'drink-2',
    name: 'Caramel Macchiato',
    category: 'drinks',
    price: 180,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop',
    description: 'Layered espresso, vanilla milk and caramel drizzle.',
    featured: true,
  },
  {
    id: 'drink-3',
    name: 'Matcha Latte',
    category: 'drinks',
    price: 160,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop',
    description: 'Ceremonial grade matcha whisked with steamed oat milk.',
  },
  {
    id: 'drink-4',
    name: 'Belgian Hot Chocolate',
    category: 'drinks',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop',
    description: 'Velvety hot chocolate made with premium Belgian cocoa.',
  },
  {
    id: 'drink-5',
    name: 'Iced Vanilla Cold Brew',
    category: 'drinks',
    price: 170,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    description: '20-hour cold steeped coffee with Madagascar vanilla.',
  },
];

export const categories = [
  { id: 'all', name: 'All Items', slug: '' },
  { id: 'cakes', name: 'Cakes', slug: 'cakes' },
  { id: 'chocolates', name: 'Chocolates', slug: 'chocolates' },
  { id: 'chaumin', name: 'Chaumin', slug: 'chaumin' },
  { id: 'drinks', name: 'Drinks', slug: 'drinks' },
] as const;

export type CategorySlug = 'cakes' | 'chocolates' | 'chaumin' | 'drinks' | '';
