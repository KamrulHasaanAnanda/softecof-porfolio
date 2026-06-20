"use client"
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", fn);
        fn();
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const go = (href: string) => {
        setOpen(false);
        if (href.startsWith("/#")) {
            if (window.location.pathname !== "/") {
                window.location.href = `/${href.slice(1)}`;
            } else {
                document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = href;
        }
    };

    const onDarkHero = !scrolled;

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "nav-solid py-0" : "py-4"}`}>
            <div className={`container-site flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[68px]" : "h-[56px] rounded-2xl nav-glass px-6 sm:px-8"}`}>
                <Link href="/" className="flex items-center gap-3">
                    <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl ${onDarkHero && !scrolled ? "bg-white/10" : "bg-accent-soft"}`}>
                        <Image src="/softecof.png" alt="Softecof" width={28} height={28} className="h-7 w-7" />
                    </div>
                    <span className={`font-bold text-[17px] tracking-tight ${onDarkHero && !scrolled ? "text-white" : "text-ink"}`}>
                        Softecof
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {links.map((l) => (
                        <button
                            key={l.name}
                            onClick={() => go(l.href)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                onDarkHero && !scrolled
                                    ? "text-white/80 hover:text-white hover:bg-white/10"
                                    : "text-ink/75 hover:text-ink hover:bg-muted"
                            }`}
                        >
                            {l.name}
                        </button>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={() => go("/#contact")}
                        className={`inline-flex items-center gap-2 rounded-xl font-semibold text-sm px-5 py-2.5 transition-all duration-300 ${
                            onDarkHero && !scrolled
                                ? "bg-white text-ink hover:bg-white/90"
                                : "btn-accent !py-2.5 !px-5"
                        }`}
                    >
                        Get a quote
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                <button
                    className={`lg:hidden p-2 rounded-lg ${onDarkHero && !scrolled ? "text-white" : "text-ink"}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden mx-5 mt-2 rounded-2xl border border-border bg-white p-4 shadow-xl">
                    {links.map((l) => (
                        <button key={l.name} onClick={() => go(l.href)} className="block w-full text-left py-3 px-2 text-sm font-medium rounded-lg hover:bg-muted">
                            {l.name}
                        </button>
                    ))}
                    <button onClick={() => go("/#contact")} className="btn-accent w-full mt-2">
                        Get a quote
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
