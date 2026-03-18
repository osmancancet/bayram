"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageSquareText, Clock, Sparkles } from "lucide-react";


const navItems = [
  { href: "/", label: "Tebrik", icon: Sparkles, mobileOnly: false },
  { href: "/mesajlar", label: "Mesajlar", icon: MessageSquareText, mobileOnly: false },
  { href: "/namaz-saatleri", label: "Namaz Saatleri", icon: Clock, mobileOnly: false },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
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
          <span className="text-sm font-semibold text-gold/90 group-hover:text-gold transition-colors hidden sm:inline">
            Bayram Tebriği
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
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
                <span className="hidden sm:inline">{item.label}</span>
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

        </nav>
      </div>
    </motion.header>
  );
}
