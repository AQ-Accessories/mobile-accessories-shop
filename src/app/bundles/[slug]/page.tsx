import { resolveAllBundles } from '@/data/bundles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBundleWhatsAppUrl } from '@/utils/whatsapp';

export function generateStaticParams() {
  const bundles = resolveAllBundles();
  return bundles.map((bundle) => ({
    slug: bundle.id,
  }));
}

export default async function BundleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const bundles = resolveAllBundles();
  const bundle = bundles.find((b) => b.id === resolvedParams.slug);

  if (!bundle) {
    notFound();
  }

  const whatsappUrl = getBundleWhatsAppUrl(bundle);

  return (
    <main className="min-h-screen bg-brand-surface-alt pb-16 sm:pb-24 pt-6 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        
        {/* Top Back Button */}
        <div className="mb-6 sm:mb-10">
          <Link 
            href="/#all-bundles" 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-brand-border bg-white hover:bg-brand-surface-alt hover:text-brand-primary h-10 px-4 py-2 gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Bundles
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-brand-primary/5 border border-brand-border overflow-hidden p-6 sm:p-10 lg:p-12">
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
            
            {/* 1. NameBlock */}
            <div className="order-1 lg:col-start-2 lg:col-span-1 lg:row-start-1 mb-6 lg:mb-0">
              <span className="inline-block bg-brand-accent/10 text-brand-accent font-bold uppercase tracking-wider text-sm px-4 py-1.5 rounded-full w-fit mb-4 border border-brand-accent/20">
                Bundle Package
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-brand-primary tracking-tight leading-tight mb-3 break-words hyphens-auto">
                {bundle.name}
              </h1>
              <p className="text-lg text-brand-text-muted font-medium">
                {bundle.description}
              </p>
            </div>

            {/* 2. ImageGallery */}
            <div className="order-2 lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-4 mb-8 lg:mb-0">
              
              {/* Mobile Gallery (Horizontally Scrollable) */}
              <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 sm:-mx-10 px-6 sm:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {bundle.products.map(p => (
                  <div key={p.id} className="relative shrink-0 w-[85vw] sm:w-[70vw] aspect-square bg-brand-surface-alt rounded-2xl border border-brand-border overflow-hidden snap-center">
                    <Image
                      src={`/images/${p.imageFilename}`}
                      alt={`${p.name} - Included in ${bundle.name}`}
                      fill
                      className="object-contain p-8"
                      unoptimized
                      priority
                    />
                  </div>
                ))}
              </div>

              {/* Desktop Gallery (Large Primary + Supporting) */}
              <div className="hidden lg:flex flex-col gap-4 sticky top-12">
                {/* Primary Image */}
                <div className="relative w-full aspect-square bg-white rounded-3xl border border-brand-border shadow-sm overflow-hidden group ring-1 ring-black/5">
                  <Image
                    src={`/images/${bundle.products[0].imageFilename}`}
                    alt={`${bundle.products[0].name} - Primary item in ${bundle.name}`}
                    fill
                    className="object-contain p-12 group-hover:scale-110 transition-transform duration-700 ease-out"
                    unoptimized
                    priority
                  />
                </div>
                
                {/* Supporting Images */}
                {bundle.products.length > 1 && (
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                    {bundle.products.slice(1).map(p => (
                      <div key={p.id} className="relative aspect-square bg-white rounded-2xl border border-brand-border overflow-hidden hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 ring-1 ring-black/5 group">
                        <Image
                          src={`/images/${p.imageFilename}`}
                          alt={`${p.name} - Supporting item in ${bundle.name}`}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 3. PriceBlock */}
            <div className="order-3 lg:col-start-2 lg:col-span-1 lg:row-start-2 mb-8 lg:mb-0">
              <div className="bg-gradient-to-b from-white to-brand-surface-alt rounded-2xl p-6 border border-brand-border shadow-sm ring-1 ring-black/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-brand-text-muted font-medium">Original Retail Value</span>
                  <span className="text-brand-text-light line-through font-bold">Rs. {bundle.individualTotal.toLocaleString()}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-brand-whatsapp-dark mb-4 pb-4 border-b border-brand-border/50">
                  <span className="font-bold">Total Savings</span>
                  <span className="font-bold bg-green-50 text-brand-whatsapp-dark border border-brand-whatsapp/20 shadow-sm px-3 py-1 rounded-full text-sm self-start sm:self-auto">
                    Save Rs. {bundle.saving.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1">
                  <span className="text-brand-text-muted font-bold pb-1">Bundle Price</span>
                  <span className="text-4xl sm:text-5xl font-black text-brand-primary">Rs. {bundle.bundlePrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* 4. IncludedList */}
            <div className="order-4 lg:col-start-2 lg:col-span-1 lg:row-start-3 mb-8 lg:mb-0">
              <h3 className="text-lg font-bold text-brand-primary mb-4">Included in this bundle:</h3>
              <ul className="space-y-3">
                {bundle.products.map(p => (
                  <Link 
                    key={p.id} 
                    href={`/products/${p.slug}`}
                    title={`View details for ${p.name}`}
                    className="flex items-center gap-3 bg-white border border-brand-border p-3 rounded-xl shadow-sm hover:border-brand-accent hover:shadow-md transition-all group"
                  >
                    <div className="relative w-12 h-12 bg-brand-surface-alt rounded-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                      <Image src={`/images/${p.imageFilename}`} alt={p.name} fill className="object-contain p-1" unoptimized />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-brand-primary line-clamp-1 group-hover:text-brand-accent transition-colors">
                        {p.name}
                      </span>
                      <span className="text-xs text-brand-text-muted font-medium">Rs. {p.price.toLocaleString()}</span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>

            {/* 5. Description */}
            <div className="order-5 lg:col-start-1 lg:col-span-2 lg:row-start-5 mt-4 lg:mt-12 pt-8 lg:pt-12 border-t border-brand-border">
              <h2 className="text-2xl font-black text-brand-primary mb-4">Complete Bundle Overview</h2>
              <div className="prose prose-brand max-w-none text-brand-text-muted">
                <p className="text-lg leading-relaxed">
                  The {bundle.name} combines our most popular accessories into one comprehensive package. By purchasing these items together, you receive a perfectly matched set of products at a significantly reduced price compared to buying them individually. 
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Everything you see listed below is included in the box. Please review the individual product specifications and videos to see exactly what you will receive.
                </p>
              </div>
            </div>

            {/* 6. ProductDetails (Videos & Expanded Specs) */}
            <div className="order-6 lg:col-start-1 lg:col-span-2 lg:row-start-6 mt-12">
              <h2 className="text-2xl font-black text-brand-primary mb-6">Product Details & Demonstrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bundle.products.map(p => (
                  <div key={p.id} className="bg-white rounded-2xl p-6 border border-brand-border flex flex-col hover:shadow-lg transition-shadow duration-300 ring-1 ring-black/5">
                    <h3 className="text-xl font-bold text-brand-primary mb-2">{p.name}</h3>
                    
                    {p.video ? (
                      <>
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-4 block">Product Demo</span>
                        <div className="mb-6 rounded-xl overflow-hidden bg-brand-primary border border-brand-border shadow-md aspect-video relative">
                          <video 
                            src={p.video} 
                            controls 
                            preload="none"
                            className="w-full h-full object-contain"
                            poster={`/images/${p.imageFilename}`}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-4 block">Product Image</span>
                        <div className="mb-6 rounded-xl overflow-hidden bg-white border border-brand-border shadow-sm aspect-video relative">
                          <Image src={`/images/${p.imageFilename}`} alt={p.name} fill className="object-contain p-4" unoptimized />
                        </div>
                      </>
                    )}
                    
                    <div className="mt-auto">
                      <p className="text-sm text-brand-text-muted line-clamp-3 leading-relaxed mb-4">
                        {p.description}
                      </p>
                      <Link href={`/products/${p.slug}`} className="text-brand-accent font-bold text-sm hover:underline flex items-center gap-1">
                        View full specs
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. BuyCTA (Bottom on Mobile, Right side on Desktop) */}
            <div className="order-7 lg:col-start-2 lg:col-span-1 lg:row-start-4 lg:self-start sticky bottom-4 lg:static z-40 mt-12 lg:mt-0 pt-4 lg:pt-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full gap-2 sm:gap-3 bg-brand-whatsapp text-white text-base sm:text-xl font-black px-4 sm:px-6 py-4 sm:py-5 rounded-2xl shadow-xl shadow-brand-whatsapp/25 hover:shadow-2xl hover:shadow-brand-whatsapp/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden border-2 border-white/20 lg:border-none"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] skew-x-12" />
                <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 drop-shadow-md shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative z-10 drop-shadow-md whitespace-normal sm:whitespace-nowrap leading-tight text-center">Buy Bundle on WhatsApp</span>
              </a>
              <p className="text-sm text-brand-text-light text-center mt-4 font-medium">
                Delivery charges may apply
              </p>
            </div>
            
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 flex justify-center sm:justify-start">
          <Link 
            href="/#all-bundles" 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-brand-border bg-white hover:bg-brand-surface-alt hover:text-brand-primary h-10 px-4 py-2 gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Bundles
          </Link>
        </div>

      </div>
    </main>
  );
}
