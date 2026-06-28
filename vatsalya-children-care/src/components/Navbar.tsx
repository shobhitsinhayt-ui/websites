// src/components/Navbar.tsx
"use client";

import Image from "next/image";
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo + name */}
        <a href="/" aria-label="Vatsalya Children Care — home" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Vatsalya Children Care logo"
            width={44}
            height={44}
            priority
          />
          <div className="hidden sm:block">
            <p
              className={`font-alice text-sm font-normal leading-tight transition-colors ${
                scrolled ? "text-navy-deep" : "text-white"
              }`}
            >
              {NAP.name}
            </p>
            <p className="font-lora text-xs italic text-gold">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQs</a>
          <a href="#location" className="hover:text-gold transition-colors">Location</a>
        </nav>

        {/* CTA — gold pill on the dark hero, navy pill once scrolled onto cream */}
        <a
          href={NAP.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold sm:text-sm ${
            scrolled
              ? "bg-navy text-white hover:bg-navy-deep"
              : "bg-gold text-navy-deep hover:bg-gold-soft"
          }`}
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
