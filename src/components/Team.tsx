"use client"
import { Linkedin, Mail, MapPin, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
            bio: "Strategic communication expert driving brand visibility and stakeholder engagement across global markets.",
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
            bio: "Financial strategist with expertise in corporate finance, investment management, and business development.",
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
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">Team</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        Our experienced leadership team combines deep technical expertise with strategic business intelligence
                        to deliver exceptional results for our global clients.
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
                        <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
                        <p className="text-gray-300">Skilled Developers</p>
                    </motion.div>
                    <motion.div
                        className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Award className="h-12 w-12 text-red-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">8+</h3>
                        <p className="text-gray-300">Years Experience</p>
                    </motion.div>
                    <motion.div
                        className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Globe className="h-12 w-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">6</h3>
                        <p className="text-gray-300">Major Cities</p>
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
                            <Card className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                                <CardContent className="p-8 flex flex-col h-full">
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

                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">{member.bio}</p>
                                    <motion.div
                                        className="flex justify-center space-x-4 mt-auto"
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
                            Join Our Global Team
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Work with us to shape the future of technology and help businesses worldwide succeed in the digital age.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                                View Open Positions
                            </button>
                            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
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