"use client"
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactFields as fields, submitContactForm as handleSubmit } from "@/lib/contact-form";
import { CONTACT, serviceOptions } from "./data";

const labelClass = "text-[13.5px] font-medium text-m-soft";

const Contact = () => {
    return (
        <section id="contact" className="m-wrap py-section">
            <div className="relative flex flex-wrap overflow-hidden rounded-[32px] border border-white/10 bg-m-panel bg-[radial-gradient(80%_120%_at_0%_0%,rgba(79,209,190,0.22),transparent_55%),radial-gradient(60%_90%_at_100%_100%,rgba(244,205,165,0.12),transparent_60%)]">
                <div className="flex min-w-0 grow basis-[calc(380px+2*clamp(28px,4vw,52px))] flex-col items-start gap-[22px] p-[clamp(28px,4vw,52px)]">
                    <h2 className="m-0 text-[length:clamp(34px,4vw,54px)] font-semibold leading-[1.02] tracking-[-0.05em] text-m-head text-balance">
                        Let’s build something{" "}
                        <span className="bg-[linear-gradient(92deg,#5FE0CB_10%,#F4CDA5_95%)] bg-clip-text text-transparent">together.</span>
                    </h2>
                    <p className="m-0 max-w-[400px] text-[17px] leading-[1.6] text-m-muted">
                        Tell us about your tech needs. We respond within 24 hours with a clear next step.
                    </p>
                    <a
                        href={CONTACT.phoneHref}
                        className="text-[length:clamp(26px,2.6vw,34px)] font-semibold tracking-[-0.04em] text-white transition-colors hover:text-m-teal-light"
                    >
                        {CONTACT.phoneDisplay}
                    </a>
                    <div className="flex flex-wrap gap-2.5">
                        <a href={CONTACT.phoneHref} className="m-btn-primary min-h-12 !gap-2 !rounded-xl px-5 text-[15px]">
                            <Phone size={16} />
                            Call now
                        </a>
                        <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-btn-ghost min-h-[50px] !gap-2 !rounded-xl border-white/[0.16] px-5 text-[15px]"
                        >
                            <MessageCircle size={16} />
                            WhatsApp
                        </a>
                    </div>
                    <div className="mt-1.5 flex flex-col gap-3 text-[15px] text-m-soft">
                        <a href={`mailto:${CONTACT.email}`} className="-my-[11px] inline-flex items-center gap-2.5 py-[11px] transition-colors hover:text-m-teal-light">
                            <Mail size={17} className="text-m-teal-light" />
                            {CONTACT.email}
                        </a>
                        <span className="inline-flex items-center gap-2.5">
                            <MapPin size={17} className="text-m-teal-light" />
                            {CONTACT.address}
                        </span>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="m-3 grid min-w-0 grow-[1.2] basis-[calc(422px+2*clamp(22px,3vw,32px))] grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] content-start gap-4 rounded-[22px] border border-white/[0.08] bg-[rgba(6,12,12,0.7)] p-[clamp(22px,3vw,32px)] backdrop-blur-[10px]"
                >
                    {fields.map((f) => (
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
                                className="m-input"
                            />
                        </div>
                    ))}
                    <div className="col-span-full flex flex-col gap-[7px]">
                        <label htmlFor="contact-service" className={labelClass}>
                            What do you need?
                        </label>
                        <select id="contact-service" name="service" defaultValue="" className="m-input !bg-[#0E1919] !px-3">
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
                            className="m-input !h-auto resize-y py-3 leading-[1.5]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="col-span-full inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(180deg,#4FD1BE,#2E9C8D)] text-[16px] font-semibold text-[#04110F] shadow-[0_10px_30px_-10px_rgba(79,209,190,0.6)] transition hover:brightness-110"
                    >
                        Send message
                        <ArrowRight size={16} strokeWidth={2.2} />
                    </button>
                    <p className="col-span-full m-0 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-[13px] text-m-subtle">
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
