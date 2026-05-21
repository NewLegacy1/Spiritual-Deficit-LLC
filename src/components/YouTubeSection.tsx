import { TAPE_SLOTS } from "@/lib/videos";

const EPISODES = TAPE_SLOTS.map((videoId, i) => ({
  videoId,
  tag: `[EPISODE ${String(i + 1).padStart(2, "0")}]`,
  tapeLabel: `[TAPE ${String(i + 1).padStart(2, "0")} — LOADING]`,
}));

export function YouTubeSection() {
  return (
    <section id="evidence" className="border-t border-charcoal/15 px-6 py-24 md:px-12">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-charcoal/45">
        Evidence
      </p>
      <GlitchHeading>Not content.</GlitchHeading>
      <p className="mt-3 text-[10px] tracking-[0.18em] text-charcoal/25">
        RAW FEED · NO CONTEXT PROVIDED
      </p>

      <ul className="mt-16 grid gap-14 md:grid-cols-3">
        {EPISODES.map(({ videoId, tag, tapeLabel }, i) => (
          <li key={tag} className="group">
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <p className="text-xs tracking-widest text-arterial">{tag}</p>
              <p className="text-[9px] tracking-[0.15em] text-charcoal/25">
                TAPE {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            {videoId ? (
              <TapePlayer videoId={videoId} tag={tag} />
            ) : (
              <TapePlaceholder tapeLabel={tapeLabel} />
            )}
            <p className="mt-2 text-[9px] tracking-[0.12em] text-charcoal/20">
              DURATION UNKNOWN · WITNESS COUNT:{" "}
              <span className="redacted">█</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TapePlaceholder({ tapeLabel }: { tapeLabel: string }) {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-charcoal/25 bg-charcoal">
      <p className="text-center text-[11px] tracking-[0.22em] text-linen/40 md:text-xs">
        {tapeLabel}
      </p>
    </div>
  );
}

function TapePlayer({ videoId, tag }: { videoId: string; tag: string }) {
  return (
    <div className="relative aspect-video overflow-hidden border border-charcoal/25 bg-charcoal/[0.03]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between px-2 py-1 text-[8px] tracking-widest text-linen/40 opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      >
        <span>REC</span>
        <span>???</span>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
        title={tag}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full contrast-[0.92] grayscale transition-[filter] duration-700 group-hover:grayscale-[0.4]"
      />
    </div>
  );
}

function GlitchHeading({ children }: { children: string }) {
  return (
    <h2
      className="glitch text-2xl md:text-3xl"
      data-text={children}
    >
      {children}
    </h2>
  );
}
