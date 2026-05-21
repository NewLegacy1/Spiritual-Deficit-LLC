import { type ReactNode } from "react";

type GlitchTextProps = {
  children: ReactNode;
  as?: "span" | "p" | "h1" | "h2" | "h3";
  className?: string;
};

export function GlitchText({
  children,
  as: Tag = "span",
  className = "",
}: GlitchTextProps) {
  const text =
    typeof children === "string" ? children : String(children ?? "");

  return (
    <Tag
      className={`glitch ${className}`}
      data-text={text}
    >
      {children}
    </Tag>
  );
}
