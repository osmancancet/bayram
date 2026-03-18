import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { websiteJsonLd } from "@/lib/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dijital Bayram | Ramazan Bayramı 2026",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Dijital Bayram — sevdiklerine özel bayram kartı oluştur, WhatsApp'tan gönder. Bayram mesajları ve namaz saatleri.",
  keywords: [
    "ramazan bayramı",
    "dijital bayram",
    "bayram mesajları",
    "bayram namazı saati",
    "hayırlı bayramlar",
    "ramazan bayramı 2026",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    title: "Dijital Bayram | Ramazan Bayramı 2026",
    description: "Dijital Bayram — sevdiklerine özel bayram kartı oluştur, WhatsApp'tan gönder.",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dijital Bayram | Ramazan Bayramı 2026",
    description: "Dijital Bayram — sevdiklerine özel bayram kartı oluştur, WhatsApp'tan gönder.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-adsense-account": "ca-pub-2281167144291834",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = websiteJsonLd();

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-adsense-account" content="ca-pub-2281167144291834" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2281167144291834"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <StarryBackground />
        <Header />
        <main className="relative z-10 pt-14 pb-16 sm:pb-0">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
