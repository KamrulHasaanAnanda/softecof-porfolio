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
        <section id="home" className="min-h-screen flex items-center justify-center text-gray-900 relative overflow-hidden bg-white">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 softecof-pattern opacity-5" />

            <motion.div
                className="container mx-auto px-4 sm:px-6 text-center relative z-10 pb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Location Badge */}


                {/* Logo and Company Name */}
                <motion.div
                    className="flex items-center justify-center mb-6 sm:mb-8 md:mb-12 space-x-2 sm:space-x-3"
                    variants={itemVariants}
                >
                    <motion.div className="relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#008A8A]/8 rounded-full blur-xl" />
                            <Image src="/softecof.png" alt="Softecof" width={56} height={56} className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 text-indigo-600 relative z-10" />
                        </div>
                    </motion.div>
                    <div className="text-center">
                        <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#008A8A] to-[#006666]">
                            SOFTECOF
                        </span>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Global Software Solutions</p>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 leading-tight px-2"
                    variants={itemVariants}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008A8A] via-[#007777] to-[#006666]">
                        World-Class
                    </span>
                    <br />
                    <span className="text-gray-900">Software Solutions</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33A3A3] via-[#008A8A] to-[#006666]">
                        for Global Markets
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4"
                    variants={itemVariants}
                >
                    We deliver cutting-edge software solutions that bridge local expertise with global standards.
                    From Bangladesh to the world, we help businesses thrive in the digital age.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 justify-center mb-8 sm:mb-12 md:mb-16 px-4"
                    variants={itemVariants}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-[#008A8A] hover:bg-[#006666] text-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-xl text-sm sm:text-base md:text-lg font-semibold shadow-xl shadow-[#008A8A]/30 transition-all duration-300 group relative overflow-hidden"
                            onClick={() => {
                                const servicesSection = document.getElementById('services');
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                Explore Our Services
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-[#008A8A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto relative group bg-white hover:bg-[#F0FBFB] text-[#005555] hover:text-[#003F3F] px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-xl text-sm sm:text-base md:text-lg font-semibold backdrop-blur-sm transition-all duration-300 overflow-hidden border border-[#008A8A]/25 hover:border-[#008A8A]/40">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get Consultation
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300" />
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Features */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-sm text-gray-600 px-4"
                    variants={itemVariants}
                >
                    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-[#F0FBFB] backdrop-blur-sm rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-[#008A8A]/20">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#008A8A]/15 rounded-full blur-md animate-pulse-bd" />
                            <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-[#008A8A] relative z-10" />
                        </div>
                        <span className="font-medium text-sm sm:text-base">Rapid Development</span>
                    </div>
                    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-[#F0FBFB] backdrop-blur-sm rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-[#008A8A]/20">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#008A8A]/20 rounded-full blur-md animate-pulse-bd" />
                            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#005555] relative z-10" />
                        </div>
                        <span className="font-medium text-sm sm:text-base">World-Class Quality</span>
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm"
                    variants={itemVariants}
                >
                    <div className="flex items-center space-x-2 text-gray-500">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-[#008A8A]" />
                        <span className="text-xs sm:text-sm">+880 1234-567890</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-[#008A8A]" />
                        <span className="text-xs sm:text-sm">info@softecof.com</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;