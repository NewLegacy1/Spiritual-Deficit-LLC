import { PizzaGlitch } from "@/components/PizzaGlitch";

/** Fixed scatter — reads random, hydrates clean. */
const REF_PLACEMENTS = [
  {
    id: "slt-1",
    text: "15m slt 10m slt 5m ???",
    className:
      "top-[22%] right-[5%] md:right-[10%] -rotate-1 text-[9px] tracking-[0.14em]",
  },
  {
    id: "fawdh",
    text: "FAWDH",
    className:
      "top-[48%] left-[4%] md:left-[7%] rotate-[2deg] text-[10px] tracking-[0.35em]",
  },
  {
    id: "pizza-johns",
    text: "Pizza Johns",
    className:
      "top-[62%] right-[8%] md:right-[14%] -rotate-[1.5deg] text-[9px] tracking-[0.08em]",
  },
  {
    id: "slt-2",
    text: "15m slt 10m slt 5m ???",
    className:
      "bottom-[22%] left-[12%] md:left-[18%] rotate-1 text-[8px] tracking-[0.12em] opacity-60",
  },
  {
    id: "fawdh-2",
    text: "FAWDH",
    className:
      "bottom-[8%] right-[6%] md:right-[12%] -rotate-2 text-[8px] tracking-[0.4em] opacity-50",
  },
] as const;

export function InsideRefs() {
  return (
    <>
      {REF_PLACEMENTS.map(({ id, text, className }) => (
        <p
          key={id}
          className={`pointer-events-none fixed z-[2] text-charcoal/18 ${className}`}
          aria-hidden="true"
        >
          {text}
        </p>
      ))}
      <PizzaGlitch />
    </>
  );
}
