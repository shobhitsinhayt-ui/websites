// src/components/WhatsAppCTA.tsx
"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAP } from "./brand";

const PHOTOS = [
  { src: "/img/baby-laugh.jpg", pos: "left-[5%] top-[12%]", alt: "A happy, healthy baby" },
  { src: "/img/checkup.jpg", pos: "right-[5%] top-[9%]", alt: "A child at a gentle health check-up" },
  { src: "/img/mother-child.jpg", pos: "left-[7%] bottom-[10%]", alt: "A mother and child at the clinic" },
  { src: "/img/newborn-mother.jpg", pos: "right-[6%] bottom-[12%]", alt: "A mother holding her newborn" },
];

export default function WhatsAppCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Book an appointment"
      className="relative overflow-hidden bg-navy-deep py-24 md:py-32"
    >
      {/* Gold pin-stripe texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Floating corner photos (desktop) */}
      {PHOTOS.map((p, i) => (
        <m.div
          key={p.src}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className={`absolute z-10 hidden h-32 w-32 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block lg:h-44 lg:w-44 ${p.pos}`}
        >
          <m.div
            className="relative h-full w-full"
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="176px"
              className="object-cover"
            />
          </m.div>
        </m.div>
      ))}

      {/* Center content */}
      <div className="relative z-20 mx-auto max-w-2xl px-4 text-center">
        <p className="mb-4 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Appointment
        </p>
        <h2 className="font-alice text-4xl leading-tight text-white md:text-5xl">
          Give your child the care they deserve.
        </h2>
        <p className="mx-auto mt-5 max-w-md font-poppins text-sm leading-relaxed text-white/70">
          Book with Dr. Aashita on WhatsApp or call today. We see patients by
          appointment, so every child gets unhurried, focused care.
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href={NAP.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-cream py-2 pl-7 pr-2 font-poppins text-sm font-semibold text-navy-deep shadow-lg transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-gold/40"
          >
            Book an Appointment
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
