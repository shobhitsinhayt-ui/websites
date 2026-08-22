// src/app/about/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";
import CtaBand from "@/components/CtaBand";
import { NAP, DOCTOR } from "@/components/brand";

export const metadata: Metadata = {
  title: "About Dr. Aashita A. Sinha — Pediatrician & Lactation Consultant",
  description:
    "Meet Dr. Aashita A. Sinha (MBBS, MD Pediatrics), pediatrician, neonatologist, and certified lactation consultant at Vatsalya Children Care, Sola, Ahmedabad. Her training, credentials, and gentle, evidence-based approach to child care.",
  alternates: { canonical: `${NAP.website}/about` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: NAP.website },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${NAP.website}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <PageHero
        eyebrow="About"
        title="Meet"
        accent={DOCTOR.name}
        subtitle="A pediatrician, neonatologist, and certified lactation consultant who blends advanced, evidence-based medicine with genuine warmth, so your child and you feel safe at every visit."
        crumb="About"
      />

      <AboutContent />

      <CtaBand
        heading="Care your family can trust,"
        accent="right here in Sola."
        subtext="Book a consultation with Dr. Aashita for your child's checkup, vaccination, newborn care, or breastfeeding support."
      />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
