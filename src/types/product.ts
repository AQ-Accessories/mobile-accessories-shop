export type Category = 'Chargers' | 'Adapters' | 'Cables' | 'Audio' | 'Accessories' | 'Gaming';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  imageFilename: string;
  slug?: string;
  video?: string;
}
