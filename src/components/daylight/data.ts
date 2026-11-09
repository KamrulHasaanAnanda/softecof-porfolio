import type { Tint } from "./ui";

export {
    CONTACT,
    heroAssurances,
    industries,
    navLinks,
    processSteps,
    projectCopy,
    services,
    serviceOptions,
    stats,
    team,
    whyItems,
} from "@/lib/site-content";

/** Accent colour per stat / industry, in display order. */
export const statTints: Tint[] = ["mint", "peach", "blue", "lilac"];
export const industryTints: Tint[] = ["mint", "peach", "blue", "lilac", "gold"];
export const teamTints: Tint[] = ["mint", "peach", "blue", "lilac", "gold", "mint"];

/** Icon tint per service, in display order. */
export const serviceTints: Tint[] = ["mint", "lilac", "peach", "blue", "gold", "mint"];
