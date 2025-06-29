"use client"
import { Linkedin, Mail, MapPin, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Team = () => {
    const teamMembers = [
        {
            name: "আহমেদ রহমান",
            role: "প্রধান নির্বাহী কর্মকর্তা",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "১৫+ বছরের অভিজ্ঞতা নিয়ে বাংলাদেশের প্রযুক্তি খাতের অগ্রগতির জন্য কাজ করছেন।",
            credentials: "এমবিএ, বুয়েট • সাবেক ম্যাককিনসি পরামর্শক",
            location: "ঢাকা, বাংলাদেশ",
            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "ড. ফাতেমা খান",
            role: "প্রধান প্রযুক্তি কর্মকর্তা",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            bio: "এন্টারপ্রাইজ-স্কেল সিস্টেম এবং নতুন প্রযুক্তিতে বিশেষজ্ঞ প্রযুক্তি স্থপতি।",
            credentials: "পিএইচডি কম্পিউটার সায়েন্স, বুয়েট • AWS সমাধান স্থপতি",
            location: "চট্টগ্রাম, বাংলাদেশ",
            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "রাজীব আহমেদ",
            role: "উপ-সভাপতি প্রকৌশল",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            bio: "স্কেলেবল আর্কিটেকচার এবং উচ্চ-কর্মক্ষমতা উন্নয়ন দলের জন্য আবেগী প্রকৌশল নেতা।",
            credentials: "এমএস সফটওয়্যার প্রকৌশল • সার্টিফাইড স্ক্রাম মাস্টার",
            location: "সিলেট, বাংলাদেশ",
            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "নুসরাত জাহান",
            role: "উপ-সভাপতি ক্লায়েন্ট সাফল্য",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            bio: "ব্যতিক্রমী ফলাফল এবং দীর্ঘমেয়াদী অংশীদারিত্ব মূল্য প্রদানের জন্য ক্লায়েন্ট সাফল্য কৌশলবিদ।",
            credentials: "এমবিএ অপারেশনস • সিক্স সিগমা ব্ল্যাক বেল্ট",
            location: "খুলনা, বাংলাদেশ",
            social: {
                linkedin: "#",
                email: "#"
            }
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
        <section className="min-h-screen relative overflow-hidden py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
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
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                        আমাদের <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">দল</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        আমাদের অভিজ্ঞ নেতৃত্ব দল গভীর প্রযুক্তিগত দক্ষতা এবং কৌশলগত ব্যবসায়িক বুদ্ধিমত্তা
                        একত্রিত করে আমাদের ক্লায়েন্টদের জন্য ব্যতিক্রমী ফলাফল প্রদান করে।
                    </p>
                </motion.div>

                {/* Team Stats */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    variants={containerVariants}
                >
                    <motion.div
                        className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">২৫+</h3>
                        <p className="text-gray-300">দক্ষ ডেভেলপার</p>
                    </motion.div>
                    <motion.div
                        className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Award className="h-12 w-12 text-red-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">৮+</h3>
                        <p className="text-gray-300">বছরের অভিজ্ঞতা</p>
                    </motion.div>
                    <motion.div
                        className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">৬</h3>
                        <p className="text-gray-300">বিভাগীয় শহর</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                                <CardContent className="p-8">
                                    <motion.div
                                        className="relative inline-block mb-6"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30 rounded-full blur-xl"></div>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg relative z-10"
                                        />
                                    </motion.div>
                                    <motion.h3
                                        className="text-xl font-bold mb-2 text-white"
                                        whileHover={{ x: 5 }}
                                    >
                                        {member.name}
                                    </motion.h3>
                                    <p className="text-green-400 font-semibold mb-2">{member.role}</p>
                                    <div className="flex items-center justify-center mb-2 text-sm text-gray-400">
                                        <MapPin className="h-4 w-4 text-red-400 mr-1" />
                                        <span>{member.location}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4 font-medium">{member.credentials}</p>
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>
                                    <motion.div
                                        className="flex justify-center space-x-4"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <motion.a
                                            href={member.social.linkedin}
                                            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </motion.a>
                                        <motion.a
                                            href={member.social.email}
                                            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <Mail className="h-5 w-5" />
                                        </motion.a>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Join Our Team CTA */}
                <motion.div
                    className="text-center mt-16"
                    variants={itemVariants}
                >
                    <div className="bg-gradient-to-r from-green-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            আমাদের দলে যোগ দিন
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            বাংলাদেশের প্রযুক্তি খাতের ভবিষ্যৎ গড়তে আমাদের সাথে কাজ করুন।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                কর্মসংস্থান দেখুন
                            </button>
                            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                ইন্টার্নশিপ
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Team;