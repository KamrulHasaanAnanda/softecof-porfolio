import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { classicFonts } from "@/components/classic/fonts";
import { SITE_URL } from "@/lib/site-content";
import { organizationJsonLd, rootMetadata } from "@/lib/seo";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: rootMetadata.title,
        template: "%s | Softecof",
    },
    description: rootMetadata.description,
    applicationName: "Softecof",
    authors: [{ name: "Softecof", url: SITE_URL }],
    creator: "Softecof",
    publisher: "Softecof",
    category: "Software company",
    keywords: [
        "Softecof",
        "AI agents for small business",
        "custom software development Bangladesh",
        "software company Chittagong",
        "software company Chattogram",
        "IT support for SMEs",
        "SaaS development company",
        "business website Bangladesh",
        "SME software partner",
    ],
    alternates: { canonical: "/", types: rootMetadata.aiAlternateTypes },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        url: "/",
        siteName: "Softecof",
        title: rootMetadata.title,
        description: rootMetadata.description,
        locale: "en_US",
        images: [rootMetadata.shareImage],
    },
    twitter: {
        card: "summary_large_image",
        title: rootMetadata.title,
        description: rootMetadata.description,
        images: [rootMetadata.shareImage.url],
    },
    other: {
        "geo.region": "BD-B",
        "geo.placename": "Chittagong",
        "geo.position": "22.3594;91.8216",
        ICBM: "22.3594, 91.8216",
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
                <JsonLd data={organizationJsonLd} />
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
