# Compliance Audit — Ethical Advertising Guidelines for Hospitals / RMPs

**Site audited:** https://vatsalyachildrencare.in (all 10 pages)
**Audited against:** "Note on Guidelines on Ethical Advertising and Public Communication by hospitals/medical institutions and registered medical practitioner" (08.10.2026)
**Audit date:** 2026-10-16 · **Revised:** 2026-10-16 after clinic input
**Remediation:** PR #50 (`compliance/remove-superiority-claims`)

> **Important caveat:** the source document is an internal advisory note (its closing
> section is addressed "For Zydus Hospital communications") summarising the applicable
> NMC / government rules. It is a reliable statement of the rules it describes, but it
> is not itself the gazetted regulation, and this audit is **not legal advice**. Dr. Aashita
> should confirm the final wording — she is the registered practitioner who carries the
> liability under the Gujarat Medical Council.

---

## Status summary

Every on-site finding is resolved in **PR #50**. Two items remain, both off-site.

| ID | Finding | Severity | Status |
|---|---|---|---|
| C1 | "Best Pediatrician in Ahmedabad" | 🔴 Critical | ✅ Fixed |
| C2 | "one of the few clinics…" exclusivity claim | 🔴 Critical | ✅ Fixed |
| C3 | "Trusted / dependable pediatrician" | 🔴 Critical | ✅ Fixed |
| H1 | Outcome guarantee (developmental targets) | 🟠 High | ✅ Fixed |
| H2 | Implied patient endorsement ("families choose/trust") | 🟠 High | ✅ Fixed |
| H3 | AI-generated photography | 🟢 Low *(downgraded)* | ✅ Fixed |
| M1 | "Expert" self-assessment | 🟡 Medium | ✅ Fixed |
| M2 | Dr. Aashita's photograph usage | 🟡 Medium | ✅ Fixed |
| M4 | Registration numbers only on `/about` | 🟡 Medium | ✅ Fixed |
| M3 | Fee transparency | 🟡 Medium | ⏸️ Declined for now |
| A2 | Review strategy must stay organic | 🟢 Advisory | ⚠️ Owner action |
| A5 | Live Google Business Profile wording | 🟠 High | ⚠️ Owner action |

---

## Clinic decisions on record (2026-10-16)

1. **"Best Pediatrician" → "Pediatrician"** — approved. Accepted the small title-tag SEO trade.
2. **Tagline "Nurturing Smiles, Ensuring Health"** — **kept as-is** at the clinic's request.
   Reasonable: it is materially weaker than "guaranteed cure", and the harder outcome claim
   (H1) was fixed instead.
3. **Decorative photography is AI-generated** — confirmed. Handled by disclosure, not removal
   (see H3 below).
4. **Dr. Aashita's portrait is a real photograph** — confirmed. This was the important one; an
   AI-generated portrait of a registered practitioner would have been a far more serious problem.
5. **No clinic interior photographs will be supplied** — accepted, and not required (see H3).
6. **No paid ads or boosted posts have ever run** — confirmed. Nothing historic to review.

---

## 🔴 CRITICAL — all resolved

### C1. "Best Pediatrician in Ahmedabad" ✅

The guidelines name **"Best doctor"** as a prohibited claim, alongside "No. 1 hospital" and
"Most trusted". This was the site's most prominent copy: homepage `<h1>`, browser-tab title,
Open Graph / Twitter share titles, a declared meta keyword, and the `<h1>` + title of all
five area pages.

| File | Was | Now |
|---|---|---|
| `src/components/Hero.tsx` | `Best Pediatrician in Ahmedabad` | `Pediatrician in Sola, Ahmedabad` |
| `src/components/brand.ts` | `COPY.hero.h1` with "Best" | "Best" removed |
| `src/app/layout.tsx` | title, OG title, Twitter title | `Pediatrician in Sola, Ahmedabad \| …` |
| `src/app/layout.tsx` | keywords `best pediatrician…`, `best children doctor…` | superlatives dropped |
| `src/app/pediatrician-in/[area]/page.tsx` | `Best Pediatrician in {Area}` × 5 | `Pediatrician in {Area}, Ahmedabad` |

**Kept deliberately:** `"2nd Prize, Best Paper, GUJ-PEDICON"` and `"IJP Best Thesis nominee"`.
These are verifiable award names, which the guidelines permit as recognitions — not claims
about the practice.

**SEO impact: minimal.** "Best" was never doing the ranking work. Google already matches
"best pediatrician in Ahmedabad" queries to pages about *being a pediatrician in Ahmedabad*.
Location words, specialty, schema, area pages and the Google Business Profile are untouched.
The only real loss is a small exact-match signal in the title tag.

### C2. "one of the few clinics in the Sola and Science City area…" ✅

`public/llms.txt`. A scarcity/exclusivity claim about competitors, which cannot be
substantiated — you cannot count the lactation consultants in Sola. Replaced with a
statement of what the clinic does, claiming nothing about others.

### C3. "Trusted / dependable pediatrician" ✅

"Most trusted" is explicitly prohibited; "trusted" is the same unverifiable claim with the
superlative removed. Fixed in four area meta descriptions (`src/lib/areas.ts`) and two
intro lines.

---

## 🟠 HIGH — all resolved

### H1. Outcome guarantee ✅

`brand.ts` previously read *"…ensuring your child consistently meets vital developmental
targets and enjoys long-term well-being."* That promises a clinical result. Now:
*"…so your child's growth and development are monitored consistently against established
milestones."* — describes the process, promises no outcome.

The tagline "Ensuring Health" remains by clinic decision (see Decisions, item 2).

### H2. Implied patient endorsement ✅

Copy asserting that unnamed families already *choose* and *trust* her functioned as an
unattributable, unverifiable testimonial — and the guidelines bar both testimonials and
indirect patient solicitation. All five area pages reframed to factual availability:

> *Was:* "Families across Ghatlodia … **trust** Dr. Aashita A. Sinha for gentle, thorough care."
> *Now:* "The clinic is **open to** families across Ghatlodia … Dr. Aashita A. Sinha (MBBS, MD Pediatrics) **sees children by appointment**, in unhurried consultation slots."

---

## 🟢 H3. AI-generated photography — downgraded from High to Low ✅

**Correction to the first version of this audit.** The initial draft rated this High and
recommended replacing the images with real clinic photographs. After tracing where each
file is actually used, that was too strong. Recording the reasoning so the decision is
reviewable:

**The guidelines do not ban AI imagery.** They ban AI content that *misleads* —
specifically "synthetic patients", fake testimonials or manipulated clinical results — and
require disclosure of AI origin "where relevant". The test is whether an image makes a
**factual claim that is untrue**.

The eight files in `public/img/` are **decorative**, not evidentiary:

| Usage | What it claims | Risk |
|---|---|---|
| Service-card images (`services.ts`) | Nothing — mood imagery beside a service description | Low |
| `WhatsAppCTA` collage | Nothing — ambient background | Low |
| `BenefitsBand` parallax photo | Nothing — decorative band | Low |

No outcome is depicted, no patient is identified, nothing is presented as a result of
treatment, and there are no before/after pairs. This is the same decorative use every
clinic site has made of stock photography for twenty years.

**Two genuine issues existed, both now fixed:**

1. **One alt text made a false factual statement.** `mother-child.jpg` carried
   `alt="A mother and child at the clinic"` — asserting the photograph was taken on the
   premises. It was not. Now `alt="A mother holding her child"`. Those three words were the
   single place an AI image claimed something untrue.
2. **No disclosure existed.** Added to the footer on every page:
   > *"Photographs other than Dr. Sinha's are illustrative, AI-generated images. They do not
   > depict patients of this clinic."*

   This satisfies the disclosure clause for all eight images at once.

**`clinic.jpg` needs no action.** The first draft called it "an AI image standing in for your
actual clinic." That was wrong — it is only a decorative service-card image, and no visible
text anywhere presents those premises as Vatsalya's. The filename is internal and misleading
to a reader of the codebase, not to a patient. **No clinic photographs are required.**

---

## 🟡 MEDIUM

### M1. "Expert" self-assessment ✅

Permitted communication must be "factual, transparent and capable of verification".
"Expert" is a self-assessment, not a credential. Removed from 10 places: hero subhead,
meta description, OG and Twitter descriptions, three area leads, a trust badge
(`"Expert MD Pediatrician"` → `"MD Pediatrician"`), two service blurbs and two FAQ answers.
The qualifications now carry the claim, and do it better.

**Kept:** *"you are the true expert on your child"* — that compliments the parent, which is
the opposite of self-promotion.

### M2. Dr. Aashita's photograph ✅

The guidelines are specific: *"Use of an RMP's photograph for promotional self-advertisement
is generally not permitted. Hospital websites may list doctors with qualifications,
specialties, registration details and availability as patient information."*

So the photograph is permitted **as doctor identification** and risky **as the hero of a
marketing page**. With the registration numbers now in the site-wide footer (M4), every page
carrying her portrait also carries her name, qualifications and GMC registration — which
places all three usages (`/about` bio, area trust cards, homepage hero) in the permitted
"doctor listing" category. No redesign needed.

### M4. Registration numbers site-wide ✅

GMC numbers (MBBS G 66578, MD Pediatrics G 35792) previously appeared only in
`AboutContent.tsx`. Now in the footer on every page. The guidelines treat registration
details as core permitted patient information, and this is also a strong credibility signal
for patients and for AI search engines.

### M3. Fee transparency ⏸️ Declined for now

The guidelines *permit* "transparent and factual disclosure of charges and packages" and
list fees among the objective information a clinic may publish. The site publishes no fee,
and `pediatrician-in/[area]/page.tsx` emits a vague `priceRange: "₹₹"`.

**Not a violation** — publishing is optional. Noted as a missed opportunity: it would
pre-empt the most common patient question and differentiate from competitors who hide it.
Revisit if the clinic wants it.

---

## ⚠️ Remaining owner actions (off-site)

### A5. Check the live Google Business Profile wording 🟠

**Highest remaining risk.** The GBP description and business name cannot be audited from
the codebase. If either contains "best", "most trusted", "No. 1" or similar, that is the
same violation on a property that **outranks the website** — so it is more exposed than
anything that was on the site. Also check the Instagram / Facebook bio if those exist.

Note: `docs/GBP-SETUP.md` references "best pediatrician in Ahmedabad" as a *target keyword*
in a strategy note, not as copy to publish. Harmless, but do not paste it into any profile.

### A2. Keep reviews strictly organic 🟢

The guidelines prohibit buying reviews, fake followers, rating manipulation, purchased
endorsements and artificially boosting rankings. The open goal of 50+ Google reviews is
fine **only** if unincentivised: ask after a consultation, and never offer anything in
return — a discount, gift or priority slot would trip both the fake-review clause and the
referral-incentive prohibition.

### A3. Third-party content remains the clinic's liability 🟢

*"Hospitals remain responsible for content published through third parties, agencies or
influencers."* This covers the Justdial / Practo / 1mg / Lybrate listings being created
from `docs/DIRECTORY-LISTINGS.md`.

**That pack is already claim-free** — it instructs not to add keywords to the business name
and its descriptions are factual. Two follow-ups: (1) those platforms often *auto-insert*
"Best" or "Top" into category labels and profile headlines, so check each listing after it
goes live; (2) if the directory copy is ever rewritten, it must pass this same audit.

---

## What the site already got right

Recorded because these are the clauses most clinic websites fail:

- ✅ No patient testimonials, endorsements or recommendations anywhere
- ✅ No `aggregateRating` or star ratings in schema or UI
- ✅ No before/after photographs
- ✅ No celebrity patient publicity
- ✅ No patient photographs, records or treatment details
- ✅ No cashback, coupons, referral benefits, free procedures or promotional discounts
- ✅ No fear-based marketing copy
- ✅ No encouragement of unnecessary tests or procedures
- ✅ No paid advertising or boosted posts ever run
- ✅ Qualifications, specialties, registration numbers, hours and location all stated factually
- ✅ Cookie consent banner present

---

## Verification

- `npm run build` passes; all 12 static pages generate.
- Residual claim grep across `src/` and `public/llms.txt` for
  `best | trusted | dependable | expert | one of the few | developmental targets`
  returns only the two permitted award names and the parent-as-expert line.
