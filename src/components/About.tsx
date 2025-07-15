"use client"
import { Award, Users, Rocket, Target, Globe, Heart, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
    const stats = [
        { icon: Users, label: "Satisfied Clients", value: "50+", color: "from-green-400 to-green-600" },
        { icon: Rocket, label: "Completed Projects", value: "200+", color: "from-red-400 to-red-600" },
        { icon: Award, label: "Years of Experience", value: "8+", color: "from-green-400 to-green-600" },
        { icon: Target, label: "Success Rate", value: "98%", color: "from-red-400 to-red-600" },
    ];

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
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bd-pattern opacity-10"></div>

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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                                Bridging Local
                            </span>
                            <br />
                            <span className="text-white">Expertise with</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                                Global Standards
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                            We're not just developers; we're architects of digital transformation.
                            Based in Bangladesh, we serve the world with cutting-edge technology solutions
                            that understand both local business needs and global market demands.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative mt-8 lg:mt-0"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30 rounded-2xl blur-xl"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-8 border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                alt="Team collaboration"
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
                            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300 h-full">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-3 sm:mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30 rounded-3xl blur-xl"></div>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-12 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div
                                className="space-y-4 sm:space-y-6 md:space-y-8"
                                variants={containerVariants}
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-red-400 bg-clip-text text-transparent">
                                    Our Mission
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                                    At Softecof, we don't just build software; we create digital experiences
                                    that transform businesses and empower people across the globe.
                                </p>
                                <div className="space-y-3 sm:space-y-4 md:space-y-6">
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
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-400 to-red-400 rounded-full mr-3 sm:mr-4 transform group-hover:scale-150 transition-transform duration-300"></div>
                                            <span className="text-sm sm:text-base md:text-lg text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{item}</span>
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
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-green-600/30 rounded-2xl blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-xl"
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