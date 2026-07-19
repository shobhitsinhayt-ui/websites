// src/components/ServicesGrid.tsx
"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Shield,
  Baby,
  Heart,
  ClipboardCheck,
  TrendingUp,
  Apple,
  Users,
  Video,
  Plus,
} from "lucide-react";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "General Pediatric OPD",
    subtitle: "Up to 18 years",
    description:
      "Expert day-to-day medical care for children of every age, from common fevers, coughs, and infections to ongoing health concerns. Every child is treated with patience, clear explanations, and a calm, child-friendly approach.",
  },
  {
    icon: Shield,
    title: "Vaccination Clinic",
    subtitle: "IAP 2025 Schedule",
    description:
      "Complete immunization following the Indian Academy of Pediatrics (IAP) 2025 schedule, from birth-dose vaccines through adolescent boosters. We maintain your child's personal immunization record and send timely reminders.",
  },
  {
    icon: Baby,
    title: "Newborn Care OPD",
    subtitle: "Neonatology",
    description:
      "Specialised care for your baby's most delicate first weeks. Newborn examinations, jaundice and weight monitoring, feeding guidance, and reassurance for new parents navigating those early days.",
  },
  {
    icon: Heart,
    title: "Breastfeeding Clinic",
    subtitle: "Antenatal & Postnatal",
    description:
      "Dedicated lactation support before and after delivery. From preparing during pregnancy to resolving latch, supply, and feeding difficulties, our certified lactation consultant helps you give your baby the healthiest start.",
  },
  {
    icon: ClipboardCheck,
    title: "Well Baby Clinic",
    subtitle: "Routine Wellness",
    description:
      "Routine wellness visits that track your baby's healthy growth and development. Regular check-ups catch concerns early, keep vaccinations on schedule, and give you confidence that your child is thriving.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Development Assessment",
    subtitle: "Milestone Monitoring",
    description:
      "Structured monitoring of your child's height, weight, head circumference, and developmental milestones, so any delay or concern is identified early and supported with the right guidance at the right time.",
  },
  {
    icon: Apple,
    title: "Infant & Child Nutrition Program",
    subtitle: "Personalised Guidance",
    description:
      "Personalised nutrition guidance for every stage: breastfeeding, weaning, fussy eaters, and growing children. We help you build healthy eating habits that support strong growth, immunity, and development.",
  },
  {
    icon: Users,
    title: "Teenage Health Clinic",
    subtitle: "Counselling Centre",
    description:
      "A safe, confidential space for adolescents to discuss physical changes, nutrition, emotional wellbeing, and growth. Caring medical guidance and counselling tailored to the unique needs of teenage years.",
  },
  {
    icon: Video,
    title: "Teleconsultation",
    subtitle: "Breastfeeding Support",
    description:
      "Can't visit in person? Get expert lactation support from home through online consultations. Practical, reassuring guidance for feeding challenges, whenever you need it.",
  },
];

export default function ServicesGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-cream-light py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-4 h-0.5 w-12 bg-gold"
            aria-hidden="true"
          />
          <m.h2
            id="services-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-alice text-3xl text-navy-deep md:text-4xl"
          >
            Our Services
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 font-poppins text-base text-ink/70 max-w-xl mx-auto"
          >
            Comprehensive pediatric care for children from birth through 18 years,
            in Sola, Ahmedabad.
          </m.p>
        </div>

        {/* Interactive list — tap a service to expand its details */}
        <div className="mx-auto max-w-3xl space-y-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const open = openIndex === i;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`overflow-hidden rounded-2xl border bg-cream transition-colors duration-300 ${
                  open ? "border-gold/50 shadow-lg shadow-gold/5" : "border-gold/20 hover:border-gold/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      open ? "bg-gold text-navy" : "bg-navy/5 text-navy"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-alice text-lg leading-tight text-navy-deep">
                      {service.title}
                    </span>
                    <span className="block font-lora text-xs italic text-gold">
                      {service.subtitle}
                    </span>
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-20 font-poppins text-sm leading-relaxed text-ink/80">
                        {service.description}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
