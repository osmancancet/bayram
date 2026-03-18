import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import { SITE_URL } from "@/lib/constants";
import { websiteJsonLd } from "@/lib/json-ld";
import { locales, rtlLocales, type Locale } from "@/i18n/config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("siteTitle"),
      template: `%s | ${t("siteTitle")}`,
    },
    description: t("siteDescription"),
    keywords: t("keywords").split(", "),
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : locale === "en" ? "en_US" : "tr_TR",
      siteName: t("siteTitle"),
      title: t("siteTitle"),
      description: t("ogDescription"),
      images: [{ url: `/api/og?locale=${locale}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("ogDescription"),
      images: [`/api/og?locale=${locale}`],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        tr: "/tr",
        en: "/en",
        ar: "/ar",
      },
    },
    verification: {
      google: "fh0g6zM0suaTrmMmg8DcDDY1cMiRgC2ncJMkg1HIRlY",
    },
    other: {
      "google-adsense-account": "ca-pub-2281167144291834",
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const jsonLd = websiteJsonLd();
  const isRtl = rtlLocales.includes(locale as Locale);

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16460630772"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16460630772');
            gtag('config', 'G-NTN0CH5M9E');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <StarryBackground />
          <Header />
          <main className="relative z-10 pt-14 pb-16 sm:pb-0">{children}</main>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
