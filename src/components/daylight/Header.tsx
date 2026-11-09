"use client"
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, navLinks } from "./data";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className="theme-daylight sticky top-0 z-50 border-b border-d-ink/[0.06] bg-[rgba(251,250,247,0.86)] leading-[1.6] text-d-ink backdrop-blur-[14px]">
            <div className="d-wrap flex flex-wrap items-center justify-between gap-x-7 gap-y-2 py-3 max-[760px]:gap-x-3">
                <Link href="/" aria-label="Softecof home" onClick={close} className="flex min-h-11 items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_1px_2px_rgba(12,26,25,0.08),0_6px_16px_-8px_rgba(12,26,25,0.25)]">
                        <Image src="/images/softecof-mark.png" alt="" width={26} height={26} className="h-[26px] w-[26px]" priority />
                    </span>
                    <span className="text-[20px] font-extrabold tracking-[-0.03em]">Softecof</span>
                </Link>

                <nav aria-label="Main" className="flex flex-wrap gap-x-[30px] text-[15px] font-medium max-[760px]:hidden">
                    {navLinks.map((l) => (
                        <Link key={l.label} href={l.href} className="py-[11px] text-d-nav transition-colors hover:text-d-teal">
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2.5">
                    <a
                        href={CONTACT.phoneHref}
                        className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-d-line-strong bg-white px-4 text-[14.5px] font-semibold transition-colors hover:text-d-teal max-[760px]:hidden"
                    >
                        <Phone size={15} />
                        {CONTACT.phoneDisplay}
                    </a>
                    <Link
                        href="/#contact"
                        onClick={close}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-d-teal px-5 text-[14.5px] font-bold text-white shadow-[0_8px_20px_-10px_rgba(30,122,111,0.8)] transition hover:brightness-110"
                    >
                        Get a quote
                        <ArrowUpRight size={15} strokeWidth={2.2} />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-d-line-strong bg-white min-[761px]:hidden"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {open && (
                <nav id="mobile-menu" aria-label="Mobile" className="d-wrap border-t border-d-ink/[0.06] pb-3 pt-2 min-[761px]:hidden">
                    {navLinks.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            onClick={close}
                            className="flex min-h-11 items-center rounded-xl px-2 text-[15.5px] font-semibold text-d-nav hover:bg-d-sand hover:text-d-teal"
                        >
                            {l.label}
                        </Link>
                    ))}
                    <a
                        href={CONTACT.phoneHref}
                        className="flex min-h-11 items-center gap-2 rounded-xl px-2 text-[15.5px] font-semibold text-d-nav hover:bg-d-sand hover:text-d-teal"
                    >
                        <Phone size={16} />
                        {CONTACT.phoneDisplay}
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
