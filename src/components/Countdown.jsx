"use client";

import { useEffect, useState } from "react";

// 📅 Date officielle d’ouverture
const OPENING_DATE = new Date("2026-01-12T00:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = OPENING_DATE - new Date();

    if (diff <= 0) return null;

    return {
      Jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
      Heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((diff / (1000 * 60)) % 60),
      Secondes: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 text-center">
        🎉 Le studio est officiellement ouvert !
      </p>
    );
  }

  return (
    <div
      className="
        flex flex-wrap justify-center gap-4 sm:gap-6
        bg-[#5d3771a3]
        backdrop-blur-sm
        rounded-2xl
        px-4 py-5
        sm:px-6 sm:py-6
        md:px-8
      "
    >
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="
            min-w-[70px] sm:min-w-[90px]
            text-center
          "
        >
          <p
            className="
              font-bold
              text-2xl
              sm:text-3xl
              md:text-4xl
            "
          >
            {value}
          </p>
          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-widest
              text-gray-300
            "
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
