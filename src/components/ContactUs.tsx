"use client"
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
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
                        Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Connect</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        Ready to start your next project? Get in touch with our team to discuss how we can help
                        bring your vision to life.
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
                                    <Building2 className="h-6 w-6 text-blue-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Headquarters</h4>
                                        <p className="text-gray-300">123 Tech Street, San Francisco, CA 94105</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Phone className="h-6 w-6 text-blue-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <p className="text-gray-300">+1 (555) 123-4567</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Mail className="h-6 w-6 text-blue-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <p className="text-gray-300">contact@softecof.com</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Clock className="h-6 w-6 text-blue-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">Business Hours</h4>
                                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                                    <Input
                                        id="firstName"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                                        placeholder="John"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                                        placeholder="Doe"
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                                    placeholder="john@example.com"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="company" className="text-gray-300">Company</Label>
                                <Input
                                    id="company"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                                    placeholder="Your Company"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="projectType" className="text-gray-300">Project Type</Label>
                                <Select>
                                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                        <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-white/20">
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="mobile">Mobile App</SelectItem>
                                        <SelectItem value="ai">AI/ML Solution</SelectItem>
                                        <SelectItem value="cloud">Cloud Services</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="message" className="text-gray-300">Project Details</Label>
                                <Textarea
                                    id="message"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[150px]"
                                    placeholder="Tell us about your project..."
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                                    size="lg"
                                >
                                    Send Message
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;