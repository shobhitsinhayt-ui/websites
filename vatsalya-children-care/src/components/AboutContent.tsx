// src/components/AboutContent.tsx
"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { GraduationCap, Award, Languages, BadgeCheck } from "lucide-react";
import { DOCTOR, NAP } from "./brand";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutContent() {
  return (
    <>
      {/* Bio — navy band with sticky photo + mission + story */}
      <section className="relative overflow-hidden bg-navy py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #C29138 0px, #C29138 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16 md:px-8">
          {/* Photo */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-64 md:sticky md:top-28 md:w-full"
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg border-2 border-gold/30 bg-navy-deep shadow-xl">
              <Image
                src="/dr-aashita.jpg"
                alt="Dr. Aashita A. Sinha, Pediatrician, Neonatologist and Lactation Consultant at Vatsalya Children Care, Sola, Ahmedabad"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 h-14 w-14 border-l-2 border-t-2 border-gold/60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-14 w-14 border-b-2 border-r-2 border-gold/60"
            />
          </m.div>

          {/* Story */}
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-3 h-0.5 w-10 bg-gold" aria-hidden="true" />
            <h2 className="font-alice text-2xl text-white md:text-3xl">
              {DOCTOR.name}
            </h2>
            <p className="mb-6 mt-1 font-lora text-sm italic text-gold">
              {DOCTOR.credentials} · {DOCTOR.roles}
            </p>

            <blockquote className="mb-6 border-l-2 border-gold/50 pl-4 font-lora text-base italic leading-relaxed text-white/90 md:text-lg">
              &ldquo;{DOCTOR.quote}&rdquo;
            </blockquote>

            <p className="font-poppins text-sm leading-relaxed text-white/80 md:text-base">
              {DOCTOR.bio}
            </p>

            <p className="mt-6 font-poppins text-xs text-white/50">
              Gujarat Medical Council Reg. Nos., MBBS {DOCTOR.regMbbs} · MD
              Pediatrics {DOCTOR.regMd}
            </p>
          </m.div>
        </div>
      </section>

      {/* Credentials timeline */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Award className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </span>
            <h2 className="font-alice text-2xl text-navy-deep md:text-3xl">
              Training &{" "}
              <span className="font-lora italic text-gold">Credentials.</span>
            </h2>
          </div>

          <ol className="relative space-y-6 border-l border-gold/30 pl-6">
            {DOCTOR.highlights.map((item, i) => (
              <m.li
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-cream"
                />
                <p className="font-poppins text-sm leading-relaxed text-ink/80 md:text-base">
                  {item}
                </p>
              </m.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Education + languages */}
      <section className="bg-cream-light px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gold/20 bg-cream p-7"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <GraduationCap className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </span>
            <h3 className="font-alice text-xl text-navy-deep">Education</h3>
            <ul className="mt-3 space-y-2">
              {DOCTOR.alumniOf.map((school) => (
                <li
                  key={school}
                  className="flex gap-2 font-poppins text-sm text-ink/75"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {school}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-gold/20 bg-cream p-7"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Languages className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </span>
            <h3 className="font-alice text-xl text-navy-deep">Languages Spoken</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {DOCTOR.languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-cream-light px-4 py-1.5 font-poppins text-sm text-navy"
                >
                  <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                  {lang}
                </span>
              ))}
            </div>
            <p className="mt-6 font-poppins text-sm leading-relaxed text-ink/70">
              Care and counselling are offered in the language your family is
              most comfortable with.
            </p>
            <a
              href={NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-2 font-poppins text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              Book a Consultation
            </a>
          </m.div>
        </div>
      </section>
    </>
  );
}
