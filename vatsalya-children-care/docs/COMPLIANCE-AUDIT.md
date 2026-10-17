# Compliance Audit — Ethical Advertising Guidelines for Hospitals / RMPs

**Site audited:** https://vatsalyachildrencare.in (all 10 pages)
**Audited against:** "Note on Guidelines on Ethical Advertising and Public Communication by hospitals/medical institutions and registered medical practitioner" (08.10.2026)
**Date:** 2026-10-16

> **Important caveat:** the source document is an internal advisory note (its closing
> section is addressed "For Zydus Hospital communications") summarising the applicable
> NMC / government rules. It is a reliable statement of the rules it describes, but it
> is not itself the gazetted regulation, and this audit is **not legal advice**. Before
> going live with the rewrites, have Dr. Aashita confirm the final wording — she is the
> registered practitioner who carries the liability under the Gujarat Medical Council.

---

## Verdict in one line

The site is **structurally clean** (no testimonials, no ratings, no before/after photos,
no discounts or referral offers) but it **leads with a prohibited superiority claim**
on almost every page. The core fix is removing the word "Best" and three other claim
patterns. Roughly 20 strings across 8 files.

| Severity | Count | Theme |
|---|---|---|
| 🔴 Critical | 3 | Superiority / exclusivity claims (explicitly named in the guidelines) |
| 🟠 High | 3 | Outcome guarantees, implied patient endorsement, undisclosed stock imagery |
| 🟡 Medium | 4 | Subjective self-praise, doctor photo usage, fee transparency, registration visibility |
| 🟢 Advisory | 3 | Mild outcome framing, review strategy, third-party content |

---

## 🔴 CRITICAL — fix before anything else

### C1. "Best Pediatrician in Ahmedabad" — prohibited superiority claim

The guidelines name **"Best doctor"** as a prohibited claim, in the same list as
"No. 1 hospital" and "Most trusted". This phrase is currently the site's single
most prominent piece of copy: it is the homepage `<h1>`, the browser-tab title, the
Open Graph/Twitter share title, a declared meta keyword, and the `<h1>` + title of
all five area pages.

| File | Line | Current |
|---|---|---|
| `src/components/Hero.tsx` | 58 | `Best Pediatrician in Ahmedabad` (visible H1) |
| `src/components/brand.ts` | 109 | `COPY.hero.h1: "Best Pediatrician in Sola, Ahmedabad, …"` |
| `src/app/layout.tsx` | 32, 59, 74 | title, OG title, Twitter title |
| `src/app/layout.tsx` | 39, 45 | keywords `"best pediatrician in Ahmedabad"`, `"best children doctor Ahmedabad"` |
| `src/app/pediatrician-in/[area]/page.tsx` | 27, 122 | `Best Pediatrician in ${area.name}` — title + H1 × 5 pages |

**Replace with (factual, still keyword-relevant):**
- H1 home → `Pediatrician, Neonatologist & Lactation Consultant in Sola, Ahmedabad`
- Title home → `Pediatrician in Sola, Ahmedabad | Vatsalya Children Care | Dr. Aashita Sinha`
- Area H1/title → `Pediatrician in Gota, Ahmedabad` (and so on per area)
- Delete both "best …" entries from `keywords`.

**SEO impact: minimal.** "Best" was never doing the ranking work — Google already
matches "best pediatrician in Ahmedabad" queries to pages about *being a pediatrician
in Ahmedabad*. The substantive signals (location words, specialty, schema, area pages,
Google Business Profile) are untouched. The one real loss is exact-match text in the
title tag, which is a small factor and not worth a regulatory exposure.

### C2. "one of the few clinics … offering certified lactation consultant support"

`public/llms.txt`, "Why Vatsalya" section. This is a **scarcity/exclusivity claim**
about competitors — the guidelines prohibit "any similar superiority, exclusivity or
outcome-based claim unless objectively verifiable and independently substantiated."
You cannot substantiate a count of lactation consultants in Sola.

**Replace with:** `Vatsalya Children Care provides pediatric and neonatal care (MD Pediatrics, neonatology) and certified lactation consultant support antenatally, postnatally, and via teleconsultation.` — states what you do, claims nothing about others.

### C3. "Trusted pediatrician" / "dependable pediatrician"

"Most trusted" is explicitly prohibited; "trusted" is the same unverifiable claim class
with the superlative filed off. Appears in four area meta descriptions plus body copy.

| File | Lines | Current |
|---|---|---|
| `src/lib/areas.ts` | 31, 52, 73, 116 | `"Trusted pediatrician near …"` (metaDescription) |
| `src/lib/areas.ts` | 34 | `"Looking for a trusted pediatrician near Gota?"` |
| `src/lib/areas.ts` | 55 | `"Searching for a dependable pediatrician near Thaltej?"` |

**Replace with:** `"Pediatrician near Gota, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) provides …"` and `"Looking for a pediatrician near Gota?"`

---

## 🟠 HIGH

### H1. Outcome guarantees — "Ensuring Health", "ensuring … developmental targets"

The guidelines prohibit "Guaranteed cure" and outcome-based claims. Two strings promise
a result rather than describing a service:

- `src/components/brand.ts:102` — tagline `"Nurturing Smiles, Ensuring Health"`
- `src/components/brand.ts:135` — `"…ensuring your child consistently meets vital developmental targets and enjoys long-term well-being."`

**Tagline:** this is brand identity, so it is a judgement call — "Ensuring Health" is
materially weaker than "guaranteed cure" and a regulator is unlikely to lead with it.
Safer alternative if Dr. Aashita wants zero exposure: **"Nurturing Smiles, Supporting Health"**
or **"Nurturing Smiles, Caring for Health"** (one word, keeps the rhythm and the logo).
**Line 135 should change regardless** → `"…so your child's growth and development are monitored consistently against established milestones."` (describes the process, promises no result).

### H2. Implied patient endorsement — "families … choose/trust Dr. Aashita"

The guidelines bar patient testimonials, endorsements and recommendations, and bar
indirect patient solicitation. Copy that asserts unnamed families already *choose* and
*trust* her functions as an unattributable, unverifiable testimonial.

- `src/lib/areas.ts:34` — `"Families across Gota … choose Dr. Aashita A. Sinha … for calm, unhurried care"`
- `src/lib/areas.ts:119` — `"Families across Ghatlodia … trust Dr. Aashita A. Sinha for gentle, thorough care"`
- `src/lib/areas.ts:55` — `"Parents from Thaltej … come to Dr. Aashita A. Sinha for careful, unhurried attention"`

**Replace with availability framing:** `"Vatsalya Children Care is open to families across Gota, from Vandemataram Cross Roads to the Godrej Garden City side. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) sees children by appointment, with unhurried consultation slots."`

### H3. Stock photography of children with no disclosure

`public/img/` holds eight photos (`baby-laugh.jpg`, `mother-child.jpg`, `checkup.jpg`,
`newborn-mother.jpg`, `clinic.jpg` …) used across the hero, benefits band and service
cards. They read as photographs of patients at the clinic. They are not.

Two guideline clauses bite here: patient privacy/imagery rules, and the AI clause —
"AI content must not create misleading outcomes, fake testimonials, **synthetic patients**
or manipulated clinical results," with AI origin to be disclosed where relevant.

**Action:** confirm the provenance of each image.
- If **AI-generated** → replace, or label them as illustrative and AI-generated.
- If **licensed stock** → lowest risk, but add a one-line note in the footer:
  `"Photographs are illustrative stock images, not patients of this clinic."`
- Best outcome → **real photographs of the clinic interior** (no patients in frame),
  which is permitted "facilities/infrastructure" content and also better for trust and
  local SEO. `clinic.jpg` in particular should be a real photo or be removed, since a
  stock image presented as *your clinic* is a factual misstatement.

---

## 🟡 MEDIUM

### M1. Subjective self-praise — "expert care", "advanced … expertise"

Permitted communication is "factual, transparent and capable of verification."
"Expert" is a self-assessment, not a credential.

- `src/app/layout.tsx:36` — `"expert pediatric care in Sola"` (meta description)
- `src/components/brand.ts:111` — `"Compassionate, expert care for your child…"`
- `src/components/brand.ts:40` + `/about` subtitle — `"advanced, evidence-based medical expertise"`

**Fix:** swap the adjective for the credential, which *is* verifiable —
`"Pediatric care in Sola, Ahmedabad by Dr. Aashita A. Sinha, MBBS, MD Pediatrics, certified lactation consultant."`
The mission quote (line 40) is a direct statement of intent by the doctor rather than a
claim about service quality, so it is defensible as-is — but "advanced" is the weakest
word in it and costs nothing to drop.

### M2. Dr. Aashita's photograph — context matters

The guidelines are specific: *"Use of an RMP's photograph for promotional
self-advertisement is generally not permitted. Hospital websites may list doctors with
qualifications, specialties, registration details and availability as patient information."*

So the photo is fine **as doctor-identification**, and risky **as the hero of a marketing
page**. Current usage:

| Location | Context | Risk |
|---|---|---|
| `/about` bio band | Alongside qualifications, registration numbers, availability | ✅ Clearly permitted |
| Area-page trust card | Name + credentials + hours | 🟡 Defensible — it is a doctor listing |
| Homepage hero (`Hero.tsx`) | Large portrait beside a marketing headline + CTA | 🟠 Weakest position |

**Recommendation:** keep `/about` and the area cards as they are. On the homepage,
caption the portrait with her name, qualifications and GMC registration numbers so it
reads as a doctor listing rather than a promotional portrait. That single change moves
it into the permitted category without a redesign.

### M3. Fee transparency — currently missing, and explicitly permitted

The guidelines *permit* "transparent and factual disclosure of charges and packages" and
list "fees" among the objective information a clinic may publish. The site publishes no
fee at all, and `src/app/pediatrician-in/[area]/page.tsx:61` emits a vague
`priceRange: "₹₹"` in schema.

**Recommendation:** publish the actual OPD consultation fee on `/contact` and in the
FAQ ("What does a consultation cost?"), and replace `"₹₹"` with the real figure. This
moves you *toward* compliance, pre-empts the most common patient question, and is a
genuine differentiator — most competitor sites hide it.

### M4. Registration numbers should be site-wide, not just `/about`

GMC numbers (MBBS G 66578, MD G 35792) appear only in `AboutContent.tsx:181-184`. The
guidelines treat registration details as core permitted patient information. Putting
them in the **footer** makes every page self-evidently compliant and is a strong
credibility signal for both patients and AI search engines.

---

## 🟢 ADVISORY

### A1. Mild outcome framing
`src/lib/services.ts:62` — `"helps you give your baby the healthiest start"`;
`brand.ts:134` — `"nursing offers the ideal foundation"`. Soft, widely used, low risk.
Tighten only if Dr. Aashita wants a zero-claim site.

### A2. Review strategy — keep it strictly organic
The guidelines prohibit buying reviews, fake followers, rating manipulation, purchased
endorsements and artificially boosting rankings. The open action item "get 50+ Google
reviews" is fine **only** if reviews are unincentivised: ask after a consultation, never
offer anything in return (no discount, no gift, no priority slot — that would also trip
the referral-incentive prohibition).

### A3. Third-party content is still your liability
"Hospitals remain responsible for content published through third parties, agencies or
influencers." That covers the Justdial / Practo / 1mg / Lybrate listings being set up
from `docs/DIRECTORY-LISTINGS.md`. **Good news:** that pack is already claim-free —
it explicitly says not to add keywords to the business name and its descriptions are
factual. Two follow-ups: (1) those platforms often *auto-insert* "Best"/"Top" into
category labels and profile headlines — check each live listing after it is created;
(2) if the directory copy is ever rewritten, it must pass this same audit.

### A4. What the site already gets right
Worth recording, because these are the clauses most clinic sites fail:
- ✅ No patient testimonials, endorsements or recommendations anywhere
- ✅ No `aggregateRating` / star ratings in schema or UI
- ✅ No before/after photographs
- ✅ No celebrity patient publicity
- ✅ No cashback, coupons, referral benefits, free procedures or promotional discounts
- ✅ No fear-based marketing copy
- ✅ No encouragement of unnecessary tests or procedures
- ✅ Qualifications, specialties, registration numbers, hours and location all stated factually
- ✅ Cookie consent banner present

---

## Implementation plan

Suggested as three PRs, in this order:

**PR 1 — Critical claim removal** (C1, C2, C3)
`Hero.tsx`, `brand.ts`, `layout.tsx`, `pediatrician-in/[area]/page.tsx`, `areas.ts`, `llms.txt`.
Mechanical find-and-replace. Ship same day.

**PR 2 — High-severity copy** (H1, H2, M1)
`brand.ts` (tagline decision + line 135), `areas.ts` endorsement framing, "expert" adjectives.
Needs Dr. Aashita's sign-off on the tagline before merge.

**PR 3 — Transparency additions** (M2, M3, M4)
Footer registration numbers, hero portrait caption, consultation fee on `/contact` + FAQ +
schema `priceRange`. Needs the actual fee figure from the clinic.

**Not code — needs the clinic:** image provenance for H3, the fee figure for M3, and the
tagline call for H1.

---

## Decisions needed from you

1. **"Best Pediatrician" → "Pediatrician"** — confirm you accept the small title-tag SEO
   trade for removing the clearest violation. (My recommendation: yes, do it.)
2. **Tagline** — keep "Ensuring Health", or soften to "Supporting Health"?
3. **Images** — are `public/img/*.jpg` AI-generated, licensed stock, or real? This
   determines whether H3 is a disclosure line or a replacement job.
4. **Consultation fee** — publish it? If yes, what is the figure?
