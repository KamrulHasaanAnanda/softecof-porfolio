"use client"
import { ExternalLink, MapPin, Users, Calendar, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
    const projects = [
        {
            title: "Checkbox.live",
            description: "A reseller platform for selling digital products.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
            tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
            category: "Productivity Tools"
        },
        {
            title: "SkinsDojo",
            description: "Gaming skins marketplace and trading platform for gamers worldwide.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
            tags: ["Next.js", "Node.js", "MongoDB", "WebSocket"],
            category: "Gaming Platform"
        },
        {
            title: "Tarulata",
            description: "A platform for selling agricultural products.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["Vue.js", "Python", "PostgreSQL", "AWS S3"],
            category: "Creative Platform"
        },

        {
            title: "Healthcare Management Platform",
            description: "Comprehensive healthcare management system for hospitals and clinics worldwide.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
            category: "Healthcare Tech"
        },

        {
            title: "Education Management System",
            description: "Digital education management platform for schools and colleges worldwide.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            tags: ["Next.js", "Express", "MySQL", "WebRTC"],
            category: "EdTech"
        },
        {
            title: "Customer Service Platform",
            description: "Advanced customer service and communication platform for businesses globally.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "Redis", "Elasticsearch"],
            category: "Customer Service"
        }
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
        <section className="min-h-screen text-white relative overflow-hidden py-32 bg-gradient-to-br from-slate-900 via-slate-800 via-purple-900/20 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-400/5 to-red-400/5 rounded-full blur-3xl animate-spin-slow"></div>
            </div>

            <div className="absolute inset-0 bd-pattern opacity-5"></div>

            <motion.div
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    className="text-center mb-20"
                    variants={itemVariants}
                >
                    <motion.div
                        className="inline-block mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-red-400 mx-auto rounded-full mb-8"></div>
                    </motion.div>
                    <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-red-400 animate-gradient">Portfolio</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover how we help organizations across various sectors achieve their goals
                        through digital transformation, serving both local and global markets.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        >
                            <Card className="overflow-hidden group bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 shadow-2xl hover:shadow-green-500/20">
                                <div className="relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                        whileHover={{ scale: 1.08 }}
                                    />
                                    <motion.div
                                        className="absolute top-4 left-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>
                                <CardContent className="p-8">
                                    <motion.h3
                                        className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-gray-300 mb-6 font-light leading-relaxed text-lg">{project.description}</p>

                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-red-600/20 text-gray-200 rounded-lg text-sm font-medium border border-green-500/20 backdrop-blur-sm"
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.3)" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-20"
                    variants={itemVariants}
                >
                    <div className="bg-gradient-to-r from-green-600/20 to-red-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-red-500/10 animate-pulse"></div>
                        <div className="relative z-10">
                            <motion.h3
                                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Start Your Project Today
                            </motion.h3>
                            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                                Begin your digital transformation journey with our global expertise and local understanding.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button size="lg" className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white px-10 py-6 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                                    Contact Us Now
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;