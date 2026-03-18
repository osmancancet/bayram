"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Moon } from "lucide-react";

interface GreetingHeroProps {
  name: string;
  message?: string;
}

export default function GreetingHero({ name, message }: GreetingHeroProps) {
  const t = useTranslations("greeting");
  const displayMessage = message || t("defaultMessage");

  return (
    <motion.div
      className="flex flex-col items-center gap-6 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated crescent moon */}
      <motion.div
        initial={{ opacity: 0, y: -40, rotate: -30 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ type: "spring", damping: 8, stiffness: 60, delay: 0.1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Moon size={56} className="text-gold fill-gold/20" />
        </motion.div>
      </motion.div>

      {/* Decorative stars */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {[12, 20, 12].map((size, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
          >
            <Star
              size={size}
              className={i === 1 ? "text-gold-light fill-gold-light" : "text-gold/60 fill-gold/40"}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main greeting */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
        initial={{ opacity: 0, y: 60, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 80, delay: 0.4 }}
      >
        <span className="text-shimmer bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent inline-block">
          {t("line1")}
        </span>
        <br />
        <span className="text-shimmer bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent inline-block">
          {t("line2")}
        </span>
      </motion.h1>

      {/* Decorative line */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <motion.div
          className="h-0.5 bg-gradient-to-r from-transparent to-gold"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        >
          <Star size={12} className="text-gold fill-gold" />
        </motion.div>
        <motion.div
          className="h-0.5 bg-gradient-to-l from-transparent to-gold"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />
      </motion.div>

      {/* Message */}
      <motion.p
        className={`text-white/60 text-sm sm:text-base max-w-sm leading-relaxed ${message ? "italic" : ""}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        {message ? `\u201C${displayMessage}\u201D` : displayMessage}
      </motion.p>

      {/* Sender signature */}
      <motion.p
        className="text-white/50 text-sm sm:text-base font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
      >
        — {name}
      </motion.p>
    </motion.div>
  );
}
