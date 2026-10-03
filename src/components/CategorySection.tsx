import { siteConfig } from '@/config/site';

export function CategorySection() {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-brand-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-3">
            Shop by Category
          </h2>
          <p className="text-brand-text-muted max-w-lg mx-auto">
            Find exactly what you need — browse by type.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.categories.map((category) => (
            <a
              key={category.name}
              href="#all-products"
              className="group flex flex-col items-center justify-center gap-3 bg-white border border-brand-border rounded-2xl p-6 hover:border-brand-accent hover:shadow-md transition-all duration-200"
            >
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-brand-primary">
                {category.name}
              </h3>
              <p className="text-xs text-brand-text-muted text-center">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
