// src/components/Footer.tsx
import Image from "next/image";
import { NAP, BRAND } from "./brand";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep py-10 md:py-12" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Vatsalya Children Care" width={36} height={36} />
              <span className="font-alice text-sm text-white">{NAP.name}</span>
            </div>
            <p className="font-lora text-xs italic text-gold">{BRAND.tagline}</p>
            <p className="font-poppins text-xs text-white/50 leading-relaxed">
              {BRAND.meaning}
            </p>
          </div>

          {/* NAP */}
          <div>
            <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-gold mb-3">
              Contact
            </p>
            <address className="not-italic space-y-2 font-poppins text-xs text-white/70 leading-relaxed">
              <p>{NAP.address.full}</p>
              <p>
                <a href={NAP.phoneTel} className="hover:text-gold transition-colors">
                  {NAP.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${NAP.email}`} className="hover:text-gold transition-colors">
                  {NAP.email}
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-gold mb-3">
              Quick Links
            </p>
            <nav aria-label="Footer navigation" className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "About Dr. Aashita", href: "#doctor" },
                { label: "FAQs", href: "#faq" },
                { label: "Location", href: "#location" },
                { label: "Instagram", href: NAP.instagram, external: true },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block font-poppins text-xs text-white/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-poppins text-xs text-white/40">
            © {year} {NAP.name} · All rights reserved ·{" "}
            <a href={NAP.website} className="hover:text-gold transition-colors">
              {NAP.website}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
