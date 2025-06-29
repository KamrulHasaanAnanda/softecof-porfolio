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
                        আমাদের সাথে <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">যোগাযোগ করুন</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        আপনার পরবর্তী প্রকল্প শুরু করার জন্য প্রস্তুত? আমাদের দলের সাথে যোগাযোগ করুন
                        এবং দেখুন আমরা কীভাবে আপনার স্বপ্ন বাস্তবায়নে সহায়তা করতে পারি।
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
                            <h3 className="text-2xl font-bold mb-6 text-white">যোগাযোগের তথ্য</h3>
                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Building2 className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">সদর দপ্তর</h4>
                                        <p className="text-gray-300">হাউস #১২৩, রোড #৮, ধানমন্ডি, ঢাকা-১২০৯</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Phone className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">ফোন</h4>
                                        <p className="text-gray-300">+৮৮০ ১২৩৪-৫৬৭৮৯০</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Mail className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">ইমেইল</h4>
                                        <p className="text-gray-300">info@softecof.com</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Clock className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">কর্মঘণ্টা</h4>
                                        <p className="text-gray-300">রবিবার - বৃহস্পতিবার: সকাল ৯টা - বিকাল ৬টা</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    whileHover={{ x: 5 }}
                                >
                                    <Globe className="h-6 w-6 text-green-400 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white">ওয়েবসাইট</h4>
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
                            <h3 className="text-xl font-bold mb-6 text-white">দ্রুত যোগাযোগ</h3>
                            <div className="space-y-4">
                                <motion.button
                                    className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>ফোনে কল করুন</span>
                                </motion.button>
                                <motion.button
                                    className="w-full flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span>হোয়াটসঅ্যাপে মেসেজ</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">আমাদের কাছে বার্তা পাঠান</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="firstName" className="text-gray-300">নাম</Label>
                                    <Input
                                        id="firstName"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                        placeholder="আপনার নাম"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Label htmlFor="lastName" className="text-gray-300">পদবী</Label>
                                    <Input
                                        id="lastName"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                        placeholder="আপনার পদবী"
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="email" className="text-gray-300">ইমেইল ঠিকানা</Label>
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
                                <Label htmlFor="company" className="text-gray-300">প্রতিষ্ঠানের নাম</Label>
                                <Input
                                    id="company"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400"
                                    placeholder="আপনার প্রতিষ্ঠানের নাম"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="projectType" className="text-gray-300">প্রকল্পের ধরন</Label>
                                <Select>
                                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                        <SelectValue placeholder="প্রকল্পের ধরন নির্বাচন করুন" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-800 border-white/20">
                                        <SelectItem value="web">ওয়েব ডেভেলপমেন্ট</SelectItem>
                                        <SelectItem value="mobile">মোবাইল অ্যাপ</SelectItem>
                                        <SelectItem value="ai">এআই/এমএল সমাধান</SelectItem>
                                        <SelectItem value="cloud">ক্লাউড সেবা</SelectItem>
                                        <SelectItem value="erp">ইআরপি সিস্টেম</SelectItem>
                                        <SelectItem value="other">অন্যান্য</SelectItem>
                                    </SelectContent>
                                </Select>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Label htmlFor="message" className="text-gray-300">প্রকল্পের বিবরণ</Label>
                                <Textarea
                                    id="message"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 min-h-[150px]"
                                    placeholder="আপনার প্রকল্প সম্পর্কে আমাদের জানান..."
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white"
                                    size="lg"
                                >
                                    বার্তা পাঠান
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