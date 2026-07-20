// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { m, type Variants } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
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

      {/* Soft navy panel behind the photo side (desktop) — warm cream + bold navy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block"
      >
        <div className="h-full w-full rounded-l-[3rem] bg-gradient-to-br from-navy to-navy-deep" />
        <div
          className="absolute inset-0 rounded-l-[3rem] opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 14px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Left — copy */}
          <m.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 md:order-1"
          >
            {/* Eyebrow */}
            <m.p
              variants={fadeUp}
              className="mb-5 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Pediatric &amp; Lactation Care
            </m.p>

            {/* H1 */}
            <m.h1
              variants={fadeUp}
              className="font-alice text-4xl leading-[1.1] text-navy-deep sm:text-5xl lg:text-6xl"
            >
              Best Pediatrician in Sola, Ahmedabad
              <span className="mt-3 block font-lora italic text-gold">
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

            {/* CTA — single clean Medio-style pill */}
            <m.div variants={fadeUp} className="mt-8">
              <a
                href={NAP.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-navy py-1.5 pl-6 pr-1.5 font-poppins text-sm font-semibold text-white shadow-md transition-colors hover:bg-navy-deep focus:outline-none focus:ring-4 focus:ring-navy/20"
              >
                Book Appointment
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </m.div>
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
            {/* Floating doctor badge */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-gold/30 bg-cream-light px-4 py-3 shadow-xl md:left-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-alice text-sm text-navy-deep">
                  {DOCTOR.name}
                </span>
                <span className="block font-poppins text-[0.7rem] tracking-wide text-gold">
                  {DOCTOR.credentials}
                </span>
              </span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
