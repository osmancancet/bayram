"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FloatingItem {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const emojis = ["🌙", "✨", "⭐", "🕌", "🤲", "💫", "🌟", "☪️"];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const items: FloatingItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  emoji: emojis[i % emojis.length]!,
  x: seededRandom(i * 11 + 200) * 100,
  y: seededRandom(i * 19 + 201) * 100,
  size: seededRandom(i * 23 + 202) * 16 + 14,
  duration: seededRandom(i * 29 + 203) * 8 + 6,
  delay: seededRandom(i * 31 + 204) * 3,
}));

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0, 1, 0.8, 1, 0],
            y: [0, -30, -10, -40, -60],
            x: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
