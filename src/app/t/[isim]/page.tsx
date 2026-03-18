import type { Metadata } from "next";
import TebrikClient from "./TebrikClient";

interface PageProps {
  params: Promise<{ isim: string }>;
  searchParams: Promise<{ m?: string; created?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { isim } = await params;
  const { m } = await searchParams;
  const name = decodeURIComponent(isim);
  const message = m ? decodeURIComponent(m) : undefined;

  const description = message || `${name} sana bayram tebriği gönderiyor. Bayramın mübarek olsun!`;
  const title = name ? `Ramazan Bayramınız Mübarek Olsun — ${name}` : "Ramazan Bayramınız Mübarek Olsun";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/api/og?isim=${encodeURIComponent(name)}${message ? `&msg=${encodeURIComponent(message.slice(0, 80))}` : ""}`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?isim=${encodeURIComponent(name)}${message ? `&msg=${encodeURIComponent(message.slice(0, 80))}` : ""}`],
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
