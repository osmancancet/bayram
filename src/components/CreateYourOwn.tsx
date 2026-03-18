"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CreateYourOwn() {
  const t = useTranslations("cta");

  return (
    <motion.div
      className="w-full max-w-sm px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5 }}
    >
      {/* Separator */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
        <span className="text-gold/40 text-[10px] uppercase tracking-widest">{t("separator")}</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
      </div>

      {/* CTA Button — navigates to homepage */}
      <Link href="/">
        <motion.div
          className="w-full min-h-[56px] px-5 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-deep to-emerald-600 flex items-center justify-center gap-3 transition-all duration-200 active:scale-95 border border-emerald-500/30 shadow-lg shadow-emerald-900/30 cursor-pointer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={20} className="text-gold" />
          <div className="flex flex-col items-start">
            <span className="text-sm">{t("title")}</span>
            <span className="text-[10px] text-white/60">{t("subtitle")}</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
