import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project, type ProjectVisual } from "./data";
import { Eyebrow, SectionTitle, Tag, WindowBar } from "./ui";

/* Skeleton screens below are placeholders until real product screenshots are available. */

const teal = "bg-m-teal/30";
const peach = "bg-m-peach/[0.35]";
const peri = "bg-m-peri/[0.35]";

function CardsSkeleton() {
    const cards: [string, number, number, boolean][] = [
        [teal, 75, 50, true],
        [peach, 65, 45, true],
        [peri, 80, 40, true],
        [peach, 60, 50, false],
        [teal, 70, 35, true],
        [peri, 55, 45, false],
    ];
    return (
        <div className="grid grid-cols-3 gap-3 p-[18px]">
            {cards.map(([icon, w1, w2, on], i) => (
                <div key={i} className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.04] p-3">
                    <span className={`h-[30px] w-[30px] rounded-[9px] ${icon}`} />
                    <span className="h-[7px] rounded bg-white/[0.18]" style={{ width: `${w1}%` }} />
                    <span className="h-1.5 rounded bg-white/[0.08]" style={{ width: `${w2}%` }} />
                    <span className={`mt-1.5 h-5 w-[60px] rounded-full ${on ? teal : "bg-white/10"}`} />
                </div>
            ))}
        </div>
    );
}

function BoardSkeleton() {
    const t = "bg-m-teal/[0.28]";
    const p = "bg-m-peach/30";
    const n = "bg-white/[0.06]";
    const columns: { head: number; offset: number; blocks: [number, string][] }[] = [
        { head: 60, offset: 8, blocks: [[46, t], [30, p]] },
        { head: 50, offset: 38, blocks: [[30, n], [56, t]] },
        { head: 65, offset: 8, blocks: [[60, p]] },
        { head: 55, offset: 24, blocks: [[36, t], [36, n]] },
        { head: 45, offset: 8, blocks: [[40, n], [44, p]] },
    ];
    return (
        <div className="grid h-[222px] grid-cols-5 gap-2 p-4">
            {columns.map((c, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                    <span className="h-1.5 rounded-[3px] bg-white/[0.16]" style={{ width: `${c.head}%` }} />
                    {c.blocks.map(([h, colour], j) => (
                        <span key={j} className={`rounded-lg ${colour}`} style={{ height: h, marginTop: j === 0 ? c.offset : undefined }} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function ListSkeleton() {
    const g = "bg-[#A0D278]/30";
    const rows: [string, number, number, boolean][] = [
        [g, 55, 35, true],
        ["bg-m-peach/30", 45, 30, true],
        [g, 60, 40, false],
    ];
    return (
        <div className="flex h-[190px] flex-col gap-2.5 p-4">
            {rows.map(([icon, w1, w2, on], i) => (
                <div key={i} className="flex items-center gap-3 rounded-[10px] bg-white/[0.04] p-2">
                    <span className={`h-[38px] w-[38px] flex-none rounded-[9px] ${icon}`} />
                    <div className="flex flex-1 flex-col gap-1.5">
                        <span className="h-[7px] rounded bg-white/[0.18]" style={{ width: `${w1}%` }} />
                        <span className="h-1.5 rounded bg-white/[0.08]" style={{ width: `${w2}%` }} />
                    </div>
                    <span className={`h-[22px] w-[54px] flex-none rounded-full ${on ? g : "bg-white/10"}`} />
                </div>
            ))}
        </div>
    );
}

const skeletons: Record<ProjectVisual, () => React.JSX.Element> = {
    cards: CardsSkeleton,
    board: BoardSkeleton,
    list: ListSkeleton,
};

function ProjectVisualFrame({ project, featured }: { project: Project; featured?: boolean }) {
    const Skeleton = skeletons[project.visual];
    return (
        <div
            aria-hidden="true"
            className={`overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#0B1616] ${featured ? "px-7 pt-7" : "px-6 pt-6"}`}
            style={{ backgroundImage: project.glow }}
        >
            <div className="overflow-hidden rounded-t-xl border border-b-0 border-white/[0.08] bg-[#0E1A1A]">
                <WindowBar label={project.url} pill />
                <Skeleton />
            </div>
        </div>
    );
}

function ProjectMeta({ project, featured }: { project: Project; featured?: boolean }) {
    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Tag>{project.type}</Tag>
                <Tag tone={project.tone}>{project.category}</Tag>
            </div>
            <h3
                className={`m-0 font-semibold ${featured ? "text-[length:clamp(30px,3vw,40px)] leading-[1.05] tracking-[-0.045em]" : "text-[26px] leading-[1.1] tracking-[-0.04em]"}`}
            >
                {project.title}
            </h3>
            <p className={`m-0 leading-[1.6] text-m-muted ${featured ? "text-[17px]" : "text-[15.5px]"}`}>{project.desc}</p>
            <Link
                href="/portfolio"
                aria-label={`View ${project.title} case study`}
                className="inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-m-teal-light transition-colors hover:text-white"
            >
                View case study
                <ArrowRight size={16} />
            </Link>
        </>
    );
}

const Work = () => {
    const [featured, ...rest] = projects;

    return (
        <section id="work" className="m-wrap pt-section">
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
                <div className="flex min-w-0 flex-[1_1_480px] flex-col items-start gap-[18px]">
                    <Eyebrow>Portfolio</Eyebrow>
                    <SectionTitle>Projects we’ve delivered</SectionTitle>
                </div>
                <div className="flex min-w-0 flex-[0_1_420px] flex-col items-start gap-[18px]">
                    <p className="m-0 text-[17px] leading-[1.6] text-m-muted">
                        SaaS platforms, custom software, and business systems for clients worldwide.
                    </p>
                    <Link href="/portfolio" className="m-btn-ghost min-h-12 !gap-2 !rounded-xl px-[18px] text-[15px]">
                        View all work
                        <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>

            <article className="m-glass mt-14 flex flex-wrap items-center gap-x-12 gap-y-8 rounded-[28px] p-4">
                <div className="min-w-0 flex-[1.5_1_538px]">
                    <ProjectVisualFrame project={featured} featured />
                </div>
                <div className="flex min-w-0 flex-[1_1_344px] flex-col items-start gap-4 py-3 pl-1 pr-5">
                    <ProjectMeta project={featured} featured />
                </div>
            </article>

            <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
                {rest.map((p) => (
                    <article key={p.title} className="m-glass flex flex-col gap-[22px] rounded-[28px] px-4 pb-[26px] pt-4">
                        <ProjectVisualFrame project={p} />
                        <div className="flex flex-col items-start gap-3 px-2.5">
                            <ProjectMeta project={p} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Work;
