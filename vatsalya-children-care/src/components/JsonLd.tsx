// src/components/JsonLd.tsx
// Injects JSON-LD structured data as <script> tags in <head>.
// Three blocks: MedicalClinic+LocalBusiness, Physician, FAQPage.

import { NAP, DOCTOR, FAQ_ITEMS } from "./brand";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: NAP.name,
  image: `${NAP.website}/logo.png`,
  url: NAP.website,
  telephone: NAP.phone,
  email: NAP.email,
  medicalSpecialty: "Pediatric",
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.state,
    postalCode: NAP.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "TODO — confirm GPS coordinates",
    longitude: "TODO — confirm GPS coordinates",
  },
  openingHours: "TODO — confirm OPD days and hours",
  sameAs: [NAP.instagram],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: DOCTOR.name,
  medicalSpecialty: "Pediatrics",
  availableService: [
    "Pediatrics",
    "Neonatology",
    "Lactation Support",
    "Vaccination",
  ],
  worksFor: { "@type": "MedicalClinic", name: NAP.name },
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
  telephone: NAP.phone,
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
