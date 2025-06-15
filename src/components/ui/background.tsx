"use client"
import { motion } from "framer-motion";

interface BackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

const Background = ({ children, className }: BackgroundProps) => {
    return (
        <div className={className}>
            <div className="fixed inset-0 -z-10">
                {/* Animated gradient background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                        x: [0, 20, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full filter blur-[100px]"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.4, 0.3, 0.4],
                        x: [0, -20, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>
            {children}
        </div>
    );
};

export default Background; 