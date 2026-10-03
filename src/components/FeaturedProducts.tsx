import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function FeaturedProducts() {
  // Top 4 highest-priced products as "featured"
  const featured = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-3">
            Featured Products
          </h2>
          <p className="text-brand-text-muted max-w-lg mx-auto">
            Our most popular picks — top quality, top performance.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
