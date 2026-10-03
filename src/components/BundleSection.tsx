import { resolveAllBundles } from '@/data/bundles';
import { BundleGrid } from './BundleGrid';

export function BundleSection() {
  const resolvedBundles = resolveAllBundles();

  return (
    <section id="bundles" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-3">
            Bundles &amp; Save
          </h2>
          <p className="text-brand-text-muted max-w-lg mx-auto">
            Grab a smart combo — get everything you need in one order and save.
          </p>
        </div>

        <BundleGrid bundles={resolvedBundles} />
      </div>
    </section>
  );
}
