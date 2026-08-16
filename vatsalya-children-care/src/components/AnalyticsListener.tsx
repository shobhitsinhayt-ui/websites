// src/components/AnalyticsListener.tsx
"use client";

import { useEffect } from "react";

// Pushes conversion events to the dataLayer when a visitor clicks any
// WhatsApp (wa.me) or phone (tel:) link, anywhere on the site. GTM listens
// for these custom events — no per-button code needed.
export default function AnalyticsListener() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GTM_ID) return;

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      window.dataLayer = window.dataLayer || [];
      if (href.includes("wa.me")) {
        window.dataLayer.push({ event: "whatsapp_click" });
      } else if (href.startsWith("tel:")) {
        window.dataLayer.push({ event: "call_click" });
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () =>
      document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
