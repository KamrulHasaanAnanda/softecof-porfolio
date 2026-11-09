import type { ReactNode } from "react";
import { Check } from "lucide-react";

export type Tint = "mint" | "peach" | "blue" | "lilac" | "gold";

/** Soft tint background + matching ink colour. */
export const tint: Record<Tint, string> = {
    mint: "bg-d-mint text-d-mint-ink",
    peach: "bg-d-peach-tint text-d-peach-ink",
    blue: "bg-d-blue text-d-blue-ink",
    lilac: "bg-d-lilac text-d-lilac-ink",
    gold: "bg-d-gold text-d-gold-ink",
};

/** Ink colour alone, for big numbers. */
export const tintInk: Record<Tint, string> = {
    mint: "text-d-mint-ink",
    peach: "text-d-peach-ink",
    blue: "text-d-blue-ink",
    lilac: "text-d-lilac-ink",
    gold: "text-d-gold-ink",
};

/** The one serif-italic accent word per heading. */
export function Accent({ children, className = "text-d-teal" }: { children: ReactNode; className?: string }) {
    return <span className={`font-serif text-[1.1em] font-normal italic tracking-[-0.02em] ${className}`}>{children}</span>;
}

/** Uppercase pill shown above section headings. */
export function Eyebrow({ children, className = "bg-d-mint text-d-mint-ink" }: { children: ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.04em] ${className}`}>
            {children}
        </span>
    );
}

export function SectionTitle({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
    return (
        <h2 id={id} className={`m-0 text-[length:clamp(34px,4.2vw,56px)] font-extrabold leading-[1.06] tracking-[-0.04em] text-balance ${className}`}>
            {children}
        </h2>
    );
}

/** Round tinted check used in lists. */
export function CheckDot({ tone = "mint", size = 20 }: { tone?: Tint; size?: number }) {
    return (
        <span className={`flex flex-none items-center justify-center rounded-full ${tint[tone]}`} style={{ width: size, height: size }}>
            <Check size={size === 20 ? 11 : 12} strokeWidth={size === 20 ? 3.2 : 3} />
        </span>
    );
}
