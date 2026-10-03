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
