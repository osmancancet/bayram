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

interface ShootingStar {
  id: number;
  top: number;
  duration: number;
  delay: number;
}

// Seeded random to avoid hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateStars(): Star[] {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 7 + 1) * 100,
    y: seededRandom(i * 13 + 2) * 100,
    size: seededRandom(i * 17 + 3) * 2.5 + 0.5,
    duration: seededRandom(i * 23 + 4) * 4 + 2,
    delay: seededRandom(i * 29 + 5) * 5,
  }));
}

function generateShootingStars(): ShootingStar[] {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    top: seededRandom(i * 37 + 100) * 40,
    duration: seededRandom(i * 41 + 101) * 3 + 4,
    delay: seededRandom(i * 43 + 102) * 10 + i * 5,
  }));
}

const stars = generateStars();
const shootingStars = generateShootingStars();

export default function StarryBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-night via-emerald-deep/20 to-night" />

      {/* Radial glow spots */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{
          top: "20%",
          left: "10%",
          background: "radial-gradient(circle, #064e3b, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          bottom: "10%",
          right: "15%",
          background: "radial-gradient(circle, #f59e0b, transparent 70%)",
        }}
      />

      {/* Islamic geometric pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="geometric"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0L60 15L60 45L30 60L0 45L0 15Z"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="0.5"
            />
            <circle cx="30" cy="30" r="8" fill="none" stroke="#f59e0b" strokeWidth="0.3" />
            <path
              d="M30 0L30 60M0 30L60 30"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric)" />
      </svg>

      {/* Stars — only render after mount to avoid hydration issues */}
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
                "--twinkle-duration": `${star.duration}s`,
                "--twinkle-delay": `${star.delay}s`,
                boxShadow: star.size > 2 ? "0 0 4px rgba(255,255,255,0.4)" : "none",
              } as React.CSSProperties}
            />
          ))}

          {/* Shooting stars */}
          {shootingStars.map((s) => (
            <div
              key={`shoot-${s.id}`}
              className="shooting-star"
              style={{
                top: `${s.top}%`,
                "--shoot-duration": `${s.duration}s`,
                "--shoot-delay": `${s.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </>
      )}
    </div>
  );
}
