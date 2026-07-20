// src/components/Footer.tsx
import Image from "next/image";
import { NAP, BRAND } from "./brand";

function GroupLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 font-poppins text-xs font-semibold uppercase tracking-[0.15em] text-gold">
      ( {children} )
    </p>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About Dr. Aashita", href: "#doctor" },
    { label: "FAQs", href: "#faq" },
    { label: "Location", href: "#location" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-cream-light pb-8 pt-16 md:pt-20"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Vatsalya Children Care"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-alice text-lg text-navy-deep">{NAP.name}</span>
            </div>
            <p className="mt-3 font-lora text-sm italic text-gold">
              {BRAND.tagline}
            </p>
            <p className="mt-3 max-w-xs font-poppins text-xs leading-relaxed text-ink/60">
              {BRAND.meaning}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation" className="md:col-span-3">
            <GroupLabel>Explore</GroupLabel>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm text-ink/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <GroupLabel>Contact</GroupLabel>
            <address className="space-y-2.5 not-italic">
              <p className="font-poppins text-sm leading-relaxed text-ink/70">
                {NAP.address.full}
              </p>
              <p>
                <a
                  href={NAP.phoneTel}
                  className="font-poppins text-sm text-ink/70 transition-colors hover:text-gold"
                >
                  {NAP.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${NAP.email}`}
                  className="font-poppins text-sm text-ink/70 transition-colors hover:text-gold"
                >
                  {NAP.email}
                </a>
              </p>
            </address>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <GroupLabel>Connect</GroupLabel>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={NAP.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm text-ink/70 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={NAP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm text-ink/70 transition-colors hover:text-gold"
                >
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  href={NAP.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm text-ink/70 transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright — Medio-style */}
        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-navy/10 pt-6 sm:flex-row">
          <p className="font-poppins text-xs text-ink/60">
            © {year} Copyright · {NAP.name}
          </p>
          <p className="font-poppins text-xs text-ink/60">All rights reserved.</p>
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none mt-8 select-none px-4 text-center"
      >
        <span className="inline-block pb-[0.12em] font-alice text-[19vw] leading-[0.82] tracking-tight text-navy-deep md:text-[15vw]">
          Vatsalya<span className="text-gold">.</span>
        </span>
      </div>
    </footer>
  );
}
