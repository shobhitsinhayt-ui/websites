# Vatsalya Children Care — Project Context (handoff brief)

> Paste this (or point Claude at this file) at the start of any new Claude session
> — Code or Cowork — so it instantly understands the project. Last updated: 2026-08-18.

## What this is
A live marketing website for **Vatsalya Children Care**, a pediatric + newborn +
lactation clinic in Science City / Sola, Ahmedabad, India. Led by **Dr. Aashita A.
Sinha** (MBBS, MD Pediatrics, Neonatologist & Lactation Consultant). Goal: rank #1
locally for "best pediatrician in Ahmedabad" and nearby areas, and be cited by AI
search (ChatGPT/Perplexity/Google AI Overviews).

## Where everything lives
- **Live site:** https://vatsalyachildrencare.in (also www; apex is primary)
- **Repo:** GitHub `shobhitsinhayt-ui/websites`, project in subfolder `vatsalya-children-care/`
- **Local path:** `~/Desktop/Projects/websites/vatsalya-children-care`
- **Host:** Vercel (auto-deploys on merge to `main`). Domain via Hostinger DNS (A `@` → 216.198.79.1).
- **Launch tag:** `v1.0.0`

## Tech stack
- Next.js (App Router) + TypeScript + Tailwind v3 + Framer Motion (LazyMotion, `m` components)
- `next/image`, `next-sitemap`, static SSG. Fonts: Libre Caslon Text (headings), Inter/Poppins (body).
- Brand tokens: navy `#0E2753` / navy-deep `#001E51` / gold `#C29138` / cream `#FFF4E5`.

## Workflow rules (important)
- `main` is **branch-protected**: no direct pushes, PR required, squash-merge, linear history.
- Every change: branch → PR → (Vercel preview) → merge → auto-deploy. Never commit to main directly.
- Commit author identity is set to `shobhitsinhayt-ui`.

## What's built (done)
- Single landing page + `/contact` page. Sections: hero (Dr. Aashita photo), credentials
  marquee, Why Vatsalya (scroll word-reveal), parallax benefits band, interactive services
  list (9 services with photos), About Dr. Aashita, FAQ accordion (12 Qs), Location + map,
  appointment CTA (4 floating photos), editorial footer with giant wordmark.
- Floating WhatsApp button + sticky mobile call bar on every page.
- SEO/AEO: unique titles/meta, canonical, OG, 3 JSON-LD blocks (MedicalClinic+LocalBusiness,
  Physician, FAQPage), next-sitemap, `public/llms.txt`, robots (AI crawlers allowed).
- PageSpeed: Performance 100, Accessibility 96, Best Practices 100, SEO 100.
- Analytics: GA4 + GTM installed via `src/app/layout.tsx`, cookie consent banner
  (`ConsentBanner.tsx`, default = granted), conversion events pushed to dataLayer:
  `whatsapp_click`, `call_click` (global listener `AnalyticsListener.tsx`),
  `contact_form_submit` (in `ContactForm.tsx`).
- Google Search Console: verified (HTML-tag meta in `layout.tsx`, PR #33), sitemap
  submitted, homepage indexed, `/contact` indexing requested. GA4 linked to Google Ads.

## Key IDs / config (public, not secret)
- GA4 Measurement ID: `G-E2XDWDLRY1`
- GTM Container ID: `GTM-KM24DW5P` (read from env `NEXT_PUBLIC_GTM_ID`; also hardcoded fallback)
- Google Maps place CID: `12905434918347711156` (GPS 23.077333, 72.5189114)
- All contact facts live in `src/components/brand.ts` (single source of truth: NAP, DOCTOR, HOURS, FAQ_ITEMS).

## NAP (must stay byte-identical everywhere)
- Name: Vatsalya Children Care
- Phone/WhatsApp: +91 90160 39796 · Email: vatsalyachildrencare@gmail.com
- Address: 5th Floor, Kargil Petrol Pump Road, Grace Business Park Sagar, 509 B-Wing,
  above Reliance SMART Bazaar, Science City, Ahmedabad, Gujarat 380060, India
- Hours: Mon–Sat 9:00 AM–1:00 PM & 4:30 PM–7:30 PM; Sun 9:00 AM–12:00 PM. Appointment-only.
- Target areas: Sola, Science City, Gota, Thaltej, Chandlodiya.

## Helpful docs already in the repo
- `DEPLOY.md` — deploy + rollback workflow
- `LAUNCH-CHECKLIST.md` — launch roadmap
- `GBP-SETUP.md` — Google Business Profile setup pack
- `docs/superpowers/plans/` — the original implementation plan

## What's LEFT (action items)
Off-site (owner = client): Google Business Profile (highest ROI), 50+ Google reviews,
directory listings (Practo/Justdial/1mg), mark the 3 GA4 events as Key Events (via
Recent events → star) then import them as Google Ads conversions, Keyword Planner export.
On-site (owner = Claude): **next up** — build area pages (`/pediatrician-in/{gota,
thaltej,chandlodiya,science-city}`), then service pages, `/about`, then a keyword-driven
`/blog`. Add real clinic photos when available. Only home `/` and `/contact` exist today.

## Style / preferences
- Warm-premium, trustworthy pediatric tone. Not childish. Brand fonts/colors fixed.
- User dislikes em-dashes in copy (reads as AI). Keep gold accents but mind contrast.
- Keep changes small and PR'd; preview before merge.
