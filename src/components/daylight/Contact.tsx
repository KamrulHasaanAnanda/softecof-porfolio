"use client"
import { useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { contactFields, submitContactForm } from "@/lib/contact-form";
import { CONTACT, serviceOptions } from "./data";
import { Accent, Eyebrow } from "./ui";

const labelClass = "text-[14px] font-bold";

function ContactRow({ icon, iconClass, label, children }: { icon: ReactNode; iconClass: string; label: string; children: ReactNode }) {
    return (
        <>
            <span className={`flex h-[42px] w-[42px] flex-none items-center justify-center rounded-xl ${iconClass}`}>{icon}</span>
            <span className="flex flex-col leading-[1.35]">
                <span className="text-[12.5px] font-semibold text-d-subtle">{label}</span>
                {children}
            </span>
        </>
    );
}

const rowClass = "flex items-center gap-3.5 rounded-[18px] px-4 py-3.5";
const rowLink = `${rowClass} bg-white shadow-[0_10px_24px_-18px_rgba(12,26,25,0.4)] transition hover:-translate-y-px`;

const Contact = () => {
    const [sent, setSent] = useState(false);

    return (
        <section id="contact" className="d-wrap py-section">
            <div className="flex flex-wrap gap-5 rounded-[36px] bg-[#F4EFE6] bg-[radial-gradient(60%_80%_at_0%_0%,#BFE3DA,transparent_70%),radial-gradient(60%_80%_at_100%_100%,#F9D2AC,transparent_70%)] p-3">
                <div className="flex min-w-0 grow basis-[calc(380px+2*clamp(24px,4vw,44px))] flex-col items-start gap-5 p-[clamp(24px,4vw,44px)]">
                    <Eyebrow className="bg-white text-d-mint-ink">Contact</Eyebrow>
                    <h2 className="m-0 text-[length:clamp(34px,4vw,52px)] font-extrabold leading-[1.06] tracking-[-0.04em] text-balance">
                        Let’s build something <Accent>together</Accent>
                    </h2>
                    <p className="m-0 max-w-[400px] text-[17px] leading-[1.65] text-d-ink-2">
                        Tell us about your tech needs. We respond within 24 hours with a clear next step.
                    </p>
                    <div className="flex w-full max-w-[400px] flex-col gap-2.5">
                        <a href={CONTACT.phoneHref} className={rowLink}>
                            <ContactRow icon={<Phone size={18} />} iconClass="bg-d-teal text-white" label="Call or WhatsApp">
                                <span className="text-[17px] font-extrabold tracking-[-0.02em]">{CONTACT.phoneDisplay}</span>
                            </ContactRow>
                        </a>
                        <a href={`mailto:${CONTACT.email}`} className={rowLink}>
                            <ContactRow icon={<Mail size={18} />} iconClass="bg-d-peach-tint text-d-peach-ink" label="Email">
                                <span className="text-[16px] font-bold">{CONTACT.email}</span>
                            </ContactRow>
                        </a>
                        <div className={`${rowClass} bg-white/60`}>
                            <ContactRow icon={<MapPin size={18} />} iconClass="bg-d-blue text-d-blue-ink" label="Global HQ">
                                <span className="text-[16px] font-bold">{CONTACT.address}</span>
                            </ContactRow>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={(e) => {
                        submitContactForm(e);
                        setSent(true);
                    }}
                    className="grid min-w-0 grow-[1.3] basis-[calc(440px+2*clamp(24px,3.5vw,40px))] grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] content-start gap-4 rounded-[28px] bg-white p-[clamp(24px,3.5vw,40px)] shadow-[0_1px_2px_rgba(12,26,25,0.05),0_30px_60px_-36px_rgba(12,26,25,0.4)]"
                >
                    {contactFields.map((f) => (
                        <div key={f.id} className="flex flex-col gap-[7px]">
                            <label htmlFor={f.id} className={labelClass}>
                                {f.label}
                            </label>
                            <input
                                id={f.id}
                                name={f.name}
                                type={f.type}
                                placeholder={f.placeholder}
                                autoComplete={f.autoComplete}
                                required={"required" in f}
                                className="d-input"
                            />
                        </div>
                    ))}
                    <div className="col-span-full flex flex-col gap-[7px]">
                        <label htmlFor="contact-service" className={labelClass}>
                            What do you need?
                        </label>
                        <select id="contact-service" name="service" defaultValue="" className="d-input d-select">
                            <option value="">Select a service</option>
                            {serviceOptions.map((o) => (
                                <option key={o}>{o}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-full flex flex-col gap-[7px]">
                        <label htmlFor="contact-message" className={labelClass}>
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Tell us about your project or tech challenge…"
                            className="d-input !h-auto resize-y py-3.5 leading-[1.5]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="col-span-full inline-flex min-h-14 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-d-teal text-[16.5px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(30,122,111,0.8)] transition hover:brightness-110"
                    >
                        Send message
                        <ArrowRight size={17} strokeWidth={2.2} />
                    </button>
                    <div aria-live="polite" className="col-span-full empty:hidden">
                        {sent && (
                            <p className="m-0 flex items-start gap-2.5 rounded-2xl bg-d-mint px-4 py-3 text-[14px] font-medium text-d-mint-ink">
                                <CheckCircle2 size={18} className="mt-0.5 flex-none" />
                                <span>
                                    Your email app should now open with your message ready to send. If it didn’t, email us at{" "}
                                    <a href={`mailto:${CONTACT.email}`} className="font-bold underline">
                                        {CONTACT.email}
                                    </a>
                                    .
                                </span>
                            </p>
                        )}
                    </div>
                    <p className="col-span-full m-0 flex flex-wrap justify-center gap-x-[18px] gap-y-1.5 text-[13.5px] font-medium text-d-muted">
                        <span>Reply within 24h</span>
                        <span aria-hidden="true">·</span>
                        <span>Free consultation</span>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Contact;
