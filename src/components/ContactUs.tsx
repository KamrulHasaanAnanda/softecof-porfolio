"use client"
import { Building2, Clock, Mail, Phone, MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const ContactUs = () => {
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
                        Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        Ready to start your next project? Connect with our team and discover
                        how we can help bring your vision to life with world-class solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        className="space-y-8"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Building2 className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Headquarters</h4>
                                        <p className="text-gray-300">GEC, Gorib Ullah Shah Mazar, Chittagong, Bangladesh</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Phone className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <p className="text-gray-300">+8801626889072</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Mail className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <p className="text-gray-300">contact@softecof.com</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Clock className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Business Hours</h4>
                                        <p className="text-gray-300">Sunday - Thursday: 9:00 AM - 6:00 PM (GMT+6)</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Globe className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Website</h4>
                                        <p className="text-gray-300">www.softecof.com</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Quick Contact Options */}
                        <motion.div
                            className="bg-gradient-to-r from-green-600/20 to-red-600/20 backdrop-blur-sm border border-white/10 rounded-lg p-8"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-white">Quick Contact</h3>
                            <div className="space-y-4">
                                <motion.a
                                    href="tel:+8801626889072"
                                    className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>Call Now</span>
                                </motion.a>
                                <motion.a
                                    href="https://wa.me/8801626889072"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span>WhatsApp Message</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="firstName" className="text-gray-300 mb-2 block">First Name</Label>
                                    <Input
                                        id="firstName"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                        placeholder="Your first name"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="lastName" className="text-gray-300 mb-2 block">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                        placeholder="Your last name"
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="email" className="text-gray-300 mb-2 block">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                    placeholder="your.email@example.com"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="company" className="text-gray-300 mb-2 block">Company Name</Label>
                                <Input
                                    id="company"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                    placeholder="Your company name"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="projectType" className="text-gray-300 mb-2 block">Project Type</Label>
                                <Select>
                                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                        <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-white/20">
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="mobile">Mobile App</SelectItem>
                                        <SelectItem value="ai">AI/ML Solutions</SelectItem>
                                        <SelectItem value="cloud">Cloud Services</SelectItem>
                                        <SelectItem value="erp">ERP System</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="message" className="text-gray-300 mb-2 block">Project Description</Label>
                                <Textarea
                                    id="message"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 min-h-[150px]"
                                    placeholder="Tell us about your project..."
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="mailto:contact@softecof.com?subject=Project Inquiry from Portfolio Website&body=Hello,%0D%0A%0D%0AI would like to discuss a project with your team.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0ABest regards,"
                                    className="w-full flex items-center justify-center bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white py-6 px-10 rounded-lg transition-all duration-300 text-xl font-bold"
                                >
                                    Send Message
                                </a>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs; 