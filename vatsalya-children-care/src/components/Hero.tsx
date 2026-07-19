// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { m, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { NAP, COPY, DOCTOR } from "./brand";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-cream pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Faint gold pin-stripe texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 14px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Left — copy */}
          <m.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 md:order-1"
          >
            {/* // label */}
            <m.p
              variants={fadeUp}
              className="mb-5 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-navy/70"
            >
              <span className="text-gold">//</span> Pediatric &amp; Lactation Care
            </m.p>

            {/* H1 */}
            <m.h1
              variants={fadeUp}
              className="font-alice text-4xl leading-[1.1] text-navy-deep sm:text-5xl lg:text-6xl"
            >
              Best Pediatrician in Sola, Ahmedabad —{" "}
              <span className="font-lora italic text-gold">
                Vatsalya Children Care
              </span>
            </m.h1>

            {/* Subhead */}
            <m.p
              variants={fadeUp}
              className="mt-6 max-w-xl font-poppins text-base leading-relaxed text-ink/80 md:text-lg"
            >
              {COPY.hero.subhead}
            </m.p>

            {/* Credentials */}
            <m.p
              variants={fadeUp}
              className="mt-4 font-lora text-sm italic text-gold"
            >
              {DOCTOR.name} · {DOCTOR.credentials} · {DOCTOR.roles}
            </m.p>

            {/* CTAs */}
            <m.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={NAP.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {COPY.hero.primaryCTA}
              </a>

              <a
                href={NAP.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3.5 font-poppins text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white focus:outline-none focus:ring-4 focus:ring-navy/20"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {COPY.hero.secondaryCTA}
              </a>
            </m.div>

            {/* Contact line */}
            <m.p
              variants={fadeUp}
              className="mt-6 font-poppins text-xs text-ink/60"
            >
              <a href={NAP.phoneTel} className="hover:text-gold">
                {NAP.phone}
              </a>
              <span className="mx-2 text-gold">/</span>
              <a href={`mailto:${NAP.email}`} className="hover:text-gold">
                {NAP.email}
              </a>
            </m.p>
          </m.div>

          {/* Right — photo */}
          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-1 mx-auto w-full max-w-md md:order-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gold/30 bg-cream-light shadow-xl">
              <Image
                src="/dr-aashita.jpg"
                alt="Dr. Aashita A. Sinha, Pediatrician, Neonatologist and Lactation Consultant at Vatsalya Children Care, Sola, Ahmedabad"
                fill
                sizes="(max-width: 768px) 90vw, 440px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Gold corner-frame accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-gold/60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-gold/60"
            />
            {/* Floating credential chip */}
            <div className="absolute -bottom-4 left-4 rounded-full bg-navy px-4 py-2 shadow-lg md:left-6">
              <p className="font-poppins text-xs font-semibold text-white">
                MD Pediatrics{" "}
                <span className="text-gold-soft">· Lactation Consultant</span>
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
