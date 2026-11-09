import { Cloud, Headphones, Layers, type LucideIcon } from "lucide-react";
import { projectCopy } from "@/lib/site-content";
import type { Tone } from "./ui";

export {
    CONTACT,
    heroAssurances,
    industries,
    navLinks,
    moreCapabilities,
    processSteps,
    serviceOptions,
    stats,
    team,
    whyItems,
    type TeamMember,
} from "@/lib/site-content";

/** Illustrative only: the hero dashboard is a mockup, not a real product. */
export const heroRequests: { title: string; kind: string; status: string; icon: LucideIcon; tone: Tone; statusTone?: Tone }[] = [
    { title: "Front-desk printer offline", kind: "Tech support", status: "Fixed today", icon: Headphones, tone: "teal" },
    { title: "Move team to cloud tools", kind: "SaaS", status: "In progress", icon: Cloud, tone: "peach" },
    { title: "Booking system, sprint review", kind: "Custom software", status: "Scheduled", icon: Layers, tone: "peri", statusTone: "neutral" },
];

/** Daily uptime bars for the hero mockup; `dip` marks the one amber day. */
export const uptimeBars: { h: number; dip?: boolean }[] = [
    82, 90, 86, 95, 88, 92, 97, 84, 90, 58, 93, 88, 96, 91, 87, 94, 89, 98,
].map((h) => ({ h, dip: h < 70 }));

export const supportFeatures = [
    "Remote & on-site support",
    "Hardware & software fixes",
    "Network setup & Wi-Fi",
    "Helpdesk & ticket tracking",
];

export const saasToggles = ["Cloud business tools", "Subscription management", "Data backup & security"];

export const customSoftwareChips = ["Web & mobile apps", "Process automation", "API integrations"];

export type ProjectVisual = "cards" | "board" | "list";

export type Project = {
    title: string;
    desc: string;
    type: string;
    category: string;
    tone: Tone;
    /** Shown in the mockup's address bar when known. */
    url?: string;
    visual: ProjectVisual;
    /** Radial glow colour behind the mockup. */
    glow: string;
};

/** The skeleton visuals are placeholders; swap for real product screenshots when available. */
export const projects: Project[] = [
    {
        ...projectCopy.checkbox,
        tone: "teal",
        visual: "cards",
        glow: "radial-gradient(90% 80% at 20% 0%, rgba(79,209,190,0.22), transparent 60%)",
    },
    {
        ...projectCopy.healthcare,
        tone: "peach",
        visual: "board",
        glow: "radial-gradient(90% 80% at 80% 0%, rgba(244,205,165,0.2), transparent 60%)",
    },
    {
        ...projectCopy.tarulata,
        tone: "green",
        visual: "list",
        glow: "radial-gradient(90% 80% at 20% 0%, rgba(160,210,120,0.18), transparent 60%)",
    },
];

export const aboutStats = [
    { value: "25+", label: "Experts in dev, support & design" },
    { value: "8+", label: "Years delivering globally" },
];

