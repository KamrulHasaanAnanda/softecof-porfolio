import { Bot } from "lucide-react";
import { navLinks as baseNavLinks, projectCopy, serviceOptions as baseServiceOptions, services as baseServices, team as baseTeam } from "@/lib/site-content";

export { CONTACT, heroAssurances, processSteps, stats, whyItems } from "@/lib/site-content";

/** Same people as site-content, using the larger head-and-shoulders crops. */
export const team = baseTeam.map((m) => ({ ...m, image: m.image.replace("/images/team-", "/images/portrait-") }));

export const navLinks = [{ label: "AI Agents", href: "/#agents" }, ...baseNavLinks];

export const AI_SERVICE = "AI Agents & Automation";

export const services = [
    {
        title: AI_SERVICE,
        desc: "AI agents for the repetitive jobs in your company, with clear rules and people checking what matters.",
        features: ["Support & enquiry agents", "Workflow automation", "AI connected to your tools", "Human approval steps"],
        icon: Bot,
    },
    ...baseServices,
];

export const serviceOptions = [AI_SERVICE, ...baseServiceOptions];

export const agentTypes = [
    { title: "Support agents", desc: "Sort incoming requests, answer routine questions and pass anything tricky to our team with the context attached." },
    { title: "Enquiry agents", desc: "Reply to website and WhatsApp enquiries, collect the details you need and set up the next step." },
    { title: "Operations agents", desc: "Take on repetitive work like updating records, chasing invoices and preparing reports." },
    { title: "Custom agents", desc: "Built around your own process and connected through APIs to the systems you already use." },
];

export const agentFlow = [
    { title: "Something comes in", desc: "A message, a ticket or a new order." },
    { title: "The agent does the work", desc: "It reads the request, checks your systems and prepares the action." },
    { title: "A person checks what matters", desc: "You decide which actions need approval." },
    { title: "It gets done and logged", desc: "Actions are recorded so you can review them." },
];

export type Project = { title: string; desc: string; type: string; category: string; href?: string };

const liveProjects: Project[] = [
    { title: "Shishubela", category: "Retail", type: "Website", desc: "Website for a kids’ store in Bangladesh.", href: "https://shishubela.com/" },
    { title: "Muscle Power Gym", category: "Fitness", type: "Website", desc: "Website for a gym in Halishahar, Chittagong.", href: "https://musclepower.fit/" },
];

/** The projects featured on the homepage, live sites first. */
export const featuredProjects: Project[] = [...liveProjects, projectCopy.checkbox, projectCopy.healthcare, projectCopy.tarulata];

/** Everything shown on /portfolio, carried over from the previous Portfolio page. */
export const allProjects: Project[] = [
    ...featuredProjects,
    { title: "Education System", category: "EdTech", type: "Platform", desc: "School and college management platform for admissions, attendance, and grades." },
    { title: "SkinsDojo", category: "E-commerce", type: "Marketplace", desc: "Gaming marketplace with secure trading, inventory, and payment processing." },
    { title: "Customer Service Hub", category: "SaaS", type: "Communication", desc: "Business support and ticketing platform for teams handling customer inquiries." },
];

/** Contact link that pre-selects a service, and optionally fills in the message. */
export const contactHref = (service: string, message?: string) =>
    `/?service=${encodeURIComponent(service)}${message ? `&message=${encodeURIComponent(message)}` : ""}#contact`;
