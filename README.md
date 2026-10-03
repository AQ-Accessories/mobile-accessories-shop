# AQ Accessories Shop

A premium, static e-commerce catalog and WhatsApp ordering platform for mobile accessories based in Lahore, Pakistan.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static Export (`out/`) optimized for Cloudflare Pages

## Features

- **Blazing Fast Static Export:** Fully static HTML/CSS/JS export containing no backend or database dependencies.
- **WhatsApp Integration:** Dynamic checkout links that open WhatsApp with a pre-formatted message containing exact product selections, pricing, and encoded URLs.
- **Mobile-First UX:** Perfectly tailored for Pakistani mobile internet users with large touch targets, responsive layouts, and zero-layout-shift imagery.
- **Dynamic Bundle System:** A customized 'Bundles & Save' logic allowing the owner to group products into deals directly via localized data files.
- **Local SEO:** Context-aware meta tags, canonical definitions, and Open Graph structured data targeted for the Lahore market.
- **Video Fallbacks:** A cinematic background video that natively degrades to an optimized poster image on constrained devices.

## Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Dev Server:**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000`.

3. **Production Build:**
   ```bash
   npm run build
   ```
   This generates the `/out` directory, which can be uploaded directly to Cloudflare Pages or any static host.

## Configuration

All business data is centralized. 
- **Site details (Location, Taglines):** `src/config/site.ts`
- **Products list:** `src/data/products.ts`
- **Bundles list:** `src/data/bundles.ts`
- **WhatsApp formatting:** `src/utils/whatsapp.ts`
