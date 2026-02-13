export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}
export const products: Product[] = [
  {
    id: 1,
    category: 'Chair',
    name: 'Sakarias Armchair',
    price: 392,
    rating: 3.2,
    image: '/experience.webp',
  },
  {
    id: 2,
    category: 'Chair',
    name: 'Baltsar Chair',
    price: 299,
    rating: 5,
    image: '/experience.webp',
  },
  {
    id: 3,
    category: 'Chair',
    name: 'Anjay Chair',
    price: 519,
    rating: 4,
    image: '/experience.webp',
  },
  {
    id: 4,
    category: 'Chair',
    name: 'Nyantuy Chair',
    price: 921,
    rating: 1.5,
    image: '/experience.webp',
  },
];

export const categories = ['Chair', 'Beds', 'Sofa', 'Lamp'];
