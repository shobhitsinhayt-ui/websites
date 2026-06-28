// src/app/layout.tsx
import type { Metadata } from "next";
import { Alice, Lora, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { NAP } from "@/components/brand";
import MotionProvider from "@/components/MotionProvider";

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alice",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Best Pediatrician in Ahmedabad | Vatsalya Children Care | Dr. Aashita Sinha",
    template: "%s | Vatsalya Children Care",
  },
  description:
    "Vatsalya Children Care — expert pediatric care in Sola, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics, Neonatologist & Lactation Consultant). Vaccination, newborn care, breastfeeding support for children 0–18 years. Book on WhatsApp: +91 90160 39796.",
  metadataBase: new URL(NAP.website),
  keywords: [
    "best pediatrician in Ahmedabad",
    "child specialist Sola Ahmedabad",
    "pediatric clinic near Science City",
    "best children doctor Ahmedabad",
    "pediatrician near Kargil Petrol Pump",
    "vaccination clinic Ahmedabad",
    "newborn doctor Ahmedabad",
    "lactation consultant Ahmedabad",
    "bal rog visheshagya Ahmedabad",
    "Dr Aashita Sinha pediatrician",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: NAP.website,
    siteName: NAP.name,
    title:
      "Best Pediatrician in Ahmedabad | Vatsalya Children Care | Dr. Aashita Sinha",
    description:
      "Expert pediatric care in Sola, Ahmedabad. Dr. Aashita A. Sinha — MD Pediatrics, Neonatologist & Lactation Consultant. Book on WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vatsalya Children Care — Nurturing Smiles, Ensuring Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Pediatrician in Ahmedabad | Vatsalya Children Care | Dr. Aashita Sinha",
    description:
      "Expert pediatric care in Sola, Ahmedabad. Dr. Aashita A. Sinha — MD Pediatrics, Neonatologist & Lactation Consultant.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: NAP.website,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alice.variable} ${lora.variable} ${poppins.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="font-poppins antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
