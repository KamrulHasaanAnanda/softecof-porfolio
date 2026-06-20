"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="surface-ink pt-16 pb-8">
            <div className="container-site">
                <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Image src="/softecof.png" alt="Softecof" width={24} height={24} className="brightness-0 invert" />
                            </div>
                            <span className="font-bold text-xl text-white">Softecof</span>
                        </div>
                        <p className="text-sm text-white/45 leading-relaxed max-w-xs">
                            Global technology partner for small and medium businesses—tech support, custom software, and SaaS.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-2 hover:text-white transition-colors">
                            Get in touch <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35 mb-5">Navigate</p>
                        <ul className="space-y-3 text-sm text-white/55">
                            {[
                                { l: "Home", h: "/" },
                                { l: "Services", h: "/services" },
                                { l: "Portfolio", h: "/portfolio" },
                                { l: "About", h: "/#about" },
                                { l: "Contact", h: "/#contact" },
                            ].map(({ l, h }) => (
                                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35 mb-5">Services</p>
                        <ul className="space-y-3 text-sm text-white/55">
                            {["IT Support", "Custom Software", "SaaS", "Web & Digital", "Maintenance"].map((s) => (
                                <li key={s}><Link href="/services" className="hover:text-white transition-colors">{s}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35 mb-5">Contact</p>
                        <p className="text-sm text-white/55">Global HQ · GEC, Chittagong</p>
                        <a href="tel:+8801626889072" className="text-sm text-white/55 mt-2 block hover:text-white transition-colors">+880 1626 889072</a>
                        <a href="mailto:contact@softecof.com" className="text-sm text-white/55 mt-1 block hover:text-white transition-colors">contact@softecof.com</a>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30">
                    <p>© {new Date().getFullYear()} Softecof. All rights reserved.</p>
                    <p>Global company · HQ in Chittagong, Bangladesh</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
