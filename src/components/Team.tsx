"use client"
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Team = () => {
    const teamMembers = [
        {
            name: "Michael Thompson",
            role: "Chief Executive Officer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            bio: "Strategic technology leader with 15+ years driving digital transformation initiatives for Fortune 500 companies.",
            credentials: "MBA, MIT • Former McKinsey Consultant",
            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Dr. Sarah Chen",
            role: "Chief Technology Officer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            bio: "Technical architect specializing in enterprise-scale systems and emerging technologies with proven track record.",
            credentials: "PhD Computer Science, Stanford • AWS Solutions Architect",
            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "David Rodriguez",
            role: "VP of Engineering",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            bio: "Full-stack engineering leader passionate about scalable architecture and high-performance development teams.",
            credentials: "MS Software Engineering • Certified Scrum Master",
            social: {
                linkedin: "#",
                email: "#"
            }
        },
        {
            name: "Jennifer Liu",
            role: "VP of Client Success",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            bio: "Client success strategist focused on delivering exceptional outcomes and long-term partnership value.",
            credentials: "MBA Operations • Six Sigma Black Belt",
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
        <section className="min-h-screen relative overflow-hidden py-32">
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
                        Leadership <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Team</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        Our experienced leadership team combines deep technical expertise with strategic
                        business acumen to deliver exceptional results for our clients.
                    </p>
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
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-xl"></div>
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
                                    <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                                    <p className="text-sm text-gray-400 mb-4 font-medium">{member.credentials}</p>
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>
                                    <motion.div
                                        className="flex justify-center space-x-4"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <motion.a
                                            href={member.social.linkedin}
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </motion.a>
                                        <motion.a
                                            href={member.social.email}
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
            </motion.div>
        </section>
    );
};

export default Team;