import type { MetadataRoute } from "next";
import { getAllIlSlugs, getAllIlceSlugs } from "@/lib/namaz-saatleri";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/mesajlar`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/namaz-saatleri`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];

  const ilPages: MetadataRoute.Sitemap = getAllIlSlugs().map((slug) => ({
    url: `${SITE_URL}/namaz-saatleri/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const ilcePages: MetadataRoute.Sitemap = getAllIlceSlugs().map(({ il, ilce }) => ({
    url: `${SITE_URL}/namaz-saatleri/${il}/${ilce}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...ilPages, ...ilcePages];
}
