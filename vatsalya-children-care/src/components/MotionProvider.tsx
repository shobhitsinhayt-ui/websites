"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

// Loads only the domAnimation feature set (animations, variants, exit, gestures)
// instead of the full motion bundle. `strict` forbids the heavy `motion.*`
// component so we can't accidentally regress the bundle — use `m.*` everywhere.
// `reducedMotion="user"` makes every Framer Motion animation (including
// whileInView reveals) honour the visitor's "reduce motion" OS setting.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
