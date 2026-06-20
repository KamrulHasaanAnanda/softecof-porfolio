"use client"
import { Headphones, Layers, Cloud, Globe, Building, Wrench, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        icon: Headphones,
        title: "IT & Tech Support",
        desc: "Keep your business running with reliable help when things break or slow down.",
        features: ["Remote & on-site support", "Hardware & software troubleshooting", "Network setup & Wi-Fi", "Helpdesk & ticket tracking"],
        featured: true,
    },
    {
        icon: Layers,
        title: "Custom Software",
        desc: "Build tools that match how your business actually works—not generic off-the-shelf software.",
        features: ["Web & mobile applications", "Business process automation", "API integrations", "Legacy modernization"],
    },
    {
        icon: Cloud,
        title: "SaaS Services",
        desc: "Subscribe to ready-made platforms or let us host and manage software for you.",
        features: ["Cloud-based business tools", "Subscription management", "Data backup & security", "Regular updates included"],
    },
    {
        icon: Globe,
        title: "Web & Digital",
        desc: "Professional websites and online tools that help customers find and trust you.",
        features: ["Business websites", "E-commerce stores", "Online booking systems", "SEO & performance"],
    },
    {
        icon: Building,
        title: "Business Software",
        desc: "Inventory, HR, accounting, and document systems tailored for SMEs.",
        features: ["Inventory management", "HR & payroll systems", "Accounting integration", "Document management"],
    },
    {
        icon: Wrench,
        title: "Maintenance & Care",
        desc: "Proactive monitoring and support so problems are caught before they cost you money.",
        features: ["System monitoring", "Security updates", "Performance optimization", "Priority support plans"],
    },
];

const numClass = ["brand-num-1", "brand-num-2", "brand-num-3", "brand-num-4", "brand-num-5"];
const iconClass = ["brand-icon-1", "brand-icon-2", "brand-icon-3", "brand-icon-4", "brand-icon-5"];

interface ServicesProps {
    showIntro?: boolean;
}

const Services = ({ showIntro = true }: ServicesProps) => {
    const featured = services[0];
    const rest = services.slice(1);

    return (
        <section id="services" className="py-20 md:py-28 bg-background">
            <div className="container-site">
                {showIntro && (
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
                        <div className="lg:col-span-5">
                            <div className="brand-bar mb-6"><span /><span /><span /><span /><span /></div>
                            <p className="section-eyebrow !mb-3">Our services</p>
                            <h2 className="heading-lg">
                                Full-stack technology for{" "}
                                <span className="text-gradient">growing businesses</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                From fixing a printer today to building the software that runs your business tomorrow—one partner, six core capabilities.
                            </p>
                        </div>
                    </div>
                )}

                {!showIntro && (
                    <div className="brand-bar mb-10 max-w-xs"><span /><span /><span /><span /><span /></div>
                )}

                <div className="grid lg:grid-cols-12 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 lg:row-span-2 service-card-dark p-8 sm:p-10 flex flex-col relative"
                    >
                        <div className={`absolute top-6 right-6 h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold ${numClass[0]}`}>1</div>
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px]" style={{ background: "hsl(var(--brand-1) / 0.25)" }} />
                        <div className="relative">
                            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 ${iconClass[0]}`} style={{ background: "hsl(var(--brand-1))", color: "white" }}>
                                <featured.icon className="h-6 w-6" strokeWidth={1.75} />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(var(--brand-2))" }}>Most popular</p>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{featured.title}</h3>
                            <p className="mt-4 text-white/60 leading-relaxed">{featured.desc}</p>
                            <ul className="mt-8 space-y-3 flex-grow">
                                {featured.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                                        <span className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 brand-num-1">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {rest.slice(0, 2).map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 + i * 0.06 }}
                            className="lg:col-span-7 service-card p-7 sm:p-8 relative"
                        >
                            <div className={`absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${numClass[i + 1]}`}>{i + 2}</div>
                            <div className="flex items-start gap-5">
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${iconClass[i + 1]}`}>
                                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-lg">{s.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {s.features.slice(0, 3).map((f) => (
                                            <span key={f} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {rest.slice(2).map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.06 }}
                            className="lg:col-span-4 service-card p-6 sm:p-7 flex flex-col relative"
                        >
                            <div className={`absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${numClass[(i + 3) % 5]}`}>{i + 4}</div>
                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-5 ${iconClass[(i + 3) % 5]}`}>
                                <s.icon className="h-5 w-5" strokeWidth={1.75} />
                            </div>
                            <h3 className="font-bold">{s.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6 cta-panel rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="font-bold text-lg text-white">Not sure which service fits?</p>
                        <p className="text-white/55 mt-1 text-sm">We&apos;ll recommend the right approach in a free 30-minute call.</p>
                    </div>
                    <Link href="/#contact" className="btn-accent shrink-0">
                        Talk to our team <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
