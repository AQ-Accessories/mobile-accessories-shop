import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { getProductWhatsAppUrl } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = getProductWhatsAppUrl(product);

  return (
    <div className="group flex flex-col bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square w-full bg-brand-surface-alt overflow-hidden">
        <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-300">
          <Image
            src={`/images/${product.imageFilename}`}
            alt={`${product.name} - AQ Accessories`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            unoptimized
          />
        </div>
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-brand-accent/90 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-bold text-brand-primary mb-1.5 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-brand-text-muted mb-4 line-clamp-2 flex-grow leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-col mt-auto pt-4 border-t border-brand-border gap-3">
          <span className="text-lg sm:text-xl font-extrabold text-brand-primary">
            Rs. {product.price.toLocaleString()}
          </span>
          <div className="flex flex-wrap gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 basis-[130px] inline-flex items-center justify-center rounded-xl bg-brand-whatsapp px-3 py-3 text-sm sm:text-base font-bold text-white shadow-md hover:shadow-lg hover:bg-brand-whatsapp-dark transition-all focus:ring-2 focus:ring-offset-1 focus:ring-brand-whatsapp focus:outline-none"
            >
              Buy Now
            </a>
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 basis-[130px] inline-flex items-center justify-center rounded-xl bg-white border-2 border-brand-border px-3 py-3 text-sm sm:text-base font-semibold text-brand-text-muted hover:text-brand-primary hover:border-brand-primary/40 hover:bg-brand-surface-alt transition-all focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary/30 focus:outline-none"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
