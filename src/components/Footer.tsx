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
        <footer className="text-gray-900 relative overflow-hidden bg-white border-t border-green-200">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-gray-50/20 to-gray-100/20 rounded-full filter blur-[120px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-gray-100/15 to-gray-200/15 rounded-full filter blur-[120px]"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.25, 0.2, 0.25],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
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
                                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-700 to-green-800">
                                    Softecof
                                </h3>
                                <p className="text-xs text-gray-500">Global Software Solutions</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-600">
                            We deliver cutting-edge software solutions that bridge local expertise with global standards.
                            From Bangladesh to the world, we help businesses thrive in the digital age.
                        </p>
                        <div className="space-y-3 md:space-y-4">
                            <motion.div
                                className="flex items-center space-x-3 text-gray-600"
                                whileHover={{ x: 5 }}
                            >
                                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                <span className="text-sm md:text-base">GEC, Gorib Ullah Shah Mazar, Chittagong, Bangladesh</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-3 text-gray-600"
                                whileHover={{ x: 5 }}
                            >
                                <Phone className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                <span className="text-sm md:text-base">+8801626889072</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-3 text-gray-600"
                                whileHover={{ x: 5 }}
                            >
                                <Mail className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                <span className="text-sm md:text-base">contact@softecof.com</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Quick Links</h3>
                        <ul className="grid grid-cols-2 gap-2 md:space-y-4">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-sm md:text-base text-gray-600 hover:text-green-600 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Our Services</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 md:space-y-4">
                            {services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-sm md:text-base text-gray-600 hover:text-green-600 transition-colors duration-300">
                                        {service}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links & Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Connect With Us</h3>
                        <div className="flex flex-wrap gap-3 md:space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="bg-green-50 hover:bg-green-100 p-2 md:p-3 rounded-full transition-colors duration-300 border border-green-200"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                </motion.a>
                            ))}
                        </div>
                        <div className="pt-4 md:pt-6">
                            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Subscribe to Newsletter</h4>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm md:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500"
                                />
                                <motion.button
                                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-md text-sm md:text-base"
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
                    className="border-t border-green-200 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-500"
                >
                    <p className="text-sm md:text-base">
                        © {new Date().getFullYear()} Softecof. All rights reserved.
                        <span className="flex items-center justify-center mt-2 text-xs">
                            Made with <Heart className="h-3 w-3 text-green-600 mx-1" /> in Bangladesh for the World
                        </span>
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;