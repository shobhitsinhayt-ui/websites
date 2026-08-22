// src/lib/areas.ts
// Per-area content for the /pediatrician-in/[area] landing pages.
// Each area MUST have genuinely unique copy (intro, landmarks, directions) —
// near-duplicate "doorway" pages are penalised by Google. The clinic is
// physically in Science City / Sola; these pages describe the honest travel
// context for families in each nearby area.

export type Area = {
  slug: string;
  /** Display name of the area, e.g. "Gota". */
  name: string;
  /** ~155-char meta description for this area page. */
  metaDescription: string;
  /** Short lead line shown under the H1. */
  lead: string;
  /** Unique intro paragraphs (2–3). */
  intro: string[];
  /** How families from this area reach the clinic. */
  directions: string;
  /** Nearby landmarks / sub-localities for local relevance. */
  landmarks: string[];
};

export const AREAS: Area[] = [
  {
    slug: "gota",
    name: "Gota",
    metaDescription:
      "Trusted pediatrician near Gota, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) offers vaccination, newborn care and lactation support for children 0 to 18 years, a short drive from Gota in Science City, Sola.",
    lead: "Warm, expert pediatric, newborn and lactation care for families in Gota, a short drive away in Science City, Sola.",
    intro: [
      "Looking for a trusted pediatrician near Gota? Vatsalya Children Care is a short drive away in Science City, Sola, caring for children from birth through 18 years. Families across Gota, from Vandemataram Cross Roads and Gota Cross Roads to the Godrej Garden City side, choose Dr. Aashita A. Sinha (MBBS, MD Pediatrics) for calm, unhurried care in a genuinely child-friendly clinic.",
      "Whether it is a routine vaccination, a newborn checkup, a fever that will not settle, or breastfeeding support for a new mother, your child is seen directly by a fully qualified pediatrician, neonatologist and certified lactation consultant, not a rushed queue. You get time, clear explanations, and a care plan built with you.",
      "For Gota parents juggling school runs and work, the clinic runs both morning and evening OPD sessions, and appointments can be booked in seconds on WhatsApp so you are not left waiting.",
    ],
    directions:
      "From Gota, the clinic is a short drive along the SG Highway toward Science City. We are on the 5th floor of Grace Business Park Sagar, above Reliance SMART Bazaar, near Kargil Petrol Pump, Science City, Sola.",
    landmarks: [
      "Vandemataram Cross Roads",
      "Gota Cross Roads",
      "Godrej Garden City",
      "SG Highway",
      "Chandlodiya",
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
