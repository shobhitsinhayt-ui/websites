// src/components/ConsentBanner.tsx
"use client";

import { useEffect, useState } from "react";

const KEY = "vcc-cookie-consent";

function updateConsent(granted: boolean) {
  window.dataLayer = window.dataLayer || [];
  // gtag() pushes an arguments object; replicate that shape.
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
  });
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only relevant when analytics is actually configured.
    if (!process.env.NEXT_PUBLIC_GTM_ID) return;
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
