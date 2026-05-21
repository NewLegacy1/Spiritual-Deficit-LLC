"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;
const FADE_MS = 600;

type Dot = { x: number; y: number; born: number };

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      dotsRef.current.push({ x: e.clientX, y: e.clientY, born: now });
      if (dotsRef.current.length > TRAIL_LENGTH) {
        dotsRef.current = dotsRef.current.slice(-TRAIL_LENGTH);
      }
    };
    window.addEventListener("mousemove", onMove);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dots = dotsRef.current;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const age = time - dot.born;
        const life = 1 - age / FADE_MS;
        if (life <= 0) continue;

        const size = 2 + (i / dots.length) * 3;
        const alpha = life * 0.35 * (i / dots.length + 0.2);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(17, 16, 16, ${alpha})`;
        ctx.fill();
      }

      dotsRef.current = dots.filter((d) => time - d.born < FADE_MS);
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9997]"
      aria-hidden="true"
    />
  );
}
