// src/components/ServicesGrid.tsx
"use client";

import Image from "next/image";
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
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  image?: string; // drop a /img/*.jpg here to show a photo instead of the icon
};

const SERVICES: Service[] = [
  {
    icon: Stethoscope,
    title: "General Pediatric OPD",
    subtitle: "Up to 18 years",
    image: "/img/checkup.jpg",
    description:
      "Expert day-to-day medical care for children of every age, from common fevers, coughs, and infections to ongoing health concerns, with patience, clear explanations, and a calm, child-friendly approach.",
  },
  {
    icon: Shield,
    title: "Vaccination Clinic",
    subtitle: "IAP 2025 Schedule",
    image: "/img/mother-child.jpg",
    description:
      "Complete immunization following the Indian Academy of Pediatrics (IAP) 2025 schedule, from birth-dose vaccines through adolescent boosters, with a personal immunization record and timely reminders.",
  },
  {
    icon: Baby,
    title: "Newborn Care OPD",
    subtitle: "Neonatology",
    image: "/img/newborn-mother.jpg",
    description:
      "Specialised care for your baby's most delicate first weeks, newborn examinations, jaundice and weight monitoring, feeding guidance, and reassurance for new parents.",
  },
  {
    icon: Heart,
    title: "Breastfeeding Clinic",
    subtitle: "Antenatal & Postnatal",
    image: "/img/newborn-feet.jpg",
    description:
      "Dedicated lactation support before and after delivery. From preparing during pregnancy to resolving latch and supply difficulties, our certified lactation consultant helps you give your baby the healthiest start.",
  },
  {
    icon: ClipboardCheck,
    title: "Well Baby Clinic",
    subtitle: "Routine Wellness",
    image: "/img/baby-sitting.jpg",
    description:
      "Routine wellness visits that track your baby's healthy growth and development, catching concerns early and keeping vaccinations on schedule.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Development",
    subtitle: "Milestone Monitoring",
    image: "/img/baby-smile.jpg",
    description:
      "Structured monitoring of your child's height, weight, head circumference, and developmental milestones, so any concern is identified early and supported with the right guidance.",
  },
  {
    icon: Apple,
    title: "Infant & Child Nutrition",
    subtitle: "Personalised Guidance",
    image: "/img/baby-laugh.jpg",
    description:
      "Personalised nutrition guidance for every stage: breastfeeding, weaning, fussy eaters, and growing children, building habits that support strong growth and immunity.",
  },
  {
    icon: Users,
    title: "Teenage Health Clinic",
    subtitle: "Counselling Centre",
    image: "/img/clinic.jpg",
    description:
      "A safe, confidential space for adolescents to discuss physical changes, nutrition, emotional wellbeing, and growth, with caring medical guidance and counselling.",
  },
  {
    icon: Video,
    title: "Teleconsultation",
    subtitle: "Breastfeeding Support",
    image: "/img/newborn-mother.jpg",
    description:
      "Can't visit in person? Get expert lactation support from home through online consultations, practical, reassuring guidance for feeding challenges whenever you need it.",
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  const CurrentIcon = current.icon;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-cream-light py-16 md:py-24"
    >
      {/* Soft gradient blobs for depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-6 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 right-4 h-72 w-72 rounded-full bg-[#7FB0AC]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="font-alice text-3xl text-navy-deep md:text-5xl"
          >
            Comprehensive{" "}
            <span className="font-lora italic text-gold">Care.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {/* Left — service list */}
          <ul className="order-2 md:order-1">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const isActive = active === i;
              return (
                <li key={service.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      isActive
                        ? "border border-white/70 bg-white/70 shadow-lg shadow-navy/5 backdrop-blur-md"
                        : "border border-transparent hover:bg-white/40"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive ? "bg-gold text-navy" : "bg-navy/5 text-navy"
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
                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-gold opacity-100"
                          : "text-navy/30 opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right — image / detail panel */}
          <div className="order-1 md:order-2">
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/60 bg-navy shadow-xl">
                <AnimatePresence mode="wait">
                  <m.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    {current.image ? (
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover"
                      />
                    ) : (
                      // Photo-ready placeholder: brand gradient + service icon
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-deep via-navy to-[#123a6b]">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 14px)",
                          }}
                        />
                        <CurrentIcon
                          className="h-24 w-24 text-gold/70"
                          aria-hidden="true"
                          strokeWidth={1}
                        />
                      </div>
                    )}
                    {/* Caption overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/50 to-transparent p-6">
                      <p className="font-alice text-xl text-white">
                        {current.title}
                      </p>
                      <p className="mt-1 font-poppins text-sm leading-relaxed text-white/80">
                        {current.description}
                      </p>
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
