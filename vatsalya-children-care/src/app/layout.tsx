// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { NAP } from "@/components/brand";
import MotionProvider from "@/components/MotionProvider";
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsListener from "@/components/AnalyticsListener";
import { GTM_ID } from "@/lib/analytics";

// Medio-matching type system: Libre Caslon Text (headings/serif accents) + Inter (body).
// Keeps the existing --font-alice / --font-poppins variables so class names stay stable.
const heading = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-alice",
  display: "swap",
});

const body = Inter({
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
    "Vatsalya Children Care, expert pediatric care in Sola, Ahmedabad. Dr. Aashita A. Sinha (MBBS, MD Pediatrics, Neonatologist & Lactation Consultant). Vaccination, newborn care, breastfeeding support for children 0 to 18 years. Book on WhatsApp: +91 90160 39796.",
  metadataBase: new URL(NAP.website),
  keywords: [
    "best pediatrician in Ahmedabad",
    "child specialist Sola Ahmedabad",
    "pediatric clinic near Science City",
    "pediatrician in Gota Ahmedabad",
    "child specialist Thaltej",
    "pediatrician near Chandlodiya",
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
      "Expert pediatric care in Sola, Ahmedabad. Dr. Aashita A. Sinha, MD Pediatrics, Neonatologist & Lactation Consultant. Book on WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vatsalya Children Care, Nurturing Smiles, Ensuring Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Pediatrician in Ahmedabad | Vatsalya Children Care | Dr. Aashita Sinha",
    description:
      "Expert pediatric care in Sola, Ahmedabad. Dr. Aashita A. Sinha, MD Pediatrics, Neonatologist & Lactation Consultant.",
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
  verification: {
    google: "MsqVQxcTY4t2ScKuiUwTkfT1nT_Wq0DdhUy2bKe-x-s",
  },
  alternates: {
    canonical: NAP.website,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E2753",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
    >
      <head>
        <JsonLd />
        {GTM_ID && (
          <>
            {/* Consent Mode v2 — deny analytics/ads storage until the visitor
                accepts. Must run before GTM loads. */}
            <script
              id="consent-default"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});`,
              }}
            />
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body className="font-poppins antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <MotionProvider>{children}</MotionProvider>
        <AnalyticsListener />
        <ConsentBanner />
      </body>
    </html>
  );
}
