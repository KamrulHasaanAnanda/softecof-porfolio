"use client"
import { Shield, Clock, Wallet, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
    { icon: Wallet, title: "SME-friendly pricing", desc: "Plans sized for small businesses—not enterprise contracts with hidden fees." },
    { icon: Clock, title: "Fast response times", desc: "Same-day support for urgent issues. Clear timelines for custom builds." },
    { icon: Shield, title: "Long-term partnership", desc: "We maintain what we build. Updates, backups, and support after launch." },
    { icon: Zap, title: "Global delivery", desc: "Remote-first team serving clients across time zones with hands-on support." },
    { icon: Users, title: "Dedicated team", desc: "Real people assigned to your account—not a faceless ticket queue." },
];

const iconClass = ["brand-icon-1", "brand-icon-2", "brand-icon-3", "brand-icon-4", "brand-icon-5"];
const numClass = ["brand-num-1", "brand-num-2", "brand-num-3", "brand-num-4", "brand-num-5"];

const WhySoftecof = () => {
    return (
        <section className="py-24 md:py-32 surface-dark relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-20" />

            <div className="container-site relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="brand-bar mb-6 mx-auto max-w-xs"><span /><span /><span /><span /><span /></div>
                    <p className="section-eyebrow-light !mb-3">Why Softecof</p>
                    <h2 className="heading-lg text-white">Built differently from enterprise IT vendors</h2>
                    <p className="mt-5 text-white/55 text-lg leading-relaxed">
                        We focus exclusively on SMEs—practical solutions, honest pricing, and people who actually respond.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="card-glass p-6 card-hover relative"
                        >
                            <div className={`absolute top-4 right-4 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${numClass[i]}`}>
                                {i + 1}
                            </div>
                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-5 ${iconClass[i]}`}>
                                <r.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-white">{r.title}</h3>
                            <p className="text-sm text-white/50 mt-2 leading-relaxed">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySoftecof;
