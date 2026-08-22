// src/components/PageHero.tsx
"use client";

import { m } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  /** Optional trailing accent rendered in gold serif italic. */
  accent?: string;
  subtitle?: string;
};

/**
 * Shared editorial page header (cream band) used by the dedicated pages so
 * their formatting matches the homepage sections: gold eyebrow, Libre Caslon
 * H1 with an optional gold italic accent, subtitle.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-12 pt-32 text-center md:pb-16 md:pt-40">
      {/* Faint gold pin-stripe texture — matches the homepage hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 14px)",
        }}
      />

      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-2xl"
      >
        <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
          {eyebrow}
        </p>
        <h1 className="font-alice text-4xl leading-[1.1] text-navy-deep md:text-5xl lg:text-6xl">
          {title}
          {accent && (
            <span className="mt-2 block font-lora italic text-gold-ink">
              {accent}
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl font-poppins text-base leading-relaxed text-ink/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </m.div>
    </section>
  );
}
