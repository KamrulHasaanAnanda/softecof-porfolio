"use client"
import { Suspense, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactFields, submitContactForm } from "@/lib/contact-form";
import { CONTACT, heroAssurances, serviceOptions } from "./data";

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
            className="group flex min-h-[76px] items-center gap-4 border-t border-c-ink/20 py-3 transition-colors first:border-t-0"
        >
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[10px] bg-c-night text-c-peach">{icon}</span>
            <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14.5px] text-c-ink/80">{label}</span>
                <span className="text-[length:clamp(18px,1.7vw,22px)] font-semibold leading-[1.25] tracking-[-0.01em] text-c-ink [overflow-wrap:anywhere] group-hover:underline group-hover:underline-offset-4">
                    {value}
                </span>
            </span>
            <ArrowUpRight size={22} className="flex-none text-c-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
        </a>
    );
}

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section id="contact" aria-labelledby="contact-title" className="bg-c-peach text-c-ink">
            <Suspense fallback={null}>
                <RequestFromUrl onService={setService} onMessage={setMessage} />
            </Suspense>
            <div className="c-wrap c-section grid items-start gap-x-16 gap-y-10 min-[1021px]:grid-cols-[1fr_1.15fr]">
                <div>
                    <h2 id="contact-title" className="c-h2">
                        Tell us what your company needs
                    </h2>
                    <p className="m-0 mt-4 max-w-[480px] text-[19px] leading-[1.5] text-c-ink text-pretty">We respond within 24 hours with a clear next step. Call, message, or use the form.</p>

                    <div className="mt-6">
                        <Channel href={CONTACT.phoneHref} icon={<Phone size={20} aria-hidden="true" />} label="Call us" value={CONTACT.phoneDisplay} />
                        <Channel href={CONTACT.whatsapp} external icon={<MessageCircle size={20} aria-hidden="true" />} label="WhatsApp" value="Message us on WhatsApp" />
                        <Channel href={`mailto:${CONTACT.email}`} icon={<Mail size={20} aria-hidden="true" />} label="Email" value={CONTACT.email} />
                    </div>
                    <p className="m-0 mt-3 flex items-center gap-2 border-t border-c-ink/20 pt-4 text-[16px] text-c-ink">
                        <MapPin size={18} className="flex-none" aria-hidden="true" />
                        {CONTACT.address}
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        submitContactForm(e);
                        setSent(true);
                    }}
                    className="grid gap-x-4 gap-y-5 rounded-[16px] bg-white p-[clamp(20px,3vw,36px)] shadow-[0_24px_60px_-30px_rgba(11,31,29,0.55)] min-[561px]:grid-cols-2"
                >
                    {contactFields.map((f) => (
                        <div key={f.id} className="flex min-w-0 flex-col gap-1.5">
                            <label htmlFor={f.id} className={labelClass}>
                                {f.label}
                                {"required" in f ? " (required)" : ""}
                            </label>
                            <input id={f.id} name={f.name} type={f.type} autoComplete={f.autoComplete} required={"required" in f} className="c-input" />
                        </div>
                    ))}
                    <div className="col-span-full flex flex-col gap-1.5">
                        <label htmlFor="contact-service" className={labelClass}>
                            What do you need?
                        </label>
                        <select id="contact-service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="c-input">
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
                        <textarea id="contact-message" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="c-input resize-y py-2.5 leading-[1.5]" />
                    </div>
                    <div className="col-span-full">
                        <button type="submit" className="c-btn w-full gap-2 border-c-night bg-c-night text-white hover:border-c-teal hover:bg-c-teal">
                            Send message
                            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                        </button>
                        <p className="m-0 mt-3 text-center text-[14.5px] text-c-muted">{heroAssurances.slice(0, 2).join(" · ")}</p>
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
        </section>
    );
};

export default Contact;
