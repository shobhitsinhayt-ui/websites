# Vatsalya Children Care — Redesign PRD (Medio-inspired)

> **Purpose:** Level up the existing landing page to an editorial, premium, "Medio" feel — WITHOUT
> changing the brand identity, content, SEO, or functionality. Reference template:
> **Medio** (https://medio.framer.website) — a warm, airy dental-clinic template.
> **Approach:** rebuild section-by-section via safe PRs; preview each before merge.

---

## 1. Non-negotiables (do NOT change)
- **Palette:** navy `#0E2753` / navy-deep `#001E51` / gold `#C29138` / gold-soft `#D5B376` / cream `#FFF4E5` / cream-light `#FFFCF0` / ink `#1B2436`. (Already Medio-warm.)
- **Fonts:** Alice (serif headings) · Lora (italic accents) · Poppins (body). Loaded via next/font.
- **All content:** every word from `src/components/brand.ts` (NAP, DOCTOR, COPY, FAQ_ITEMS, HOURS) stays the single source of truth.
- **Functionality:** floating WhatsApp button, sticky call bar, `wa.me`/`tel:` links, Google Maps embed.
- **SEO/AEO:** the 3 JSON-LD blocks, metadata, sitemap, `llms.txt`, security headers — all preserved.
- **Constraints:** mobile-first, PageSpeed 90+ mobile, JS < ~100 KB, `next/image` for all images, respect `prefers-reduced-motion`.
- **No invented facts.** Open items stay as marked; testimonials are NOT added until real reviews exist.

## 2. Design language to adopt from Medio
- **Generous whitespace + calm rhythm** — fewer elements per screen, larger type, more air. This is the #1 driver of the premium feel.
- **Mixed-type headlines** — heavy Alice heading with ONE word in **Lora bold italic, in gold** as the accent (e.g., "Best Pediatrician in Sola, Ahmedabad — *Vatsalya Children Care*").
- **Large rounded-corner imagery** (`rounded-3xl`), soft shadows, thin gold hairline frames.
- **`//` section-label markers** (small uppercase gold labels above each section title).
- **Rounded pill buttons**, gentle hover lift, subtle scroll-reveal (fade/slide-up).
- **Light cream ground as the default**; navy used as punctuation (hero accents, footer, CTA band), not the whole page.

## 3. Section-by-section plan (build order)

### S1 — Navbar (refine)
Keep current sticky behavior + cream-badge logo. Tighten to Medio minimalism: wordmark left, links center/right, a single gold pill "Book Appointment". Keep the transparent→cream scroll swap already built.

### S2 — Editorial split hero (REPLACE current navy hero) ⭐ biggest change
- **Cream background** (not full navy). Two-column on desktop, stacked on mobile (photo first or headline first — headline first on mobile).
- **Left:** `//` label ("Pediatric & Lactation Care"), big Alice H1 with the clinic name as a **gold Lora-italic accent**, Poppins subhead, credentials line, dual CTAs (WhatsApp gold pill + Call outline), a small contact line (phone · email like Medio).
- **Right:** Dr. Aashita's photo (`/dr-aashita.jpg`) in a large `rounded-3xl` frame with a thin gold corner accent + soft shadow. Fixed aspect, `object-cover` (no distortion — already solved).
- Keep exactly one `<h1>` with location + specialty + clinic name (SEO).

### S3 — Stat counters band (NEW)
Thin band (navy or cream-light) with 3–4 animated count-up stats. **Use only honest numbers** — CONFIRM values with Shobhit before building. Candidate stats (pick real ones):
`TODO(confirm): e.g., "0–18 yrs cared for", "9 specialised services", "IAP 2025 vaccination", "3 top institutions trained".` Do not use patient counts we cannot verify.

### S4 — Benefits row (NEW)
4 items, lucide icon + 2–4 word label (e.g., "Gentle, Child-Friendly Care", "Certified Lactation Support", "IAP Vaccination", "Newborn & NICU Expertise"). Icon in navy, gold accent, on cream.

### S5 — Why Vatsalya (restyle)
Keep the 4 approved paragraphs + lactation callout + the 3 differentiators. Re-lay with Medio whitespace; differentiators as clean 3-up cards (already added).

### S6 — Numbered "How it works" (NEW)
3 steps, big numerals: **1. Message on WhatsApp → 2. Visit the clinic → 3. Ongoing care & guidance.** Short reassuring copy each (mirror Medio's Schedule/Meet/Smile).

### S7 — Services (restyle)
Keep all 9 services from `ServicesGrid`. Medio card styling: rounded-2xl, more padding, hairline gold border, icon chip, calm hover lift.

### S8 — About Dr. Aashita (restyle)
Keep bio, quote, highlights, reg numbers. Medio profile styling: photo + editorial text, generous space. (Photo may be shared with hero or a second shot.)

### S9 — FAQ (keep)
Keep the accordion + 12 items (schema-synced). Light restyle only.

### S10 — Location + map (keep)
Keep NAP, hours table, Google Maps embed + "Open in Google Maps". Restyle to match.

### S11 — Appointment CTA band (restyle)
Navy band, Medio-style big centered headline + gold pill. Keep WhatsApp + call.

### S12 — Editorial footer (NEW styling)
Multi-column: brand + tagline · Main Pages · Contact (NAP) · Socials. `//`-style group labels, gold accents on navy-deep, cream logo badge (already built).

## 4. Assets needed
- ✅ Dr. Aashita photo (`/dr-aashita.jpg`) — have it.
- ⏳ Optional 2nd photo (clinic interior/exterior) for About or a gallery — nice-to-have.
- ⏳ Stat-counter numbers — CONFIRM real values (§S3).
- ❌ Testimonials — deferred until real Google/WhatsApp reviews exist.

## 5. How Claude Code should work this
1. Read this PRD + `src/components/brand.ts` before any section.
2. Use the **front-end-design / UI-UX Pro Max** skill for layout polish; keep fonts/colors fixed.
3. Build ONE section per PR; run `npm run build`; open a Vercel preview; verify on mobile; merge.
4. Never regress SEO/schema/JSON-LD or the WhatsApp/call/maps functionality.
5. Reference screenshots of Medio live at https://medio.framer.website for spacing/scale cues.
