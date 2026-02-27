import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import Script from "next/script";

const lora = Lora({ variable: "--font-serif", subsets: ["latin"], display: "swap", weight: ["400", "600", "700"] });
const sourceSans = Source_Sans_3({ variable: "--font-sans", subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://visas-humanitarias.com"),
  title: {
    template: "%s | Visas Humanitarias USA — VAWA, SIJS, Visa T",
    default: "Visas Humanitarias USA 2026: VAWA, SIJS y Visa T — Guía Completa",
  },
  description: "Guía completa de visas humanitarias en EE.UU. para 2026. VAWA (autopetición por violencia), SIJS (menores), Visa T (trata). Elegibilidad, proceso, evidencia y camino a la residencia permanente.",
  keywords: [
    "visas humanitarias", "VAWA", "SIJS", "Visa T", "visa humanitaria USA",
    "autopetición VAWA", "Special Immigrant Juvenile", "trata de personas",
    "green card humanitaria", "violencia doméstica inmigración",
    "humanitarian visa", "immigration protection", "abuse victims immigration",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Visas Humanitarias",
    title: "Visas Humanitarias USA 2026: VAWA, SIJS y Visa T",
    description: "Guía completa: VAWA, SIJS, Visa T. Elegibilidad, proceso, evidencia y camino a la residencia permanente.",
    locale: "es_US",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visas Humanitarias USA 2026: VAWA, SIJS, Visa T",
    description: "Guía completa de visas humanitarias: VAWA, SIJS, Visa T.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Immigration Services",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang === "en" || lang === "es" ? lang : "es";
  const isEnglish = validLang === "en";

  const organizationSchema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "Visas Humanitarias", url: "https://visas-humanitarias.com",
    description: isEnglish
      ? "Comprehensive humanitarian visa information resource. VAWA, SIJS, Visa T. Eligibility, process, and path to permanent residence."
      : "Recurso completo de información sobre visas humanitarias. VAWA, SIJS, Visa T. Elegibilidad, proceso y camino a la residencia permanente.",
    sameAs: ["https://visa-sijs.com", "https://visa-t.com", "https://visa-vawa.com", "https://manuelsolis.com"],
  };

  const legalServiceSchema = {
    "@context": "https://schema.org", "@type": "LegalService",
    name: isEnglish ? "Humanitarian Visas Guide 2026 — VAWA, SIJS, Visa T" : "Guía Visas Humanitarias 2026 — VAWA, SIJS, Visa T",
    url: `https://visas-humanitarias.com/${validLang}`,
    serviceType: "Immigration Legal Information",
    areaServed: { "@type": "Country", name: "United States" },
    availableLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
    ],
  };

  const webSiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Visas Humanitarias", url: "https://visas-humanitarias.com", inLanguage: [validLang] };

  return (
    <html lang={validLang} className={`${lora.variable} ${sourceSans.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="es" href="https://visas-humanitarias.com/es" />
        <link rel="alternate" hrefLang="en" href="https://visas-humanitarias.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://visas-humanitarias.com/es" />
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, legalServiceSchema, webSiteSchema]) }} />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
