import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Softecof - Tech Support & Software for Small Businesses",
    description: "Softecof is a global technology partner helping SMEs worldwide with IT support, custom software, and SaaS services.",
    icons: {
        icon: [{ url: "/softecof.png", type: "image/png" }],
        apple: [{ url: "/softecof.png", type: "image/png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={jakarta.variable}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
