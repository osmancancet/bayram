"use client";

import { useTranslations } from "next-intl";
import { Moon } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-col items-center gap-2 py-8 text-white/30 text-sm">
      <Moon size={16} className="text-gold/40" />
      <p>{t("text")}</p>
    </footer>
  );
}
