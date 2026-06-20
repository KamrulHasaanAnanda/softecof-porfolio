"use client"
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CtaBanner = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container-site">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="cta-panel rounded-3xl px-8 sm:px-14 py-14 sm:py-16 relative overflow-hidden"
                >
                    <div className="absolute inset-0 dot-grid opacity-10" />
                    <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-accent/20 to-transparent" />
                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="heading-lg text-white">
                                Ready to transform your business technology?
                            </h2>
                            <p className="mt-4 text-white/60 text-lg leading-relaxed">
                                Book a free consultation. Tell us what you need—we&apos;ll respond within 24 hours with a clear plan and quote.
                            </p>
                        </div>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="btn-accent shrink-0"
                        >
                            Get a free quote <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaBanner;
