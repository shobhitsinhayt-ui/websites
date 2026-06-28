# Vatsalya Children Care — Launch Checklist

Living checklist from build → launch → growth. Tick items as you go. Ordered by what blocks launch.

---

## 1. Content still needed (BLOCKS pointing the real domain)

These are the last `TODO` placeholders. Until they're filled, keep the site on the `.vercel.app` URL.

- [ ] **OPD days & hours** — fills: hero/Location section, FAQ Q5, JSON-LD `openingHours`, Google Business Profile
- [ ] **Google Maps GPS coordinates** — open clinic in Google Maps → right-click pin → copy `lat, long`. Fills: Location map embed + JSON-LD `geo`
- [ ] **Dr. Aashita's professional photo** (+ clinic interior/exterior shots) — fills: About section, hero, GBP. Compress before use.
- [x] Walk-in vs appointment policy → **appointment-only** (done, PR #5)
- [x] Registration numbers → MBBS G 66578, MD Pediatrics G 35792 (done, PR #5)
- [x] Bio / experience / training (done from CV, PR #5)
- [ ] Confirm the medical-council name is **"Gujarat Medical Council"** (inferred from the `G` reg prefix)
- [ ] Decide on the **logo "Hospital" vs "Care"** ring text (spec §13 — standardize on "Care")

## 2. Copy & design polish (nice-to-have before launch)

- [ ] **Em-dash / copy pass** — thin out repeated `—` constructions across services/FAQs/hero so copy reads human, not templated
- [ ] **Justify decision** — keep body copy left-aligned (recommended) or desktop-only justify with hyphenation
- [ ] **Optimize `logo.svg`** — currently ~231 KB (large for an SVG; likely embedded raster). Run through SVGO or export a lighter version → faster mobile load
- [ ] Real-device check on a low-end Android (the majority audience)

## 3. Deploy & domain (Phase 2)

- [ ] Fill section 1 items first
- [ ] Vercel → Settings → Domains → add `vatsalyachildrencare.in` + `www`
- [ ] Set DNS at registrar per Vercel's records; wait for auto-HTTPS
- [ ] Verify OG image resolves on the live domain (it's absolute: `https://vatsalyachildrencare.in/og-image.png`)
- [ ] Tag the launch release: `git tag -a v1.0.0 -m "Public launch" && git push origin v1.0.0`

## 4. Harden the deploy workflow

- [x] `main` branch protection (PR required, no force-push/delete, linear history)
- [ ] After first prod deploy, add **Vercel deployment status check** as a *required* check on `main` (Settings → Branches) → GitHub blocks merging a PR whose preview build failed
- [ ] (Optional) Vercel **Deployment Protection** on preview URLs so only you can view them

## 5. SEO / AEO audits — run AFTER the domain is live

Run these slash-command skills in order against the live site:

- [ ] **`/seo-technical`** — crawlability, mobile, Core Web Vitals, indexability, robots/sitemap
- [ ] **`/seo-schema`** — validate all 3 JSON-LD blocks (MedicalClinic+LocalBusiness, Physician, FAQPage)
- [ ] **`/seo-local`** — NAP consistency, local business schema, location signals
- [ ] **`/seo-geo`** — AI-crawler visibility (ChatGPT / Perplexity / Google AI Overviews), citability, llms.txt
- [ ] **`/seo-performance`** — PageSpeed score + JS bundle check

> Also validate schema manually at https://validator.schema.org and https://search.google.com/test/rich-results

## 6. Off-site local SEO (per spec §10 — higher ROI than the site itself for local search)

- [ ] **Google Business Profile** — claim/verify, 15+ photos, all 9 services, seeded Q&A, weekly posts, push for 50+ reviews. Use the exact NAP block.
- [ ] List on **Practo, Justdial, Sulekha, 1mg, Lybrate** with identical NAP (these feed AI knowledge graphs)
- [ ] **Google Search Console** — verify the domain, submit `sitemap.xml`, monitor indexation
- [ ] **Bing Webmaster Tools** — verify + submit sitemap (feeds Bing/Copilot AEO)

## 7. Analytics & monitoring (post-launch)

- [ ] **Vercel Web Analytics** + **Speed Insights** (one-click in Vercel, privacy-friendly, no cookie banner) — real-user CWV
- [ ] (Optional) GA4 if deeper funnel analytics wanted — but keep it lazy-loaded to protect performance
- [ ] Uptime monitor (e.g., free UptimeRobot) on the homepage

## 8. Technical hardening (optional, post-launch)

- [ ] **Security headers** in `next.config` (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, basic CSP)
- [ ] Custom **404 page** styled to brand (currently default `_not-found`)
- [ ] **Accessibility pass** — gold-on-cream contrast check (WCAG AA), keyboard nav, screen-reader labels, focus-visible
- [ ] Verify `prefers-reduced-motion` disables animations on a real device

## 9. Phase 2 / 3 (future, no timeline)

- [ ] Split the single page into routes: `/about`, `/services`, `/faqs`, `/blog`, `/contact`
- [ ] **Blog** (MDX → later Sanity) — 1 post/month, FAQ block per post
- [ ] **Contact form** — Tally.so embed → WhatsApp
- [ ] **Gujarati version** of key pages (regional SEO signal) — Noto Sans Gujarati
- [ ] Appointment booking widget / chatbot (Phase 3)
