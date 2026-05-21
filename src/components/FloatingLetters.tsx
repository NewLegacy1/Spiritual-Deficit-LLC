const SUBJECTS = ["I", "L", "V", "N", "J", "W", "M", "J", "N"] as const;

const FLOAT_PLACEMENTS = [
  { char: "I", pos: "top-[8%] left-[6%]", size: "text-5xl", dur: "22s", delay: "0s" },
  { char: "L", pos: "top-[15%] right-[12%]", size: "text-7xl", dur: "19s", delay: "-4s" },
  { char: "V", pos: "top-[35%] left-[3%]", size: "text-3xl", dur: "16s", delay: "-2s" },
  { char: "N", pos: "top-[28%] right-[6%]", size: "text-4xl", dur: "24s", delay: "-7s" },
  { char: "J", pos: "top-[52%] left-[10%]", size: "text-6xl", dur: "20s", delay: "-1s" },
  { char: "W", pos: "top-[45%] right-[15%]", size: "text-2xl", dur: "17s", delay: "-5s" },
  { char: "M", pos: "top-[68%] left-[5%]", size: "text-4xl", dur: "21s", delay: "-3s" },
  { char: "J", pos: "top-[72%] right-[8%]", size: "text-5xl", dur: "18s", delay: "-8s" },
  { char: "N", pos: "top-[88%] left-[18%]", size: "text-3xl", dur: "23s", delay: "-6s" },
  { char: "W", pos: "top-[20%] left-[42%]", size: "text-xl", dur: "15s", delay: "-9s" },
  { char: "M", pos: "bottom-[18%] right-[22%]", size: "text-6xl", dur: "25s", delay: "-2s" },
  { char: "V", pos: "bottom-[32%] left-[28%]", size: "text-2xl", dur: "14s", delay: "-4s" },
  { char: "L", pos: "top-[58%] right-[28%]", size: "text-xl", dur: "16s", delay: "-11s" },
  { char: "I", pos: "bottom-[8%] right-[5%]", size: "text-4xl", dur: "20s", delay: "-1s" },
] as const;

export function SubjectInitials() {
  return (
    <p
      className="mt-4 text-[11px] tracking-[0.55em] text-charcoal/40 md:text-xs"
      aria-label="Subject initials"
    >
      {SUBJECTS.join(" ")}
    </p>
  );
}

export function FloatingLetters() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      {FLOAT_PLACEMENTS.map(({ char, pos, size, dur, delay }, i) => (
        <span
          key={`${char}-${i}`}
          className={`letter-float absolute font-mono ${pos} ${size} text-charcoal`}
          style={{
            animationDuration: dur,
            animationDelay: delay,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
