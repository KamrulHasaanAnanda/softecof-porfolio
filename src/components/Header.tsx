"use client"
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Team", href: "/#team" },
        { name: "Contact", href: "/#contact" },
    ];

    const handleNavigation = (href: string) => {
        if (href.startsWith('/')) {
            // Page navigation
            window.location.href = href;
        } else {
            // Anchor link navigation
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
                : "bg-white/90 backdrop-blur-sm"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-200/20 rounded-full blur-sm"></div>
                            <img
                                src="/softecof.png"
                                alt="Softecof Logo"
                                className="h-8 w-8 md:h-10 md:w-10 relative z-10"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                                SOFTECOF
                            </span>
                            <span className="text-xs text-gray-500 hidden sm:block">
                                Global Software Solutions
                            </span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => handleNavigation(item.href)}
                                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 group-hover:w-full transition-all duration-300"></span>
                            </motion.button>
                        ))}
                    </nav>

                    {/* Contact Info & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Phone className="h-4 w-4 text-gray-600" />
                            <span className="text-sm">+8801626889072</span>
                        </div>
                        <Button
                            onClick={() => handleNavigation("/#contact")}
                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                        >
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="py-4 space-y-4">
                                {navigationItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.href)}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}

                                {/* Mobile Contact Info */}
                                <div className="px-4 py-4 border-t border-gray-200 space-y-3">
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Phone className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm">+8801626889072</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Mail className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm">contact@softecof.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Globe className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm">Dhaka, Bangladesh</span>
                                    </div>
                                    <Button
                                        onClick={() => handleNavigation("/#contact")}
                                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                                    >
                                        Get Quote
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
