"use client"
import { ExternalLink, MapPin, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
    const projects = [
        {
            title: "বাংলাদেশ ব্যাংক ম্যানেজমেন্ট সিস্টেম",
            description: "বাংলাদেশের ব্যাংকিং খাতের জন্য উন্নত ব্যাংক ম্যানেজমেন্ট সিস্টেম।",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "PostgreSQL", "AWS"],
            category: "ব্যাংকিং সফটওয়্যার",
            location: "ঢাকা, বাংলাদেশ",
            clients: "৫০+ ব্যাংক"
        },
        {
            title: "স্বাস্থ্য সেবা ব্যবস্থাপনা প্ল্যাটফর্ম",
            description: "বাংলাদেশের হাসপাতাল ও ক্লিনিকের জন্য স্বাস্থ্য সেবা ব্যবস্থাপনা সিস্টেম।",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
            tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
            category: "স্বাস্থ্য প্রযুক্তি",
            location: "চট্টগ্রাম, বাংলাদেশ",
            clients: "১০০+ হাসপাতাল"
        },
        {
            title: "কৃষি ডিজিটাল প্ল্যাটফর্ম",
            description: "বাংলাদেশের কৃষকদের জন্য ডিজিটাল কৃষি ব্যবস্থাপনা ও বাজার সংযোগ প্ল্যাটফর্ম।",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Angular", "TypeScript", "D3.js", "AWS"],
            category: "কৃষি প্রযুক্তি",
            location: "রাজশাহী, বাংলাদেশ",
            clients: "১০,০০০+ কৃষক"
        },
        {
            title: "ই-কমার্স সাপ্লাই চেইন ম্যানেজমেন্ট",
            description: "বাংলাদেশের ই-কমার্স ব্যবসার জন্য সাপ্লাই চেইন ব্যবস্থাপনা সিস্টেম।",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
            tags: ["React", "Python", "MongoDB", "Azure"],
            category: "ই-কমার্স",
            location: "সিলেট, বাংলাদেশ",
            clients: "৫০০+ দোকান"
        },
        {
            title: "শিক্ষা ব্যবস্থাপনা সিস্টেম",
            description: "বাংলাদেশের স্কুল ও কলেজের জন্য ডিজিটাল শিক্ষা ব্যবস্থাপনা প্ল্যাটফর্ম।",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
            tags: ["Next.js", "Express", "MySQL", "WebRTC"],
            category: "শিক্ষা প্রযুক্তি",
            location: "খুলনা, বাংলাদেশ",
            clients: "২০০+ শিক্ষা প্রতিষ্ঠান"
        },
        {
            title: "গ্রাহক সেবা প্ল্যাটফর্ম",
            description: "বাংলাদেশের ব্যবসায়িক প্রতিষ্ঠানের জন্য গ্রাহক সেবা ও যোগাযোগ প্ল্যাটফর্ম।",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
            tags: ["React", "Node.js", "Redis", "Elasticsearch"],
            category: "গ্রাহক সেবা",
            location: "বরিশাল, বাংলাদেশ",
            clients: "১০০০+ ব্যবসা"
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
        <section className="min-h-screen text-white relative overflow-hidden py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bd-pattern opacity-10"></div>

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
                        আমাদের <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">প্রকল্পসমূহ</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        দেখুন আমরা কীভাবে বাংলাদেশের বিভিন্ন খাতের প্রতিষ্ঠানগুলিকে
                        ডিজিটাল রূপান্তরের মাধ্যমে তাদের লক্ষ্য অর্জনে সহায়তা করছি।
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
                                        className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                                        <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-full text-xs font-semibold">
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

                                    {/* Project Details */}
                                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-4 w-4 text-green-400" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Users className="h-4 w-4 text-red-400" />
                                            <span>{project.clients}</span>
                                        </div>
                                    </div>

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
                                            className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white border-0"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            বিস্তারিত দেখুন
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    variants={itemVariants}
                >
                    <div className="bg-gradient-to-r from-green-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            আপনার প্রকল্প শুরু করুন
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            বাংলাদেশের ব্যবসায়িক পরিবেশ বুঝে আপনার ডিজিটাল রূপান্তরের যাত্রা শুরু করুন।
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                            আজই যোগাযোগ করুন
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Portfolio;