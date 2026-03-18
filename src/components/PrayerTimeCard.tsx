"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

interface PrayerTimeCardProps {
  city: { il: string; saat: string };
  ilce?: string;
}

function getCountdown(targetSaat: string): string | null {
  const [hours, minutes] = targetSaat.split(":").map(Number);
  if (hours === undefined || minutes === undefined) return null;
  const target = new Date(2026, 2, 20, hours, minutes, 0);
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 0) return `${days}d ${hrs}h ${mins}m`;
  if (hrs > 0) return `${hrs}h ${mins}m ${secs}s`;
  return `${mins}m ${secs}s`;
}

export default function PrayerTimeCard({ city, ilce }: PrayerTimeCardProps) {
  const t = useTranslations("prayerTimes");
  const [countdown, setCountdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCountdown(getCountdown(city.saat));
    }, 1000);
    setCountdown(getCountdown(city.saat));
    return () => clearInterval(timer);
  }, [city.saat]);

  return (
    <motion.div
      className="w-full max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-emerald-deep/40 to-night-light border border-gold/20 p-6 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 20 }}
      key={city.il}
    >
      <div className="flex items-center justify-center gap-2 text-gold/70 text-sm mb-3">
        <MapPin size={16} />
        <span>{ilce ? `${ilce}, ${city.il}` : city.il}</span>
      </div>

      <div className="text-5xl font-bold text-gold animate-pulse-glow mb-2">
        {city.saat}
      </div>

      <p className="text-white/40 text-xs mb-4">{t("bayramPrayerTime")}</p>

      {mounted && countdown && (
        <motion.div
          className="flex items-center justify-center gap-2 text-white/50 text-sm bg-white/5 rounded-xl px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Clock size={14} />
          <span>{countdown}</span>
        </motion.div>
      )}
    </motion.div>
  );
}
