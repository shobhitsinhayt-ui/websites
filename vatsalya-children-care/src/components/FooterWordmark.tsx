// src/components/FooterWordmark.tsx
"use client";

import { m } from "framer-motion";

// Giant footer wordmark. Near-black for a crisp, Medio-like finish, with a
// playful spin-and-settle on hover.
export default function FooterWordmark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mt-8 select-none px-4 text-center"
    >
      <m.span
        className="pointer-events-auto inline-block cursor-default pb-[0.06em] font-poppins text-[20vw] font-bold leading-[0.85] tracking-tight text-[#0a1526] md:text-[16vw]"
        whileHover={{ rotate: [0, -6, 5, -3, 0], scale: [1, 1.03, 1.03, 1.02, 1] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Vatsalya.
      </m.span>
    </div>
  );
}
