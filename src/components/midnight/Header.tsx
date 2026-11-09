"use client"
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { midnightFonts } from "./fonts";
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
        <header className={`theme-midnight fixed inset-x-0 top-0 z-50 leading-[1.55] px-[clamp(12px,3vw,32px)] pt-3.5 ${midnightFonts}`}>
            <div className="mx-auto max-w-[1208px] rounded-[18px] border border-white/[0.08] bg-[rgba(12,21,21,0.72)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-[16px]">
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2 max-[760px]:gap-x-3 pl-[18px] pr-2">
                    <Link href="/" aria-label="Softecof home" onClick={close} className="flex min-h-11 items-center gap-2.5 text-white">
                        <Image src="/images/softecof-mark.png" alt="" width={30} height={30} className="h-[30px] w-[30px]" priority />
                        <span className="text-[19px] font-semibold tracking-[-0.03em]">Softecof</span>
                    </Link>

                    <nav aria-label="Main" className="flex flex-wrap gap-x-1 text-[14.5px] max-[760px]:hidden">
                        {navLinks.map((l) => (
                            <Link
                                key={l.label}
                                href={l.href}
                                className="rounded-[10px] px-3.5 py-2.5 text-m-nav transition-colors hover:text-m-teal-light"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href={CONTACT.phoneHref}
                            className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3.5 text-[14.5px] text-m-nav transition-colors hover:text-m-teal-light max-[760px]:hidden"
                        >
                            <Phone size={16} />
                            {CONTACT.phoneDisplay}
                        </a>
                        <Link href="/#contact" onClick={close} className="m-btn-primary min-h-11 !gap-2 !rounded-xl px-[18px] text-[14.5px]">
                            Get a quote
                            <ArrowUpRight size={15} strokeWidth={2.2} />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? "Close menu" : "Open menu"}
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-m-text min-[761px]:hidden"
                        >
                            {open ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {open && (
                    <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/[0.08] p-2 min-[761px]:hidden">
                        {navLinks.map((l) => (
                            <Link
                                key={l.label}
                                href={l.href}
                                onClick={close}
                                className="flex min-h-11 items-center rounded-[10px] px-3.5 text-[15px] text-m-soft hover:bg-white/5 hover:text-m-teal-light"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <a
                            href={CONTACT.phoneHref}
                            className="flex min-h-11 items-center gap-2 rounded-[10px] px-3.5 text-[15px] text-m-soft hover:bg-white/5 hover:text-m-teal-light"
                        >
                            <Phone size={16} />
                            {CONTACT.phoneDisplay}
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
