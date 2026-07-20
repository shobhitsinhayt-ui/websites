// src/components/PhotoDecor.tsx
"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  Heart,
  Baby,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: { Icon: LucideIcon; pos: string }[] = [
  { Icon: Stethoscope, pos: "-left-5 top-[10%]" },
  { Icon: Heart, pos: "-right-5 top-[32%]" },
  { Icon: Baby, pos: "-left-4 bottom-[26%]" },
  { Icon: ShieldCheck, pos: "-right-4 bottom-[8%]" },
];

// Decorative layer for the doctor photos: soft glow + offset gold frame (depth)
// + floating service icons. Drop inside a `relative` wrapper sized to the photo.
export default function PhotoDecor({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const reduce = useReducedMotion();
  const chip =
    variant === "light"
      ? "bg-navy text-gold ring-cream"
      : "bg-cream-light text-navy ring-navy-deep";

  return (
    <>
      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-5 z-0 rounded-[2rem] bg-gold/10 blur-2xl"
      />
      {/* Offset gold frame for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-4 z-0 h-full w-full rounded-lg border-2 border-gold/40"
      />
      {/* Floating service icons (desktop) */}
      {ICONS.map(({ Icon, pos }, i) => (
        <m.div
          key={i}
          className={`absolute ${pos} z-20 hidden h-11 w-11 items-center justify-center rounded-full shadow-lg ring-2 md:flex ${chip}`}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </m.div>
      ))}
    </>
  );
}
