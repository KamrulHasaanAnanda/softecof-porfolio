import { IBM_Plex_Mono, Libre_Franklin } from "next/font/google";

const franklin = Libre_Franklin({
    variable: "--font-franklin",
    subsets: ["latin"],
});

// Only used inside the assistant panel and workflow, where the UI is "machine" speaking
const plexMono = IBM_Plex_Mono({
    variable: "--font-plex-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

/** Applied on <html> in src/app/layout.tsx. */
export const classicFonts = `${franklin.variable} ${plexMono.variable}`;
