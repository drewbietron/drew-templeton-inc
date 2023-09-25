import { Inconsolata, Inter } from "next/font/google";

const headerFont = Inter({
  weight: ["900"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-header",
});

const copyFont = Inconsolata({
  weight: ["400"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-copy",
});

const copyBoldFont = Inconsolata({
  weight: ["900"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-copy-bold",
});

export { headerFont, copyFont, copyBoldFont };
