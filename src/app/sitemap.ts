import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    // trailingSlash is enabled in next.config.ts, so URLs end with "/"
    return [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/services/`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/portfolio/`, changeFrequency: "monthly", priority: 0.8 },
    ];
}
