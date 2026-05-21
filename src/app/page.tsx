import { Countdown } from "@/components/Countdown";
import { GlitchText } from "@/components/GlitchText";
import { PhotoEvidence } from "@/components/PhotoEvidence";
import { YouTubeSection } from "@/components/YouTubeSection";
import { TAPE_COUNT } from "@/lib/videos";

export default function Home() {
  return (
    <main className="relative z-10">
      <header className="flex items-start justify-between px-6 py-8 md:px-12">
        <p className="text-xs uppercase tracking-[0.35em]">
          <GlitchText>MBI</GlitchText>
        </p>
        <p className="text-right text-[10px] leading-relaxed tracking-[0.12em] text-charcoal/35">
          REF 009-MBI
          <br />
          {"/// UNVERIFIED ///"}
        </p>
      </header>

      <section className="flex flex-col items-center px-6 pb-12 text-center md:px-12 md:pb-16">
        <div className="w-full overflow-hidden">
          <h1 className="bleed-type text-charcoal">
            <span className="block">MBI</span>
          </h1>
          <p className="legal-name">MORAL BANKRUPTCY INC.</p>
          <p className="legal-sub">
            Reg. nowhere · Est. <span className="redacted">████</span>
          </p>
        </div>

        <div className="mt-14 flex w-full max-w-3xl flex-col items-center md:mt-20">
          <p className="text-xs uppercase tracking-[0.38em] text-charcoal/45">
            Transmission #1
          </p>
          <div className="mt-6">
            <Countdown />
          </div>
        </div>

        <div className="mt-12 text-sm md:mt-14 md:text-base">
          <p className="text-charcoal">Nine (9) subjects.</p>
          <p className="mt-5 flex items-baseline justify-center gap-3 text-charcoal/45">
            <span>—</span>
            <span className="redacted-bar">[REDACTED]</span>
          </p>
        </div>
      </section>

      <hr className="rule-arterial mx-6 md:mx-12" />

      <PhotoEvidence />

      <section className="px-6 py-20 md:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/45">
            Channel
          </p>
          <p className="text-[10px] tracking-[0.2em] text-charcoal/25">
            INDEX 001–{String(TAPE_COUNT).padStart(2, "0")}
          </p>
        </div>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-charcoal/60">
          The YouTube channel isn&apos;t content. It&apos;s evidence.
        </p>
        <p className="mt-6 text-sm tracking-[0.06em] text-charcoal/70">
          Playback does not imply consent.
        </p>
        <p className="mt-5 text-xs tracking-widest text-charcoal/35">
          [CLASSIFIED OUTPUT — VIEW AT OWN RISK]
        </p>
        <p className="mt-3 text-[10px] text-charcoal/25">
          Archive status: <span className="redacted">██████</span>
        </p>
      </section>

      <YouTubeSection />

      <section className="border-t border-charcoal/10 px-6 py-16 md:px-12">
        <p className="text-[10px] leading-loose tracking-[0.15em] text-charcoal/30">
          {"/// OPERATING PRINCIPLE ///"}
          <br />
          Controlled chaos. Documented late.
          <br />
          No merch. No mailing list. No explanation.
        </p>
      </section>

      <footer className="border-t border-charcoal/15 px-6 py-12 md:px-12">
        <p className="text-[10px] leading-relaxed text-charcoal/40">
          MORAL BANKRUPTCY INC. — All operations undocumented prior to this
          filing. No inquiries. No press. No refunds on reputation.
        </p>
        <p className="mt-4 text-[10px] text-charcoal/25">
          LAT <span className="redacted">██.██</span> · LNG{" "}
          <span className="redacted">███.██</span> · LAST SYNC UNKNOWN
        </p>
        <p className="mt-6 text-[10px] text-charcoal/30">
          © {new Date().getFullYear()} MBI. Signal only.
        </p>
      </footer>
    </main>
  );
}
