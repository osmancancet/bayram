"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Moon, Star } from "lucide-react";
import { rtlLocales, type Locale } from "@/i18n/config";

interface EntryAnimationProps {
  onComplete: () => void;
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const t = useTranslations("home");
  const locale = useLocale();
  const isRtl = rtlLocales.includes(locale as Locale);

  const animateText = (text: string, keyPrefix: string, delayStart: number) => {
    if (isRtl) {
      // Word-by-word for RTL (Arabic connected script can't be split by char)
      const words = text.split(" ");
      return words.map((word, i) => (
        <motion.span
          key={`${keyPrefix}-${i}`}
          className="text-shimmer bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delayStart + i * 0.15, type: "spring", damping: 12 }}
        >
          {i < words.length - 1 ? word + "\u00A0" : word}
        </motion.span>
      ));
    }
    // Letter-by-letter for LTR
    return text.split("").map((char, i) => (
      <motion.span
        key={`${keyPrefix}-${i}`}
        className="text-shimmer bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delayStart + i * 0.04, type: "spring", damping: 12 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated stars burst around moon */}
      <div className="relative">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: "50%", top: "50%" }}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0.5],
              x: Math.cos((i * Math.PI * 2) / 6) * 60,
              y: Math.sin((i * Math.PI * 2) / 6) * 60,
            }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
          >
            <Star size={12} className="text-gold fill-gold" />
          </motion.div>
        ))}

        {/* Crescent Moon */}
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -30, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ type: "spring", damping: 8, stiffness: 80, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Moon size={72} className="text-gold fill-gold/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Text */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onAnimationComplete={onComplete}
      >
        <span className="block">
          {animateText(t("line1"), "r", 0.6)}
        </span>
        <span className="block mt-2">
          {animateText(t("line2"), "m", 1.2)}
        </span>
      </motion.h1>

      {/* Animated line decoration */}
      <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
        <motion.div className="h-px bg-gradient-to-r from-transparent to-gold/60" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 1.9, duration: 0.6 }} />
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.1, type: "spring" }}>
          ✨
        </motion.div>
        <motion.div className="h-px bg-gradient-to-l from-transparent to-gold/60" initial={{ width: 0 }} animate={{ width: 60 }} transition={{ delay: 1.9, duration: 0.6 }} />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-white/60 text-base sm:text-lg text-center max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        {t("subtitle")}
      </motion.p>
    </motion.div>
  );
}
