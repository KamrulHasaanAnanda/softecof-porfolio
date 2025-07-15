"use client"
import { Globe, Building, Users, Shield, Zap, Code, Cloud, Monitor, FileText, Smartphone as Mobile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies to establish your online presence and drive business growth.",
            features: ["Responsive Design", "E-commerce Websites", "Corporate Websites", "Web Applications", "CMS Integration", "SEO Optimization"],
            color: "from-blue-500 to-blue-600",
            category: "Web Development"
        },
        {
            icon: Mobile,
            title: "App Development",
            description: "Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android platforms.",
            features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Optimization", "Push Notifications", "Offline Functionality"],
            color: "from-green-500 to-green-600",
            category: "Mobile Development"
        },
        {
            icon: Building,
            title: "Office Software",
            description: "Custom office management software solutions designed to streamline business operations and improve productivity.",
            features: ["Document Management", "Project Management", "HR Management", "Accounting Software", "Inventory Systems", "Workflow Automation"],
            color: "from-purple-500 to-purple-600",
            category: "Business Software"
        },
        {
            icon: Monitor,
            title: "Desktop Applications",
            description: "Professional desktop software applications built for Windows, macOS, and Linux to meet specific business requirements.",
            features: ["Windows Applications", "macOS Applications", "Linux Applications", "Cross-platform Desktop Apps", "System Integration", "Data Processing"],
            color: "from-orange-500 to-orange-600",
            category: "Desktop Development"
        },
        // {
        //     icon: Database,
        //     title: "Database Solutions",
        //     description: "Custom database design and management systems to organize, store, and retrieve your business data efficiently.",
        //     features: ["Database Design", "Data Migration", "Performance Optimization", "Backup Solutions", "Data Analytics", "API Development"],
        //     color: "from-red-500 to-red-600",
        //     category: "Database"
        // },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description: "Cloud-based applications and infrastructure solutions to scale your business operations and reduce IT costs.",
            features: ["Cloud Migration", "SaaS Applications", "Cloud Infrastructure", "DevOps Services", "Scalability Solutions", "Security Implementation"],
            color: "from-indigo-500 to-indigo-600",
            category: "Cloud Services"
        },
        // {
        //     icon: Settings,
        //     title: "System Integration",
        //     description: "Seamless integration of different software systems and APIs to create unified business workflows and data flow.",
        //     features: ["API Integration", "Third-party Integrations", "Legacy System Integration", "Data Synchronization", "Workflow Automation", "Real-time Updates"],
        //     color: "from-teal-500 to-teal-600",
        //     category: "Integration"
        // },
        {
            icon: FileText,
            title: "Custom Software",
            description: "Tailor-made software solutions designed specifically for your business needs and industry requirements.",
            features: ["Requirements Analysis", "Custom Development", "Testing & QA", "Deployment", "Training & Support", "Maintenance"],
            color: "from-pink-500 to-pink-600",
            category: "Custom Development"
        }
    ];

    const stats = [
        { icon: Users, label: "Happy Clients", value: "50+", color: "from-green-400 to-green-600" },
        { icon: Zap, label: "Projects Delivered", value: "100+", color: "from-blue-400 to-blue-600" },
        { icon: Shield, label: "Uptime Guarantee", value: "99.9%", color: "from-purple-400 to-purple-600" },
        { icon: Code, label: "Technologies", value: "15+", color: "from-orange-400 to-orange-600" },
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
        <section id="services" className="min-h-screen relative overflow-hidden py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bd-pattern opacity-10"></div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 md:mb-24"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white">
                        What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-red-400">Build</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-light px-4">
                        We specialize in creating custom software solutions that solve real business problems
                        and drive growth for our clients across various industries.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mb-12 sm:mb-16 md:mb-24"
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
                                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 sm:mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                                        <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">{stat.value}</h3>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300 h-full">
                                <CardContent className="p-4 sm:p-6 md:p-8">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-400 bg-white/10 px-2 sm:px-3 py-1 rounded-full">
                                            {service.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{service.description}</p>
                                    <div className="space-y-1 sm:space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-400 to-red-400 rounded-full mr-2 sm:mr-3"></div>
                                                <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                {/* <motion.div
                    className="mt-16 md:mt-24 text-center"
                    variants={itemVariants}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30 rounded-3xl blur-xl"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Ready to Build Something Amazing?
                            </h3>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Let's discuss your project requirements and create a custom solution that perfectly fits your business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Your Project
                                </motion.button>
                                <motion.button
                                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Case Studies
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default Services;