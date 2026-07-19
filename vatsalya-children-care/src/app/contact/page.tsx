// src/app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ContactForm from "@/components/ContactForm";
import { NAP, HOURS } from "@/components/brand";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vatsalya Children Care in Science City, Ahmedabad. Book a pediatric, newborn, or lactation appointment on WhatsApp or call +91 90160 39796.",
  alternates: { canonical: `${NAP.website}/contact` },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="bg-cream px-4 pb-10 pt-32 text-center md:pt-40">
        <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Contact
        </p>
        <h1 className="font-alice text-4xl text-navy-deep md:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-md font-poppins text-base text-ink/70">
          Book an appointment or ask us anything about your child&apos;s care —
          we&apos;re happy to help.
        </p>
        <p className="mt-4 font-poppins text-xs text-ink/50">
          <a href="/" className="hover:text-gold">
            Home
          </a>{" "}
          / <span className="text-navy">Contact</span>
        </p>
      </section>

      {/* Info + form */}
      <section className="bg-cream px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
          {/* Left — questions + direct contact */}
          <div className="flex flex-col justify-between gap-10">
            <h2 className="font-alice text-3xl leading-tight text-navy-deep md:text-4xl">
              Have a question? You&apos;re just a{" "}
              <span className="font-lora italic text-gold">message</span> away.
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-gold">
                  Phone / WhatsApp
                </p>
                <a
                  href={NAP.phoneTel}
                  className="font-poppins text-lg text-navy transition-colors hover:text-gold"
                >
                  {NAP.phone}
                </a>
              </div>
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-gold">
                  Email
                </p>
                <a
                  href={`mailto:${NAP.email}`}
                  className="font-poppins text-lg text-navy transition-colors hover:text-gold"
                >
                  {NAP.email}
                </a>
              </div>
              <div>
                <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-gold">
                  OPD Timings
                </p>
                {HOURS.display.map((row) => (
                  <p key={row.days} className="font-poppins text-sm text-ink/70">
                    <span className="font-medium text-navy">{row.days}:</span>{" "}
                    {row.sessions}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>

      {/* Address + map */}
      <section className="bg-cream-light px-4 pb-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-gold">
              Visit Us
            </p>
            <address className="mt-2 not-italic font-poppins text-base leading-relaxed text-ink">
              {NAP.address.full}
            </address>
            <a
              href={NAP.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-1.5 font-poppins text-sm font-semibold text-gold hover:text-navy"
            >
              Open in Google Maps
            </a>
          </div>
          <a
            href={NAP.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Vatsalya Children Care location in Google Maps"
            className="block overflow-hidden rounded-2xl border border-gold/30 shadow-sm"
          >
            <iframe
              title="Map to Vatsalya Children Care"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                NAP.mapsQuery
              )}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
