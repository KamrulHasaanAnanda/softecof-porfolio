"use client"
import { ArrowRight, Code, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        <section className="min-h-screen flex items-center justify-center  text-white relative overflow-hidden">
            {/* Enhanced Background Animation with Multiple Layers */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-[120px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <motion.div
                className="container mx-auto px-6 text-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="flex items-center justify-center mb-8 md:mb-12 space-x-2"
                    variants={itemVariants}
                >
                    <motion.div
                        className="relative"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                            <img src="/softecof.svg" alt="Softecof" className="h-8 w-8 md:h-12 md:w-12 text-blue-400 relative z-10" />
                        </div>
                    </motion.div>
                    <span className="text-3xl md:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        SOFTECOF
                    </span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 text-white leading-tight"
                    variants={itemVariants}
                >
                    Enterprise Software
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                        Solutions
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4"
                    variants={itemVariants}
                >
                    We deliver cutting-edge software solutions that drive digital transformation
                    and accelerate business growth for forward-thinking organizations.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-12 md:mb-16 px-4"
                    variants={itemVariants}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 sm:px-12 py-6 rounded-xl text-base sm:text-lg font-semibold shadow-xl shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center">
                                View Our Solutions
                                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto relative group bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 hover:from-blue-500/20 hover:via-indigo-500/20 hover:to-purple-500/20 text-blue-300 hover:text-white px-8 sm:px-12 py-6 rounded-xl text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 overflow-hidden border border-blue-400/30 hover:border-blue-400/50">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Schedule Consultation
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-300 px-4"
                    variants={itemVariants}
                >
                    <motion.div
                        className="w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 sm:px-8 py-4 border border-white/10"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md animate-pulse" />
                            <Zap className="h-6 w-6 text-blue-400 relative z-10" />
                        </div>
                        <span className="font-medium text-base">Rapid Development</span>
                    </motion.div>
                    <motion.div
                        className="w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 sm:px-8 py-4 border border-white/10"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.2)",
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md animate-pulse" />
                            <Sparkles className="h-6 w-6 text-purple-400 relative z-10" />
                        </div>
                        <span className="font-medium text-base">Enterprise Grade</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;