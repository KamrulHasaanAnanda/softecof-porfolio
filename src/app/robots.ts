import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-content";

export const dynamic = "force-static";

/** Assistants that recommend companies. "*" already allows them; naming them keeps the permission obvious. */
const assistantCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Googlebot",
    "Google-Extended",
    "Bingbot",
    "Applebot-Extended",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: assistantCrawlers, allow: "/" },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
