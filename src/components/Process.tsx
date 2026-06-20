"use client"
import { MessageSquare, Search, Hammer, HeadphonesIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    { icon: MessageSquare, num: "01", title: "Tell us your problem", desc: "Share what's broken, what you need built, or what software you're looking for." },
    { icon: Search, num: "02", title: "We recommend a plan", desc: "Support-only, custom build, or SaaS—we propose the best fit with clear pricing." },
    { icon: Hammer, num: "03", title: "We deliver & deploy", desc: "Our team fixes, builds, or sets up your systems with testing and training." },
    { icon: HeadphonesIcon, num: "04", title: "Ongoing support", desc: "We stay available for maintenance, updates, and new requests as you grow." },
    { icon: TrendingUp, num: "05", title: "Scale & grow", desc: "As your business expands, we add features, users, and integrations to match." },
];

const brandColors = [
    "hsl(var(--brand-1))",
    "hsl(var(--brand-2))",
    "hsl(var(--brand-3))",
    "hsl(var(--brand-4))",
    "hsl(var(--brand-5))",
];

const Process = () => {
    return (
        <section id="process" className="py-20 md:py-28 bg-background">
            <div className="container-site">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-end">
                    <div className="lg:col-span-7">
                        <div className="brand-bar mb-6 max-w-xs"><span /><span /><span /><span /><span /></div>
                        <p className="section-eyebrow !mb-3">How it works</p>
                        <h2 className="heading-lg">From first call to ongoing support</h2>
                    </div>
                    <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
                        A clear 5-step journey—no surprises, no jargon, just progress you can track.
                    </p>
                </div>

                {/* Desktop: horizontal timeline in dark panel */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="surface-dark rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden hidden lg:block"
                >
                    <div className="absolute inset-0 dot-grid opacity-[0.07]" />
                    {/* Connector line */}
                    <div className="absolute top-[88px] left-[12%] right-[12%] h-[2px] flex">
                        {brandColors.map((color, i) => (
                            <div key={i} className="flex-1 h-full" style={{ background: color, opacity: 0.45 }} />
                        ))}
                    </div>

                    <div className="relative grid grid-cols-5 gap-6">
                        {steps.map((s, i) => (
                            <div key={s.num} className="group text-center">
                                <div className="relative mx-auto mb-8">
                                    <div
                                        className="mx-auto h-[72px] w-[72px] rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105"
                                        style={{ background: brandColors[i] }}
                                    >
                                        <span className="text-xl font-extrabold" style={{ color: i === 1 || i === 4 ? "hsl(var(--ink))" : "white" }}>
                                            {s.num}
                                        </span>
                                    </div>
                                    <div
                                        className="absolute -inset-3 rounded-3xl -z-10 blur-xl opacity-40 group-hover:opacity-60 transition-opacity"
                                        style={{ background: brandColors[i] }}
                                    />
                                </div>
                                <div className="mx-auto mb-4 h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                    <s.icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-white text-[15px] leading-snug">{s.title}</h3>
                                <p className="mt-2.5 text-xs text-white/50 leading-relaxed px-1">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile / tablet: vertical timeline */}
                <div className="lg:hidden space-y-4">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="flex gap-5 rounded-2xl surface-dark p-5 relative overflow-hidden"
                        >
                            <div
                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                style={{ background: brandColors[i] }}
                            />
                            <div
                                className="shrink-0 h-14 w-14 rounded-xl flex flex-col items-center justify-center"
                                style={{ background: brandColors[i] }}
                            >
                                <span className="text-sm font-extrabold" style={{ color: i === 1 || i === 4 ? "hsl(var(--ink))" : "white" }}>
                                    {i + 1}
                                </span>
                            </div>
                            <div className="min-w-0 pt-0.5">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <s.icon className="h-4 w-4 text-white/70" />
                                    <h3 className="font-bold text-white text-[15px]">{s.title}</h3>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
