// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { m, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { NAP, COPY, BRAND, DOCTOR } from "./brand";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen bg-navy overflow-hidden flex items-center"
    >
      {/* Subtle diagonal pin-stripe texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 12px)",
        }}
      />

      {/* Gold corner-frame accent — top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 left-8 h-16 w-16 border-t-2 border-l-2 border-gold opacity-40 hidden md:block"
      />
      {/* Gold corner-frame accent — bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-gold opacity-40 hidden md:block"
      />

      <div className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
        <m.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center md:items-start md:text-left gap-6"
        >
          {/* Tagline chip */}
          <m.div variants={fadeUp}>
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-lora text-sm italic text-gold">
              {BRAND.tagline}
            </span>
          </m.div>

          {/* Logo — mobile only */}
          <m.div variants={fadeUp} className="md:hidden">
            <Image
              src="/logo.svg"
              alt="Vatsalya Children Care"
              width={80}
              height={80}
              priority
            />
          </m.div>

          {/* H1 */}
          <m.h1
            variants={fadeUp}
            className="font-alice text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          >
            Best Pediatrician in Sola, Ahmedabad —{" "}
            <span className="text-gold">Vatsalya Children Care</span>
          </m.h1>

          {/* Subhead */}
          <m.p
            variants={fadeUp}
            className="max-w-2xl font-poppins text-base leading-relaxed text-white/80 md:text-lg"
          >
            {COPY.hero.subhead}
          </m.p>

          {/* Doctor credentials line */}
          <m.p
            variants={fadeUp}
            className="font-lora text-sm italic text-gold-soft"
          >
            {DOCTOR.name} · {DOCTOR.credentials} · {DOCTOR.roles}
          </m.p>

          {/* CTAs */}
          <m.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {COPY.hero.primaryCTA}
            </a>

            <a
              href={NAP.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold px-6 py-3.5 font-poppins text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-navy focus:outline-none focus:ring-4 focus:ring-gold/40"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {COPY.hero.secondaryCTA}
            </a>
          </m.div>
        </m.div>
      </div>

      {/* Wave divider into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0"
      >
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 900 0 720 20C540 40 240 80 0 20L0 80Z" fill="#FFF4E5" />
        </svg>
      </div>
    </section>
  );
}
