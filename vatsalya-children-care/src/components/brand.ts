// src/components/brand.ts
// Single source of truth — all brand values from BUILD-SPEC.md §3–§5

export const NAP = {
  name: "Vatsalya Children Care",
  phone: "+91 90160 39796",
  phoneE164: "+919016039796",
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
  // Exact Google Maps place (decoded from the clinic's Maps feature ID) —
  // opens the right pin in the user's Google Maps app/site.
  mapsUrl: "https://www.google.com/maps?cid=9088339190125086181",
  // Clean, geocodable query for the no-API-key embed iframe.
  mapsQuery:
    "Grace Business Park, Sangeet Cross Roads, Sola, Ahmedabad, Gujarat 380060",
} as const;

export const DOCTOR = {
  name: "Dr. Aashita A. Sinha",
  credentials: "MBBS · MD Pediatrics",
  roles: "Neonatologist, Pediatrician and Lactation Consultant",
  bio: "Dr. Aashita A. Sinha is a pediatrician, neonatologist, and certified lactation consultant caring for children from birth through 18 years in Sola, Ahmedabad. She earned her MBBS at GCS Medical College & Hospital, Ahmedabad, and her MD in Pediatrics at SMIMER, Surat. She has served as Senior Resident in Pediatrics at GMERS Medical College & Hospital, Sola, and as Assistant Professor of Pediatrics at BJ Medical College, Ahmedabad. Her training spans high-volume PICU and NICU care, advanced neonatal resuscitation, developmental milestone assessment, vaccination, and adolescent and family counselling.",
  // Short, scannable credential highlights (verified from CV)
  highlights: [
    "MBBS — GCS Medical College & Hospital, Ahmedabad",
    "MD Pediatrics — SMIMER, Surat",
    "Senior Resident, Pediatrics — GMERS, Sola, Ahmedabad",
    "Assistant Professor, Pediatrics — BJ Medical College, Ahmedabad",
    "Advanced Neonatal Resuscitation (IAP & NNF) · BLS & PALS (IAP)",
  ],
  // Gujarat Medical Council registration numbers
  regMbbs: "G 66578",
  regMd: "G 35792",
  alumniOf: [
    "GCS Medical College & Hospital, Ahmedabad",
    "Surat Municipal Institute of Medical Education & Research (SMIMER), Surat",
  ],
  languages: ["English", "Hindi", "Gujarati"],
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

// Canonical FAQ list — single source of truth for both the visible
// FAQ accordion and the FAQPage JSON-LD. Keep these in sync by importing.
export const FAQ_ITEMS = [
  {
    question: "What age range does Vatsalya Children Care treat?",
    answer:
      "We care for children from birth through 18 years: newborns, infants, toddlers, school-age children, and adolescents.",
  },
  {
    question: "Who is the doctor at Vatsalya Children Care?",
    answer:
      "Dr. Aashita A. Sinha (MBBS, MD Pediatrics) is a pediatrician, neonatologist, and certified lactation consultant practising in Sola, Ahmedabad.",
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
    question: "Do you see walk-in patients, or is it appointment-only?",
    answer:
      "Vatsalya Children Care runs by appointment so every child gets unhurried, focused time with Dr. Aashita. Please book through WhatsApp or call +91 90160 39796, and we'll confirm a slot that suits you.",
  },
  {
    question: "What are the clinic's OPD timings?",
    answer:
      "For current OPD days and timings, please WhatsApp or call us at +91 90160 39796 and we'll share the next available session that suits you.",
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
      "Yes. We offer teleconsultations for breastfeeding and lactation issues, so you can get expert guidance from home.",
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
] as const;
