import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { classicFonts } from "@/components/classic/fonts";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Softecof - AI-Driven Company Helping SMEs Grow",
        template: "%s | Softecof",
    },
    description: SITE_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "/",
        siteName: "Softecof",
        title: "Softecof - AI-Driven Company Helping SMEs Grow",
        description: SITE_DESCRIPTION,
        locale: "en_US",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Softecof - AI-driven company helping SMEs grow" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Softecof - AI-Driven Company Helping SMEs Grow",
        description: SITE_DESCRIPTION,
        images: ["/og-image.png"],
    },
    icons: {
        icon: [{ url: "/softecof.png", type: "image/png" }],
        apple: [{ url: "/softecof.png", type: "image/png" }],
    },
};

export const viewport: Viewport = {
    themeColor: "#0B1F1D",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={classicFonts}>
            <body className="theme-classic">
                <a
                    href="#main"
                    className="sr-only z-[60] rounded-[4px] bg-c-teal px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
                >
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
