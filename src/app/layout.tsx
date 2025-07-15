import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
                url: '/softecof.png',
                type: 'image/png',
            }
        ],
        apple: [
            {
                url: '/softecof.png',
                type: 'image/png',
            }
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Background className="min-h-screen  text-white">
                    {children}
                </Background>
            </body>
        </html>
    );
} 