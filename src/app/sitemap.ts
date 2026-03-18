import type { MetadataRoute } from "next";
import { getAllIlSlugs, getAllIlceSlugs } from "@/lib/namaz-saatleri";
import { SITE_URL } from "@/lib/constants";
import { locales, defaultLocale } from "@/i18n/config";

function localizedUrl(path: string, locale: string): string {
  return `${SITE_URL}/${locale}${path}`;
}

function withAlternates(path: string): {
  url: string;
  alternates: { languages: Record<string, string> };
} {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = localizedUrl(path, l);
  }
  languages["x-default"] = localizedUrl(path, defaultLocale);
  return {
    url: localizedUrl(path, defaultLocale),
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/mesajlar", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/namaz-saatleri", priority: 0.9, changeFrequency: "yearly" as const },
    { path: "/bayram-namazi", priority: 0.9, changeFrequency: "yearly" as const },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    ...withAlternates(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const ilPages: MetadataRoute.Sitemap = getAllIlSlugs().map((slug) => ({
    ...withAlternates(`/namaz-saatleri/${slug}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const ilcePages: MetadataRoute.Sitemap = getAllIlceSlugs().map(({ il, ilce }) => ({
    ...withAlternates(`/namaz-saatleri/${il}/${ilce}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...ilPages, ...ilcePages];
}
