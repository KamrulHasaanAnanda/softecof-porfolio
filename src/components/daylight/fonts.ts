import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

// Italic accent word in headings
const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

/** Option C uses Plus Jakarta Sans + Instrument Serif; apply on <html> in src/app/layout.tsx when switching back. */
export const daylightFonts = `${jakarta.variable} ${instrumentSerif.variable}`;
