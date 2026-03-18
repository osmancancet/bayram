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

const adsensePubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bayram Tebriği Oluştur | Ramazan Bayramı 2026",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sevdiklerine özel bayram tebriği oluştur, WhatsApp'tan gönder. Bayram mesajları ve namaz saatleri.",
  keywords: [
    "ramazan bayramı",
    "bayram tebriği",
    "bayram mesajları",
    "bayram namazı saati",
    "hayırlı bayramlar",
    "ramazan bayramı 2026",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    title: "Bayram Tebriği Oluştur | Ramazan Bayramı 2026",
    description: "Sevdiklerine özel bayram tebriği oluştur, WhatsApp'tan gönder.",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayram Tebriği Oluştur | Ramazan Bayramı 2026",
    description: "Sevdiklerine özel bayram tebriği oluştur, WhatsApp'tan gönder.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "/",
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
        {adsensePubId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePubId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <StarryBackground />
        <Header />
        <main className="relative z-10 pt-14">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
