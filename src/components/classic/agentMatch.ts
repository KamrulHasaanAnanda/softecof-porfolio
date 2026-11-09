import { AI_SERVICE, services } from "./data";

/** Word stems per service. Each must start at a word boundary, so "ai" doesn't match "paint" or "hair". */
const rules: { service: string; pattern: RegExp }[] = [
    { service: AI_SERVICE, pattern: /\b(ai\b|agents?\b|automat|chat ?bots?\b|bots?\b|whatsapp|repetitive|manual|repl(y|ies)\b|enquir|inquir|invoices?\b|reminders?\b)/g },
    { service: "IT & Tech Support", pattern: /\b(network|wi-?fi|internet|printer|slow|broken|crash|virus|laptop|computer|pc\b|troubleshoot|helpdesk|not working|keeps? dropping)/g },
    { service: "Custom Software", pattern: /\b(apps?\b|application|custom|mobile|integrat|api\b|apis\b|legacy|portal)/g },
    { service: "Web & Digital", pattern: /\b(website|web ?site|site\b|seo\b|online|store|shop|e-?commerce|booking|landing)/g },
    { service: "Business Software", pattern: /\b(inventory|stock\b|hr\b|payroll|accounting|erp\b|documents?\b|attendance)/g },
    { service: "SaaS Services", pattern: /\b(saas\b|subscription|cloud|backups?\b|host)/g },
    { service: "Maintenance & Care", pattern: /\b(maintain|maintenance|monitor|updates?\b|security|servers?\b|uptime)/g },
];

export type AgentMatch = { service: string; title: string; desc: string };

const fallback: AgentMatch = {
    service: "Not sure yet",
    title: "Talk to a person",
    desc: "This one needs a human. Send it to the team and we’ll work out the right fix with you.",
};

/** Keyword match only: no AI model is involved, and the panel says so. */
export function matchRequest(text: string): AgentMatch {
    const lower = text.toLowerCase();
    let best: { service: string; score: number } | null = null;
    for (const rule of rules) {
        const score = lower.match(rule.pattern)?.length ?? 0;
        if (score && (!best || score > best.score)) best = { service: rule.service, score };
    }
    const service = best && services.find((s) => s.title === best.service);
    return service ? { service: service.title, title: service.title, desc: service.desc } : fallback;
}
