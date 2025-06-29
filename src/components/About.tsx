"use client"
import { Award, Users, Rocket, Target, Globe, Heart, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
    const stats = [
        { icon: Users, label: "সন্তুষ্ট ক্লায়েন্ট", value: "৫০+", color: "from-green-400 to-green-600" },
        { icon: Rocket, label: "সম্পন্ন প্রকল্প", value: "২০০+", color: "from-red-400 to-red-600" },
        { icon: Award, label: "বছরের অভিজ্ঞতা", value: "৮+", color: "from-green-400 to-green-600" },
        { icon: Target, label: "সাফল্যের হার", value: "৯৮%", color: "from-red-400 to-red-600" },
    ];

    const features = [
        { icon: Globe, title: "বিশ্বব্যাপী সেবা", description: "বাংলাদেশ থেকে বিশ্বব্যাপী ক্লায়েন্টদের সেবা প্রদান" },
        { icon: Heart, title: "স্থানীয় সমর্থন", description: "বাংলাদেশের ব্যবসায়িক পরিবেশ বুঝে সেবা প্রদান" },
        { icon: Shield, title: "নিরাপত্তা নিশ্চিত", description: "আন্তর্জাতিক মানের নিরাপত্তা ও গোপনীয়তা" },
        { icon: Zap, title: "দ্রুত সেবা", description: "আধুনিক প্রযুক্তি ব্যবহারে দ্রুত ও দক্ষ সেবা" },
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
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                                ডিজিটাল বাংলাদেশ
                            </span>
                            <br />
                            <span className="text-white">গড়ার স্বপ্ন</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                                বাস্তবায়ন করি
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            আমরা শুধু ডেভেলপার নই, আমরা ডিজিটাল বাংলাদেশের স্বপ্ন বাস্তবায়নের জন্য
                            আধুনিক প্রযুক্তির স্থপতি। বাংলাদেশের ব্যবসায়িক পরিবেশ বুঝে বিশ্বমানের সেবা প্রদান করি।
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative mt-8 lg:mt-0"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30 rounded-2xl blur-xl"></div>
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
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">{stat.value}</h3>
                                    <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-32"
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
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div
                                className="space-y-6 md:space-y-8"
                                variants={containerVariants}
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-red-400 bg-clip-text text-transparent">
                                    আমাদের লক্ষ্য
                                </h2>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                    সফটকোফে আমরা শুধু সফটওয়্যার তৈরি করি না, আমরা এমন ডিজিটাল অভিজ্ঞতা তৈরি করি
                                    যা ব্যবসাকে পরিবর্তন করে এবং মানুষকে ক্ষমতায়ন করে।
                                </p>
                                <div className="space-y-4 md:space-y-6">
                                    {[
                                        "কৌশলগত প্রযুক্তি পরামর্শ এবং রোডম্যাপ উন্নয়ন",
                                        "এন্টারপ্রাইজ-গ্রেড সফটওয়্যার আর্কিটেকচার এবং উন্নয়ন",
                                        "স্বচ্ছ যোগাযোগ সহ অ্যাজাইল ডেলিভারি পদ্ধতি",
                                        "ডেপ্লয়মেন্ট পরবর্তী সহায়তা এবং অবিচ্ছিন্ন অপটিমাইজেশন"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center group"
                                            variants={itemVariants}
                                            whileHover={{ x: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-red-400 rounded-full mr-4 transform group-hover:scale-150 transition-transform duration-300"></div>
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
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-green-600/30 rounded-2xl blur-xl"></div>
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