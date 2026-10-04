# GEMINI.md — Project Rules for AQ Accessories Shop

## Project

A real commercial mobile accessories shop based in Lahore, Pakistan.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Export:** Static export (`output: "export"`)
- **Hosting:** Cloudflare Pages
- **Repository:** GitHub

## Business Model

This is a **static product catalog and WhatsApp ordering website**.

There is **NO**:

- Database
- Backend
- Authentication
- Customer account system
- Payment gateway
- API route
- Server action
- Online checkout system

## Customer Checkout

Every product and bundle must have a **Buy Now / Buy Bundle** button that opens WhatsApp using a `wa.me` URL with a pre-filled, URL-encoded message.

## Business Rules

> [!CAUTION]
> These rules are non-negotiable. Violating them damages business credibility.

- Use **only the real product information** provided by the owner.
- **Never invent** prices.
- **Never invent** specifications.
- **Never invent** warranty claims.
- **Never invent** delivery claims.
- **Never invent** product compatibility.
- **Never replace** real product photos with AI-generated product photos.
- Keep product data **centralized** and easy to edit.
- Keep bundle data **centralized** and reusable.
- Keep the WhatsApp number in **one configuration location**.
- Do not **duplicate** business information unnecessarily.

## Design Goals

- Premium technology-store feeling
- Modern and trustworthy
- Clean and attractive without being cluttered
- Mobile-first layout
- Fast loading
- Subtle animations
- Excellent readability
- Strong product photography
- Strong call-to-action buttons

## Performance Goals

> [!IMPORTANT]
> The primary users are smartphone users in Pakistan on mobile data.

- Optimize for mobile data connections.
- Do not add unnecessary packages.
- Do not add unnecessary JavaScript.
- Do not use huge media files.
- Use optimized product images.
- Use a compressed hero video with a fallback hero image.
- Avoid loading unnecessary resources.

## Static Hosting Constraint

> [!WARNING]
> The project must remain compatible with a static Next.js export for Cloudflare Pages.

- Do not introduce features that require a server.
- Do not use `getServerSideProps`, server actions, API routes, or any server-dependent feature.
- All pages must be statically exportable.

## Quality Rule

Before declaring any task complete:

1. Inspect the relevant files.
2. Make the change.
3. Run relevant tests or builds.
4. Fix any errors.
5. Inspect the result.
6. Report what changed.
7. **Never claim something was tested if it was not actually tested.**

## Agent Behavior

- **First inspect** the existing project before changing it.
- **Make a plan** for substantial changes.
- Keep changes **focused** on the requested task.
- Do **not redesign** unrelated parts.
- Prefer **reusable components**.
- Prefer **centralized data**.
- Explain important changes in **simple language**.
- If something is **missing**, report it instead of inventing information.
- For visual work, use the **browser and screenshots** when appropriate to verify the actual rendered UI.
- For every major phase, provide:
  - What you changed
  - What you tested
  - Any remaining issue
  - What the owner should review manually

## Permanent Product and Bundle Management Rules

### Product Data Rules
- Every product should have a stable unique ID.
- Recommended fields: `id`, `name`, `slug`, `price`, `category`, `description`, `image`, `video`. Optional metadata only when explicitly provided.
- The centralized product data is the single source of truth. All components (ProductCard, Product Detail page, Search, Category filtering, WhatsApp checkout) must read from this central data.
- **Never duplicate** the same product information in multiple places unless technically necessary.

### Product Image Rules
- Every product image must reference an actual file under `public/images/`.
- **Never invent** a missing product image or silently use another product's image.
- **Never replace** a real product photo with an AI-generated image unless explicitly requested.
- If an image is missing: **REPORT IT**. Do not break the website.

### Product Video Rules
- Product videos belong under `public/videos/products/`. Each product may reference one product-demo video.
- **Never invent** a missing video or use another product's video as a replacement.
- Product videos should load only where needed (not all on the homepage).
- Bundle detail pages may display videos belonging only to products included in that bundle.

### Bundle Data Rules
- Bundles must be centralized.
- A bundle should reference existing product IDs whenever practical to ensure automatic updates when product assets change.
- **Do NOT duplicate** product names, image paths, descriptions, or video paths inside bundle data unless necessary.

### Price Rules
- **Never invent** prices. Use the exact price provided.
- When adding or changing a bundle: verify the original combined retail total against the current product prices.
- If there is a price mismatch: **STOP and report it**. Do not silently overwrite or recalculate a bundle price unless explicitly requested.

### WhatsApp Rules
- All product and bundle WhatsApp checkouts must use the centralized WhatsApp configuration.
- **Never create** separate hard-coded WhatsApp functions for individual products or bundles.
- Product messages must dynamically use: product name and current product price.
- Bundle messages must dynamically use: bundle name, included products, and bundle price.

### Category Rules
- Use centralized category values.
- **Do not create** a new category automatically. If a new category is needed, report it first.
- Keep category filtering compatible with search, product cards, and product detail pages.

### Safe Editing Rules
- Do not rewrite the entire catalog when adding one product.
- Do not rewrite existing bundles when adding one bundle.
- Do not modify unrelated products or bundles.
- **Do not redesign** the website during data-only changes or modify UI components unless required for the new data.

### Validation Rules
- After adding or editing data, verify: unique ID/slug, valid category, valid price, valid image/video paths, correct references, and correct WhatsApp data.
- For bundles: ensure all referenced product IDs exist, no missing products, correct original total, valid bundle price, and correct saving calculation.

### Build Rule
- After every meaningful data change:
  1. Run type checking.
  2. Run linting if configured.
  3. Run production build.
- **Do not report PASS** unless the relevant checks actually passed.

### Important
- **Never invent** missing information. ASK/REPORT IT rather than guessing.
- Preserve all existing working functionality.
