import Image from "next/image";
import Link from "next/link";
import { midnightFonts } from "./fonts";
import { CONTACT } from "./data";

const columns = [
    {
        title: "Services",
        links: [
            { label: "IT & Tech Support", href: "/services" },
            { label: "SaaS Services", href: "/services" },
            { label: "Custom Software", href: "/services" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Work", href: "/#work" },
            { label: "Process", href: "/#process" },
            { label: "Team", href: "/#team" },
            { label: "Contact", href: "/#contact" },
        ],
    },
];

const heading = "mb-2 font-mono text-[11.5px] uppercase tracking-[0.08em] text-m-dim";
const link = "py-1.5 text-m-nav transition-colors hover:text-m-teal-light";

const Footer = () => {
    return (
        <footer className={`theme-midnight overflow-hidden border-t border-white/[0.07] bg-m-footer ${midnightFonts} leading-[1.55] text-m-text`}>
            <div className="m-wrap pt-14">
                <div className="flex flex-wrap justify-between gap-x-16 gap-y-9">
                    <div className="flex max-w-[360px] flex-[1_1_260px] flex-col gap-3.5">
                        <Link href="/" aria-label="Softecof home" className="flex min-h-11 items-center gap-2.5 text-white">
                            <Image src="/images/softecof-mark.png" alt="" width={28} height={28} className="h-7 w-7" />
                            <span className="text-[19px] font-semibold tracking-[-0.03em]">Softecof</span>
                        </Link>
                        <p className="m-0 text-[14.5px] leading-[1.6] text-m-subtle">
                            Global SME technology partner. Tech support, custom software and SaaS platforms for small and medium businesses worldwide.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-16 gap-y-7 text-[14.5px]">
                        {columns.map((col) => (
                            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-0.5">
                                <span className={heading}>{col.title}</span>
                                {col.links.map((l) => (
                                    <Link key={l.label} href={l.href} className={link}>
                                        {l.label}
                                    </Link>
                                ))}
                            </nav>
                        ))}
                        <div className="flex flex-col gap-0.5">
                            <span className={heading}>Get in touch</span>
                            <a href={CONTACT.phoneHref} className={link}>
                                {CONTACT.phoneDisplay}
                            </a>
                            <a href={`mailto:${CONTACT.email}`} className={link}>
                                {CONTACT.email}
                            </a>
                            <span className="py-1.5 text-m-nav">{CONTACT.address}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-white/[0.07] pt-[22px] text-[13.5px] text-m-dim">
                    <span>© {new Date().getFullYear()} Softecof. All rights reserved.</span>
                    <span>Based in Chittagong, serving clients worldwide.</span>
                </div>

                <div
                    aria-hidden="true"
                    className="mt-6 select-none bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_85%)] bg-clip-text text-center text-[length:clamp(72px,17vw,250px)] font-bold leading-[0.78] tracking-[-0.07em] text-transparent"
                >
                    Softecof
                </div>
            </div>
        </footer>
    );
};

export default Footer;
