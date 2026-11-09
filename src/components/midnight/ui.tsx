import type { ReactNode } from "react";
import { Check } from "lucide-react";

export type Tone = "teal" | "peach" | "peri" | "neutral" | "green";

/** Icon tile / chip colours per tone (background, border, foreground). */
export const toneTile: Record<Tone, string> = {
    teal: "bg-m-teal/[0.14] border-m-teal/30 text-m-teal-light",
    peach: "bg-m-peach/[0.12] border-m-peach/[0.28] text-m-peach",
    peri: "bg-m-peri/[0.12] border-m-peri/[0.28] text-m-peri-light",
    neutral: "bg-white/[0.06] border-white/[0.12] text-m-soft",
    green: "bg-[#A0D278]/[0.14] border-[#A0D278]/30 text-[#C2E3A6]",
};

/** Small mono pill used above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.06em] text-m-label">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-m-teal shadow-[0_0_10px_var(--color-m-teal)]" />
            {children}
        </span>
    );
}

export function SectionTitle({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
    return (
        <h2
            id={id}
            className={`m-0 text-[length:clamp(34px,4.4vw,58px)] font-semibold leading-[1.04] tracking-[-0.05em] text-m-head text-balance ${className}`}
        >
            {children}
        </h2>
    );
}

export function CheckIcon({ className = "" }: { className?: string }) {
    return <Check aria-hidden="true" size={16} strokeWidth={2.4} className={`shrink-0 text-m-teal ${className}`} />;
}

/** Mono uppercase tag used on project cards and service badges. */
export function Tag({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
    const colour: Record<Tone, string> = {
        neutral: "bg-white/[0.06] text-m-nav",
        teal: "bg-m-teal/[0.14] text-m-teal-soft",
        peach: "bg-m-peach/[0.14] text-m-peach",
        peri: "bg-m-peri/[0.14] text-m-peri-light",
        green: "bg-[#A0D278]/[0.14] text-[#C2E3A6]",
    };
    return (
        <span className={`rounded-lg px-2.5 py-1 font-mono text-[11.5px] uppercase tracking-[0.06em] ${colour[tone]}`}>
            {children}
        </span>
    );
}

/** Three-dot browser chrome used by the illustrative mockups. */
export function WindowBar({ label, pill = false }: { label?: string; pill?: boolean }) {
    return (
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3.5 py-2.5">
            {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-white/[0.16]" />
            ))}
            {label && <span
                className={`font-mono text-[11.5px] ${pill ? "ml-2.5 rounded-md bg-white/5 px-2.5 py-[3px] text-m-subtle" : "ml-2 text-m-dim"}`}
            >
                {label}
            </span>}
        </div>
    );
}
