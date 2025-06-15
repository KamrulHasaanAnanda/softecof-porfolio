"use client"
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
    const projects = [
        {
            title: "Enterprise ERP System",
            description: "Comprehensive enterprise resource planning solution with advanced analytics and multi-tenant architecture.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "PostgreSQL", "AWS"],
            category: "Enterprise Software"
        },
        {
            title: "Healthcare Management Platform",
            description: "HIPAA-compliant healthcare management system with patient portal and clinical workflow optimization.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
            tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
            category: "Healthcare Technology"
        },
        {
            title: "Financial Analytics Dashboard",
            description: "Real-time financial analytics platform with advanced reporting and regulatory compliance features.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Angular", "TypeScript", "D3.js", "AWS"],
            category: "Financial Services"
        },
        {
            title: "Supply Chain Management",
            description: "End-to-end supply chain visibility platform with predictive analytics and automation capabilities.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
            tags: ["React", "Python", "MongoDB", "Azure"],
            category: "Logistics & Supply Chain"
        },
        {
            title: "Learning Management System",
            description: "Corporate learning platform with personalized learning paths and advanced progress tracking.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            tags: ["Next.js", "Express", "MySQL", "WebRTC"],
            category: "Education Technology"
        },
        {
            title: "Customer Experience Platform",
            description: "Omnichannel customer experience platform with AI-powered insights and automation.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "Redis", "Elasticsearch"],
            category: "Customer Experience"
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
        <section className="min-h-screen  text-white relative overflow-hidden py-32">
            {/* Background Elements */}
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
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <motion.div
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Portfolio</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        Discover how we&apos;ve helped leading organizations across industries
                        achieve their digital transformation objectives through innovative software solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    <motion.div
                                        className="absolute top-4 left-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-semibold">
                                            {project.category}
                                        </span>
                                    </motion.div>
                                </div>
                                <CardContent className="p-6">
                                    <motion.h3
                                        className="text-xl font-bold mb-3 text-white"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-gray-300 mb-4 font-light leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-white/5 text-gray-300 rounded-md text-sm font-medium border border-white/10"
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <motion.div
                                        className="flex space-x-3"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Button
                                            size="sm"
                                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            View Case Study
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;