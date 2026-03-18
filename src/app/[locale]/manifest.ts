import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dijital Bayram",
    short_name: "Dijital Bayram",
    description: "Dijital Bayram — bayram kartı oluştur, bayram mesajları, namaz saatleri",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#f59e0b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
