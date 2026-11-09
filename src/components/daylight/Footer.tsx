import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "./data";
import { Accent } from "./ui";

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

const heading = "mb-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-d-on-deep-label";
const link = "py-1.5 text-d-on-deep-strong transition-colors hover:text-d-peach";

const Footer = () => {
    return (
        <footer className="theme-daylight bg-d-deep leading-[1.6] text-d-on-deep">
            <div className="d-wrap pb-8 pt-16 max-[760px]:pb-28">
                <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-b border-white/[0.12] pb-12">
                    <p className="m-0 min-w-0 flex-[1_1_480px] text-[length:clamp(30px,3.6vw,48px)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
                        Ready when you are. <Accent className="text-d-peach">Just call.</Accent>
                    </p>
                    <a
                        href={CONTACT.phoneHref}
                        className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-d-peach px-[26px] text-[16.5px] font-extrabold text-d-ink transition hover:brightness-105"
                    >
                        <Phone size={17} strokeWidth={2.2} />
                        {CONTACT.phoneDisplay}
                    </a>
                </div>

                <div className="flex flex-wrap justify-between gap-x-16 gap-y-9 pt-11">
                    <div className="flex max-w-[360px] flex-[1_1_260px] flex-col gap-3.5">
                        <Link href="/" aria-label="Softecof home" className="flex min-h-11 items-center gap-2.5 text-white">
                            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-white">
                                <Image src="/images/softecof-mark.png" alt="" width={24} height={24} className="h-6 w-6" />
                            </span>
                            <span className="text-[20px] font-extrabold tracking-[-0.03em]">Softecof</span>
                        </Link>
                        <p className="m-0 text-[14.5px] leading-[1.65]">
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
                            <a href={`mailto:${CONTACT.email}`} className={link}>
                                {CONTACT.email}
                            </a>
                            <span className="py-1.5 text-d-on-deep-strong">{CONTACT.address}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-11 flex flex-wrap justify-between gap-x-6 gap-y-2.5 text-[13.5px] text-d-on-deep-label">
                    <span>© {new Date().getFullYear()} Softecof. All rights reserved.</span>
                    <span>Based in Chittagong, serving clients worldwide.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
