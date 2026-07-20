// src/components/BenefitsBand.tsx
"use client";

import Image from "next/image";
import { m } from "framer-motion";

const BENEFITS = [
  "Expert MD Pediatrician",
  "Certified Lactation Support",
  "IAP 2025 Vaccination",
  "Warm, Child-Friendly Clinic",
];

export default function BenefitsBand() {
  return (
    <section aria-label="Why choose Vatsalya" className="relative">
      <div className="relative h-[75vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src="/img/baby-laugh.jpg"
          alt="A happy, healthy baby cared for at Vatsalya Children Care"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />

        {/* Glass overlay card */}
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 md:px-8 md:pb-12">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <h2 className="font-alice text-3xl leading-tight text-white md:text-4xl">
                <span className="font-lora italic text-gold-soft">Benefits</span>{" "}
                of choosing Vatsalya.
              </h2>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {BENEFITS.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 font-poppins text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
