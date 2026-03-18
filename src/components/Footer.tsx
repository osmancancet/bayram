"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Moon } from "lucide-react";

const popularCities = [
  { slug: "istanbul", label: "İstanbul" },
  { slug: "ankara", label: "Ankara" },
  { slug: "izmir", label: "İzmir" },
  { slug: "bursa", label: "Bursa" },
  { slug: "antalya", label: "Antalya" },
  { slug: "konya", label: "Konya" },
  { slug: "adana", label: "Adana" },
  { slug: "gaziantep", label: "Gaziantep" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative z-10 border-t border-white/5 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-white/50 text-xs uppercase tracking-wider mb-3">{t("pages")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/30 text-sm hover:text-gold/60 transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/mesajlar" className="text-white/30 text-sm hover:text-gold/60 transition-colors">
                  {t("messages")}
                </Link>
              </li>
              <li>
                <Link href="/namaz-saatleri" className="text-white/30 text-sm hover:text-gold/60 transition-colors">
                  {t("prayerTimes")}
                </Link>
              </li>
              <li>
                <Link href="/bayram-namazi" className="text-white/30 text-sm hover:text-gold/60 transition-colors">
                  {t("prayerGuide")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-white/50 text-xs uppercase tracking-wider mb-3">{t("popularCities")}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {popularCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/namaz-saatleri/${city.slug}` as never}
                    className="text-white/30 text-sm hover:text-gold/60 transition-colors"
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-2 pt-4 border-t border-white/5 text-white/20 text-xs">
          <Moon size={14} className="text-gold/30" />
          <p>{t("text")}</p>
        </div>
      </div>
    </footer>
  );
}
