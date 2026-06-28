// src/components/LocationSection.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
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
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-4 h-0.5 w-12 bg-gold"
            aria-hidden="true"
          />
          <motion.h2
            id="location-heading"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-alice text-3xl text-navy-deep md:text-4xl"
          >
            Visit Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
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
              <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
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
          </motion.div>

          {/* Map placeholder */}
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
