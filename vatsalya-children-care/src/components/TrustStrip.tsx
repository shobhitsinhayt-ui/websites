// src/components/TrustStrip.tsx
"use client";

const credentials = [
  { label: "MBBS · MD Pediatrics", icon: "🎓" },
  { label: "Neonatologist", icon: "👶" },
  { label: "Certified Lactation Consultant", icon: "🤱" },
  { label: "IAP 2025 Vaccination", icon: "💉" },
  { label: "Children 0–18 Years", icon: "❤️" },
];

function Pill({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="flex shrink-0 items-center gap-2 px-6 font-poppins text-xs font-medium text-white/85 sm:text-sm">
      <span aria-hidden="true" className="text-base">
        {icon}
      </span>
      {label}
      <span aria-hidden="true" className="ml-6 text-gold/50">
        ✦
      </span>
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section
      aria-label="Credentials"
      className="group overflow-hidden bg-navy-deep py-4"
    >
      <div className="relative">
        {/* Edge fades for a polished carousel look */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy-deep to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy-deep to-transparent"
        />
        {/* Track duplicated so the -50% loop is seamless. Pauses on hover.
            Reduced-motion: no animation, wraps and centers instead. */}
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:animate-none">
          {credentials.map((c) => (
            <Pill key={c.label} {...c} />
          ))}
          {/* Duplicate set (hidden from assistive tech + reduced motion) */}
          <div
            aria-hidden="true"
            className="flex items-center motion-reduce:hidden"
          >
            {credentials.map((c) => (
              <Pill key={`dup-${c.label}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
