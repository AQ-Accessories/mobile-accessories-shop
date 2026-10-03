'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import { Category } from '@/types/product';
import { ProductGrid } from './ProductGrid';
import { CategoryFilter } from './CategoryFilter';
import { SearchBar } from './SearchBar';

const categories: Category[] = ['Chargers', 'Adapters', 'Cables', 'Audio', 'Accessories'];

export function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="all-products" className="py-16 sm:py-20 bg-brand-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-3">
            All Products
          </h2>
          <p className="text-brand-text-muted max-w-lg mx-auto">
            Browse our full collection of premium mobile accessories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-brand-border mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  );
}
