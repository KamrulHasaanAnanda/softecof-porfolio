"use client"
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
    { value: "50+", label: "Global clients" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "8+", label: "Years experience" },
    { value: "24/7", label: "Support" },
];

const industries = [
    { name: "Healthcare", color: "brand-num-1" },
    { name: "EdTech", color: "brand-num-2" },
    { name: "SaaS", color: "brand-num-3" },
    { name: "E-commerce", color: "brand-num-4" },
    { name: "AgriTech", color: "brand-num-5" },
];

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen surface-dark overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-40" />
            <div className="absolute top-0 right-0 w-[60%] h-full hidden lg:block">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=1000&fit=crop"
                    alt=""
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,28%,8%)] via-[hsl(220,28%,8%)/80] to-transparent" />
            </div>
            <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[100px]" style={{ background: "hsl(43 96% 56% / 0.08)" }} />

            <div className="container-site relative z-10 pt-36 pb-20 lg:pt-44 lg:pb-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="badge-dark mb-8">Global SME Technology Partner</div>
                        <h1 className="heading-xl text-white">
                            Technology that{" "}
                            <span className="text-gradient">powers</span>{" "}
                            your business forward
                        </h1>
                        <p className="mt-7 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
                            Tech support, custom software, and SaaS platforms for small and medium businesses worldwide—delivered by a team that actually picks up the phone.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="btn-accent"
                            >
                                Get a free quote <ArrowRight className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                                className="btn-outline-light"
                            >
                                Explore services
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5"
                    >
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((s, i) => (
                                <div key={s.label} className={`card-glass p-5 sm:p-6 ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
                                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{s.value}</p>
                                    <p className="text-sm text-white/50 mt-1">{s.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 card-glass p-5 flex items-center justify-between group cursor-pointer" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
                            <div>
                                <p className="text-sm font-semibold text-white">View our work</p>
                                <p className="text-xs text-white/45 mt-0.5">15+ products delivered globally</p>
                            </div>
                            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 pt-8 border-t border-white/10"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 mb-4">Industries we serve</p>
                    <div className="flex flex-wrap gap-3">
                        {industries.map((ind) => (
                            <span key={ind.name} className={`px-4 py-2 rounded-full text-sm font-semibold ${ind.color}`}>
                                {ind.name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
