"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    { title: "Checkbox.live", category: "SaaS", type: "Productivity", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&h=600&fit=crop", desc: "Digital product reseller platform helping SMEs sell software subscriptions online." },
    { title: "Healthcare Platform", category: "Healthcare", type: "Management", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=600&fit=crop", desc: "Clinic and hospital management system with appointments, records, and billing." },
    { title: "Tarulata", category: "AgriTech", type: "Marketplace", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop", desc: "Agricultural products marketplace connecting farmers with buyers across regions." },
    { title: "Education System", category: "EdTech", type: "Platform", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop", desc: "School and college management platform for admissions, attendance, and grades." },
    { title: "SkinsDojo", category: "E-commerce", type: "Marketplace", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&h=600&fit=crop", desc: "Gaming marketplace with secure trading, inventory, and payment processing." },
    { title: "Customer Service Hub", category: "SaaS", type: "Communication", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=600&fit=crop", desc: "Business support and ticketing platform for teams handling customer inquiries." },
];

function ProjectCard({ project, className = "" }: { project: typeof projects[0]; className?: string }) {
    return (
        <article className={`group project-tile ${className}`}>
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white/80 backdrop-blur-sm border border-white/10">
                        {project.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-accent text-white">
                        {project.category}
                    </span>
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-white">{project.title}</h3>
                <p className="text-sm text-white/60 mt-2 leading-relaxed line-clamp-2">{project.desc}</p>
            </div>
            <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/15 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <ArrowUpRight className="h-4 w-4" />
            </div>
        </article>
    );
}

interface PortfolioProps {
    showAll?: boolean;
}

const Portfolio = ({ showAll = false }: PortfolioProps) => {
    return (
        <section id="portfolio" className="py-20 md:py-28 bg-white">
            <div className="container-site">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 relative">
                    <div className="max-w-xl">
                        <div className="line-accent mb-6" />
                        <p className="section-eyebrow !mb-3">Portfolio</p>
                        <h2 className="heading-lg">Projects we&apos;ve delivered</h2>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-md lg:text-right leading-relaxed">
                        SaaS platforms, custom software, and business systems for clients worldwide.
                    </p>
                    {!showAll && (
                        <Link href="/portfolio" className="btn-outline-dark shrink-0 self-start lg:self-auto">
                            View all <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    )}
                </div>

                {showAll ? (
                    /* Full portfolio — bento grid, all same min-height */
                    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 lg:col-span-7 lg:row-span-2">
                            <ProjectCard project={projects[0]} className="h-full min-h-[400px] lg:min-h-[660px]" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="lg:col-span-5">
                            <ProjectCard project={projects[1]} className="h-full min-h-[320px]" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-5">
                            <ProjectCard project={projects[2]} className="h-full min-h-[320px]" />
                        </motion.div>
                        {projects.slice(3).map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.12 + i * 0.06 }}
                                className="lg:col-span-4"
                            >
                                <ProjectCard project={p} className="h-full min-h-[320px]" />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    /* Homepage preview — 1 large + 2 stacked */
                    <div className="grid lg:grid-cols-12 gap-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7">
                            <ProjectCard project={projects[0]} className="min-h-[360px] lg:min-h-[480px]" />
                        </motion.div>
                        <div className="lg:col-span-5 grid gap-4">
                            {projects.slice(1, 3).map((p, i) => (
                                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 + i * 0.06 }}>
                                    <ProjectCard project={p} className="min-h-[220px] lg:min-h-[232px]" />
                                </motion.div>
                            ))}
                        </div>
                        <div className="lg:col-span-12 flex justify-center mt-2 lg:hidden">
                            <Link href="/portfolio" className="btn-outline-dark">
                                View all projects <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                )}

                {showAll && (
                    <div className="mt-10 cta-panel rounded-2xl p-10 sm:p-12 text-center">
                        <h3 className="heading-md text-white">Have a project in mind?</h3>
                        <p className="text-white/55 mt-3 max-w-md mx-auto">We build SaaS products, custom business software, and digital platforms for SMEs globally.</p>
                        <Link href="/#contact" className="btn-accent inline-flex mt-8">
                            Start a project <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
