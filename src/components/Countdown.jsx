"use client";

import { useEffect, useState } from "react";

// 📅 Date officielle d’ouverture
const OPENING_DATE = new Date("2026-01-01T00:00:00");

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
      <p className="text-2xl font-bold text-green-400">
        🎉 Le studio est officiellement ouvert !
      </p>
    );
  }

  return (
    <div className="flex gap-6" style={{ backgroundColor:"#5d3771a3", padding:"20px" }}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <p className="text-4xl font-bold">{value}</p>
          <p className="text-sm uppercase tracking-widest text-gray-400">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
