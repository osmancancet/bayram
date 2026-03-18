import type { Metadata } from "next";
import TebrikClient from "./TebrikClient";

interface PageProps {
  params: Promise<{ isim: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { isim } = await params;
  const name = decodeURIComponent(isim);

  return {
    title: `Hayırlı Bayramlar ${name} | Ramazan Bayramı Tebrik`,
    description: `${name} için özel Ramazan Bayramı tebriği. Bayramınız mübarek olsun!`,
    openGraph: {
      title: `Hayırlı Bayramlar ${name}`,
      description: `${name} için özel Ramazan Bayramı tebriği`,
      images: [`/api/og?isim=${encodeURIComponent(name)}`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Hayırlı Bayramlar ${name}`,
      description: `${name} için özel Ramazan Bayramı tebriği`,
      images: [`/api/og?isim=${encodeURIComponent(name)}`],
    },
  };
}

export default async function TebrikPage({ params }: PageProps) {
  const { isim } = await params;
  const name = decodeURIComponent(isim);

  return <TebrikClient name={name} />;
}
