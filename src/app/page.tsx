import { Countdown } from "@/components/Countdown";
import {
  PreviewButton,
  TransmissionGateProvider,
} from "@/components/TransmissionGate";
import { GlitchText } from "@/components/GlitchText";
import { SubjectInitials } from "@/components/FloatingLetters";
import { LegalMeta } from "@/components/LegalMeta";
import { PhotoEvidence } from "@/components/PhotoEvidence";
import { TransmissionsSection } from "@/components/TransmissionsSection";

export default function Home() {
  return (
    <TransmissionGateProvider>
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
            <LegalMeta />
          </div>

          <div className="mt-14 flex w-full max-w-3xl flex-col items-center md:mt-20">
            <p className="text-xs uppercase tracking-[0.38em] text-charcoal/45">
              Transmission #1
            </p>
            <div className="mt-6">
              <Countdown />
            </div>
            <PreviewButton />
          </div>

          <div className="mt-12 text-sm md:mt-14 md:text-base">
            <p className="text-charcoal">Nine (9) subjects.</p>
            <SubjectInitials />
            <p className="mt-5 flex items-baseline justify-center gap-3 text-charcoal/45">
              <span>—</span>
              <span className="redacted-bar">[REDACTED]</span>
            </p>
          </div>
        </section>

        <PhotoEvidence />

        <TransmissionsSection />

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
    </TransmissionGateProvider>
  );
}
