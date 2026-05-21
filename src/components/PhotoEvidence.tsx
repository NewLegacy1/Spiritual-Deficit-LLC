import Image from "next/image";

export function PhotoEvidence() {
  return (
    <section className="relative w-screen max-w-[100vw] bg-charcoal overflow-hidden">
      <div className="photo-drop">
        <Image
          src="/undisclosed.jpg"
          alt=""
          width={2400}
          height={1600}
          priority
          className="photo-evidence-img block h-auto w-full object-cover"
          sizes="100vw"
        />
      </div>
      <p className="px-6 py-6 text-[11px] tracking-[0.12em] text-linen/35 md:px-12 md:py-8">
        — UNDISCLOSED LOCATION. 2026.
      </p>
    </section>
  );
}
