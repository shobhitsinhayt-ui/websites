// src/app/services/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";
import ServicesFullList from "@/components/ServicesFullList";
import CtaBand from "@/components/CtaBand";
import { NAP } from "@/components/brand";

export const metadata: Metadata = {
  title: "Our Services — Pediatric, Newborn & Lactation Care",
  description:
    "Pediatric services at Vatsalya Children Care, Sola, Ahmedabad: general pediatric OPD, IAP vaccination, newborn care, breastfeeding and lactation support, well-baby checkups, growth monitoring, child nutrition, teenage health, and teleconsultation.",
  alternates: { canonical: `${NAP.website}/services` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: NAP.website },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${NAP.website}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Care for"
        accent="Every Stage of Childhood"
        subtitle="From your baby's first breath to your teenager's changing needs, Dr. Aashita A. Sinha offers complete pediatric, newborn, and lactation care under one warm, child-friendly roof in Sola, Ahmedabad."
        crumb="Services"
      />

      <ServicesFullList />

      <CtaBand
        heading="Not sure which service you need?"
        accent="We will guide you."
        subtext="Message us on WhatsApp with your concern and we will help you book the right consultation for your child."
      />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
