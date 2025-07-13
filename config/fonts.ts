import { Fira_Code as FontMono, Inter as FontSans , Kanit as FontKanit } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const kanit = FontKanit({
  subsets: ["thai"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-kanit",
});