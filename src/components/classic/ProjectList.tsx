import { ArrowUpRight } from "lucide-react";
import type { Project } from "./data";

/** Project rows. Projects with a live site link out to it. */
export default function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <ul className="m-0 list-none border-b border-c-line p-0">
            {projects.map((p) => (
                <li key={p.title} className="grid gap-x-10 gap-y-1.5 border-t border-c-line py-6 min-[761px]:grid-cols-[1fr_2fr_auto]">
                    <h3 className="c-h3">
                        {p.href ? (
                            <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-c-teal underline decoration-c-teal/30 underline-offset-4 transition-colors hover:decoration-c-teal">
                                {p.title}
                                <ArrowUpRight size={17} strokeWidth={2.4} aria-hidden="true" />
                                <span className="sr-only">(opens in a new tab)</span>
                            </a>
                        ) : (
                            p.title
                        )}
                    </h3>
                    <p className="m-0">{p.desc}</p>
                    <p className="m-0 text-[15px] text-c-muted min-[761px]:min-w-[190px] min-[761px]:text-right">
                        {p.category} · {p.type}
                    </p>
                </li>
            ))}
        </ul>
    );
}
