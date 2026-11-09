"use client"
import { Suspense, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { submitContactForm } from "@/lib/contact-form";
import { CONTACT, serviceOptions, team } from "./data";

const labelClass = "text-[15px] font-semibold text-c-ink";

/** Picks up ?service=…&message=… from service links and the assistant. Separate so the form itself stays in the static HTML. */
function RequestFromUrl({ onService, onMessage }: { onService: (service: string) => void; onMessage: (message: string) => void }) {
    const params = useSearchParams();
    const requested = params.get("service");
    const message = params.get("message");
    useEffect(() => {
        if (requested && serviceOptions.includes(requested)) onService(requested);
        if (message) onMessage(message.slice(0, 1000));
    }, [requested, message, onService, onMessage]);
    return null;
}

function Channel({ href, external, icon, label, value }: { href: string; external?: boolean; icon: ReactNode; label: string; value: string }) {
    return (
        <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex min-h-[60px] items-center gap-3.5 border-t border-white/20 py-2.5 min-[641px]:min-h-[68px] min-[641px]:py-3"
        >
            <span className="flex-none text-c-peach">{icon}</span>
            <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14.5px] text-c-on-footer">{label}</span>
                <span className="text-[18px] font-semibold leading-[1.3] text-white [overflow-wrap:anywhere] transition-colors group-hover:text-c-peach">{value}</span>
            </span>
            <ArrowUpRight size={20} className="flex-none text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
        </a>
    );
}

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section id="contact" aria-labelledby="contact-title">
            <Suspense fallback={null}>
                <RequestFromUrl onService={setService} onMessage={setMessage} />
            </Suspense>
            <div className="c-wrap c-section">
                <div className="grid overflow-hidden rounded-[20px] border border-c-line shadow-[0_30px_70px_-40px_rgba(11,31,29,0.5)] min-[1021px]:grid-cols-[1fr_1.2fr]">
                    <div className="c-on-dark flex flex-col bg-c-teal p-[clamp(20px,3.4vw,44px)] text-white">
                        <h2 id="contact-title" className="c-h2 !text-white">
                            Tell us what your company needs
                        </h2>
                        <p className="m-0 mt-3 max-w-[440px] text-[19px] leading-[1.5] text-c-on-teal text-pretty max-[640px]:text-[17px]">We respond within 24 hours with a clear next step.</p>

                        <div className="mt-6 min-[1021px]:mt-auto min-[1021px]:pt-8">
                            <Channel href={CONTACT.phoneHref} icon={<Phone size={21} aria-hidden="true" />} label="Call us" value={CONTACT.phoneDisplay} />
                            <Channel href={CONTACT.whatsapp} external icon={<MessageCircle size={21} aria-hidden="true" />} label="WhatsApp" value="Message us on WhatsApp" />
                            <Channel href={`mailto:${CONTACT.email}`} icon={<Mail size={21} aria-hidden="true" />} label="Email" value={CONTACT.email} />
                            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-white/20 pt-5">
                                <span className="text-[15.5px] text-c-on-teal">{CONTACT.address}</span>
                                <span aria-hidden="true" className="flex max-[640px]:hidden">
                                    {team.slice(0, 4).map((m, i) => (
                                        <Image key={m.name} src={m.image} alt="" width={80} height={80} className={`h-10 w-10 rounded-full border-2 border-c-teal object-cover object-top ${i ? "-ml-2.5" : ""}`} />
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={(e) => {
                            submitContactForm(e);
                            setSent(true);
                        }}
                        className="grid content-start gap-x-4 gap-y-4 bg-white p-[clamp(20px,3.4vw,44px)] min-[641px]:gap-y-5 min-[561px]:grid-cols-2"
                    >
                        <div className="flex min-w-0 flex-col gap-1.5">
                            <label htmlFor="contact-name" className={labelClass}>
                                Your name
                            </label>
                            {/* contact-form.ts builds the sender's name from firstName + lastName; one field is enough here. */}
                            <input id="contact-name" name="firstName" type="text" autoComplete="name" className="c-input" />
                        </div>
                        <div className="flex min-w-0 flex-col gap-1.5">
                            <label htmlFor="contact-email" className={labelClass}>
                                Work email (required)
                            </label>
                            <input id="contact-email" name="email" type="email" autoComplete="email" required className="c-input" />
                        </div>
                        <div className="flex min-w-0 flex-col gap-1.5">
                            <label htmlFor="contact-company" className={labelClass}>
                                Company
                            </label>
                            <input id="contact-company" name="company" type="text" autoComplete="organization" className="c-input" />
                        </div>
                        <div className="flex min-w-0 flex-col gap-1.5">
                            <label htmlFor="contact-service" className={labelClass}>
                                What do you need?
                            </label>
                            <select id="contact-service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="c-input c-select">
                                <option value="">Choose a service</option>
                                {serviceOptions.map((o) => (
                                    <option key={o} value={o}>
                                        {o}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-full flex flex-col gap-1.5">
                            <label htmlFor="contact-message" className={labelClass}>
                                Your message (required)
                            </label>
                            <textarea id="contact-message" name="message" rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} className="c-input resize-y py-2.5 leading-[1.5] max-[640px]:h-[116px]" />
                        </div>
                        <div className="col-span-full flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
                            <button type="submit" className="c-btn c-btn-primary c-lift gap-2 max-[480px]:w-full">
                                Send message
                                <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                            </button>
                            <span className="text-[15px] text-c-muted max-[480px]:w-full max-[480px]:text-center">Free consultation</span>
                        </div>
                        <div aria-live="polite" className="col-span-full empty:hidden">
                            {sent && (
                                <p className="m-0 text-[15.5px] text-c-ink">
                                    Your email app should now open with your message ready to send. If it didn’t, email us at{" "}
                                    <a href={`mailto:${CONTACT.email}`} className="c-link">
                                        {CONTACT.email}
                                    </a>
                                    .
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
