import { products } from './products';
import { Product } from '@/types/product';

export interface Bundle {
  id: string;
  name: string;
  description: string;
  productIds: string[];
  bundlePrice: number;
}

export interface ResolvedBundle extends Bundle {
  products: Product[];
  individualTotal: number;
  saving: number;
}

export const bundles: Bundle[] = [
  {
    id: 'phone-essential-kit',
    name: 'Phone Essential Kit',
    description: 'Charger + Fast Cable + Wireless Earbuds',
    productIds: ['3', '6', '13'],
    bundlePrice: 1999,
  },
  {
    id: 'charging-hub-kit',
    name: 'Charging Hub Kit',
    description: 'Multi-Port Adapter + 40W Charger + 3-in-1 Cable',
    productIds: ['4', '1', '5'],
    bundlePrice: 1999,
  },
  {
    id: 'creator-starter-kit',
    name: 'Creator Starter Kit',
    description: 'Tripod + Wireless Buds + Wired Hands-Free',
    productIds: ['20', '10', '19'],
    bundlePrice: 2999,
  },
  {
    id: 'desk-audio-kit',
    name: 'Desk Audio Kit',
    description: 'P9 Headphones + Computer Speakers + Vivid Cable',
    productIds: ['21', '22', '16'],
    bundlePrice: 2999,
  },
  {
    id: 'solar-outdoor-audio-kit',
    name: 'Solar Outdoor Audio Kit',
    description: 'Solar Wireless Speaker + 4-in-1 Fast Cable',
    productIds: ['24', '17'],
    bundlePrice: 2399,
  },
];

export function resolveBundle(bundle: Bundle): ResolvedBundle {
  const bundleProducts = bundle.productIds
    .map(pid => products.find(p => p.id === pid)!)
    .filter(Boolean);
  const individualTotal = bundleProducts.reduce((sum, p) => sum + p.price, 0);
  const saving = individualTotal - bundle.bundlePrice;

  return {
    ...bundle,
    products: bundleProducts,
    individualTotal,
    saving,
  };
}

export function resolveAllBundles(): ResolvedBundle[] {
  return bundles.map(resolveBundle);
}
