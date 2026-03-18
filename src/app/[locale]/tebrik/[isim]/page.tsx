import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TebrikClient from "./TebrikClient";

interface PageProps {
  params: Promise<{ isim: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { isim, locale } = await params;
  const tGreeting = await getTranslations({ locale, namespace: "greeting" });
  const name = decodeURIComponent(isim);

  const title = `${tGreeting("line1")} ${tGreeting("line2")} — ${name}`;
  const description = tGreeting("defaultMessage");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/api/og?isim=${encodeURIComponent(name)}&locale=${locale}`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?isim=${encodeURIComponent(name)}&locale=${locale}`],
    },
  };
}

export default async function TebrikPage({ params }: PageProps) {
  const { isim } = await params;
  const name = decodeURIComponent(isim);

  return <TebrikClient name={name} />;
}
