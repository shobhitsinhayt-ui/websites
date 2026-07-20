// src/components/AboutPreview.tsx
"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { DOCTOR, NAP } from "./brand";
import PhotoDecor from "./PhotoDecor";

export default function AboutPreview() {
  return (
    <section
      id="doctor"
      aria-labelledby="about-heading"
      className="bg-navy py-16 md:py-24 relative overflow-hidden"
    >
      {/* Pin-stripe texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8 relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          {/* Photo placeholder */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            {/* Fixed 2:3 frame + object-cover: photo never stretches or squishes */}
            <div className="relative w-56 md:w-64">
              <PhotoDecor variant="dark" />
              <div className="relative z-10 aspect-[2/3] w-full overflow-hidden rounded-lg border-2 border-gold/30 bg-navy-deep shadow-xl">
                <Image
                  src="/dr-aashita.jpg"
                  alt="Dr. Aashita A. Sinha, Pediatrician, Neonatologist and Lactation Consultant at Vatsalya Children Care, Sola, Ahmedabad"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </m.div>

          {/* Bio */}
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-2 h-0.5 w-10 bg-gold" aria-hidden="true" />
            <h2
              id="about-heading"
              className="font-alice text-2xl text-white mb-1 md:text-3xl"
            >
              {DOCTOR.name}
            </h2>
            <p className="font-lora text-sm italic text-gold mb-6">
              {DOCTOR.credentials} · {DOCTOR.roles}
            </p>

            {/* Mission quote */}
            <blockquote className="mb-6 border-l-2 border-gold/50 pl-4 font-lora text-base italic leading-relaxed text-white/90">
              &ldquo;{DOCTOR.quote}&rdquo;
            </blockquote>

            <p className="font-poppins text-sm leading-relaxed text-white/80 md:text-base">
              {DOCTOR.bio}
            </p>

            {/* Credential highlights */}
            <ul className="mt-5 space-y-2">
              {DOCTOR.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 font-poppins text-xs text-white/80 md:text-sm"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Medical-council registration */}
            <p className="mt-4 font-poppins text-xs text-white/50">
              Gujarat Medical Council Reg. Nos., MBBS {DOCTOR.regMbbs} · MD
              Pediatrics {DOCTOR.regMd}
            </p>

            <a
              href={NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-gold px-5 py-2.5 font-poppins text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-navy"
            >
              Book a Consultation
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
}
