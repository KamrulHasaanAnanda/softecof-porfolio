import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site-content";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

// Italic accent word in headings (Option C · Daylight)
const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Softecof - Tech Support & Software for Small Businesses",
        template: "%s | Softecof",
    },
    description: SITE_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: "Softecof",
        title: "Softecof - Tech Support & Software for Small Businesses",
        description: SITE_DESCRIPTION,
        locale: "en_US",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Softecof - Tech support, custom software and SaaS for small businesses" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Softecof - Tech Support & Software for Small Businesses",
        description: SITE_DESCRIPTION,
        images: ["/og-image.png"],
    },
    icons: {
        icon: [{ url: "/softecof.png", type: "image/png" }],
        apple: [{ url: "/softecof.png", type: "image/png" }],
    },
};

export const viewport: Viewport = {
    themeColor: "#FBFAF7",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable}`}>
            <body>
                <a
                    href="#main"
                    className="sr-only z-[60] rounded-full bg-d-ink px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
                >
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
