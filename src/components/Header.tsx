"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { MessageSquareText, Clock, Sparkles } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const navItems = [
    { href: "/" as const, label: t("greeting"), icon: Sparkles },
    { href: "/mesajlar" as const, label: t("messages"), icon: MessageSquareText },
    { href: "/namaz-saatleri" as const, label: t("prayerTimes"), icon: Clock },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop top header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-night/70 backdrop-blur-xl border-b border-white/5"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg">🌙</span>
            <span className="text-sm font-semibold text-gold/90 group-hover:text-gold transition-colors">
              {t("siteName")}
            </span>
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    active
                      ? "text-gold bg-gold/10"
                      : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                  {active && (
                    <motion.div
                      className="absolute bottom-0 left-2 right-2 h-px bg-gold/50"
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ms-2 border-s border-white/10 ps-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile bottom navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-night/80 backdrop-blur-xl border-t border-white/10 sm:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-all duration-200 ${
                  active
                    ? "text-gold"
                    : "text-white/40 active:text-white/60"
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
