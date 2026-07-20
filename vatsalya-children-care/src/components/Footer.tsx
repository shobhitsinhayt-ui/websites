// src/components/Footer.tsx
import { NAP } from "./brand";
import FooterWordmark from "./FooterWordmark";
import HoverLink from "./HoverLink";

type Link = { label: string; href: string; external?: boolean };

const PAGES: Link[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Dr. Aashita", href: "/#doctor" },
  { label: "FAQs", href: "/#faq" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/contact" },
];

const CONNECT: Link[] = [
  { label: "Instagram", href: NAP.instagram, external: true },
  { label: "Google Maps", href: NAP.mapsUrl, external: true },
  { label: "WhatsApp", href: NAP.whatsapp, external: true },
];

function Group({ label, links }: { label: string; links: Link[] }) {
  return (
    <div className="flex gap-5">
      <span className="whitespace-nowrap font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#0a1526]">
        ( {label} )
      </span>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <HoverLink
              href={l.href}
              label={l.label}
              external={l.external}
              className="font-poppins text-sm text-navy-deep/80 hover:text-[#0a1526]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-cream-light pb-8 pt-16 md:pt-20"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Link groups (Medio-style: label beside list, single navy colour) */}
        <div className="flex flex-col flex-wrap gap-10 md:flex-row md:gap-x-16">
          <Group label="Main Pages" links={PAGES} />

          {/* Contact group */}
          <div className="flex gap-5">
            <span className="whitespace-nowrap font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#0a1526]">
              ( Contact )
            </span>
            <address className="space-y-2.5 not-italic">
              <p className="max-w-xs font-poppins text-sm leading-relaxed text-navy/70">
                {NAP.address.full}
              </p>
              <p>
                <HoverLink
                  href={NAP.phoneTel}
                  label={NAP.phone}
                  className="font-poppins text-sm text-navy-deep/80 hover:text-[#0a1526]"
                />
              </p>
              <p>
                <HoverLink
                  href={`mailto:${NAP.email}`}
                  label={NAP.email}
                  className="font-poppins text-sm text-navy-deep/80 hover:text-[#0a1526]"
                />
              </p>
            </address>
          </div>

          <Group label="Connect" links={CONNECT} />
        </div>

        {/* Copyright row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-navy/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-poppins text-xs text-navy-deep/70">
            © {year} Copyright · {NAP.name}
          </p>
          <p className="font-poppins text-xs text-navy-deep/70">All rights reserved.</p>
        </div>
      </div>

      {/* Giant brand wordmark — near-black, hover spin */}
      <FooterWordmark />
    </footer>
  );
}
