// src/components/JsonLd.tsx
// Injects JSON-LD structured data as <script> tags in <head>.
// Three blocks: MedicalClinic+LocalBusiness, Physician, FAQPage.

import { NAP, DOCTOR, FAQ_ITEMS } from "./brand";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${NAP.website}/#clinic`,
  name: NAP.name,
  image: `${NAP.website}/logo.png`,
  logo: `${NAP.website}/logo.png`,
  url: NAP.website,
  telephone: NAP.phoneE164,
  email: NAP.email,
  description:
    "Pediatric clinic in Sola, Ahmedabad offering general pediatric OPD, IAP-schedule vaccination, newborn care, well-baby checkups, growth and development assessment, child nutrition, teenage health counselling, and specialised breastfeeding and lactation support for children from birth through 18 years.",
  medicalSpecialty: "Pediatric",
  areaServed: ["Sola", "Science City", "Gujarat High Court area", "Ahmedabad"],
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.state,
    postalCode: NAP.address.postalCode,
    addressCountry: "IN",
  },
  hasMap: NAP.mapsUrl,
  employee: { "@id": `${NAP.website}/#physician` },
  // geo (lat/long) and openingHours intentionally omitted until confirmed —
  // shipping placeholder values would make the structured data invalid.
  sameAs: [NAP.instagram],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${NAP.website}/#physician`,
  name: DOCTOR.name,
  url: NAP.website,
  description: DOCTOR.bio,
  medicalSpecialty: "Pediatrics",
  knowsLanguage: DOCTOR.languages,
  availableService: [
    "Pediatrics",
    "Neonatology",
    "Lactation Support",
    "Vaccination",
  ],
  worksFor: {
    "@type": "MedicalClinic",
    "@id": `${NAP.website}/#clinic`,
    name: NAP.name,
  },
  alumniOf: DOCTOR.alumniOf.map((name) => ({
    "@type": "CollegeOrUniversity",
    name,
  })),
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Gujarat Medical Council Registration (MBBS)",
      value: DOCTOR.regMbbs,
    },
    {
      "@type": "PropertyValue",
      name: "Gujarat Medical Council Registration (MD Pediatrics)",
      value: DOCTOR.regMd,
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sola, Ahmedabad",
    addressRegion: NAP.address.state,
    postalCode: NAP.address.postalCode,
    addressCountry: "IN",
  },
  telephone: NAP.phoneE164,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
