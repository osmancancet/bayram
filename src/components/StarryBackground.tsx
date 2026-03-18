"use client";

import { useState, useEffect } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

// Seeded random to avoid hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateStars(): Star[] {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 7 + 1) * 100,
    y: seededRandom(i * 13 + 2) * 100,
    size: seededRandom(i * 17 + 3) * 2.5 + 0.5,
    duration: seededRandom(i * 23 + 4) * 4 + 2,
    delay: seededRandom(i * 29 + 5) * 5,
  }));
}

const stars = generateStars();

export default function StarryBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-night via-emerald-deep/20 to-night" />

      {/* Stars */}
      {mounted && (
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                willChange: "opacity",
                "--twinkle-duration": `${star.duration}s`,
                "--twinkle-delay": `${star.delay}s`,
              } as React.CSSProperties}
            />
          ))}

          {/* Single shooting star */}
          <div
            className="shooting-star"
            style={{
              top: "25%",
              "--shoot-duration": "6s",
              "--shoot-delay": "3s",
            } as React.CSSProperties}
          />
        </>
      )}
    </div>
  );
}
