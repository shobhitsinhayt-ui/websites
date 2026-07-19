// src/components/ScrollRevealText.tsx
"use client";

import { useRef } from "react";
import {
  m,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  // Fade each word from faint to full as the section scrolls through.
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="mr-[0.28em] inline-block">
      <m.span style={{ opacity }}>{children}</m.span>
    </span>
  );
}

export default function ScrollRevealText({
  paragraphs,
  className = "",
  paragraphClassName = "",
}: {
  paragraphs: readonly string[];
  className?: string;
  paragraphClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const total = paragraphs.reduce((n, p) => n + p.split(" ").length, 0);
  let idx = 0;

  // Reduced motion: render plain, fully-visible text (no scroll effect).
  if (reduce) {
    return (
      <div className={className}>
        {paragraphs.map((para, pi) => (
          <p key={pi} className={paragraphClassName}>
            {para}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {paragraphs.map((para, pi) => {
        const words = para.split(" ");
        return (
          <p key={pi} className={paragraphClassName}>
            {words.map((word, wi) => {
              const start = idx / total;
              const end = (idx + 1) / total;
              idx += 1;
              return (
                <Word key={wi} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
