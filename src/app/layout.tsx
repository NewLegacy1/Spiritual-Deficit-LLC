import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { ArtifactChrome } from "@/components/ArtifactChrome";
import { InsideRefs } from "@/components/InsideRefs";
import { CursorTrail } from "@/components/CursorTrail";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "MBI",
  description: "Controlled chaos. Documented late.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="min-h-screen font-mono antialiased">
        <ArtifactChrome />
        <InsideRefs />
        <GrainOverlay />
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
