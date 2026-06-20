"use client"
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    "Dedicated SME focus—not enterprise overhead",
    "Transparent pricing with no hidden fees",
    "Global team serving clients worldwide",
    "Support that continues after delivery",
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-white">
            <div className="container-site">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[560px]">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                                alt="Softecof team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 card-glass p-5">
                                <p className="text-3xl font-extrabold text-white">25+</p>
                                <p className="text-sm text-white/60 mt-1">Experts across development, support & design</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 hidden sm:block card-elevated p-5 rounded-2xl">
                            <p className="text-3xl font-extrabold text-brand-1">8+</p>
                            <p className="text-xs text-muted-foreground mt-1 font-medium">Years delivering globally</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="line-accent mb-6" />
                        <p className="section-eyebrow !mb-3">About Softecof</p>
                        <h2 className="heading-lg">
                            Your global partner for{" "}
                            <span className="text-gradient">practical technology</span>
                        </h2>
                        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                            Softecof serves small and medium businesses worldwide with reliable technology—without the cost and complexity of enterprise vendors.
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We combine hands-on tech support with custom development and SaaS platforms—so whether your systems need fixing or your business needs building, one team handles it all.
                        </p>

                        <div className="mt-10 grid sm:grid-cols-2 gap-3">
                            {highlights.map((h) => (
                                <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                                    <span className="text-sm leading-snug">{h}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="btn-primary mt-10"
                        >
                            Work with us <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
