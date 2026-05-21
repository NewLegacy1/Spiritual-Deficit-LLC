"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const INTRO_KEY = "mbi-intro-seen";
const INTRO_MS = 4800;

export function CityIntro() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    setExiting(true);
    sessionStorage.setItem(INTRO_KEY, "1");
    window.setTimeout(() => setVisible(false), 700);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(INTRO_KEY)) return;

    setVisible(true);
    const timer = window.setTimeout(finish, INTRO_MS);
    return () => window.clearTimeout(timer);
  }, [finish]);

  if (!visible) return null;

  return (
    <div
      className={`city-intro fixed inset-0 z-[20000] ${exiting ? "city-intro-exit" : ""}`}
      role="presentation"
      aria-hidden={exiting}
      onClick={finish}
    >
      <div className="city-intro-skyline" aria-hidden />
      <div className="city-intro-haze" aria-hidden />

      <div className="city-intro-logo">
        <Image
          src="/mbi-logo-intro.png"
          alt=""
          width={720}
          height={480}
          priority
          className="city-intro-logo-img h-auto w-[min(72vw,22rem)] object-contain md:w-[26rem]"
        />
      </div>

      <p className="city-intro-tag pointer-events-none absolute bottom-8 left-0 right-0 text-center text-[9px] tracking-[0.35em] text-linen/25">
        ENTERING
      </p>
    </div>
  );
}
