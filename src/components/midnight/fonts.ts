import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"] });

/** Option B uses Geist + Geist Mono; apply on each Midnight root (page wrapper, header, footer). */
export const midnightFonts = `${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`;
