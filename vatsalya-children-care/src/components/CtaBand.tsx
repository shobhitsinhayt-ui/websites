// src/components/CtaBand.tsx
"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAP } from "./brand";

type Props = {
  heading: string;
  accent?: string;
  subtext?: string;
};

/**
 * Navy call-to-action band (with pin-stripe texture) reused at the foot of the
 * dedicated pages, mirroring the homepage's warm, editorial styling.
 */
export default function CtaBand({ heading, accent, subtext }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 12px)",
        }}
      />
      <m.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-4 text-center"
      >
        <div className="mx-auto mb-5 h-0.5 w-10 bg-gold" aria-hidden="true" />
        <h2 className="font-alice text-3xl text-white md:text-4xl">
          {heading}
          {accent && (
            <span className="font-lora italic text-gold"> {accent}</span>
          )}
        </h2>
        {subtext && (
          <p className="mx-auto mt-4 max-w-xl font-poppins text-sm leading-relaxed text-white/80 md:text-base">
            {subtext}
          </p>
        )}
        <a
          href={NAP.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 inline-flex items-center gap-3 rounded-full bg-gold py-1.5 pl-6 pr-1.5 font-poppins text-sm font-semibold text-navy shadow-md transition-colors hover:bg-gold-soft focus:outline-none focus:ring-4 focus:ring-gold/30"
        >
          Book an Appointment
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </m.div>
    </section>
  );
}
