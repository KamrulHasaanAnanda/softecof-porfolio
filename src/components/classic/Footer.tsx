import Link from "next/link";
import { CONTACT, navLinks } from "./data";

const heading = "m-0 mb-2 text-[15px] font-semibold text-white";
const link = "block py-1 transition-colors hover:text-white";

const Footer = () => {
    return (
        <footer className="c-on-dark bg-c-footer text-[15.5px] text-c-on-footer">
            <div className="c-wrap pb-8 pt-12 max-[760px]:pb-24">
                <div className="flex flex-wrap justify-between gap-x-16 gap-y-9">
                    <div className="max-w-[340px] flex-[1_1_260px]">
                        <p className="m-0 mb-2 text-[20px] font-semibold text-white">Softecof</p>
                        <p className="m-0">An AI-driven company helping SMEs in Bangladesh and worldwide with AI agents, custom software, SaaS and tech support.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-16 gap-y-8">
                        <nav aria-label="Footer">
                            <p className={heading}>Company</p>
                            {navLinks.map((l) => (
                                <Link key={l.label} href={l.href} className={link}>
                                    {l.label}
                                </Link>
                            ))}
                            <Link href="/faq" className={link}>
                                FAQ
                            </Link>
                        </nav>
                        <div>
                            <p className={heading}>Get in touch</p>
                            <a href={CONTACT.phoneHref} className={link}>
                                {CONTACT.phoneDisplay}
                            </a>
                            <a href={`mailto:${CONTACT.email}`} className={link}>
                                {CONTACT.email}
                            </a>
                            <span className="block py-1">{CONTACT.address}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-[14.5px]">
                    <p className="m-0">© {new Date().getFullYear()} Softecof. All rights reserved.</p>
                    <a href="/llms.txt" className="text-c-on-footer hover:text-white">
                        For AI assistants
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
