// src/components/TrustStrip.tsx
"use client";

import { motion } from "framer-motion";

const credentials = [
  { label: "MBBS · MD Pediatrics", icon: "🎓" },
  { label: "Neonatologist", icon: "👶" },
  { label: "Certified Lactation Consultant", icon: "🤱" },
  { label: "IAP 2025 Vaccination", icon: "💉" },
  { label: "Children 0–18 Years", icon: "❤️" },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Credentials"
      className="bg-navy-deep py-4 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {credentials.map((c) => (
            <span
              key={c.label}
              className="flex items-center gap-2 font-poppins text-xs font-medium text-white/80 sm:text-sm"
            >
              <span aria-hidden="true">{c.icon}</span>
              {c.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
