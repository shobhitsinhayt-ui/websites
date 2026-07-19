// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAP, BRAND } from "./brand";
import { useState, useEffect } from "react";
import { AnimatePresence, m } from "framer-motion";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faq" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:pt-4">
      {/* Floating glass pill */}
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 backdrop-blur-md transition-all duration-300 md:px-5 md:py-2.5 ${
          scrolled
            ? "border-gold/20 bg-cream/80 shadow-lg shadow-navy/5"
            : "border-white/40 bg-cream/40"
        }`}
      >
        {/* Logo + name */}
        <a
          href="/"
          aria-label="Vatsalya Children Care — home"
          className="flex items-center gap-2.5"
        >
          <Image
            src="/logo.png"
            alt="Vatsalya Children Care logo"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <div className="hidden leading-tight sm:block">
            <p className="font-alice text-sm text-navy-deep">{NAP.name}</p>
            <p className="font-lora text-[0.65rem] italic text-gold">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 font-poppins text-sm font-medium text-navy md:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA pill (desktop) */}
          <a
            href={NAP.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-navy py-1.5 pl-4 pr-1.5 font-poppins text-sm font-semibold text-white transition-colors hover:bg-navy-deep focus:outline-none focus:ring-2 focus:ring-gold sm:inline-flex"
          >
            Book Appointment
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-deep transition-colors hover:bg-navy/5 md:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-gold/20 bg-cream-light p-5 shadow-2xl shadow-navy/10 md:hidden"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-alice text-base text-navy-deep">
                {NAP.name}
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-navy-deep transition-colors hover:bg-navy/5"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="divide-y divide-navy/10">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-poppins text-lg text-navy transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href={NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-navy py-3 font-poppins text-sm font-semibold text-white"
            >
              Book Appointment
              <ArrowUpRight className="h-4 w-4 text-gold" aria-hidden="true" />
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
