"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const ANSWER = "5m";

function normalizeGuess(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

type TransmissionGateProps = {
  children: ReactNode;
};

export function TransmissionGate({ children }: TransmissionGateProps) {
  const [open, setOpen] = useState(false);
  const [solved, setSolved] = useState(false);
  const [guess, setGuess] = useState("");
  const [reject, setReject] = useState(false);
  const inputId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setReject(false);
    if (!solved) setGuess("");
  }, [solved]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (normalizeGuess(guess) === ANSWER) {
      setSolved(true);
      setReject(false);
      return;
    }
    setReject(true);
    setTimeout(() => setReject(false), 450);
  };

  return (
    <>
      {children}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-8 text-[10px] uppercase tracking-[0.32em] text-charcoal/35 transition-colors hover:text-charcoal/60"
      >
        <span className="glitch inline-block" data-text="[ PREVIEW ]">
          [ PREVIEW ]
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-[2px] md:p-8"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${inputId}-title`}
            className="relative w-full max-w-lg border border-linen/15 bg-charcoal px-6 py-8 text-linen md:px-10 md:py-10"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 text-[10px] tracking-[0.25em] text-linen/35 hover:text-linen/70"
              aria-label="Close"
            >
              ESC
            </button>

            {!solved ? (
              <>
                <p
                  id={`${inputId}-title`}
                  className="text-[10px] uppercase tracking-[0.35em] text-linen/40"
                >
                  Transmission #1 — Access
                </p>
                <p className="mt-6 text-xs tracking-[0.2em] text-linen/30">
                  Pattern incomplete. Fill blank to proceed.
                </p>

                <div
                  className={`mt-10 flex flex-wrap items-end justify-center gap-3 md:gap-5 ${
                    reject ? "puzzle-reject" : ""
                  }`}
                >
                  <PatternCell value="15m" />
                  <span className="pb-2 text-[10px] tracking-widest text-linen/25">
                    slt
                  </span>
                  <PatternCell value="10m" />
                  <span className="pb-2 text-[10px] tracking-widest text-linen/25">
                    slt
                  </span>
                  <PatternBlank
                    id={inputId}
                    value={guess}
                    onChange={setGuess}
                    onSubmit={submit}
                  />
                </div>

                <form onSubmit={submit} className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="border border-linen/20 px-6 py-2 text-[10px] uppercase tracking-[0.28em] text-linen/70 transition-colors hover:border-linen/40 hover:text-linen"
                  >
                    Verify
                  </button>
                </form>
              </>
            ) : (
              <>
                <p className="text-[10px] uppercase tracking-[0.35em] text-linen/40">
                  Transmission #1 — Preview
                </p>
                <video
                  src="/transmission-1-preview.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="mt-6 w-full border border-linen/10 bg-black"
                >
                  <track kind="captions" />
                </video>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function PatternCell({ value }: { value: string }) {
  return (
    <span className="tabular-nums text-2xl tracking-tight text-linen/90 md:text-3xl">
      {value}
    </span>
  );
}

function PatternBlank({
  id,
  value,
  onChange,
  onSubmit,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  return (
    <label className="flex flex-col items-center gap-1">
      <span className="text-[9px] tracking-[0.2em] text-linen/35">???</span>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="___"
        autoComplete="off"
        spellCheck={false}
        className="puzzle-blank w-[4.5rem] border-b border-linen/30 bg-transparent py-1 text-center text-2xl tracking-tight text-linen placeholder:text-linen/20 focus:border-linen/60 focus:outline-none md:w-[5.5rem] md:text-3xl"
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit(e);
        }}
      />
    </label>
  );
}
