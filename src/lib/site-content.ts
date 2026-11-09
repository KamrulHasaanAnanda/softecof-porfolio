import { Building2, Cloud, Clock, Globe, GraduationCap, Headphones, Heart, Layers, Shield, ShoppingBag, Sprout, Users, Wallet, Wrench, type LucideIcon } from "lucide-react";

/** Copy and facts shared by every homepage design. Keep facts in sync with the live site. */

export const SITE_URL = "https://softecof.com";

export const SITE_DESCRIPTION =
    "Softecof is an AI-driven company helping SMEs in Bangladesh and worldwide with AI agents, custom software, SaaS platforms, and IT support. Based in Chittagong.";

export const CONTACT = {
    phoneDisplay: "+880 1626 889072",
    phoneHref: "tel:+8801626889072",
    email: "contact@softecof.com",
    whatsapp: "https://wa.me/8801626889072",
    address: "GEC, Chittagong, Bangladesh",
} as const;

export const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Process", href: "/#process" },
    { label: "Team", href: "/#team" },
    { label: "Contact", href: "/#contact" },
] as const;

export const heroAssurances = ["Free consultation", "Reply within 24 hours", "24/7 support"];

export const stats = [
    { value: "50+", label: "Global clients" },
    { value: "15+", label: "Products delivered" },
    { value: "8+", label: "Years of experience" },
    { value: "24/7", label: "Support coverage" },
];

export const industries: { label: string; icon: LucideIcon }[] = [
    { label: "Healthcare", icon: Heart },
    { label: "EdTech", icon: GraduationCap },
    { label: "SaaS", icon: Cloud },
    { label: "E-commerce", icon: ShoppingBag },
    { label: "AgriTech", icon: Sprout },
];

/** The six core services, as listed on the current site's Services page. */
export const services: { title: string; desc: string; features: string[]; icon: LucideIcon; popular?: boolean }[] = [
    {
        title: "IT & Tech Support",
        desc: "Keep your business running with reliable help when things break or slow down.",
        features: ["Remote & on-site support", "Hardware & software troubleshooting", "Network setup & Wi-Fi", "Helpdesk & ticket tracking"],
        icon: Headphones,
        popular: true,
    },
    {
        title: "SaaS Services",
        desc: "Subscribe to ready-made platforms or let us host and manage software for you.",
        features: ["Cloud-based business tools", "Subscription management", "Data backup & security", "Regular updates included"],
        icon: Cloud,
    },
    {
        title: "Custom Software",
        desc: "Build tools that match how your business actually works, not generic off-the-shelf software.",
        features: ["Web & mobile applications", "Business process automation", "API integrations", "Legacy modernization"],
        icon: Layers,
    },
    {
        title: "Web & Digital",
        desc: "Professional websites and online tools that help customers find and trust you.",
        features: ["Business websites", "E-commerce stores", "Online booking systems", "SEO & performance"],
        icon: Globe,
    },
    {
        title: "Business Software",
        desc: "Inventory, HR, accounting, and document systems tailored for SMEs.",
        features: ["Inventory management", "HR & payroll systems", "Accounting integration", "Document management"],
        icon: Building2,
    },
    {
        title: "Maintenance & Care",
        desc: "Proactive monitoring and support so problems are caught before they cost you money.",
        features: ["System monitoring", "Security updates", "Performance optimization", "Priority support plans"],
        icon: Wrench,
    },
];

/** The other three of the six core services (names from the current site's Services page). */
export const moreCapabilities = ["Web & Digital", "Business Software", "Maintenance & Care"];

export const whyItems: { title: string; desc: string; icon: LucideIcon }[] = [
    { title: "SME-friendly pricing", desc: "Plans sized for small businesses, not enterprise contracts with hidden fees.", icon: Wallet },
    { title: "Fast response times", desc: "Same-day support for urgent issues. Clear timelines for custom builds.", icon: Clock },
    { title: "Long-term partnership", desc: "We maintain what we build. Updates, backups, and support after launch.", icon: Shield },
    { title: "Global delivery", desc: "Remote-first team serving clients across time zones with hands-on support.", icon: Globe },
    { title: "Dedicated team", desc: "Real people assigned to your account, not a faceless ticket queue.", icon: Users },
];

type ProjectCopy = { title: string; desc: string; type: string; category: string; url?: string };

export const projectCopy = {
    checkbox: {
        title: "Checkbox.live",
        desc: "Digital product reseller platform helping SMEs sell software subscriptions online.",
        type: "Productivity",
        category: "SaaS",
        /** Shown in the mockup's address bar. */
        url: "checkbox.live",
    },
    healthcare: {
        title: "Healthcare Platform",
        desc: "Clinic and hospital management system with appointments, records, and billing.",
        type: "Management",
        category: "Healthcare",
        /** Add the live URL when known; the mockup omits the address pill without it. */
        url: undefined,
    },
    tarulata: {
        title: "Tarulata",
        desc: "Agricultural products marketplace connecting farmers with buyers across regions.",
        type: "Marketplace",
        category: "AgriTech",
        url: undefined,
    },
} satisfies Record<string, ProjectCopy>;

export const processSteps: { title: string; desc: string; ongoing?: boolean }[] = [
    { title: "Tell us your problem", desc: "Share what’s broken, what you need built, or what software you’re looking for." },
    { title: "We recommend a plan", desc: "Support-only, custom build, or SaaS. We propose the best fit with clear pricing." },
    { title: "We deliver & deploy", desc: "Our team fixes, builds, or sets up your systems, with testing and training." },
    { title: "Ongoing support", desc: "We stay available for maintenance, updates, and new requests as you grow.", ongoing: true },
    { title: "Scale & grow", desc: "As your business expands, we add features, users, and integrations to match.", ongoing: true },
];

export type TeamMember = {
    name: string;
    role: string;
    image: string;
    /** Real profile URLs are not known yet; links fall back to #team until filled in. */
    linkedin?: string;
    email?: string;
};

export const team: TeamMember[] = [
    { name: "Izaz Bin Azam", role: "Chief Executive Officer", image: "/images/team-izaz-bin-azam.jpg" },
    { name: "Kamrul Hassan", role: "Chief Technology Officer", image: "/images/team-kamrul-hassan.jpg" },
    { name: "Md Ariful Islam", role: "Chief Operating Officer", image: "/images/team-md-ariful-islam.jpg" },
    { name: "Imam Hasan Saikat", role: "Head of Communication", image: "/images/team-imam-hasan-saikat.jpg" },
    { name: "Sadat Shahriar Bari", role: "Team Lead", image: "/images/team-sadat-shahriar-bari.jpg" },
    { name: "Monjurul Alam", role: "Head of Project Management", image: "/images/team-monjurul-alam.jpg" },
];

export const teamMember = (name: string) => team.find((m) => m.name === name)!;

export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"];
