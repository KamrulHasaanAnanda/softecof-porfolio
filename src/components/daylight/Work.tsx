import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projectCopy } from "./data";
import { Accent, Eyebrow, SectionTitle } from "./ui";

/** Plain project cards. Add real product screenshots here once they're available. */
const projects = [
    { ...projectCopy.checkbox, bg: "bg-[#E7F4F1]", categoryClass: "bg-d-teal" },
    { ...projectCopy.healthcare, bg: "bg-[#FFF1E3]", categoryClass: "bg-d-peach-ink" },
    { ...projectCopy.tarulata, bg: "bg-[#F1F6E6]", categoryClass: "bg-[#4D6A1F]" },
];

const Work = () => {
    return (
        <section id="work" className="d-wrap pt-section">
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
                <div className="flex min-w-0 flex-[1_1_480px] flex-col items-start gap-[18px]">
                    <Eyebrow>Portfolio</Eyebrow>
                    <SectionTitle>
                        Projects we’ve <Accent>delivered</Accent>
                    </SectionTitle>
                </div>
                <div className="flex min-w-0 flex-[0_1_420px] flex-col items-start gap-[18px]">
                    <p className="m-0 text-[17px] leading-[1.65] text-d-muted">SaaS platforms, custom software, and business systems for clients worldwide.</p>
                    <Link
                        href="/portfolio"
                        className="inline-flex min-h-[50px] items-center gap-2 rounded-full border border-d-line-strong bg-white px-[22px] text-[15px] font-bold transition-colors hover:text-d-teal"
                    >
                        View all work
                        <ArrowUpRight size={15} strokeWidth={2.2} />
                    </Link>
                </div>
            </div>

            <ul className="m-0 mt-14 grid list-none grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5 p-0 max-[760px]:mt-10 max-[760px]:gap-4">
                {projects.map((p) => (
                    <li key={p.title} className={`d-lift flex flex-col items-start gap-3 rounded-[28px] p-8 max-[480px]:p-6 ${p.bg}`}>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-white px-3 py-[5px] text-[12.5px] font-bold text-d-ink-2">{p.type}</span>
                            <span className={`rounded-full px-3 py-[5px] text-[12.5px] font-bold text-white ${p.categoryClass}`}>{p.category}</span>
                        </div>
                        <h3 className="m-0 mt-2 text-[28px] font-extrabold leading-[1.1] tracking-[-0.04em]">{p.title}</h3>
                        <p className="m-0 text-[16px] leading-[1.6] text-d-ink-2">{p.desc}</p>
                        <Link
                            href="/portfolio"
                            aria-label={`View ${p.title} case study`}
                            className="mt-auto inline-flex min-h-11 items-center gap-2 pt-2 text-[15px] font-bold text-d-ink transition-colors hover:text-d-teal"
                        >
                            View case study
                            <ArrowRight size={15} strokeWidth={2.2} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Work;
