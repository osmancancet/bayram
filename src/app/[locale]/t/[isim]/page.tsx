import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TebrikClient from "./TebrikClient";

interface PageProps {
  params: Promise<{ isim: string; locale: string }>;
  searchParams: Promise<{ m?: string; created?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { isim, locale } = await params;
  const { m } = await searchParams;
  const t = await getTranslations({ locale, namespace: "meta" });
  const tGreeting = await getTranslations({ locale, namespace: "greeting" });
  const name = decodeURIComponent(isim);
  const message = m ? decodeURIComponent(m) : undefined;

  const description = message || t("greetingDescription", { name });
  const title = name ? `${tGreeting("line1")} ${tGreeting("line2")} — ${name}` : `${tGreeting("line1")} ${tGreeting("line2")}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/api/og?isim=${encodeURIComponent(name)}&locale=${locale}${message ? `&msg=${encodeURIComponent(message.slice(0, 80))}` : ""}`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?isim=${encodeURIComponent(name)}&locale=${locale}${message ? `&msg=${encodeURIComponent(message.slice(0, 80))}` : ""}`],
    },
  };
}

export default async function TebrikPage({ params, searchParams }: PageProps) {
  const { isim } = await params;
  const { m } = await searchParams;
  const name = decodeURIComponent(isim);
  const message = m ? decodeURIComponent(m) : undefined;

  return <TebrikClient name={name} message={message} />;
}
