"use client"
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
    { name: "Izaz Bin Azaz", role: "Chief Executive Officer", image: "/izaz.jpg", social: { linkedin: "#", email: "#" } },
    { name: "Kamrul Hassan", role: "Chief Technology Officer", image: "/ananda.jpeg", social: { linkedin: "#", email: "#" } },
    { name: "Md Ariful Islam", role: "Chief Operating Officer", image: "/Arif.jpg", social: { linkedin: "#", email: "#" } },
    { name: "Imam Hasan Saikat", role: "Head of Communication", image: "/ImamHasanSaikat.jpeg", social: { linkedin: "#", email: "#" } },
    { name: "Sadat Shahriar Bari", role: "Team Lead", image: "/sadat.jpeg", social: { linkedin: "#", email: "#" } },
    { name: "Monjurul Alam", role: "Head of Project Management", image: "/monjur.jpeg", social: { linkedin: "#", email: "#" } },
];

const ringClass = ["ring-brand-1", "ring-brand-2", "ring-brand-3", "ring-brand-4", "ring-brand-5", "ring-brand-1"];
const roleClass = ["text-brand-2", "text-brand-1", "text-brand-3", "text-brand-4", "text-brand-5", "text-brand-1"];

const Team = () => {
    return (
        <section id="team" className="py-20 md:py-28 surface-dark relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div className="container-site relative">
                <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
                    <div className="lg:col-span-6">
                        <div className="brand-bar mb-6 max-w-xs"><span /><span /><span /><span /><span /></div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] mb-3 text-brand-2">Our team</p>
                        <h2 className="heading-lg text-white">The people behind Softecof</h2>
                    </div>

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {teamMembers.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="card-glass p-6 sm:p-7 text-center group hover:border-white/20 transition-all duration-300"
                        >
                            <div className={`relative mx-auto h-[104px] w-[104px] rounded-full overflow-hidden ring-[3px] ${ringClass[i]} ring-offset-2 ring-offset-[hsl(220,28%,10%)]`}>
                                <Image
                                    src={m.image}
                                    alt={m.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <p className="font-bold text-lg text-white mt-5">{m.name}</p>
                            <p className={`text-sm font-semibold mt-1.5 ${roleClass[i]}`}>{m.role}</p>
                            <div className="flex justify-center gap-2 mt-5 pt-5 border-t border-white/10">
                                <a
                                    href={m.social.linkedin}
                                    aria-label={`${m.name} LinkedIn`}
                                    className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-1 hover:text-white transition-colors"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                                <a
                                    href={m.social.email}
                                    aria-label={`Email ${m.name}`}
                                    className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-1 hover:text-white transition-colors"
                                >
                                    <Mail className="h-4 w-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
