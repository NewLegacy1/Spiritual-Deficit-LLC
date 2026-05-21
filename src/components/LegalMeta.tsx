function PinIcon() {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="currentColor"
      className="shrink-0"
      aria-hidden
    >
      <path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0zm0 6.25a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="currentColor"
      className="shrink-0"
      aria-hidden
    >
      <path d="M2 0h1v1.5h5V0h1v1.5h1.5v9H.5V1.5H2V0zm.5 3v1.5h1.5V3H2.5zm3 0v1.5H7V3H5.5zm-3 3v1.5h1.5V6H2.5zm3 0v1.5H7V6H5.5zM1 2.5h9v6.5H1V2.5z" />
    </svg>
  );
}

export function LegalMeta() {
  return (
    <p className="legal-sub mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <span className="legal-meta-item">
        <span className="legal-meta-label">Reg.</span>
        <span className="legal-meta-icon">
          <PinIcon />
        </span>
        <span className="legal-meta-value">6IX</span>
      </span>
      <span className="text-charcoal/20" aria-hidden>
        ·
      </span>
      <span className="legal-meta-item">
        <span className="legal-meta-label">Est.</span>
        <span className="legal-meta-icon">
          <CalendarIcon />
        </span>
        <span className="legal-meta-value">&apos;26</span>
      </span>
    </p>
  );
}
