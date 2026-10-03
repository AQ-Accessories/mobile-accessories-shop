import { siteConfig } from '@/config/site';
import { Product } from '@/types/product';
import { ResolvedBundle } from '@/data/bundles';

/**
 * Generate a WhatsApp URL for purchasing a single product.
 * Message format matches the owner's exact specification.
 */
export function getProductWhatsAppUrl(product: Product): string {
  const message = [
    `Hello! 👋`,
    ``,
    `I want to order:`,
    ``,
    `📦 Product: ${product.name}`,
    `💰 Price: Rs. ${product.price.toLocaleString()}`,
    ``,
    `Please confirm availability and delivery charges.`,
    ``,
    `Thank you!`,
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL for purchasing a bundle.
 * Message format matches the owner's exact specification.
 */
export function getBundleWhatsAppUrl(bundle: ResolvedBundle): string {
  const productLines = bundle.products
    .map(p => `📦 ${p.name}`)
    .join('\n');

  const message = [
    `Hello! 👋`,
    ``,
    `I want to order the ${bundle.name}:`,
    ``,
    productLines,
    ``,
    `💰 Bundle Price: Rs. ${bundle.bundlePrice.toLocaleString()}`,
    ``,
    `Please confirm availability and delivery charges.`,
    ``,
    `Thank you!`,
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a generic WhatsApp inquiry URL.
 */
export function getWhatsAppInquiryUrl(message?: string): string {
  const defaultMessage = 'Hello! 👋 I would like to know more about your products.';
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
}
