// src/components/brand.ts
// Single source of truth — all brand values from BUILD-SPEC.md §3–§5

export const NAP = {
  name: "Vatsalya Children Care",
  phone: "+91 90160 39796",
  phoneTel: "tel:+919016039796",
  whatsapp:
    "https://wa.me/919016039796?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vatsalya%20Children%20Care",
  email: "vatsalyachildrencare@gmail.com",
  instagram: "https://www.instagram.com/vatsalyachildrencare",
  website: "https://vatsalyachildrencare.in",
  address: {
    street:
      "509, B-Wing, 5th Floor, Grace Business Park, Sangeet Cross Roads, Near Shaleen Hospital, Above Reliance SMART Bazaar, Kargil Petrol Pump Road, Sola",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "380060",
    country: "India",
    full: "509, B-Wing, 5th Floor, Grace Business Park, Sangeet Cross Roads, Near Shaleen Hospital, Above Reliance SMART Bazaar, Kargil Petrol Pump Road, Sola, Ahmedabad, Gujarat – 380060, India",
  },
} as const;

export const DOCTOR = {
  name: "Dr. Aashita A. Sinha",
  credentials: "MBBS · MD Pediatrics",
  roles: "Neonatologist, Pediatrician and Lactation Consultant",
  bio: "Dr. Aashita A. Sinha is a pediatrician, neonatologist, and certified lactation consultant (MBBS, MD Pediatrics) practising in Sola, Ahmedabad. She cares for children from birth through 18 years, with special focus on newborn care, breastfeeding support, vaccination, and developmental milestones.",
} as const;

export const BRAND = {
  tagline: "Nurturing Smiles, Ensuring Health",
  meaning:
    "Vatsalya (वात्सल्य) — parental love and unconditional affection for a child",
} as const;

export const COPY = {
  hero: {
    h1: "Best Pediatrician in Sola, Ahmedabad — Vatsalya Children Care",
    subhead:
      "Compassionate, expert care for your child from newborn through adolescence, led by Dr. Aashita A. Sinha (MBBS, MD Pediatrics, Neonatologist & Lactation Consultant).",
    primaryCTA: "Book Appointment on WhatsApp",
    secondaryCTA: "Call +91 90160 39796",
  },
  whyVatsalya: {
    heading: "Why Vatsalya?",
    paragraphs: [
      "When you step into Vatsalya, your family becomes our primary focus. We are deeply committed to nurturing health and ensuring smiles for every child, safeguarding their physical, emotional, and social development from infancy through adolescence.",
      "We recognise that parents are the true experts on their children. By working closely with you, we get to know your child's unique history so we can support and guide you through every milestone with clarity and confidence.",
      "In addition to core Pediatrics, Vatsalya functions as a specialised center for lactation support. Recognising that nursing offers the ideal foundation for your infant's development, we are fully equipped to address comprehensive breastfeeding challenges.",
      "Routine wellness checkups and proactive healthcare form the cornerstone of our practice, ensuring your child consistently meets vital developmental targets and enjoys long-term well-being.",
    ],
  },
} as const;
