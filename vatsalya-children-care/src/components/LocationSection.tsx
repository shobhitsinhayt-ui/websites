// src/components/LocationSection.tsx
"use client";

import { m } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAP } from "./brand";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="bg-cream-light py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-4 h-0.5 w-12 bg-gold"
            aria-hidden="true"
          />
          <m.h2
            id="location-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-alice text-3xl text-navy-deep md:text-4xl"
          >
            Visit Us
          </m.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact info */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-navy mb-1">
                  Address
                </p>
                <address className="not-italic font-poppins text-sm leading-relaxed text-ink">
                  {NAP.address.full}
                </address>
                <p className="mt-1 font-poppins text-xs text-ink/60">
                  Near Science City · Near Gujarat High Court
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-navy mb-1">
                  OPD Timings
                </p>
                <p className="font-poppins text-sm text-ink/60 italic">
                  TODO — OPD days and hours to be confirmed by Dr. Aashita.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-navy mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href={NAP.phoneTel}
                  className="font-poppins text-sm text-navy hover:text-gold transition-colors"
                >
                  {NAP.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-navy mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${NAP.email}`}
                  className="font-poppins text-sm text-navy hover:text-gold transition-colors"
                >
                  {NAP.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-gold"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-navy mb-1">
                  Instagram
                </p>
                <a
                  href={NAP.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm text-navy hover:text-gold transition-colors"
                >
                  @vatsalyachildrencare
                </a>
              </div>
            </div>
          </m.div>

          {/* Map placeholder */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border-2 border-dashed border-gold/30 bg-cream flex flex-col items-center justify-center min-h-64 p-8 text-center"
          >
            <MapPin className="h-10 w-10 text-gold/40 mb-3" aria-hidden="true" />
            <p className="font-poppins text-sm font-semibold text-navy/60 mb-1">
              Google Maps Embed
            </p>
            <p className="font-poppins text-xs text-ink/40">
              TODO — Add GPS coordinates to enable map embed.
              <br />
              509, B-Wing, Grace Business Park, Sola, Ahmedabad
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
