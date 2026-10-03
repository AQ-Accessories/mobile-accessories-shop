import { Category } from '@/types/product';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === 'All'
            ? 'bg-brand-primary text-white'
            : 'bg-brand-surface-alt text-brand-text-muted hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-brand-primary text-white'
              : 'bg-brand-surface-alt text-brand-text-muted hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
