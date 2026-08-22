// src/components/AboutContent.tsx
"use client";

import Image from "next/image";
import { Fragment } from "react";
import { m } from "framer-motion";
import {
  GraduationCap,
  Award,
  Languages,
  BadgeCheck,
  Briefcase,
  ShieldCheck,
  BookOpen,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { DOCTOR, NAP, HERO_AREAS } from "./brand";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Accolade phrases emphasised inside the bio so her standout roles catch the eye.
// Accolade phrases in the bio that get PARTIAL gold emphasis. Each phrase
// lists its segments in order; `gold: true` = emphasised, `false` = plain, so
// connector words (and / in / at / of) and place names stay un-highlighted.
// The segments must concatenate back to `text` exactly.
const BIO_PHRASES: { text: string; parts: { s: string; gold: boolean }[] }[] = [
  {
    text: "pediatrician, neonatologist, and certified lactation consultant",
    parts: [
      { s: "pediatrician, neonatologist,", gold: true },
      { s: " and ", gold: false },
      { s: "certified lactation consultant", gold: true },
    ],
  },
  {
    text: "Senior Resident in Pediatrics at GMERS Medical College & Hospital, Sola",
    parts: [
      { s: "Senior Resident", gold: true },
      { s: " in ", gold: false },
      { s: "Pediatrics", gold: true },
      { s: " at ", gold: false },
      { s: "GMERS Medical College & Hospital,", gold: true },
      { s: " Sola", gold: false },
    ],
  },
  {
    text: "Assistant Professor of Pediatrics at BJ Medical College, Ahmedabad",
    parts: [
      { s: "Assistant Professor", gold: true },
      { s: " of ", gold: false },
      { s: "Pediatrics", gold: true },
      { s: " at ", gold: false },
      { s: "BJ Medical College, Ahmedabad", gold: true },
    ],
  },
];

/** Splits the bio and gives each accolade phrase segment-level gold emphasis. */
function renderBio(text: string) {
  const pattern = new RegExp(
    `(${BIO_PHRASES.map((p) => p.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text.split(pattern).map((chunk, i) => {
    const phrase = BIO_PHRASES.find((p) => p.text === chunk);
    if (!phrase) return <Fragment key={i}>{chunk}</Fragment>;
    return (
      <Fragment key={i}>
        {phrase.parts.map((part, j) =>
          part.gold ? (
            <strong key={j} className="font-semibold text-gold">
              {part.s}
            </strong>
          ) : (
            <Fragment key={j}>{part.s}</Fragment>
          )
        )}
      </Fragment>
    );
  });
}

/** Picks an icon + accent for each credential line by keyword. */
function credentialMeta(item: string): { icon: LucideIcon; award: boolean } {
  if (/prize|nominee|published|journal/i.test(item))
    return { icon: Award, award: true };
  if (/mbbs|md pediatrics|md in/i.test(item))
    return { icon: GraduationCap, award: false };
  if (/resident|professor/i.test(item))
    return { icon: Briefcase, award: false };
  if (/resuscitation|bls|pals/i.test(item))
    return { icon: ShieldCheck, award: false };
  return { icon: BookOpen, award: false };
}

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
              {renderBio(DOCTOR.bio)}
            </p>

            {/* Areas served — honest home base + welcoming reach */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-poppins text-xs font-semibold uppercase tracking-wide text-gold">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Serving
              </span>
              {HERO_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 px-3 py-1 font-poppins text-xs text-white/75"
                >
                  {area}
                </span>
              ))}
            </div>

            <p className="mt-6 font-poppins text-xs text-white/50">
              Gujarat Medical Council Reg. Nos., MBBS {DOCTOR.regMbbs} · MD
              Pediatrics {DOCTOR.regMd}
            </p>
          </m.div>
        </div>
      </section>

      {/* Credentials timeline — animated cards with per-item icons */}
      <section className="bg-cream px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-center gap-3 md:mb-12">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
              <Award className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </span>
            <h2 className="font-alice text-2xl text-navy-deep md:text-3xl">
              Training &{" "}
              <span className="font-lora italic text-gold-ink">Credentials.</span>
            </h2>
          </div>

          {/* One calm grouped reveal for the whole timeline (not per-item). */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative pl-10 md:pl-12"
          >
            {/* Vertical guide line */}
            <span
              aria-hidden="true"
              className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent md:left-[23px]"
            />

            <ul className="space-y-4">
              {DOCTOR.highlights.map((item) => {
                const { icon: Icon, award } = credentialMeta(item);
                return (
                  <li key={item} className="relative">
                    {/* Node icon on the line */}
                    <span
                      className={`absolute -left-10 top-3 flex h-9 w-9 items-center justify-center rounded-full border shadow-sm md:-left-12 ${
                        award
                          ? "border-gold bg-gold text-navy"
                          : "border-gold/40 bg-cream-light text-navy"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
                    </span>

                    <div
                      className={`rounded-2xl border bg-cream-light px-5 py-4 transition-shadow hover:shadow-md hover:shadow-navy/5 ${
                        award ? "border-gold/50" : "border-gold/20"
                      }`}
                    >
                      {award && (
                        <span className="mb-1 inline-block font-poppins text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold-ink">
                          Recognition
                        </span>
                      )}
                      <p className="font-poppins text-sm leading-relaxed text-ink/80 md:text-base">
                        {item}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </m.div>
        </div>
      </section>

      {/* Education + languages */}
      <section className="bg-cream-light px-4 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
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
                  <BadgeCheck className="h-4 w-4 text-gold-ink" aria-hidden="true" />
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
