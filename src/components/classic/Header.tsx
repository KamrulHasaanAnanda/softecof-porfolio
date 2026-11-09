"use client"
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        <header className="c-on-dark sticky top-0 z-50 border-b border-white/15 bg-c-night">
            <div className="c-wrap flex min-h-[68px] items-center justify-between gap-x-8">
                <Link href="/" aria-label="Softecof home" onClick={close} className="flex min-h-11 items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white">
                        <Image src="/images/softecof-mark.png" alt="" width={26} height={26} className="h-[26px] w-[26px]" priority />
                    </span>
                    <span className="text-[20px] font-semibold tracking-[-0.01em] text-white">Softecof</span>
                </Link>

                <div className="flex items-center gap-x-8 max-[900px]:hidden">
                    <nav aria-label="Main" className="flex gap-x-6 text-[15.5px]">
                        {navLinks.map((l) => (
                            <Link key={l.label} href={l.href} className="py-3 text-c-on-night transition-colors hover:text-white">
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                    <a href={CONTACT.phoneHref} className="whitespace-nowrap text-[15.5px] font-semibold text-c-peach hover:text-white">
                        {CONTACT.phoneDisplay}
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center text-white min-[901px]:hidden"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <nav id="mobile-menu" aria-label="Mobile" className="c-wrap border-t border-white/15 pb-3 pt-1 min-[901px]:hidden">
                    {navLinks.map((l) => (
                        <Link key={l.label} href={l.href} onClick={close} className="flex min-h-12 items-center text-[17px] text-white">
                            {l.label}
                        </Link>
                    ))}
                    <a href={CONTACT.phoneHref} className="flex min-h-12 items-center text-[17px] font-semibold text-c-peach">
                        {CONTACT.phoneDisplay}
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
