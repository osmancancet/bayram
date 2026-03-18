import type { Metadata } from "next";
import Link from "next/link";
import CitySelector from "@/components/CitySelector";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Bayram Namazı Saatleri 2026 — Tüm İller | Ramazan Bayramı",
  description:
    "2026 Ramazan Bayramı namazı saatleri. 81 il ve tüm ilçeler için bayram namazı saat kaçta? İl seç, bayram namazı vaktini öğren.",
  keywords: [
    "bayram namazı saatleri 2026",
    "bayram namazı saat kaçta",
    "ramazan bayramı namaz vakti",
    "bayram namazı saatleri tüm iller",
  ],
  openGraph: {
    title: "Bayram Namazı Saatleri 2026 — Tüm İller",
    description: "81 il ve tüm ilçeler için 2026 Ramazan Bayramı namazı saatleri.",
    type: "website",
  },
};

const popularCities = [
  { slug: "istanbul", label: "İstanbul" },
  { slug: "ankara", label: "Ankara" },
  { slug: "izmir", label: "İzmir" },
  { slug: "bursa", label: "Bursa" },
  { slug: "antalya", label: "Antalya" },
];

export default function NamazSaatleriPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Hero header */}
        <div className="text-center mb-8">
          <p className="text-gold/60 text-xs uppercase tracking-widest mb-2">20 Mart 2026</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Bayram Namazı Saatleri
          </h1>
          <p className="text-white/40 text-sm">
            81 il ve tüm ilçeler için bayram namazı vakitleri
          </p>
        </div>

        {/* Popular cities quick access */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {popularCities.map((city) => (
            <Link
              key={city.slug}
              href={`/namaz-saatleri/${city.slug}`}
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
          <p className="text-white/90 text-sm font-medium">🕌 Bayram namazı nasıl kılınır?</p>
          <p className="text-white/40 text-xs mt-1">Adım adım bayram namazı kılınışı rehberi</p>
        </Link>

        {/* City selector */}
        <CitySelector />
      </div>
    </div>
  );
}
