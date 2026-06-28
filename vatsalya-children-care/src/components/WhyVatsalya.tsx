// src/components/WhyVatsalya.tsx
"use client";

import { m, type Variants } from "framer-motion";
import { COPY } from "./brand";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyVatsalya() {
  return (
    <section
      id="about"
      aria-labelledby="why-vatsalya-heading"
      className="bg-cream py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        {/* Gold divider rule above heading */}
        <m.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 h-0.5 w-12 origin-left bg-gold"
          aria-hidden="true"
        />

        <m.h2
          id="why-vatsalya-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-alice text-3xl text-navy-deep mb-8 md:text-4xl"
        >
          {COPY.whyVatsalya.heading}
        </m.h2>

        <div className="space-y-5">
          {COPY.whyVatsalya.paragraphs.map((para, i) => (
            <m.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="font-poppins text-base leading-relaxed text-ink md:text-lg"
            >
              {para}
            </m.p>
          ))}
        </div>

        {/* Differentiator callout */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 rounded-2xl border border-gold/30 bg-cream-light p-6"
        >
          <p className="font-poppins text-sm font-semibold text-gold uppercase tracking-wide mb-2">
            Specialized Lactation Center
          </p>
          <p className="font-poppins text-base text-ink leading-relaxed">
            Vatsalya is one of Ahmedabad&apos;s few pediatric clinics led by a
            <strong> certified Lactation Consultant</strong>, offering dedicated
            breastfeeding support antenatally, postnatally, and via teleconsultation.
          </p>
        </m.div>
      </div>
    </section>
  );
}
