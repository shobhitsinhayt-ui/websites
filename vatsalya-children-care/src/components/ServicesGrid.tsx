// src/components/ServicesGrid.tsx
"use client";

import { m, type Variants } from "framer-motion";
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ServicesGrid() {
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

        {/* 3-column grid on desktop, 1 column on mobile */}
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <m.article
                key={service.title}
                variants={cardVariants}
                className="group rounded-2xl border border-gold/20 bg-cream p-6 transition-shadow hover:shadow-md hover:shadow-gold/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 group-hover:bg-navy/10 transition-colors">
                  <Icon
                    className="h-6 w-6 text-navy"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-alice text-lg text-navy-deep mb-1">
                  {service.title}
                </h3>
                <p className="font-lora text-xs italic text-gold mb-3">
                  {service.subtitle}
                </p>
                <p className="font-poppins text-sm leading-relaxed text-ink/80">
                  {service.description}
                </p>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
