# CLAUDE.md — Vatsalya Children Care

## 1. Project overview
Marketing website for **Vatsalya Children Care**, a pediatric + newborn + lactation
clinic in Science City / Sola, Ahmedabad, India, led by **Dr. Aashita A. Sinha**
(MBBS, MD Pediatrics, Neonatologist & Lactation Consultant). Goal: rank #1 locally
for "best pediatrician in Ahmedabad" and be cited by AI search (ChatGPT / Perplexity /
Google AI Overviews).

## 2. Tech stack
- **Framework:** Next.js 16.2.9 (App Router) — `react` / `react-dom` 19.2
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v3.4 (+ postcss, autoprefixer)
- **Animation:** Framer Motion 12 (via `LazyMotion` + `m` components in `MotionProvider`)
- **Icons:** lucide-react
- **Sitemap:** next-sitemap (runs on `postbuild`)
- **Lint:** ESLint 9 + eslint-config-next
- **Package manager:** npm (`package-lock.json`)
- **Rendering:** static SSG. No app-level test runner is configured.

## 3. Directory structure
- `src/app/` — routes. `page.tsx` (home), `contact/page.tsx`, `layout.tsx`
  (metadata, fonts, JSON-LD, GTM/consent), `globals.css`.
- `src/components/` — all UI. Section components (`Hero`, `TrustStrip`, `WhyVatsalya`,
  `BenefitsBand`, `ServicesGrid`, `AboutPreview`, `FAQAccordion`, `LocationSection`,
  `WhatsAppCTA`, `Footer`) plus `Navbar`, `FloatingButtons`, analytics
  (`ConsentBanner`, `AnalyticsListener`, `ContactForm`).
- `src/components/brand.ts` — **single source of truth**: `NAP`, `DOCTOR`, `HOURS`,
  `BRAND`, `COPY`, `FAQ_ITEMS`. Edit facts here, never inline.
- `src/lib/analytics.ts` — `GTM_ID` (GTM-KM24DW5P; GA4 G-E2XDWDLRY1 lives inside GTM).
- `src/components/JsonLd.tsx` — 3 JSON-LD blocks (MedicalClinic+LocalBusiness, Physician, FAQPage).
- `src/types/global.d.ts` — `Window.dataLayer` / `gtag` types.
- `public/` — favicons, `og-image.png`, `logo.*`, `llms.txt`, `robots.txt`, `img/`, sitemaps.
- Config: `next.config.ts` (security headers, image formats), `tailwind.config.ts`
  (brand tokens), `next-sitemap.config.js`, `tsconfig.json` (`@/*` → `src/*`).

## 4. How to run it
```bash
npm run dev     # local dev server (localhost:3000)
npm run build   # production build + next-sitemap (postbuild)
npm run start   # serve the production build
npm run lint    # eslint
```
No test command is configured.

## 5. Conventions
- **Brand tokens (tailwind):** `navy #0E2753`, `navy-deep #001E51`, `gold #C29138`,
  `gold-ink #8A5E12` (accessible deep gold for gold text/icons **on cream** — bright
  gold fails WCAG on cream), `gold-soft #D5B376`, `cream #FFF4E5`, `cream-light #FFFCF0`, `ink #1B2436`.
- **Fonts:** `font-alice`/`font-lora` = Libre Caslon Text (serif headings/italic accents),
  `font-poppins` = Inter (body). Variable names are intentionally kept stable.
- Components are PascalCase `.tsx`, one per file, default-exported. Client components
  start with `"use client"`. Import via `@/` alias.
- Animations use `m.*` from Framer Motion (never `motion.*` — LazyMotion requires `m`).
- **Copy style:** warm-premium, trustworthy, not childish. **No em-dashes or hyphens
  in visible copy** (reads as AI-written). Gold accents allowed but mind contrast.
- All contact/NAP facts must stay byte-identical to `brand.ts` and Google Business Profile.

## 6. Current state
- **Done:** single landing page + `/contact`. Sections: hero, credentials marquee,
  Why Vatsalya, parallax benefits band, interactive 9-service list, About, 12-Q FAQ,
  location + map, appointment CTA, editorial footer. Floating WhatsApp + mobile call bar.
  SEO/AEO: titles/meta, canonical, OG, 3 JSON-LD blocks, sitemap, `llms.txt`.
  Analytics: GA4 + GTM + consent banner + conversion events (`whatsapp_click`,
  `call_click`, `contact_form_submit`). Domain live, Search Console verified, homepage indexed.
  PageSpeed 100/96/100/100.
- **Done (multi-page SEO expansion):** dedicated `/about`, `/services`, `/faqs` pages;
  **5 area landing pages** `/pediatrician-in/{gota,thaltej,chandlodiya,science-city,ghatlodia}`
  with unique per-area copy + per-area LocalBusiness schema (`src/lib/areas.ts`,
  `AreaContent.tsx`); site-wide accessibility pass (gold-ink contrast + global
  reduced-motion); Home nav link on all pages but `/`. Off-site: directory-listings
  pack (`docs/DIRECTORY-LISTINGS.md` + plain-English Google Doc for the client).
- **In progress / next:** individual service pages (`/services/vaccination` …) and a
  keyword-driven `/blog`.
- **Known gaps:** few backlinks + reviews + new-site sandbox → currently ranks ~page 3
  organically. Real clinic photos not yet added (using stock/`img/`).

## 7. Gotchas
- **`main` is branch-protected:** no direct pushes. Every change = branch → PR →
  Vercel preview → squash-merge → auto-deploy. Commit author is `shobhitsinhayt-ui`.
- **Vercel auto-deploys on merge to `main`.** Domain DNS via Hostinger (A `@` → 216.198.79.1).
- Consent Mode default is currently **granted** (not the usual denied) — deliberate.
- GA4 is loaded **inside GTM**, not via the page — don't add a second GA snippet (double-counting).
- Do **not** re-add `src/app/favicon.ico` as a Next default — it overrides the metadata icons.
- Local sandbox can't resolve the live domain via curl/dig — use WebFetch or a public DNS resolver.
- `zsh` here: associative arrays fail; use function-based loops in shell snippets.

## 8. Keeping context fresh
`PROJECT-CONTEXT.md` (same folder) is a human-readable handoff brief. It is
**manually maintained** — there is no automation. Before wrapping up a session that
changed the project's state (new pages, analytics, deploy config, ranking status),
update both the relevant section here and the matching part of `PROJECT-CONTEXT.md`,
and bump its `Last updated:` date.

**Auto-reminder rule (do this proactively):** after roughly **every 5–7 merged PRs**,
or whenever a **significant chunk of work** lands (new pages, new analytics/deploy
config, ranking-status change, a big refactor), pause and ask the user:
> "We've shipped a fair bit since the docs were last refreshed — want me to update
> CLAUDE.md + PROJECT-CONTEXT.md before we continue?"
Don't wait to be asked. Keep a rough mental count of PRs merged in the session; when
in doubt, ask rather than let the docs drift.
