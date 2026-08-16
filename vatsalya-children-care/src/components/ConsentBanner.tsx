// src/components/ConsentBanner.tsx
"use client";

import { useEffect, useState } from "react";
import { GTM_ID } from "@/lib/analytics";

const KEY = "vcc-cookie-consent";

function updateConsent(granted: boolean) {
  window.dataLayer = window.dataLayer || [];
  const value = granted ? "granted" : "denied";
  const consent = {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  };
  // Prefer the global gtag() defined in the consent-default script so the
  // command has the exact arguments shape GTM Consent Mode expects.
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", consent);
  } else {
    window.dataLayer.push(["consent", "update", consent]);
  }
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only relevant when analytics is actually configured.
    if (!GTM_ID) return;
    const stored = localStorage.getItem(KEY);
    if (stored === "granted") updateConsent(true);
    if (!stored) setShow(true);
  }, []);

  const choose = (granted: boolean) => {
    localStorage.setItem(KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-2xl border border-gold/30 bg-cream-light/95 p-4 shadow-2xl backdrop-blur md:left-auto md:right-4"
    >
      <p className="font-poppins text-xs leading-relaxed text-ink/80">
        We use cookies to understand site traffic and improve your experience.
        You can accept or decline analytics cookies.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full bg-navy px-4 py-1.5 font-poppins text-xs font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-navy/30 px-4 py-1.5 font-poppins text-xs font-semibold text-navy transition-colors hover:bg-navy/5"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
