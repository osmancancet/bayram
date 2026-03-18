"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Search } from "lucide-react";
import { namazSaatleri } from "@/lib/namaz-saatleri";

export default function CitySelector() {
  const t = useTranslations("prayerTimes");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return namazSaatleri;
    const q = query.toLowerCase().replace("i̇", "i");
    return namazSaatleri.filter((n) =>
      n.il.toLowerCase().replace("i̇", "i").includes(q)
    );
  }, [query]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative mb-4">
        <Search size={18} className="absolute start-3.5 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full ps-10 pe-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all duration-200"
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-1">
        {filtered.map((city) => (
          <Link
            key={city.slug}
            href={`/namaz-saatleri/${city.slug}` as never}
            className="px-3 py-2.5 rounded-xl text-sm text-start transition-all duration-200 active:scale-95 border bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-gold/20"
          >
            <span className="font-medium">{city.il}</span>
            <span className="block text-xs opacity-60 mt-0.5">{city.saat}</span>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-white/30 text-sm py-6">
            {t("noResults")}
          </p>
        )}
      </div>
    </div>
  );
}
