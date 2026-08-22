# Vatsalya Children Care — Project Context (handoff brief)

> Paste this (or point Claude at this file) at the start of any new Claude session
> — Code or Cowork — so it instantly understands the project. Last updated: 2026-08-22
> (area pages + directory pack shipped).

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
  Plus `gold-ink #8A5E12` — accessible deep gold for text/icons **on cream** (bright
  gold fails WCAG on cream; use gold-ink for any gold text on cream/cream-light).
- Motion respects reduced-motion globally via `<MotionConfig reducedMotion="user">`
  in `MotionProvider`.

## Workflow rules (important)
- `main` is **branch-protected**: no direct pushes, PR required, squash-merge, linear history.
- Every change: branch → PR → (Vercel preview) → merge → auto-deploy. Never commit to main directly.
- Commit author identity is set to `shobhitsinhayt-ui`.

## What's built (done)
- **Pages: home `/`, `/about`, `/services`, `/faqs`, `/contact`** (multi-page, not just
  one scroll). Homepage sections: hero (Dr. Aashita photo, typewriter cycling nearby
  areas in a gold tagline), credentials marquee, Why Vatsalya (scroll word-reveal),
  parallax benefits band, interactive services list (9 services), About preview, FAQ
  accordion (12 Qs), Location + map, appointment CTA, editorial footer with giant wordmark.
- **`/about`** — full Dr. Aashita page: navy bio band with accolade highlights + mission
  quote, "Serving" area chips, animated credentials timeline, education + languages cards.
- **`/services`** — all 9 services as animated, crawlable cards (data in `src/lib/services.ts`).
- **`/faqs`** — the 12-Q accordion on its own page.
- **5 area landing pages** `/pediatrician-in/{gota,thaltej,chandlodiya,science-city,ghatlodia}`
  — genuinely unique copy per area (intro, landmarks, directions) + per-area
  MedicalClinic/LocalBusiness schema with `areaServed`. Data in `src/lib/areas.ts`,
  rendered by `AreaContent.tsx`; `science-city` is `homeTurf` (clinic is physically there).
  Dr. Aashita photo on each area's trust card.
- Shared `PageHero` + `CtaBand`. Navbar shows a **Home** link on every page except `/`.
- Breadcrumbs: visible ones removed from flat top-level pages (redundant); `BreadcrumbList`
  JSON-LD kept for SEO. Reintroduce visible breadcrumbs later on nested area/service pages.
- Floating WhatsApp button + sticky mobile call bar on every page.
- SEO/AEO: unique titles/meta, canonical, OG, 3 JSON-LD blocks (MedicalClinic+LocalBusiness,
  Physician, FAQPage), next-sitemap, `public/llms.txt`, robots (AI crawlers allowed).
- PageSpeed: Performance 100, Accessibility 96, Best Practices 100, SEO 100.
- Analytics: GA4 + GTM installed via `src/app/layout.tsx`, cookie consent banner
  (`ConsentBanner.tsx`, default = granted), conversion events pushed to dataLayer:
  `whatsapp_click`, `call_click` (global listener `AnalyticsListener.tsx`),
  `contact_form_submit` (in `ContactForm.tsx`).
- Google Search Console: verified (HTML-tag meta in `layout.tsx`), sitemap submitted
  (lists all 5 pages), indexing requested for `/`, `/contact`, `/about`, `/services`,
  `/faqs`. GA4 linked to Google Ads. GA4 Key Events set: `whatsapp_click`,
  `contact_form_submit`, `form_start` (star `call_click` once it fires on the live site).

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
On-site (owner = Claude):
- **NEXT UP — keyword-driven `/blog`** (top on-site ranking lever left).
- Individual service pages (`/services/vaccination`, `/lactation-consultant`…) —
  currently one `/services` overview page exists, not per-service pages.
- Second-wave area pages when warranted (Bhadaj, Sughad, Vandemataram).
- Add real clinic photos when available (hero/about currently use one portrait + stock).

Off-site (owner = client): 50+ Google reviews (highest ROI now that GBP is set up);
**register on directories using the ready-made pack** — repo copy `docs/DIRECTORY-LISTINGS.md`,
plain-English version as a Google Doc handed to the client's sister (Justdial → Practo
→ 1mg → Lybrate, identical NAP); import the GA4 Key Events into Google Ads as
conversions; star `call_click` once it fires; request indexing for the 5 area URLs;
Keyword Planner export.

Done since launch: GBP set up; dedicated About/Services/FAQ pages; **5 area landing
pages** (gota, thaltej, chandlodiya, science-city, ghatlodia); site-wide accessibility
pass (gold-ink contrast + global reduced-motion); Home nav link; GA4 Key Events;
indexing requested for all top-level pages; directory-listings pack authored.

## Style / preferences
- Warm-premium, trustworthy pediatric tone. Not childish. Brand fonts/colors fixed.
- User dislikes em-dashes in copy (reads as AI). Keep gold accents but mind contrast.
- Keep changes small and PR'd; preview before merge.
