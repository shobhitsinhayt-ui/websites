# Vatsalya Children Care — Website

Mobile-first marketing site for **Vatsalya Children Care**, a pediatric clinic in Sola, Ahmedabad, led by Dr. Aashita A. Sinha (MBBS, MD Pediatrics, Neonatologist & Lactation Consultant).

Single landing page (Phase 1 hero + condensed Phase 2 sections), structured so sections can be split into routes (`/about`, `/services`, `/faqs`, `/blog`, `/contact`) later.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v3** — brand tokens (navy / gold / cream)
- **Framer Motion** — subtle scroll/hover animation (respects `prefers-reduced-motion`)
- **lucide-react** — service icons
- **next-sitemap** — sitemap.xml + robots.txt (postbuild)
- Fonts via `next/font/google`: **Alice** (headings), **Lora** (italic accents), **Poppins** (body)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + sitemap
```

## Architecture

- `src/components/brand.ts` — **single source of truth**: NAP, doctor, brand copy, and `FAQ_ITEMS`. Both the visible UI and the JSON-LD schema import from here, so contact info and FAQ content can never drift.
- `src/app/layout.tsx` — metadata (title/description/OG/Twitter/canonical/icons) + injects `JsonLd`.
- `src/components/JsonLd.tsx` — three JSON-LD blocks: MedicalClinic+LocalBusiness, Physician, FAQPage.
- `src/app/page.tsx` — composes the 11 section components.

## Open TODOs (do not invent — confirm with the clinic)

These are marked `TODO` in code and must be filled before launch:

- **OPD / clinic hours** — `LocationSection`, FAQ Q5, JSON-LD `openingHours`
- **Google Maps GPS coordinates** — `LocationSection` map embed + JSON-LD `geo`
- **Dr. Aashita's professional photo** — `AboutPreview`
- **Years of experience + medical-council registration number** — `AboutPreview`, Physician schema
- **Walk-in vs appointment policy** — FAQ
- Logo ring text says "Hospital" vs brand "Care" — standardize on **Care**

## Deploy (Vercel)

Repo: `shobhitsinhayt-ui/websites` · this project lives in `vatsalya-children-care/`.
On Vercel import, set **Root Directory = `vatsalya-children-care`**. Then point DNS for
`vatsalyachildrencare.in` at Vercel.
