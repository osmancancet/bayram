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

    // Initial burst from left and right
    confetti({ ...defaults, particleCount: 80, spread: 70, angle: 60, origin: { x: 0, y: 0.6 } });
    confetti({ ...defaults, particleCount: 80, spread: 70, angle: 120, origin: { x: 1, y: 0.6 } });

    // Center burst
    setTimeout(() => {
      confetti({ ...defaults, particleCount: 60, spread: 100, origin: { x: 0.5, y: 0.5 }, scalar: 1.2 });
    }, 300);

    // Falling stars effect
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 40,
        spread: 160,
        origin: { x: 0.5, y: 0 },
        gravity: 0.6,
        ticks: 300,
        shapes: ["star"],
        scalar: 1.5,
      });
    }, 700);

    // Second wave from sides
    setTimeout(() => {
      confetti({ ...defaults, particleCount: 40, spread: 50, angle: 75, origin: { x: 0.1, y: 0.8 }, scalar: 0.8 });
      confetti({ ...defaults, particleCount: 40, spread: 50, angle: 105, origin: { x: 0.9, y: 0.8 }, scalar: 0.8 });
    }, 1200);

    // Final celebratory burst
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 100,
        spread: 180,
        origin: { x: 0.5, y: 0.7 },
        startVelocity: 35,
        gravity: 0.8,
        ticks: 250,
      });
    }, 2000);
  }, []);

  return null;
}
