<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Vatsalya Children Care — Project Instructions

**What this is:** a fast, mobile-first, SEO/AEO-optimized landing page for a pediatric + lactation
clinic in Sola, Ahmedabad. Live on Vercel; production branch is `main` (protected — all changes via PR).

## Read these before making any change
1. `docs/REDESIGN-PRD.md` — current design brief (Medio-inspired editorial redesign). Source of truth for look & section plan.
2. `src/components/brand.ts` — single source of truth for ALL content (NAP, DOCTOR, COPY, FAQ_ITEMS, HOURS). Never hardcode content elsewhere.
3. `BUILD-SPEC.md` (in the Obsidian vault) — original brand/content spec for deeper context.

## Hard rules
- **Brand is locked:** fonts Alice / Lora / Poppins; palette navy/gold/cream (hexes in `tailwind.config.ts`). Do NOT swap.
- **Never invent facts.** Open items (exact geo coords, testimonials) stay marked TODO/deferred.
- **Preserve on every change:** the 3 JSON-LD blocks (`JsonLd.tsx`), metadata (`layout.tsx`), `next-sitemap`, `llms.txt`, security headers (`next.config.ts`), floating WhatsApp + sticky call bar, Google Maps embed.
- **Performance:** mobile-first, PageSpeed 90+ mobile, JS < ~100 KB, all images via `next/image`, respect `prefers-reduced-motion`.
- Use the UI/UX design skill for layout polish, but keep fonts/colors fixed.

## Workflow
`main` is protected. Every change: branch → `npm run build` → PR → Vercel preview → verify on mobile → squash-merge. Build one PRD section per PR. Tag production releases (`v1.0.0`, …).

## Stack
Next.js (App Router) · TypeScript · Tailwind v3 · Framer Motion · lucide-react · Vercel.
Repo is the `websites` container; this app lives in `vatsalya-children-care/` (Vercel root dir).
