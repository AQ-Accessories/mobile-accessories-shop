import Image from 'next/image';
import Link from 'next/link';
import { ResolvedBundle } from '@/data/bundles';
import { getBundleWhatsAppUrl } from '@/utils/whatsapp';

interface BundleCardProps {
  bundle: ResolvedBundle;
}

export function BundleCard({ bundle }: BundleCardProps) {
  const whatsappUrl = getBundleWhatsAppUrl(bundle);

  return (
    <div className="flex flex-col bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product thumbnails */}
      <div className="flex gap-1.5 p-3 bg-brand-surface-alt">
        {bundle.products.map((product) => (
          <div
            key={product.id}
            className="relative flex-1 aspect-square rounded-xl overflow-hidden bg-white border border-brand-border"
          >
            <Image
              src={`/images/${product.imageFilename}`}
              alt={`${product.name} included in bundle`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 640px) 30vw, 120px"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Bundle info */}
      <div className="flex flex-col flex-grow p-5">
        {/* Name & description */}
        <h3 className="text-lg font-bold text-brand-primary mb-1">
          {bundle.name}
        </h3>
        <p className="text-sm text-brand-text-muted mb-3">
          {bundle.description}
        </p>

        {/* Included products */}
        <ul className="text-xs text-brand-text-muted space-y-1.5 mb-4">
          {bundle.products.map((p) => (
            <li key={p.id} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0 mt-1" />
              <span>
                {p.name} — <span className="text-brand-text-light">Rs. {p.price.toLocaleString()}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* Pricing block */}
        <div className="mt-auto pt-4 border-t border-brand-border space-y-2">
          {/* Original vs bundle */}
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-brand-text-light line-through">
              Rs. {bundle.individualTotal.toLocaleString()}
            </span>
            <span className="text-xs font-semibold text-brand-whatsapp-dark bg-green-50 px-2 py-0.5 rounded-full">
              Save Rs. {bundle.saving.toLocaleString()}
            </span>
          </div>

          {/* Bundle price + CTA */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold text-brand-primary">
                Rs. {bundle.bundlePrice.toLocaleString()}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 basis-[160px] inline-flex items-center justify-center gap-1.5 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-sm sm:text-base font-semibold px-4 py-2.5 rounded-full transition-colors shadow-sm focus:ring-2 focus:ring-brand-whatsapp focus:outline-none"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Buy Bundle on WhatsApp
              </a>
              <Link
                href={`/bundles/${bundle.id}`}
                className="flex-1 basis-[120px] inline-flex items-center justify-center rounded-full bg-brand-surface-alt border border-brand-border px-4 py-2.5 text-sm sm:text-base font-semibold text-brand-primary hover:bg-brand-border transition-colors focus:ring-2 focus:ring-brand-primary/30 focus:outline-none"
              >
                More Details
              </Link>
            </div>
          </div>

          {/* Delivery note */}
          <p className="text-[10px] text-brand-text-light text-center pt-1">
            Delivery charges may apply
          </p>
        </div>
      </div>
    </div>
  );
}
