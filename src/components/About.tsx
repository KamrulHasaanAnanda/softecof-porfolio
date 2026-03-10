"use client"
import { Globe, Heart, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    const features = [
        { icon: Globe, title: "Global Services", description: "Serving clients worldwide from our base in Bangladesh" },
        { icon: Heart, title: "Local Expertise", description: "Deep understanding of local and global business environments" },
        { icon: Shield, title: "Security Assured", description: "International standards of security and privacy" },
        { icon: Zap, title: "Rapid Delivery", description: "Fast and efficient service using cutting-edge technology" },
    ];

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
        <section id="about" className="min-h-screen bg-gray-50 border-b border-gray-200">
            <motion.div
                className="container mx-auto px-4 sm:px-6 relative z-10 py-16 sm:py-24 md:py-32"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 sm:mb-16 md:mb-32">
                    <motion.div
                        className="space-y-4 md:space-y-8"
                        variants={itemVariants}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
                            <span className="text-[#008A8A]">About Softecof</span>
                            <br />
                            <span className="text-gray-900">Bridging local expertise with</span>
                            <br />
                            <span className="text-gray-900">proven global standards</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                            We&apos;re not just developers; we&apos;re architects of digital transformation.
                            Based in Bangladesh, we serve the world with cutting-edge technology solutions
                            that understand both local business needs and global market demands.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative mt-8 lg:mt-0"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/15 to-gray-200/15 rounded-2xl blur-xl"></div>
                        <div className="relative bg-white rounded-2xl p-3 sm:p-4 md:p-8 border border-[#008A8A]/20 shadow-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                alt="Team collaboration"
                                width={600}
                                height={400}
                                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                {/* <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-32"
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                                <CardContent className="p-4 md:p-8">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">{stat.value}</h3>
                                    <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div> */}

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-32"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="bg-white border border-[#008A8A]/20 rounded-xl overflow-hidden group hover:border-[#008A8A]/40 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-[#008A8A] flex items-center justify-center mb-3 sm:mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    className="relative mt-4"
                    variants={itemVariants}
                >
                    <div className="absolute inset-0 bg-[#008A8A]/6 rounded-3xl blur-2xl" />
                    <div className="relative bg-white/90 backdrop-blur rounded-3xl p-4 sm:p-6 md:p-10 border border-gray-200 shadow-lg overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
                            <motion.div
                                className="space-y-4 sm:space-y-6 md:space-y-7"
                                variants={containerVariants}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#008A8A]/25 bg-white/80 px-3 py-1.5 text-sm text-gray-700">
                                    <span className="h-2 w-2 rounded-full bg-[#008A8A]" />
                                    Our mission
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                    Build software that feels thoughtful—and works in production.
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    We exist to bridge the gap between strategy and execution. From idea to launch, we care
                                    about details, reliability, and how the product actually feels to your users.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Translate business goals into clear roadmaps",
                                        "Design and build scalable, maintainable systems",
                                        "Communicate openly with transparent progress",
                                        "Stay after launch with support and iteration"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3"
                                            variants={itemVariants}
                                            whileHover={{ x: 6 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="mt-1 h-2 w-2 rounded-full bg-[#008A8A]" />
                                            <span className="text-sm sm:text-base text-gray-700">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative mt-4 lg:mt-0"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#008A8A]/15 via-transparent to-transparent rounded-2xl blur-xl" />
                                <div className="relative bg-white rounded-2xl p-3 sm:p-4 border border-gray-200 shadow-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                        alt="Team collaboration"
                                        width={600}
                                        height={400}
                                        className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover rounded-xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;