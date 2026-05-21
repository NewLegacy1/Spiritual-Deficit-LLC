"use client";

import { useEffect, useState } from "react";

/** Saturday May 23, 11:11 PM — local time, no label. */
const TARGET = new Date(2026, 4, 23, 23, 11, 0);

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getRemaining() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds } = remaining;

  return (
    <div
      className="tabular-nums text-[clamp(2.25rem,14vw,5.5rem)] leading-none tracking-tight text-arterial"
      aria-live="polite"
      aria-label="Transmission 1 countdown"
    >
      {pad(days)}:{pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </div>
  );
}
