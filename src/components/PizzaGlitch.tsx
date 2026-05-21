"use client";

import { useEffect, useState } from "react";

export function PizzaGlitch() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const delay = 5000 + Math.random() * 9000;
      nextTimer = setTimeout(() => {
        setVisible(true);
        hideTimer = setTimeout(() => {
          setVisible(false);
          schedule();
        }, 140);
      }, delay);
    };

    schedule();
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  return (
    <span
      className={`pointer-events-none fixed bottom-[18%] left-[42%] z-[2] text-lg select-none md:bottom-[24%] md:left-[38%] ${
        visible ? "pizza-glitch-active" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      🍕
    </span>
  );
}
