"use client";

import { motion } from "framer-motion";
import { Star, Moon } from "lucide-react";

interface GreetingHeroProps {
  name: string;
  message?: string;
}

export default function GreetingHero({ name, message }: GreetingHeroProps) {
  const displayMessage = message || "Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun.";

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
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0, -5, 0] }}
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
        {[12, 8, 16, 24, 16, 8, 12].map((size, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
            >
              <Star
                size={size}
                className={i === 3 ? "text-gold-light fill-gold-light" : "text-gold/60 fill-gold/40"}
              />
            </motion.div>
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
        <motion.span
          className="text-shimmer bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent inline-block"
          animate={{
            textShadow: [
              "0 0 20px rgba(245,158,11,0.3)",
              "0 0 60px rgba(245,158,11,0.5)",
              "0 0 20px rgba(245,158,11,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Ramazan Bayramınız
        </motion.span>
        <br />
        <motion.span
          className="text-shimmer bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent inline-block"
          animate={{
            textShadow: [
              "0 0 20px rgba(245,158,11,0.3)",
              "0 0 60px rgba(245,158,11,0.5)",
              "0 0 20px rgba(245,158,11,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          Mübarek Olsun
        </motion.span>
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

      {/* Sender signature — small, elegant */}
      <motion.p
        className="text-white/50 text-sm sm:text-base font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
      >
        — {name}
      </motion.p>

      {/* Glowing orb */}
      <motion.div
        className="w-32 h-32 rounded-full absolute -z-10"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
