"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeFlags, localeNames, type Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: Locale) => {
    router.replace(pathname as never, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
            locale === l
              ? "bg-gold/20 text-gold border border-gold/30"
              : "text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent"
          }`}
          title={localeNames[l]}
        >
          {localeFlags[l]}
        </button>
      ))}
    </div>
  );
}
