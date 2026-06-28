// src/components/WhatsAppCTA.tsx
"use client";

import { m } from "framer-motion";
import { NAP, BRAND } from "./brand";

export default function WhatsAppCTA() {
  return (
    <section
      aria-label="Book appointment"
      className="bg-navy py-14 md:py-20 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 12px)",
        }}
      />
      <m.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-2xl px-4 text-center"
      >
        <h2 className="font-alice text-2xl text-white md:text-3xl mb-3">
          Ready to book an appointment?
        </h2>
        <p className="font-lora text-sm italic text-gold mb-8">
          {BRAND.tagline}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={NAP.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Message on WhatsApp
          </a>
          <a
            href={NAP.phoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold-soft px-7 py-3.5 font-poppins text-sm font-semibold text-gold-soft transition-all hover:bg-gold hover:text-navy hover:border-gold"
          >
            Call {NAP.phone}
          </a>
        </div>
      </m.div>
    </section>
  );
}
