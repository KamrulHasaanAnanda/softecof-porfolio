"use client"
import { useState, type FormEvent } from "react";
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight, Clock, Shield, Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "contact@softecof.com";
const WHATSAPP_URL = "https://wa.me/8801626889072";
const ENDPOINT = "/api/contact.php";

// Keep this list in sync with contact_services() in public/api/contact.php.
const SERVICES = [
    "IT & Tech Support",
    "Custom Software",
    "SaaS Services",
    "Web & Digital",
    "Other",
] as const;

type FieldKey = "firstName" | "lastName" | "email" | "company" | "service" | "message";
type FieldErrors = Partial<Record<FieldKey, string>>;
type FormValues = Record<FieldKey | "sof_hp", string>;
type FormStatus = "idle" | "submitting" | "success" | "error";

const EMPTY_VALUES: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    sof_hp: "",
};

const FIELD_IDS: Record<FieldKey, string> = {
    firstName: "contact-first-name",
    lastName: "contact-last-name",
    email: "contact-email",
    company: "contact-company",
    service: "contact-service",
    message: "contact-message",
};

function validateForm(values: FormValues): FieldErrors {
    const errors: FieldErrors = {};
    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const email = values.email.trim();
    const company = values.company.trim();
    const message = values.message.trim();

    if (!firstName) {
        errors.firstName = "Enter your first name.";
    } else if (firstName.length > 60) {
        errors.firstName = "First name is too long.";
    }

    if (!lastName) {
        errors.lastName = "Enter your last name.";
    } else if (lastName.length > 60) {
        errors.lastName = "Last name is too long.";
    }

    if (!email) {
        errors.email = "Enter your email address.";
    } else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Enter a valid email address.";
    }

    if (company.length > 120) {
        errors.company = "Company name is too long.";
    }

    if (!values.service) {
        errors.service = "Select a service.";
    } else if (!SERVICES.includes(values.service as (typeof SERVICES)[number])) {
        errors.service = "Select a service.";
    }

    if (!message) {
        errors.message = "Enter a message.";
    } else if (message.length < 10) {
        errors.message = "Please enter at least 10 characters.";
    } else if (message.length > 5000) {
        errors.message = "Message is too long.";
    }

    return errors;
}

function focusFirstInvalid(errors: FieldErrors) {
    const order: FieldKey[] = ["firstName", "lastName", "email", "company", "service", "message"];
    for (const key of order) {
        if (errors[key]) {
            document.getElementById(FIELD_IDS[key])?.focus();
            return;
        }
    }
}

function FieldLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: string }) {
    return (
        <label htmlFor={htmlFor} className="text-sm font-semibold mb-2 block">
            {children}
            {required ? (
                <>
                    <span className="text-red-600" aria-hidden="true"> *</span>
                    <span className="sr-only"> required</span>
                </>
            ) : null}
        </label>
    );
}

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
        <p id={id} className="mt-1.5 text-xs font-medium text-red-600" role="alert">
            {message}
        </p>
    );
}

const ContactUs = () => {
    const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
    const [errors, setErrors] = useState<FieldErrors>({});
    const [status, setStatus] = useState<FormStatus>("idle");
    const [formError, setFormError] = useState<"send" | "rate_limit" | null>(null);

    function update(key: keyof FormValues, value: string) {
        setValues((current) => ({ ...current, [key]: value }));
        if (key !== "sof_hp") {
            setErrors((current) => {
                if (!current[key]) return current;
                const next = { ...current };
                delete next[key];
                return next;
            });
        }
        if (status === "error") {
            setStatus("idle");
            setFormError(null);
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "submitting") return;

        const nextErrors = validateForm(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            setStatus("idle");
            setFormError(null);
            focusFirstInvalid(nextErrors);
            return;
        }

        setStatus("submitting");
        setFormError(null);

        const name = `${values.firstName.trim()} ${values.lastName.trim()}`.trim();
        const body = new FormData();
        body.set("name", name);
        body.set("first_name", values.firstName.trim());
        body.set("last_name", values.lastName.trim());
        body.set("email", values.email.trim());
        body.set("company", values.company.trim());
        body.set("service", values.service);
        body.set("message", values.message.trim());
        body.set("sof_hp", values.sof_hp);

        try {
            const response = await fetch(ENDPOINT, {
                method: "POST",
                body,
                headers: { Accept: "application/json" },
            });
            const data = await response.json().catch(() => null) as { ok?: boolean; error?: string; fields?: unknown } | null;

            if (response.status === 400 && data?.error === "validation") {
                const fields = readServerFields(data.fields);
                setErrors(fields);
                setStatus("idle");
                focusFirstInvalid(fields);
                return;
            }

            if (!response.ok || !data?.ok) {
                setFormError(data?.error === "rate_limit" ? "rate_limit" : "send");
                setStatus("error");
                return;
            }

            setStatus("success");
        } catch {
            setFormError("send");
            setStatus("error");
        }
    }

    function resetForm() {
        setValues(EMPTY_VALUES);
        setErrors({});
        setFormError(null);
        setStatus("idle");
    }

    const inputClass = "input-field bg-muted/40 border-0 disabled:opacity-60";

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
                                    { icon: Mail, label: "Email", text: CONTACT_EMAIL },
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
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-light text-sm !py-2.5 !px-5">
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

                    <div className="lg:col-span-3 bg-white p-8 sm:p-10">
                        {status === "success" ? (
                            <div className="h-full flex flex-col justify-center" role="status" aria-live="polite">
                                <div className="h-12 w-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-5">
                                    <Check className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">Message sent</h3>
                                <p className="text-muted-foreground max-w-md">
                                    Thanks {values.firstName.trim() || "there"}. We received your message and will reply within 24 hours.
                                </p>
                                <button type="button" className="btn-outline-dark mt-8 self-start" onClick={resetForm}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                className="relative space-y-5"
                                action={ENDPOINT}
                                method="post"
                                noValidate
                                onSubmit={onSubmit}
                                aria-busy={status === "submitting"}
                            >
                                <p className="text-xs text-muted-foreground">Fields marked with * are required.</p>

                                <div className="absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden" aria-hidden="true">
                                    <label htmlFor="sof_hp">Website</label>
                                    <input
                                        id="sof_hp"
                                        name="sof_hp"
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={values.sof_hp}
                                        onChange={(event) => update("sof_hp", event.target.value)}
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <FieldLabel htmlFor={FIELD_IDS.firstName} required>First name</FieldLabel>
                                        <input
                                            id={FIELD_IDS.firstName}
                                            name="first_name"
                                            autoComplete="given-name"
                                            placeholder="John"
                                            maxLength={60}
                                            required
                                            aria-invalid={Boolean(errors.firstName)}
                                            aria-describedby={errors.firstName ? "contact-first-name-error" : undefined}
                                            value={values.firstName}
                                            onChange={(event) => update("firstName", event.target.value)}
                                            disabled={status === "submitting"}
                                            className={inputClass}
                                        />
                                        <FieldError id="contact-first-name-error" message={errors.firstName} />
                                    </div>
                                    <div>
                                        <FieldLabel htmlFor={FIELD_IDS.lastName} required>Last name</FieldLabel>
                                        <input
                                            id={FIELD_IDS.lastName}
                                            name="last_name"
                                            autoComplete="family-name"
                                            placeholder="Doe"
                                            maxLength={60}
                                            required
                                            aria-invalid={Boolean(errors.lastName)}
                                            aria-describedby={errors.lastName ? "contact-last-name-error" : undefined}
                                            value={values.lastName}
                                            onChange={(event) => update("lastName", event.target.value)}
                                            disabled={status === "submitting"}
                                            className={inputClass}
                                        />
                                        <FieldError id="contact-last-name-error" message={errors.lastName} />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <FieldLabel htmlFor={FIELD_IDS.email} required>Email</FieldLabel>
                                        <input
                                            id={FIELD_IDS.email}
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="you@company.com"
                                            maxLength={254}
                                            required
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={errors.email ? "contact-email-error" : undefined}
                                            value={values.email}
                                            onChange={(event) => update("email", event.target.value)}
                                            disabled={status === "submitting"}
                                            className={inputClass}
                                        />
                                        <FieldError id="contact-email-error" message={errors.email} />
                                    </div>
                                    <div>
                                        <FieldLabel htmlFor={FIELD_IDS.company}>Company</FieldLabel>
                                        <input
                                            id={FIELD_IDS.company}
                                            name="company"
                                            autoComplete="organization"
                                            placeholder="Your business"
                                            maxLength={120}
                                            aria-invalid={Boolean(errors.company)}
                                            aria-describedby={errors.company ? "contact-company-error" : undefined}
                                            value={values.company}
                                            onChange={(event) => update("company", event.target.value)}
                                            disabled={status === "submitting"}
                                            className={inputClass}
                                        />
                                        <FieldError id="contact-company-error" message={errors.company} />
                                    </div>
                                </div>

                                <div>
                                    <FieldLabel htmlFor={FIELD_IDS.service} required>Service needed</FieldLabel>
                                    <select
                                        id={FIELD_IDS.service}
                                        name="service"
                                        required
                                        aria-invalid={Boolean(errors.service)}
                                        aria-describedby={errors.service ? "contact-service-error" : undefined}
                                        value={values.service}
                                        onChange={(event) => update("service", event.target.value)}
                                        disabled={status === "submitting"}
                                        className={`${inputClass} appearance-none`}
                                    >
                                        <option value="">Select a service</option>
                                        {SERVICES.map((service) => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                    <FieldError id="contact-service-error" message={errors.service} />
                                </div>

                                <div>
                                    <FieldLabel htmlFor={FIELD_IDS.message} required>Message</FieldLabel>
                                    <textarea
                                        id={FIELD_IDS.message}
                                        name="message"
                                        placeholder="Tell us about your project or tech challenge..."
                                        maxLength={5000}
                                        required
                                        aria-invalid={Boolean(errors.message)}
                                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                                        value={values.message}
                                        onChange={(event) => update("message", event.target.value)}
                                        disabled={status === "submitting"}
                                        className={`${inputClass} min-h-[140px] py-3 resize-none`}
                                    />
                                    <FieldError id="contact-message-error" message={errors.message} />
                                </div>

                                {formError ? (
                                    <div role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
                                        <p>
                                            {formError === "rate_limit"
                                                ? "Too many messages were sent from this network. Please reach us directly and we will reply within 24 hours."
                                                : "We couldn't send your message. Please try again, or reach us directly."}
                                        </p>
                                        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-semibold">
                                            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">{CONTACT_EMAIL}</a>
                                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">WhatsApp</a>
                                        </p>
                                    </div>
                                ) : null}

                                <button type="submit" className="btn-primary w-full" disabled={status === "submitting"}>
                                    {status === "submitting" ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send message <ArrowUpRight className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

function readServerFields(value: unknown): FieldErrors {
    if (!value || typeof value !== "object") return {};
    const source = value as Record<string, unknown>;
    const pick = (key: string) => (typeof source[key] === "string" ? source[key] : undefined);
    return {
        firstName: pick("first_name") || pick("name"),
        lastName: pick("last_name"),
        email: pick("email"),
        company: pick("company"),
        service: pick("service"),
        message: pick("message"),
    };
}

export default ContactUs;
