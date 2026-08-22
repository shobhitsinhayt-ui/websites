// src/app/faqs/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CtaBand from "@/components/CtaBand";
import { NAP } from "@/components/brand";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Vatsalya Children Care in Sola, Ahmedabad: OPD timings, the age range we treat, the IAP vaccination schedule, lactation support, and how to book an appointment with Dr. Aashita A. Sinha.",
  alternates: { canonical: `${NAP.website}/faqs` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: NAP.website },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQs",
      item: `${NAP.website}/faqs`,
    },
  ],
};

export default function FaqsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked"
        accent="Questions."
        subtitle="Everything parents commonly ask about visiting Vatsalya Children Care. Still unsure? Message us on WhatsApp and we will happily help."
      />

      <FAQAccordion showHeader={false} />

      <CtaBand
        heading="Still have a question?"
        accent="Just ask."
        subtext="We are always happy to help you understand your child's care. Reach us on WhatsApp or call anytime during OPD hours."
      />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
