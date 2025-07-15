import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import "../globals.css";
import Background from "@/components/ui/background";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Softecof - Enterprise Software Development",
    description: "Leading enterprise software development company specializing in digital transformation solutions.",
    icons: {
        icon: [
            {
                url: '/favicon.svg',
                type: 'image/svg+xml',
            }
        ],
        apple: [
            {
                url: '/favicon.svg',
                type: 'image/svg+xml',
            }
        ],
    },
};

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    function isValidLocale(l: string): l is typeof locales[number] {
        return (locales as readonly string[]).includes(l);
    }

    // Validate that the incoming `locale` parameter is valid
    if (!isValidLocale(locale)) {
        notFound();
    }

    // Providing all messages to the client
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <Background className="min-h-screen text-white">
                        {children}
                    </Background>
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 