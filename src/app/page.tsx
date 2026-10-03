import { Hero } from '@/components/Hero';
import { BundleSection } from '@/components/BundleSection';
import { CategorySection } from '@/components/CategorySection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Catalog } from '@/components/Catalog';
import { WhyShopWithUs } from '@/components/WhyShopWithUs';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Bundles & Save */}
      <BundleSection />

      {/* 3. Shop by Category */}
      <CategorySection />

      {/* 4. Featured Products */}
      <FeaturedProducts />

      {/* 5. All Products (with search + filter) */}
      <Catalog />

      {/* 6. Why Shop With Us */}
      <WhyShopWithUs />

      {/* 7. WhatsApp CTA */}
      <WhatsAppCTA />
    </main>
  );
}
