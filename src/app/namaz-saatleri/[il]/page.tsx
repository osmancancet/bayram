import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { getIlBySlug, getAllIlSlugs } from "@/lib/namaz-saatleri";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import PrayerTimeCard from "@/components/PrayerTimeCard";
import DistrictList from "@/components/DistrictList";
import AdSlot from "@/components/AdSlot";

interface PageProps {
  params: Promise<{ il: string }>;
}

export async function generateStaticParams() {
  return getAllIlSlugs().map((il) => ({ il }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { il: ilSlug } = await params;
  const il = getIlBySlug(ilSlug);
  if (!il) return {};

  const title = `${il.il} Bayram Namazı Saati 2026 — ${il.saat}`;
  const description = `${il.il} bayram namazı saat kaçta? 2026 Ramazan Bayramı namazı saati ${il.saat}. ${il.il} ve ilçeleri için bayram namazı vakitleri.`;

  return {
    title,
    description,
    keywords: [
      `${il.il.toLowerCase()} bayram namazı saati`,
      `${il.il.toLowerCase()} bayram namazı saat kaçta`,
      `${il.il.toLowerCase()} ramazan bayramı namaz vakti`,
      "bayram namazı saatleri 2026",
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function IlPage({ params }: PageProps) {
  const { il: ilSlug } = await params;
  const il = getIlBySlug(ilSlug);
  if (!il) notFound();

  const jsonLd = breadcrumbJsonLd([
    { name: "Ana Sayfa", url: "/" },
    { name: "Namaz Saatleri", url: "/namaz-saatleri" },
    { name: il.il, url: `/namaz-saatleri/${il.slug}` },
  ]);

  return (
    <div className="min-h-screen py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-6 flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link>
          <ChevronRight size={12} />
          <Link href="/namaz-saatleri" className="hover:text-gold transition-colors">Namaz Saatleri</Link>
          <ChevronRight size={12} />
          <span className="text-gold/70">{il.il}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">
            {il.il} Bayram Namazı Saati
          </h1>
          <p className="text-white/40 text-sm">
            20 Mart 2026 — Ramazan Bayramı
          </p>
        </div>

        {/* Prayer time card */}
        <div className="mb-8">
          <PrayerTimeCard city={{ il: il.il, saat: il.saat }} />
        </div>

        <AdSlot slotId="il-detail-1" format="horizontal" className="mb-8" />

        {/* District list */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-white/50 mb-4">
            {il.il} İlçeleri ({il.ilceler.length})
          </h2>
          <DistrictList ilceler={il.ilceler} ilSlug={il.slug} saat={il.saat} />
        </div>

      </div>
    </div>
  );
}
