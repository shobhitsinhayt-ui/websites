// src/components/HoverLink.tsx
"use client";

import { m, type Variants } from "framer-motion";

// Per-letter hover: on hover each letter lifts and fades out then back,
// staggered left-to-right, so the text "goes away and comes back".
const letter: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: (i: number) => ({
    y: [0, -10, 0],
    opacity: [1, 0, 1],
    transition: { duration: 0.4, delay: i * 0.03, ease: "easeInOut" },
  }),
};

export default function HoverLink({
  href,
  label,
  external = false,
  className = "",
}: {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
}) {
  return (
    <m.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`inline-flex transition-colors ${className}`}
    >
      {label.split("").map((ch, i) => (
        <m.span
          key={`${ch}-${i}`}
          custom={i}
          variants={letter}
          className="inline-block whitespace-pre"
        >
          {ch === " " ? " " : ch}
        </m.span>
      ))}
    </m.a>
  );
}
