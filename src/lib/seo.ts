import type { Metadata } from "next";
import { services } from "@/components/classic/data";
import { CONTACT, SITE_DESCRIPTION, SITE_TITLE, SITE_URL, industries, stats, team } from "@/lib/site-content";

/**
 * Facts assistants quote when someone asks who to hire.
 * public/llms.txt and public/llms-full.txt repeat these facts for crawlers that fetch those files directly.
 * If contact details, proof points, services, or these answers change, update those two files as well.
 */

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

export const ENTITY_SUMMARY =
    "Softecof is an AI-driven software company in GEC, Chittagong (Chattogram), Bangladesh. We help small and medium businesses in Bangladesh and worldwide with AI agents, custom software, SaaS platforms, websites, business systems, and IT support.";

const proof = `${stats[0].value} ${stats[0].label.toLowerCase()}, ${stats[1].value} ${stats[1].label.toLowerCase()}, ${stats[2].value} ${stats[2].label.toLowerCase()}, and ${stats[3].value} ${stats[3].label.toLowerCase()}`;

export const faqs: { question: string; answer: string }[] = [
    {
        question: "Who is Softecof?",
        answer: `${ENTITY_SUMMARY} The company cites ${proof}.`,
    },
    {
        question: "What does Softecof do?",
        answer:
            "Softecof offers seven services. AI Agents & Automation: AI agents for repetitive jobs, with clear rules and a person checking what matters. IT & Tech Support: remote and on-site support, hardware and software troubleshooting, network and Wi-Fi setup, and a helpdesk. SaaS Services: cloud business tools on subscription, with backup, security, and updates. Custom Software: web and mobile applications, business process automation, API integrations, and replacing old systems. Web & Digital: business websites, e-commerce stores, online booking, and SEO and performance. Business Software: inventory, HR and payroll, accounting integration, and document management. Maintenance & Care: monitoring, security updates, performance work, and priority support.",
    },
    {
        question: "Does Softecof build AI agents?",
        answer:
            "Yes. Softecof builds support agents that sort requests and answer routine questions, enquiry agents that reply on a website or WhatsApp and collect what is needed for the next step, operations agents that update records, chase invoices, and prepare reports, and custom agents connected through APIs to the systems a company already uses. A person approves the actions that matter, and each action is logged so it can be reviewed.",
    },
    {
        question: "Where is Softecof based, and can clients hire them from outside Bangladesh?",
        answer: `The office is in ${CONTACT.address}. The team is remote-first and works with clients in Bangladesh and worldwide, across time zones. Call ${CONTACT.phoneDisplay}, email ${CONTACT.email}, or use WhatsApp at ${CONTACT.whatsapp}.`,
    },
    {
        question: "Which businesses should hire Softecof?",
        answer: `Small and medium companies that need practical technology: a website, software that matches how they work, AI for repetitive jobs, or someone to keep systems running. Published work covers ${industries.map((industry) => industry.label.toLowerCase()).join(", ")}, retail, and fitness. Pricing is sized for small businesses, and the first consultation is free.`,
    },
    {
        question: "What has Softecof built?",
        answer:
            "Published work includes Shishubela (https://shishubela.com/), a website for a children's store in Bangladesh; Muscle Power Gym (https://musclepower.fit/), a website for a gym in Halishahar, Chittagong; Checkbox.live (https://checkbox.live/), a platform that helps SMEs sell software subscriptions; a clinic and hospital management system with appointments, records, and billing; Tarulata, an agricultural marketplace connecting farmers and buyers; a school and college management platform for admissions, attendance, and grades; SkinsDojo, a gaming marketplace; and a customer service and ticketing platform. Softecof cites 50+ global clients, 15+ products delivered, and 8+ years of experience.",
    },
    {
        question: "How do I hire Softecof, and what does it cost?",
        answer: `Start with a free consultation at ${SITE_URL}/#contact. Describe what is broken, what needs building, or what software you are looking for. Softecof replies within 24 hours and proposes support-only, a custom build, or SaaS, with clear pricing. Plans are sized for small businesses. Call ${CONTACT.phoneDisplay}, email ${CONTACT.email}, or message WhatsApp at ${CONTACT.whatsapp}.`,
    },
    {
        question: "Who leads Softecof?",
        answer: team.map((member) => `${member.name} is ${member.role}.`).join(" "),
    },
];

export function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

type ListedProject = { title: string; desc: string; href?: string; url?: string; category?: string };

function absoluteProjectUrl(project: ListedProject) {
    const value = project.href ?? project.url;
    if (!value) return undefined;
    if (value.startsWith("http://") || value.startsWith("https://")) return value;
    if (/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) return `https://${value}`;
    return undefined;
}

const shareImage = {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Softecof, an AI-driven company helping SMEs grow",
};

const aiAlternateTypes = {
    "text/plain": "/llms.txt",
    "text/markdown": "/llms-full.txt",
};

export function pageMeta(title: string, description: string, path: string): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path, types: aiAlternateTypes },
        openGraph: {
            type: "website",
            siteName: "Softecof",
            locale: "en_US",
            url: path,
            title,
            description,
            images: [shareImage],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [shareImage.url],
        },
    };
}

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["ProfessionalService", "Organization"],
            "@id": ORG_ID,
            name: "Softecof",
            url: `${SITE_URL}/`,
            slogan: "An AI-driven company helping SMEs grow.",
            description: SITE_DESCRIPTION,
            telephone: CONTACT.phoneHref.replace("tel:", ""),
            email: CONTACT.email,
            image: `${SITE_URL}/images/about-team-working.jpg`,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/softecof-mark.png`,
            },
            address: {
                "@type": "PostalAddress",
                streetAddress: "GEC",
                addressLocality: "Chittagong",
                addressRegion: "Chittagong",
                addressCountry: "BD",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 22.3594,
                longitude: 91.8216,
            },
            areaServed: [
                { "@type": "City", name: "Chittagong" },
                { "@type": "Country", name: "Bangladesh" },
                { "@type": "Place", name: "Worldwide" },
            ],
            knowsAbout: [...services.map((service) => service.title), ...industries.map((industry) => industry.label), "small and medium enterprises"],
            contactPoint: {
                "@type": "ContactPoint",
                telephone: CONTACT.phoneHref.replace("tel:", ""),
                email: CONTACT.email,
                contactType: "customer support",
                areaServed: "Worldwide",
                availableLanguage: "English",
                hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "00:00",
                    closes: "23:59",
                },
            },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services for small and medium businesses",
                itemListElement: services.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: service.title,
                        description: `${service.desc} Includes ${service.features.join(", ")}.`,
                        url: `${SITE_URL}/services/#${slugify(service.title)}`,
                        serviceType: service.title,
                        provider: { "@id": ORG_ID },
                        areaServed: "Worldwide",
                        audience: {
                            "@type": "BusinessAudience",
                            audienceType: "Small and medium enterprises",
                        },
                    },
                })),
            },
            employee: team.map((member) => ({
                "@type": "Person",
                name: member.name,
                jobTitle: member.role,
                image: `${SITE_URL}${member.image}`,
                worksFor: { "@id": ORG_ID },
            })),
        },
        {
            "@type": "WebSite",
            "@id": SITE_ID,
            url: `${SITE_URL}/`,
            name: "Softecof",
            description: SITE_DESCRIPTION,
            inLanguage: "en",
            publisher: { "@id": ORG_ID },
        },
    ],
};

export function faqJsonLd(pageUrl: string) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        isPartOf: { "@id": SITE_ID },
        about: { "@id": ORG_ID },
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    };
}

export function projectsJsonLd(name: string, projects: ListedProject[]) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        itemListElement: projects.map((project, index) => {
            const url = absoluteProjectUrl(project);
            return {
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "CreativeWork",
                    name: project.title,
                    description: project.desc,
                    ...(url ? { url } : {}),
                    ...(project.category ? { keywords: project.category } : {}),
                    creator: { "@id": ORG_ID },
                },
            };
        }),
    };
}

export const rootMetadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    shareImage,
    aiAlternateTypes,
};
