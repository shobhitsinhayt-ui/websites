// src/components/FAQAccordion.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-4 h-0.5 w-12 bg-gold"
            aria-hidden="true"
          />
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-alice text-3xl text-navy-deep md:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <dl className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-gold/20 bg-cream-light overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
                >
                  <span className="font-poppins text-sm font-semibold text-navy-deep pr-4 md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.dd
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 font-poppins text-sm leading-relaxed text-ink/80 md:text-base">
                      {item.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
