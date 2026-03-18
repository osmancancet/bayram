"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Sparkles, MessageSquareText, Clock, BookOpen } from "lucide-react";

type PageKey = "home" | "messages" | "prayerTimes" | "prayerGuide";

const pages: { key: PageKey; href: string; icon: typeof Sparkles }[] = [
  { key: "home", href: "/", icon: Sparkles },
  { key: "messages", href: "/mesajlar", icon: MessageSquareText },
  { key: "prayerTimes", href: "/namaz-saatleri", icon: Clock },
  { key: "prayerGuide", href: "/bayram-namazi", icon: BookOpen },
];

interface RelatedLinksProps {
  exclude?: PageKey;
}

export default function RelatedLinks({ exclude }: RelatedLinksProps) {
  const t = useTranslations("relatedLinks");

  const filtered = pages.filter((p) => p.key !== exclude);

  return (
    <div className="mt-8 pt-6 border-t border-white/5">
      <p className="text-white/40 text-xs uppercase tracking-wider mb-3">{t("title")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {filtered.map((page) => {
          const Icon = page.icon;
          return (
            <Link
              key={page.key}
              href={page.href as never}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-200"
            >
              <Icon size={14} className="text-gold/50" />
              <span className="text-white/60 text-sm">{t(page.key)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
