import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import CitySelector from "@/components/CitySelector";
import AdSlot from "@/components/AdSlot";

const popularCities = [
  { slug: "istanbul", label: "İstanbul" },
  { slug: "ankara", label: "Ankara" },
  { slug: "izmir", label: "İzmir" },
  { slug: "bursa", label: "Bursa" },
  { slug: "antalya", label: "Antalya" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("prayerTimesTitle"),
    description: t("prayerTimesDescription"),
  };
}

export default async function NamazSaatleriPage() {
  const t = await getTranslations("prayerTimes");

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Hero header */}
        <div className="text-center mb-8">
          <p className="text-gold/60 text-xs uppercase tracking-widest mb-2">{t("date")}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t("pageTitle")}
          </h1>
          <p className="text-white/40 text-sm">
            {t("pageSubtitle")}
          </p>
        </div>

        {/* Popular cities quick access */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {popularCities.map((city) => (
            <Link
              key={city.slug}
              href={`/namaz-saatleri/${city.slug}` as never}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gold/10 border border-gold/20 text-gold/80 hover:bg-gold/20 hover:text-gold transition-all duration-200"
            >
              {city.label}
            </Link>
          ))}
        </div>

        <AdSlot slotId="namaz-index-1" format="horizontal" className="mb-6" />

        {/* Bayram namazı rehberi link */}
        <Link
          href="/bayram-namazi"
          className="block mb-6 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-200"
        >
          <p className="text-white/90 text-sm font-medium">{t("prayerGuideLink")}</p>
          <p className="text-white/40 text-xs mt-1">{t("prayerGuideSub")}</p>
        </Link>

        {/* City selector */}
        <CitySelector />
      </div>
    </div>
  );
}
