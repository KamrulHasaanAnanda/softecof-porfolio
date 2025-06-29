"use client"
import { ArrowRight, Zap, Sparkles, MapPin, Phone, Mail } from "lucide-react";
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
        <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Bangladeshi Pattern Background */}
            <div className="absolute inset-0 bd-pattern opacity-20"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 filter blur-[80px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 filter blur-[60px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                        x: [0, -25, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <motion.div
                className="container mx-auto px-6 text-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Location Badge */}
                <motion.div
                    className="flex items-center justify-center mb-6"
                    variants={itemVariants}
                >
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                        <MapPin className="h-4 w-4 text-green-400" />
                        <span className="text-sm font-medium">Dhaka, Bangladesh</span>
                    </div>
                </motion.div>

                {/* Logo and Company Name */}
                <motion.div
                    className="flex items-center justify-center mb-8 md:mb-12 space-x-3"
                    variants={itemVariants}
                >
                    <motion.div
                        className="relative"
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl animate-pulse-bd" />
                            <img src="/softecof.svg" alt="Softecof" className="h-10 w-10 md:h-14 md:w-14 text-green-400 relative z-10" />
                        </div>
                    </motion.div>
                    <div className="text-center">
                        <span className="text-3xl md:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                            SOFTECOF
                        </span>
                        <p className="text-sm md:text-base text-gray-300 mt-1">সফটওয়্যার সমাধান</p>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight"
                    variants={itemVariants}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                        বিশ্বমানের
                    </span>
                    <br />
                    <span className="text-white">সফটওয়্যার সমাধান</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                        Enterprise Solutions
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4"
                    variants={itemVariants}
                >
                    আমরা ডিজিটাল বাংলাদেশের স্বপ্ন বাস্তবায়নের জন্য আধুনিক প্রযুক্তি ব্যবহার করে
                    বিশ্বমানের সফটওয়্যার সমাধান প্রদান করি।
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-12 md:mb-16 px-4"
                    variants={itemVariants}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white px-8 sm:px-12 py-6 rounded-xl text-base sm:text-lg font-semibold shadow-xl shadow-green-500/20 transition-all duration-300 group relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center">
                                আমাদের সেবা দেখুন
                                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto relative group bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10 hover:from-red-500/20 hover:via-red-600/20 hover:to-red-700/20 text-red-300 hover:text-white px-8 sm:px-12 py-6 rounded-xl text-base sm:text-lg font-semibold backdrop-blur-sm transition-all duration-300 overflow-hidden border border-red-400/30 hover:border-red-400/50">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                পরামর্শ নিন
                                <Phone className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Features */}
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
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md animate-pulse-bd" />
                            <Zap className="h-6 w-6 text-green-400 relative z-10" />
                        </div>
                        <span className="font-medium text-base">দ্রুত উন্নয়ন</span>
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
                            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md animate-pulse-bd" />
                            <Sparkles className="h-6 w-6 text-red-400 relative z-10" />
                        </div>
                        <span className="font-medium text-base">বিশ্বমানের মান</span>
                    </motion.div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
                    variants={itemVariants}
                >
                    <div className="flex items-center space-x-2 text-gray-400">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>+880 1234-567890</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                        <Mail className="h-4 w-4 text-green-400" />
                        <span>info@softecof.com</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;