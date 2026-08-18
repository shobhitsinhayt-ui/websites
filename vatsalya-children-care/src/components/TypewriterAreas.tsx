// src/components/TypewriterAreas.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  words: readonly string[];
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms per character while deleting */
  deleteSpeed?: number;
  /** ms to hold a fully typed word before deleting */
  holdTime?: number;
  className?: string;
};

/**
 * Types out each area name, holds, deletes, then moves to the next — cycling
 * forever. The first word is rendered on the server (SSR) so crawlers and the
 * no-JS view always see a real, meaningful area name in the H1. Users who
 * prefer reduced motion get a static first word (no animation).
 */
export default function TypewriterAreas({
  words,
  typeSpeed = 90,
  deleteSpeed = 45,
  holdTime = 1400,
  className,
}: Props) {
  const [text, setText] = useState(words[0] ?? "");
  const wordIndex = useRef(0);
  const charIndex = useRef((words[0] ?? "").length);
  const deleting = useRef(false);

  useEffect(() => {
    // Respect reduced-motion: leave the SSR'd first word static, no typing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIndex.current] ?? "";

      if (!deleting.current) {
        charIndex.current += 1;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          deleting.current = true;
          timer = setTimeout(tick, holdTime);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIndex.current -= 1;
        setText(current.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
        timer = setTimeout(tick, deleting.current ? deleteSpeed : typeSpeed);
      }
    };

    // Begin by holding the SSR'd first word, then deleting it.
    deleting.current = true;
    timer = setTimeout(tick, holdTime);

    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[0.06em] animate-pulse bg-current align-baseline motion-reduce:hidden"
        style={{ height: "0.9em" }}
      />
    </span>
  );
}
