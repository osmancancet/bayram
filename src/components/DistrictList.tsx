"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Search } from "lucide-react";
import type { Ilce } from "@/lib/namaz-saatleri";

interface DistrictListProps {
  ilceler: Ilce[];
  ilSlug: string;
  saat: string;
}

export default function DistrictList({ ilceler, ilSlug, saat }: DistrictListProps) {
  const t = useTranslations("prayerTimes");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return ilceler;
    const q = query.toLowerCase().replace("i̇", "i");
    return ilceler.filter((i) =>
      i.isim.toLowerCase().replace("i̇", "i").includes(q)
    );
  }, [query, ilceler]);

  return (
    <div className="w-full">
      {ilceler.length > 8 && (
        <div className="relative mb-4">
          <Search size={16} className="absolute start-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full ps-9 pe-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-200"
            autoComplete="off"
          />
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {filtered.map((ilce) => (
          <Link
            key={ilce.slug}
            href={`/namaz-saatleri/${ilSlug}/${ilce.slug}` as never}
            className="px-3 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-gold/20 transition-all duration-200"
          >
            <span className="font-medium">{ilce.isim}</span>
            <span className="block text-xs text-white/40 mt-0.5">{saat}</span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-white/30 text-sm py-4">
            {t("noResults")}
          </p>
        )}
      </div>
    </div>
  );
}
