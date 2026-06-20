"use client"
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <section id="contact" className="py-20 md:py-28 bg-background">
            <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="line-accent mx-auto mb-6" />
                    <p className="section-eyebrow !mb-3">Contact</p>
                    <h2 className="heading-lg">Let&apos;s build something together</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Tell us about your tech needs. We respond within 24 hours.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-shell grid lg:grid-cols-5"
                >
                    {/* Left panel */}
                    <div className="lg:col-span-2 surface-dark p-8 sm:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/15 blur-[50px]" />
                        <div className="relative">
                            <h3 className="font-bold text-xl text-white mb-2">Get in touch</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-8">
                                Reach out directly or fill out the form—we&apos;ll get back to you with a clear next step.
                            </p>

                            <div className="space-y-5">
                                {[
                                    { icon: MapPin, label: "Global HQ", text: "GEC, Chittagong, Bangladesh" },
                                    { icon: Phone, label: "Phone", text: "+880 1626 889072" },
                                    { icon: Mail, label: "Email", text: "contact@softecof.com" },
                                ].map(({ icon: Icon, label, text }) => (
                                    <div key={text} className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-1 shrink-0">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-white/35">{label}</p>
                                            <p className="text-sm text-white mt-0.5">{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="tel:+8801626889072" className="btn-accent text-sm !py-2.5 !px-5">
                                    <Phone className="h-4 w-4" /> Call
                                </a>
                                <a href="https://wa.me/8801626889072" target="_blank" rel="noopener noreferrer" className="btn-outline-light text-sm !py-2.5 !px-5">
                                    <MessageCircle className="h-4 w-4" /> WhatsApp
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="h-4 w-4 text-brand-2 shrink-0" />
                                    <span className="text-xs text-white/50">Reply within 24h</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Shield className="h-4 w-4 text-brand-3 shrink-0" />
                                    <span className="text-xs text-white/50">Free consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form panel */}
                    <div className="lg:col-span-3 bg-white p-8 sm:p-10">
                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-sm font-semibold mb-2 block">First name</label>
                                    <input placeholder="John" className="input-field bg-muted/40 border-0" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-2 block">Last name</label>
                                    <input placeholder="Doe" className="input-field bg-muted/40 border-0" />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-sm font-semibold mb-2 block">Email</label>
                                    <input type="email" placeholder="you@company.com" className="input-field bg-muted/40 border-0" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold mb-2 block">Company</label>
                                    <input placeholder="Your business" className="input-field bg-muted/40 border-0" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold mb-2 block">Service needed</label>
                                <select className="input-field bg-muted/40 border-0 appearance-none">
                                    <option value="">Select a service</option>
                                    <option>IT & Tech Support</option>
                                    <option>Custom Software</option>
                                    <option>SaaS Services</option>
                                    <option>Web & Digital</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-semibold mb-2 block">Message</label>
                                <textarea placeholder="Tell us about your project or tech challenge..." className="input-field min-h-[140px] py-3 resize-none bg-muted/40 border-0" />
                            </div>
                            <a href="mailto:contact@softecof.com" className="btn-primary w-full">
                                Send message <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
