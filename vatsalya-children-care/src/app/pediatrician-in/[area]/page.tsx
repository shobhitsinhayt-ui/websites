// src/app/pediatrician-in/[area]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";
import AreaContent from "@/components/AreaContent";
import CtaBand from "@/components/CtaBand";
import { NAP, DOCTOR, HOURS } from "@/components/brand";
import { AREAS, getArea } from "@/lib/areas";

// Pre-render one static page per area at build time.
export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const url = `${NAP.website}/pediatrician-in/${area.slug}`;
  const title = `Best Pediatrician in ${area.name}, Ahmedabad`;
  return {
    title,
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${NAP.name}`,
      description: area.metaDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: NAP.name }],
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const url = `${NAP.website}/pediatrician-in/${area.slug}`;

  // Per-area LocalBusiness schema — tells Google this clinic serves this area.
  const businessLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: `${NAP.name} — Pediatrician for ${area.name}`,
    url,
    telephone: NAP.phoneE164,
    image: `${NAP.website}/og-image.png`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.address.street,
      addressLocality: NAP.address.city,
      addressRegion: NAP.address.state,
      postalCode: NAP.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.lat,
      longitude: NAP.geo.lng,
    },
    hasMap: NAP.mapsUrl,
    areaServed: [
      { "@type": "Place", name: `${area.name}, Ahmedabad` },
      ...area.landmarks.map((l) => ({ "@type": "Place", name: l })),
    ],
    medicalSpecialty: "Pediatric",
    openingHoursSpecification: HOURS.spec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    employee: {
      "@type": "Physician",
      name: DOCTOR.name,
      medicalSpecialty: "Pediatric",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: NAP.website },
      {
        "@type": "ListItem",
        position: 2,
        name: `Pediatrician in ${area.name}`,
        item: url,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <PageHero
        eyebrow={`Pediatrician in ${area.name}`}
        title="Best Pediatrician in"
        accent={`${area.name}, Ahmedabad`}
        subtitle={area.lead}
      />

      <AreaContent area={area} />

      <CtaBand
        heading={
          area.homeTurf
            ? `Book your child's visit in ${area.name},`
            : `Book your child's visit from ${area.name},`
        }
        accent="today."
        subtext={`Message us on WhatsApp or call ${NAP.phone}. Appointment-only, with morning and evening OPD sessions.`}
      />

      <Footer />
      <FloatingButtons />
    </main>
  );
}
