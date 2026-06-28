// src/components/AboutPreview.tsx
"use client";

import { m } from "framer-motion";
import { DOCTOR, NAP } from "./brand";

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
            <div className="relative h-72 w-56 rounded-2xl border-2 border-gold/30 bg-navy-deep flex flex-col items-center justify-center gap-3 md:h-80 md:w-64">
              <span className="text-4xl" aria-hidden="true">👩‍⚕️</span>
              <p className="font-poppins text-xs text-white/40 text-center px-4">
                {/* TODO: Replace with professional photo of Dr. Aashita A. Sinha */}
                TODO — Professional photo of {DOCTOR.name}
              </p>
              <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-gold opacity-60" aria-hidden="true" />
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
            <p className="font-poppins text-sm leading-relaxed text-white/80 md:text-base">
              {DOCTOR.bio}
            </p>

            {/* TODO placeholders */}
            <div className="mt-4 rounded-lg border border-gold/20 bg-navy-deep/50 p-4">
              <p className="font-poppins text-xs text-white/40">
                TODO: Years of experience, medical-council registration number,
                prior hospitals / training — to be confirmed by Dr. Aashita.
              </p>
            </div>

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
