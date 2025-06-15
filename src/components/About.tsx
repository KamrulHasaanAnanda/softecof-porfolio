"use client"
import { Award, Users, Rocket, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
    const stats = [
        { icon: Users, label: "Enterprise Clients", value: "50+", color: "from-blue-400 to-indigo-400" },
        { icon: Rocket, label: "Projects Delivered", value: "200+", color: "from-indigo-400 to-purple-400" },
        { icon: Award, label: "Years Experience", value: "8+", color: "from-blue-400 to-indigo-400" },
        { icon: Target, label: "Success Rate", value: "98%", color: "from-indigo-400 to-purple-400" },
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
        <section className="min-h-screen relative overflow-hidden">
            <motion.div
                className="container mx-auto px-6 relative z-10 py-32"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-32">
                    <motion.div
                        className="space-y-4 md:space-y-8"
                        variants={itemVariants}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Transforming Ideas into
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                Digital Reality
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            We&apos;re not just developers; we&apos;re digital architects crafting the future of enterprise technology.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative mt-8 lg:mt-0"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-2xl blur-xl"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
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
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{stat.value}</h3>
                                    <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    className="relative"
                    variants={itemVariants}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-3xl blur-xl"></div>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div
                                className="space-y-6 md:space-y-8"
                                variants={containerVariants}
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    Our Mission
                                </h2>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                    At Softecof, we&apos;re not just building software; we&apos;re crafting digital experiences that transform businesses and empower people.
                                </p>
                                <div className="space-y-4 md:space-y-6">
                                    {[
                                        "Strategic technology consulting and roadmap development",
                                        "Enterprise-grade software architecture and development",
                                        "Agile delivery methodology with transparent communication",
                                        "Post-deployment support and continuous optimization"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center group"
                                            variants={itemVariants}
                                            whileHover={{ x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-4 transform group-hover:scale-150 transition-transform duration-300"></div>
                                            <span className="text-base md:text-lg text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative mt-8 lg:mt-0"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
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