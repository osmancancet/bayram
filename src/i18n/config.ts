export const locales = ["tr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const rtlLocales: readonly Locale[] = ["ar"];

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  ar: "🇸🇦",
};
