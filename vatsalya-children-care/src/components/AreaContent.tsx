// src/components/AreaContent.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { ArrowUpRight, MapPin, Clock, BadgeCheck } from "lucide-react";
import { NAP, DOCTOR, HOURS } from "./brand";
import { SERVICES } from "@/lib/services";
import type { Area } from "@/lib/areas";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AreaContent({ area }: { area: Area }) {
  return (
    <>
      {/* Intro — unique per-area copy + trust panel */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_320px] md:gap-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
              Pediatric Care for {area.name}
            </p>
            <h2 className="font-alice text-3xl leading-tight text-navy-deep md:text-4xl">
              Your child&apos;s doctor,{" "}
              <span className="font-lora italic text-gold-ink">
                minutes from {area.name}.
              </span>
            </h2>
            <div className="mt-6 space-y-4">
              {area.intro.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="font-poppins text-base leading-relaxed text-ink/80"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Nearby landmarks — local relevance */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-poppins text-xs font-semibold uppercase tracking-wide text-gold-ink">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Near
              </span>
              {area.landmarks.map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-gold/30 bg-cream-light px-3 py-1 font-poppins text-xs text-navy"
                >
                  {l}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-1.5 font-poppins text-sm font-semibold text-navy transition-colors hover:text-gold-ink"
            >
              More about Dr. Aashita
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </m.div>

          {/* Doctor trust card */}
          <m.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-fit rounded-3xl border border-gold/20 bg-cream-light p-6 md:sticky md:top-28"
          >
            <div className="relative h-20 w-20">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/40 bg-navy-deep shadow-md">
                <Image
                  src="/dr-aashita.jpg"
                  alt={`${DOCTOR.name}, ${DOCTOR.credentials}, pediatrician at Vatsalya Children Care`}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-cream-light bg-navy text-gold">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-4 font-alice text-xl text-navy-deep">{DOCTOR.name}</p>
            <p className="mt-1 font-lora text-sm italic text-gold-ink">
              {DOCTOR.credentials} · {DOCTOR.roles}
            </p>
            <div className="mt-5 space-y-2 border-t border-gold/20 pt-4">
              {HOURS.display.map((row) => (
                <div key={row.days} className="flex gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink" aria-hidden="true" />
                  <p className="font-poppins text-xs text-ink/75">
                    <span className="font-semibold text-navy">{row.days}:</span>{" "}
                    {row.sessions}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-navy py-2.5 font-poppins text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              Book on WhatsApp
              <ArrowUpRight className="h-4 w-4 text-gold" aria-hidden="true" />
            </a>
          </m.aside>
        </div>
      </section>

      {/* Services offered — compact, links to full services page */}
      <section className="bg-cream-light px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
            What we offer {area.name} families
          </p>
          <h2 className="mb-10 font-alice text-3xl text-navy-deep md:text-4xl">
            Complete pediatric{" "}
            <span className="font-lora italic text-gold-ink">care.</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <m.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                >
                  <Link
                    href="/services"
                    className="flex h-full items-center gap-3 rounded-2xl border border-gold/20 bg-cream px-4 py-3 transition-colors hover:border-gold/50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block font-alice text-sm text-navy-deep">
                        {s.title}
                      </span>
                      <span className="block font-lora text-xs italic text-gold-ink">
                        {s.subtitle}
                      </span>
                    </span>
                  </Link>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Directions + map */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
              Getting here from {area.name}
            </p>
            <h2 className="font-alice text-3xl text-navy-deep md:text-4xl">
              Easy to reach,{" "}
              <span className="font-lora italic text-gold-ink">easy to park.</span>
            </h2>
            <p className="mt-5 font-poppins text-base leading-relaxed text-ink/80">
              {area.directions}
            </p>
            <address className="mt-4 not-italic font-poppins text-sm leading-relaxed text-ink">
              {NAP.address.full}
            </address>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={NAP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-poppins text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4 text-gold" aria-hidden="true" />
              </a>
              <a
                href={NAP.phoneTel}
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-2.5 font-poppins text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Call {NAP.phone}
              </a>
            </div>
          </div>
          <a
            href={NAP.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open Vatsalya Children Care location in Google Maps (serving ${area.name})`}
            className="block overflow-hidden rounded-3xl border border-gold/30 shadow-sm"
          >
            <iframe
              title={`Map to Vatsalya Children Care from ${area.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                NAP.mapsQuery
              )}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </a>
        </div>
      </section>
    </>
  );
}
