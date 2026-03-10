"use client"
import { Linkedin, Mail, MapPin, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const Team = () => {
    const teamMembers = [
        {
            name: "Izaz Bin Azaz",
            role: "Chief Executive Officer",
            image: "/izaz.jpg",
            bio: "Leading Softecof's mission to bridge local expertise with global standards in software development.",
            location: "Dhaka, Bangladesh",

            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Kamrul Hassan",
            role: "Chief Technology Officer",
            image: "/ananda.jpeg",
            bio: "Expert technology architect specializing in enterprise-scale systems and emerging technologies.",
            location: "Dhaka, Bangladesh",

            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Md Ariful Islam",
            role: "Chief Operating Officer",
            image: "/Arif.jpg",
            bio: "Strategic operations leader driving operational excellence and sustainable business growth.",
            location: "Dhaka, Bangladesh",

            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Imam Hasan Saikat",
            role: "Head of Communication",
            image: "/ImamHasanSaikat.jpeg",
            bio: "Strategic communication expert driving brand visibility and stakeholder engagement across global markets.",
            location: "Dhaka, Bangladesh",

            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Sadat Shahriar Bari",
            role: "Team Lead",
            image: "/sadat.jpeg",
            bio: "Hands-on engineering leader focused on delivery excellence, mentoring, and building reliable, scalable products.",
            location: "Dhaka, Bangladesh",

            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Monjurul Alam",
            role: "Head of Project Management",
            image: "/monjur.jpeg",
            bio: "Program and delivery leader aligning scope, timelines, and stakeholders to ensure predictable execution and client success.",
            location: "Dhaka, Bangladesh",

            social: {
                linkedin: "#",
                email: "#"
            }
        },

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
        <section id="team" className="min-h-screen relative overflow-hidden py-24 sm:py-28 md:py-32 bg-gray-50">
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
                            Team
                        </div>
                        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            The people behind Softecof.
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                            A senior team focused on quality, delivery, and clear communication—end to end.
                        </p>
                    </div>
                    <div className="lg:text-right">
                        <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3 text-sm text-gray-700">
                            <span className="font-semibold text-gray-900">Hiring:</span> Internship & full-time roles
                        </div>
                    </div>
                </motion.div>

                {/* Team Stats */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16" variants={containerVariants}>
                    <motion.div
                        className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Users className="h-12 w-12 text-[#008A8A] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
                        <p className="text-gray-600">Skilled Developers</p>
                    </motion.div>
                    <motion.div
                        className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Award className="h-12 w-12 text-[#006666] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">8+</h3>
                        <p className="text-gray-600">Years Experience</p>
                    </motion.div>
                    <motion.div
                        className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Globe className="h-12 w-12 text-[#008A8A] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
                        <p className="text-gray-600">Major Cities</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    variants={containerVariants}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            <Card className="text-center bg-white/85 backdrop-blur border border-gray-200 hover:border-[#008A8A]/35 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md rounded-2xl">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <motion.div
                                        className="relative inline-block mb-6"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="absolute inset-0 bg-[#008A8A]/10 rounded-full blur-xl"></div>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={128}
                                            height={128}
                                            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg relative z-10"
                                        />
                                    </motion.div>
                                    <motion.h3
                                        className="text-xl font-bold mb-2 text-gray-900"
                                        whileHover={{ x: 5 }}
                                    >
                                        {member.name}
                                    </motion.h3>
                                    <p className="text-[#008A8A] font-semibold mb-2">{member.role}</p>
                                    <div className="flex items-center justify-center mb-2 text-sm text-gray-500">
                                        <MapPin className="h-4 w-4 text-[#008A8A] mr-1" />
                                        <span>{member.location}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{member.bio}</p>
                                    <motion.div
                                        className="flex justify-center space-x-4 mt-auto"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <motion.a
                                            href={member.social.linkedin}
                                            className="text-gray-500 hover:text-[#008A8A] transition-colors duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </motion.a>
                                        <motion.a
                                            href={member.social.email}
                                            className="text-gray-500 hover:text-[#006666] transition-colors duration-300"
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
                    <div className="bg-white/85 backdrop-blur rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-lg relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#008A8A]/10 blur-3xl" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Join Our Global Team
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Work with us to shape the future of technology and help businesses worldwide succeed in the digital age.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#008A8A] hover:bg-[#006666] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                View Open Positions
                            </button>
                            <button className="bg-white text-[#008A8A] border border-[#008A8A]/30 hover:bg-[#F0FBFB] px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                Internship Program
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Team;