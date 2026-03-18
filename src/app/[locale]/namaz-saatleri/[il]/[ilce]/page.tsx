import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { getIlceBySlug, getAllIlceSlugs, getIlBySlug } from "@/lib/namaz-saatleri";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import PrayerTimeCard from "@/components/PrayerTimeCard";
import AdSlot from "@/components/AdSlot";

interface PageProps {
  params: Promise<{ il: string; ilce: string; locale: string }>;
}

export async function generateStaticParams() {
  return getAllIlceSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { il: ilSlug, ilce: ilceSlug } = await params;
  const result = getIlceBySlug(ilSlug, ilceSlug);
  if (!result) return {};

  const { il, ilce } = result;
  const title = `${ilce.isim} Bayram Namazı Saati 2026 — ${il.saat} | ${il.il}`;
  const description = `${ilce.isim} (${il.il}) bayram namazı saat kaçta? 2026 Ramazan Bayramı namazı saati ${il.saat}.`;

  return { title, description };
}

export default async function IlcePage({ params }: PageProps) {
  const { il: ilSlug, ilce: ilceSlug } = await params;
  const result = getIlceBySlug(ilSlug, ilceSlug);
  if (!result) notFound();

  const { il, ilce } = result;
  const parentIl = getIlBySlug(ilSlug);
  const siblingIlceler = parentIl?.ilceler.filter((i) => i.slug !== ilceSlug).slice(0, 12) ?? [];
  const t = await getTranslations("prayerTimes");

  const jsonLd = breadcrumbJsonLd([
    { name: t("home"), url: "/" },
    { name: t("prayerTimesLabel"), url: "/namaz-saatleri" },
    { name: il.il, url: `/namaz-saatleri/${il.slug}` },
    { name: ilce.isim, url: `/namaz-saatleri/${il.slug}/${ilce.slug}` },
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
          <Link href="/" className="hover:text-gold transition-colors">{t("home")}</Link>
          <ChevronRight size={12} />
          <Link href="/namaz-saatleri" className="hover:text-gold transition-colors">{t("prayerTimesLabel")}</Link>
          <ChevronRight size={12} />
          <Link href={`/namaz-saatleri/${il.slug}` as never} className="hover:text-gold transition-colors">{il.il}</Link>
          <ChevronRight size={12} />
          <span className="text-gold/70">{ilce.isim}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">
            {ilce.isim} — {t("bayramPrayerTime")}
          </h1>
          <p className="text-white/40 text-sm">
            {il.il} · {t("date")}
          </p>
        </div>

        <div className="mb-8">
          <PrayerTimeCard city={{ il: il.il, saat: il.saat }} ilce={ilce.isim} />
        </div>

        <AdSlot slotId="ilce-detail-1" format="horizontal" className="mb-8" />

        {siblingIlceler.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-white/50 mb-4">
              {il.il} — {t("districts")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {siblingIlceler.map((s) => (
                <Link
                  key={s.slug}
                  href={`/namaz-saatleri/${il.slug}/${s.slug}` as never}
                  className="px-3 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-gold/20 transition-all duration-200"
                >
                  {s.isim}
                </Link>
              ))}
              {parentIl && parentIl.ilceler.length > 12 && (
                <Link
                  href={`/namaz-saatleri/${il.slug}` as never}
                  className="px-3 py-2.5 rounded-xl text-sm bg-gold/10 border border-gold/20 text-gold/70 hover:bg-gold/20 hover:text-gold transition-all duration-200 text-center"
                >
                  {t("allDistricts")} →
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
