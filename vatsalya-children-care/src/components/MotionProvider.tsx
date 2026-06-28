"use client";

import { LazyMotion, domAnimation } from "framer-motion";

// Loads only the domAnimation feature set (animations, variants, exit, gestures)
// instead of the full motion bundle. `strict` forbids the heavy `motion.*`
// component so we can't accidentally regress the bundle — use `m.*` everywhere.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
