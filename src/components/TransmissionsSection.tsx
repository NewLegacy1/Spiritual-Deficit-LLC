"use client";

import Image from "next/image";
import { useTransmissionGate } from "@/components/TransmissionGate";

const TRANSMISSIONS = [
  { id: 1, label: "Transmission #1", preview: true },
  { id: 2, label: "Transmission #2", preview: false },
  { id: 3, label: "Transmission #3", preview: false },
] as const;

export function TransmissionsSection() {
  const { openGate } = useTransmissionGate();

  return (
    <section
      id="transmissions"
      className="border-t border-charcoal/10 px-6 py-20 md:px-12 md:py-24"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-charcoal/45">
        Transmissions
      </p>

      <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {TRANSMISSIONS.map(({ id, label, preview }) => (
          <li key={id}>
            <p className="mb-3 text-[10px] tracking-[0.22em] text-charcoal/30">
              {label}
            </p>
            {preview ? (
              <button
                type="button"
                onClick={openGate}
                className="group relative aspect-video w-full cursor-crosshair overflow-hidden border border-charcoal/25 bg-charcoal"
                aria-label="Transmission 1 preview"
              >
                <Image
                  src="/transmission-1-thumb.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover photo-evidence-img transition-[filter] duration-500 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-charcoal/45 transition-colors group-hover:bg-charcoal/35" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="transmission-blocked text-center text-[10px] tracking-[0.28em] text-linen/30">
                    [ BLOCKED ]
                  </span>
                </span>
              </button>
            ) : (
              <div
                className="flex aspect-video items-center justify-center bg-charcoal"
                aria-hidden
              >
                <span className="transmission-blocked min-w-[70%] text-center text-[10px] tracking-[0.28em] text-linen/25">
                  [ BLOCKED ]
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
