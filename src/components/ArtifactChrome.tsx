const STAMPS = [
  { label: "UNAUTHORIZED COPY", pos: "top-[18%] left-4 md:left-8" },
  { label: "DO NOT DISTRIBUTE", pos: "top-[42%] right-4 md:right-8" },
  { label: "WITNESS LOG — INCOMPLETE", pos: "bottom-[28%] left-4 md:left-8" },
] as const;

export function ArtifactChrome() {
  return (
    <>
      <div className="wash-texture" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      {STAMPS.map(({ label, pos }) => (
        <p
          key={label}
          className={`pointer-events-none fixed ${pos} z-[1] hidden max-w-[8rem] text-[9px] leading-snug tracking-[0.2em] text-charcoal/20 md:block`}
          aria-hidden="true"
        >
          {label}
        </p>
      ))}
    </>
  );
}
