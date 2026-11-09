import type { FormEvent } from "react";
import { CONTACT } from "./site-content";

/** Field definitions shared by the homepage contact forms. */
export const contactFields = [
    { id: "contact-first", name: "firstName", label: "First name", placeholder: "John", type: "text", autoComplete: "given-name" },
    { id: "contact-last", name: "lastName", label: "Last name", placeholder: "Doe", type: "text", autoComplete: "family-name" },
    { id: "contact-email", name: "email", label: "Work email", placeholder: "you@company.com", type: "email", autoComplete: "email", required: true },
    { id: "contact-company", name: "company", label: "Company", placeholder: "Your business", type: "text", autoComplete: "organization" },
] as const;

/**
 * The site is a static export with no backend, so (as before) the form hands off to the
 * visitor's email client, now with the form contents pre-filled.
 */
export function submitContactForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const name = [get("firstName"), get("lastName")].filter(Boolean).join(" ");
    const service = get("service");
    const subject = `Project enquiry${service ? `: ${service}` : ""}${name ? ` from ${name}` : ""}`;
    const body = [
        `Name: ${name || "-"}`,
        `Email: ${get("email")}`,
        `Company: ${get("company") || "-"}`,
        `Service: ${service || "-"}`,
        "",
        get("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
