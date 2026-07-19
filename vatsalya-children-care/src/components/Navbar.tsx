// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NAP, BRAND } from "./brand";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          <div className="hidden sm:block leading-tight">
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
          <a href="#services" className="transition-colors hover:text-gold">
            Services
          </a>
          <a href="#about" className="transition-colors hover:text-gold">
            About
          </a>
          <a href="#faq" className="transition-colors hover:text-gold">
            FAQs
          </a>
          <a href="#location" className="transition-colors hover:text-gold">
            Location
          </a>
        </nav>

        {/* CTA pill */}
        <a
          href={NAP.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-navy py-1.5 pl-4 pr-1.5 font-poppins text-xs font-semibold text-white transition-colors hover:bg-navy-deep focus:outline-none focus:ring-2 focus:ring-gold sm:text-sm"
        >
          Book Appointment
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </header>
  );
}
