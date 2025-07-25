"use client"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
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

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    const quickLinks = [
        { label: "About Us", href: "#" },
        { label: "Services", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
    ];

    const services = [
        "Enterprise Software Development",
        "Cloud Solutions",
        "AI & Machine Learning",
        "Mobile App Development",
        "UI/UX Design",
        "DevOps & Infrastructure",
    ];

    return (
        <footer className="text-white relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-green-600/20 to-green-700/20 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
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
                    className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
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

            <motion.div
                className="container mx-auto px-4 sm:px-6 relative z-10 py-8 md:py-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <div className="flex items-center space-x-2">
                            <img src="/softecof.png" alt="Softecof Logo" className="h-6 w-6 md:h-8 md:w-8" />
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">
                                    Softecof
                                </h3>
                                <p className="text-xs text-gray-400">Global Software Solutions</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-300">
                            We deliver cutting-edge software solutions that bridge local expertise with global standards.
                            From Bangladesh to the world, we help businesses thrive in the digital age.
                        </p>
                        <div className="space-y-3 md:space-y-4">
                            <motion.div
                                className="flex items-center space-x-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                                <span className="text-sm md:text-base">GEC, Gorib Ullah Shah Mazar, Chittagong, Bangladesh</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                                <Phone className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                                <span className="text-sm md:text-base">+8801626889072</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-3 text-gray-300"
                                whileHover={{ x: 5 }}
                            >
                                <Mail className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                                <span className="text-sm md:text-base">contact@softecof.com</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-semibold text-white">Quick Links</h3>
                        <ul className="grid grid-cols-2 gap-2 md:space-y-4">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-sm md:text-base text-gray-300 hover:text-green-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-semibold text-white">Our Services</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 md:space-y-4">
                            {services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-sm md:text-base text-gray-300 hover:text-red-400 transition-colors duration-300">
                                        {service}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links & Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-semibold text-white">Connect With Us</h3>
                        <div className="flex flex-wrap gap-3 md:space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="bg-white/5 hover:bg-white/10 p-2 md:p-3 rounded-full transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
                                </motion.a>
                            ))}
                        </div>
                        <div className="pt-4 md:pt-6">
                            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Subscribe to Newsletter</h4>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                                />
                                <motion.button
                                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white px-4 py-2 rounded-md text-sm md:text-base"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>



                {/* Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400"
                >
                    <p className="text-sm md:text-base">
                        © {new Date().getFullYear()} Softecof. All rights reserved.
                        <span className="flex items-center justify-center mt-2 text-xs">
                            Made with <Heart className="h-3 w-3 text-red-400 mx-1" /> in Bangladesh for the World
                        </span>
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;