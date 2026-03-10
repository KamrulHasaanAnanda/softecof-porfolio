"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
        <section id="portfolio" className="min-h-screen relative overflow-hidden text-gray-900 py-24 sm:py-28 md:py-32 bg-white">
            <div className="absolute inset-0">
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#008A8A]/10 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#008A8A]/8 blur-3xl" />
            </div>
            <motion.div
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-12 sm:mb-16"
                    variants={itemVariants}
                >
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#008A8A]/25 bg-white/70 px-3 py-1.5 text-sm text-gray-700 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-[#008A8A]" />
                            Work
                        </div>
                        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            Selected projects that shipped with confidence.
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                            A snapshot of products, platforms, and systems we’ve helped teams deliver—across industries and time zones.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                        <Button variant="outline" className="rounded-xl border-gray-200 bg-white/70 hover:border-[#008A8A]/35">
                            View all case studies <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button className="rounded-xl bg-[#008A8A] hover:bg-[#006666] text-white shadow-lg shadow-[#008A8A]/20">
                            Start a project
                        </Button>
                    </div>
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
                            <Card className="overflow-hidden group bg-white/85 backdrop-blur border border-gray-200 hover:border-[#008A8A]/35 transition-all duration-500 shadow-lg hover:shadow-xl rounded-2xl">
                                <div className="relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-gray-50/8 to-gray-100/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                                        <span className="px-4 py-2 bg-[#008A8A] text-white rounded-full text-sm font-semibold shadow-lg shadow-[#008A8A]/20">
                                            {project.category}
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>
                                <CardContent className="p-7 sm:p-8">
                                    <motion.h3
                                        className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#008A8A] transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-gray-600 mb-6 font-light leading-relaxed text-lg">{project.description}</p>

                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                className="px-4 py-2 bg-[#F0FBFB] text-[#005555] rounded-lg text-sm font-medium border border-[#008A8A]/20 hover:bg-[#E1F7F7] transition-colors duration-200"
                                                whileHover={{ scale: 1.05 }}
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

                <motion.div className="mt-16 sm:mt-20" variants={itemVariants}>
                    <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-8 sm:p-10 shadow-xl overflow-hidden relative">
                        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#008A8A]/10 blur-3xl" />
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="text-sm font-semibold text-[#006666]">Ready when you are</div>
                                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Tell us what you’re building.</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    We’ll respond with a clear plan, timeline, and next steps—no fluff.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                                <Button variant="outline" className="rounded-xl border-gray-200 bg-white hover:border-[#008A8A]/35">
                                    See services
                                </Button>
                                <Button className="rounded-xl bg-[#008A8A] hover:bg-[#006666] text-white shadow-lg shadow-[#008A8A]/20">
                                    Contact us <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;