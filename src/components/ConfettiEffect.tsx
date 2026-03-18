"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { CONFETTI_COLORS } from "@/lib/constants";

export default function ConfettiEffect() {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    const defaults = {
      colors: CONFETTI_COLORS,
      disableForReducedMotion: true,
      zIndex: 100,
    };

    // Single burst from both sides
    confetti({ ...defaults, particleCount: 40, spread: 70, angle: 60, origin: { x: 0, y: 0.6 } });
    confetti({ ...defaults, particleCount: 40, spread: 70, angle: 120, origin: { x: 1, y: 0.6 } });

    // Center celebration
    setTimeout(() => {
      confetti({ ...defaults, particleCount: 50, spread: 120, origin: { x: 0.5, y: 0.5 } });
    }, 500);
  }, []);

  return null;
}
