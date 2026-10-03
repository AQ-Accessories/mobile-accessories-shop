import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductWhatsAppUrl } from '@/utils/whatsapp';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const whatsappUrl = getProductWhatsAppUrl(product);

  return (
    <main className="min-h-screen bg-brand-surface-alt pb-16 sm:pb-24 pt-6 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        
        {/* Top Back Button */}
        <div className="mb-6 sm:mb-10">
          <Link 
            href="/#all-products" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-brand-border text-brand-text-muted hover:text-brand-primary hover:border-brand-primary hover:shadow-md transition-all duration-300 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left: Media Area */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            
            {/* Main Image */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white shadow-xl shadow-brand-primary/5 border border-brand-border group">
              <Image
                src={`/images/${product.imageFilename}`}
                alt={`${product.name} - AQ Accessories`}
                fill
                className="object-contain p-8 sm:p-12 group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Video Player */}
            {product.video && (
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-brand-primary shadow-xl shadow-brand-primary/10 border border-brand-border/50 group">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 bg-black/10">
                   {/* Optional play overlay or subtle styling could go here */}
                </div>
                <video 
                  src={product.video} 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain relative z-20"
                  poster={`/images/${product.imageFilename}`}
                />
              </div>
            )}
          </div>

          {/* Right: Info Area */}
          <div className="lg:w-1/2 flex flex-col pt-2 sm:pt-4">
            
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary tracking-tight leading-tight mb-4">
                {product.name}
              </h1>
              
              <span className="inline-block bg-brand-accent/10 text-brand-accent font-bold uppercase tracking-wider text-sm px-4 py-2 rounded-full w-fit border border-brand-accent/20 shadow-sm">
                {product.category}
              </span>
            </div>
            
            {/* Highly Visible Price Block */}
            <div className="mb-8 p-6 sm:p-8 bg-white rounded-3xl border border-brand-border shadow-lg shadow-brand-primary/5 flex items-center justify-between group hover:border-brand-primary/30 transition-colors duration-300">
              <div className="flex flex-col">
                <span className="text-brand-text-muted font-bold uppercase tracking-wider text-xs sm:text-sm mb-1">
                  Our Price
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary">
                  Rs. {product.price.toLocaleString()}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="mb-12 flex-grow">
              <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Product Description
              </h3>
              <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {/* Prominent WhatsApp CTA */}
            <div className="mt-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full gap-3 bg-brand-whatsapp text-white text-xl sm:text-2xl font-black px-8 py-5 sm:py-6 rounded-2xl shadow-xl shadow-brand-whatsapp/25 hover:shadow-2xl hover:shadow-brand-whatsapp/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] skew-x-12" />
                <svg className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative z-10 drop-shadow-md">Buy Now on WhatsApp</span>
              </a>
            </div>

            {/* Bottom Back Button */}
            <div className="mt-8 pt-8 border-t border-brand-border text-center">
              <Link 
                href="/#all-products" 
                className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-primary transition-colors font-bold uppercase tracking-wider text-sm group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Products
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
