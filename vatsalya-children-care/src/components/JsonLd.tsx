// src/components/JsonLd.tsx
// Injects JSON-LD structured data as <script> tags in <head>.
// Three blocks: MedicalClinic+LocalBusiness, Physician, FAQPage.

import { NAP, DOCTOR } from "./brand";

const FAQ_ITEMS = [
  {
    question: "What age range does Vatsalya Children Care treat?",
    answer:
      "We care for children from birth through 18 years — newborns, infants, toddlers, school-age children, and adolescents.",
  },
  {
    question: "Who is the doctor at Vatsalya Children Care?",
    answer:
      "Dr. Aashita A. Sinha — MBBS, MD Pediatrics — a pediatrician, neonatologist, and certified lactation consultant practising in Sola, Ahmedabad.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "509, B-Wing, 5th Floor, Grace Business Park, Sangeet Cross Roads, near Shaleen Hospital and above Reliance SMART Bazaar, on Kargil Petrol Pump Road, Sola, Ahmedabad – 380060. We're close to Science City and the Gujarat High Court.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "The fastest way is WhatsApp or a call to +91 90160 39796. Message us and we'll confirm your slot.",
  },
  {
    question: "What are the clinic's OPD timings?",
    answer:
      "TODO — OPD timings to be confirmed by Dr. Aashita. Please WhatsApp or call +91 90160 39796 for current hours.",
  },
  {
    question:
      "Do you provide vaccinations, and do you follow the IAP schedule?",
    answer:
      "Yes. We offer complete childhood immunization following the Indian Academy of Pediatrics (IAP) 2025 schedule, from birth-dose vaccines through adolescent boosters, and we maintain your child's immunization record.",
  },
  {
    question: "Do you offer newborn and breastfeeding support?",
    answer:
      "Yes. Dr. Aashita is a neonatologist and certified lactation consultant. We run a dedicated breastfeeding clinic (antenatal and postnatal) and provide newborn care, plus online teleconsultations for feeding challenges.",
  },
  {
    question: "Do you offer online or teleconsultations?",
    answer:
      "Yes — we offer teleconsultations for breastfeeding and lactation issues, so you can get expert guidance from home.",
  },
  {
    question: "What should I bring to my child's first visit?",
    answer:
      "Please bring any previous vaccination/immunization records, prescriptions, and reports for past illnesses, along with a list of any current medicines or concerns you'd like to discuss.",
  },
  {
    question: "Do you offer teenage health and counselling services?",
    answer:
      "Yes. Our Teenage Health Clinic offers confidential medical guidance and counselling on growth, nutrition, physical changes, and emotional wellbeing for adolescents.",
  },
  {
    question: "Why should I choose Vatsalya Children Care?",
    answer:
      "Your child is cared for directly by a fully credentialed pediatrician (MD Pediatrics) who is also a neonatologist and lactation consultant. We combine expert medical care with genuine warmth, in a calm, child-friendly clinic in Sola, Ahmedabad.",
  },
];

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
