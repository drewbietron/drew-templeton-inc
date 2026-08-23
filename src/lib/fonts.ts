import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

/**
 * Fonts are self-hosted through next/font so there is no render-blocking
 * request to Google Fonts and no layout shift (size-adjust fallbacks are
 * generated automatically).
 */
export const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});
