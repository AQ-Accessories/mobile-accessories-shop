import { ResolvedBundle } from '@/data/bundles';
import { BundleCard } from './BundleCard';

interface BundleGridProps {
  bundles: ResolvedBundle[];
}

export function BundleGrid({ bundles }: BundleGridProps) {
  if (bundles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bundles.map((bundle) => (
        <BundleCard key={bundle.id} bundle={bundle} />
      ))}
    </div>
  );
}
