"use client"
import { ArrowRight, Zap, Sparkles, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-white">
            <div className="absolute inset-0">
                <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#008A8A]/15 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#008A8A]/10 blur-3xl" />
                <div className="absolute inset-0 softecof-pattern opacity-5" />
            </div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 relative z-10 py-24 sm:py-28 md:py-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div className="text-left" variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#008A8A]/25 bg-white/70 px-3 py-1.5 text-sm text-gray-700 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-[#008A8A]" />
                            Bangladesh-based. Global delivery.
                        </div>

                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            We build products that feel premium and ship reliably.
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                            Softecof helps startups and enterprises design, build, and scale software—web, mobile, cloud, and custom systems—with clear communication and fast execution.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Button
                                size="lg"
                                className="bg-[#008A8A] hover:bg-[#006666] text-white px-8 py-6 rounded-xl font-semibold shadow-lg shadow-[#008A8A]/25"
                                onClick={() => {
                                    const el = document.getElementById("contact");
                                    el?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Get a proposal <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 py-6 rounded-xl font-semibold border-gray-200 hover:border-[#008A8A]/40 bg-white/70"
                                onClick={() => {
                                    const el = document.getElementById("portfolio");
                                    el?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                View work
                            </Button>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
                            <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Zap className="h-4 w-4 text-[#008A8A]" />
                                    Fast delivery
                                </div>
                                <div className="mt-1 text-xl font-bold text-gray-900">2–6 weeks</div>
                                <div className="text-sm text-gray-600">to MVP for most projects</div>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Sparkles className="h-4 w-4 text-[#008A8A]" />
                                    Quality focus
                                </div>
                                <div className="mt-1 text-xl font-bold text-gray-900">Production‑ready</div>
                                <div className="text-sm text-gray-600">testing, CI, and support</div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#008A8A]" /> +8801626889072
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#008A8A]" /> contact@softecof.com
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="relative" variants={itemVariants}>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#008A8A]/18 via-transparent to-transparent blur-2xl" />
                        <div className="relative rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                            <div className="relative h-[340px] sm:h-[420px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                                <div className="absolute left-6 right-6 bottom-6">
                                    <div className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="text-sm font-semibold text-gray-900">Trusted by teams that move fast</div>
                                                <div className="mt-1 text-sm text-gray-600">
                                                    Clear milestones, weekly updates, and production-ready delivery.
                                                </div>
                                            </div>
                                            {/* <div className="shrink-0 rounded-full bg-[#008A8A]/10 px-3 py-1 text-xs font-semibold text-[#006666]">
                                                #008A8A
                                            </div> */}
                                        </div>
                                        <div className="mt-4 grid grid-cols-3 gap-3">
                                            <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">
                                                <div className="text-xs text-gray-500">Projects</div>
                                                <div className="text-base font-bold text-gray-900">100+</div>
                                            </div>
                                            <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">
                                                <div className="text-xs text-gray-500">Uptime</div>
                                                <div className="text-base font-bold text-gray-900">99.9%</div>
                                            </div>
                                            <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">
                                                <div className="text-xs text-gray-500">Team</div>
                                                <div className="text-base font-bold text-gray-900">25+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;