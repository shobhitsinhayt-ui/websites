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
  /** True when the clinic is physically in this area (adjusts "here" vs "nearby" copy). */
  homeTurf?: boolean;
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
  {
    slug: "thaltej",
    name: "Thaltej",
    metaDescription:
      "Trusted pediatrician near Thaltej, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) offers vaccination, newborn care and lactation support for children 0 to 18 years, a short drive from Thaltej in Science City, Sola.",
    lead: "Warm, expert pediatric, newborn and lactation care for Thaltej families, a short drive away in Science City, Sola.",
    intro: [
      "Searching for a dependable pediatrician near Thaltej? Vatsalya Children Care sits a short drive away in Science City, Sola, looking after children from birth through 18 years. Parents from Thaltej, from the Drive-In Road and SG Highway side to Thaltej Cross Roads, come to Dr. Aashita A. Sinha (MBBS, MD Pediatrics) for careful, unhurried attention.",
      "From newborn checkups and IAP vaccinations to fevers, growth worries and breastfeeding support, your child is seen directly by a qualified pediatrician, neonatologist and certified lactation consultant, with time to listen and to explain.",
      "With both morning and evening OPD sessions and quick WhatsApp booking, fitting a visit around a busy Thaltej schedule is simple.",
    ],
    directions:
      "From Thaltej, the clinic is a short drive via the SG Highway toward Science City. Find us on the 5th floor of Grace Business Park Sagar, above Reliance SMART Bazaar, near Kargil Petrol Pump, Science City, Sola.",
    landmarks: [
      "Thaltej Cross Roads",
      "Drive-In Road",
      "SG Highway",
      "Sola",
      "Science City",
    ],
  },
  {
    slug: "chandlodiya",
    name: "Chandlodiya",
    metaDescription:
      "Trusted pediatrician near Chandlodiya, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) offers vaccination, newborn and lactation care for children 0 to 18 years, close by in Science City, Sola.",
    lead: "Gentle, expert pediatric, newborn and lactation care for Chandlodiya families, close by in Science City, Sola.",
    intro: [
      "Looking for a pediatrician close to Chandlodiya? Vatsalya Children Care is nearby in Science City, Sola, caring for children from birth through 18 years. Families across Chandlodiya, from Nirnay Nagar and the Chandlodiya railway station area toward Gota, choose Dr. Aashita A. Sinha (MBBS, MD Pediatrics) for calm, thorough care.",
      "Whether it is a vaccination on the IAP schedule, a newborn concern, a stubborn cough, or help with breastfeeding, your child is seen directly by a qualified pediatrician, neonatologist and certified lactation consultant.",
      "Morning and evening OPD sessions and quick WhatsApp booking make it easy for Chandlodiya parents to be seen without a long wait.",
    ],
    directions:
      "From Chandlodiya, the clinic is a short drive toward Science City and Sola. We are on the 5th floor of Grace Business Park Sagar, above Reliance SMART Bazaar, near Kargil Petrol Pump.",
    landmarks: [
      "Chandlodiya Railway Station",
      "Nirnay Nagar",
      "Gota",
      "Ranip",
      "Science City",
    ],
  },
  {
    slug: "science-city",
    name: "Science City",
    homeTurf: true,
    metaDescription:
      "Pediatrician in Science City, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) at Vatsalya Children Care offers vaccination, newborn care and lactation support for children 0 to 18 years, right here in Science City, Sola.",
    lead: "Your neighbourhood pediatric, newborn and lactation clinic, right here in Science City, Sola.",
    intro: [
      "Vatsalya Children Care is your local pediatric clinic in Science City, Sola, caring for children from birth through 18 years. Right beside Reliance SMART Bazaar near Kargil Petrol Pump, it is the neighbourhood choice for families across Science City and Sola who want a fully qualified pediatrician close to home.",
      "Dr. Aashita A. Sinha (MBBS, MD Pediatrics) is a pediatrician, neonatologist and certified lactation consultant, offering vaccination, newborn care, well-baby checkups, growth monitoring and breastfeeding support in a calm, child-friendly setting.",
      "Being right here in Science City means short trips, easy parking, and both morning and evening OPD sessions, with appointments only a WhatsApp message away.",
    ],
    directions:
      "We are in the heart of Science City, on the 5th floor of Grace Business Park Sagar, above Reliance SMART Bazaar, near Kargil Petrol Pump, Sola, Ahmedabad.",
    landmarks: [
      "Gujarat Science City",
      "Sola",
      "Kargil Petrol Pump",
      "Reliance SMART Bazaar",
      "Sola Bhagwat",
    ],
  },
  {
    slug: "ghatlodia",
    name: "Ghatlodia",
    metaDescription:
      "Trusted pediatrician near Ghatlodia, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics) offers vaccination, newborn and lactation care for children 0 to 18 years, close by in Science City, Sola.",
    lead: "Caring pediatric, newborn and lactation support for Ghatlodia families, close by in Science City, Sola.",
    intro: [
      "Looking for a pediatrician near Ghatlodia? Vatsalya Children Care is close by in Science City, Sola, caring for children from birth through 18 years. Families across Ghatlodia, from KK Nagar and Nirnay Nagar to the Sola side, trust Dr. Aashita A. Sinha (MBBS, MD Pediatrics) for gentle, thorough care.",
      "From IAP vaccinations and newborn checkups to fevers, growth concerns and breastfeeding support, your child is seen directly by a qualified pediatrician, neonatologist and certified lactation consultant, never rushed.",
      "With morning and evening OPD sessions and easy WhatsApp booking, Ghatlodia parents can find a slot that fits the day.",
    ],
    directions:
      "From Ghatlodia, the clinic is a short drive toward Sola and Science City. We are on the 5th floor of Grace Business Park Sagar, above Reliance SMART Bazaar, near Kargil Petrol Pump.",
    landmarks: [
      "KK Nagar",
      "Nirnay Nagar",
      "Sola",
      "Chandlodiya",
      "Science City",
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
