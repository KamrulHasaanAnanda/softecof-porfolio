import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Cloud, Headphones, Layers, Plus, type LucideIcon } from "lucide-react";
import { customSoftwareChips, moreCapabilities, saasToggles, supportFeatures } from "./data";
import { CheckIcon, Eyebrow, SectionTitle, toneTile, WindowBar, type Tone } from "./ui";

function ServiceIcon({ icon: Icon, tone }: { icon: LucideIcon; tone: Tone }) {
    return (
        <span className={`flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl border ${toneTile[tone]}`}>
            <Icon size={21} strokeWidth={1.9} />
        </span>
    );
}

function CardTitle({ children }: { children: ReactNode }) {
    return <h3 className="m-0 text-[28px] font-semibold leading-[1.1] tracking-[-0.04em]">{children}</h3>;
}

function CardText({ children }: { children: ReactNode }) {
    return <p className="m-0 text-[15.5px] leading-[1.6] text-m-muted">{children}</p>;
}

/** Inset panel used for the illustrative mini-UIs inside service cards. */
const insetPanel = "rounded-[18px] border border-white/[0.07] bg-[rgba(6,12,12,0.6)]";

const codeLines: { indent: number; bars: [number, string][] }[] = [
    { indent: 0, bars: [[18, "bg-white/[0.12]"], [44, "bg-m-peri-light"], [70, "bg-white/[0.22]"]] },
    { indent: 18, bars: [[36, "bg-m-peach"], [90, "bg-white/[0.22]"]] },
    { indent: 18, bars: [[52, "bg-m-teal-light"], [40, "bg-white/[0.22]"], [64, "bg-m-peri-light"]] },
    { indent: 36, bars: [[80, "bg-white/[0.22]"], [30, "bg-m-peach"]] },
    { indent: 36, bars: [[46, "bg-m-teal-light"], [100, "bg-white/[0.22]"]] },
    { indent: 18, bars: [[24, "bg-white/[0.12]"]] },
    { indent: 0, bars: [[14, "bg-white/[0.12]"]] },
];

const Services = () => {
    return (
        <section id="services" className="m-wrap relative pb-section">
            <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px] text-center">
                <Eyebrow>Services</Eyebrow>
                <SectionTitle>Full-stack technology for growing businesses</SectionTitle>
                <p className="m-0 max-w-[560px] text-[18px] leading-[1.6] text-m-muted text-pretty">
                    From fixing a printer today to building the software that runs your business tomorrow. One partner, six core capabilities.
                </p>
            </div>

            <div className="mt-14 flex flex-wrap gap-4">
                {/* IT & Tech Support */}
                <article className="m-glass flex min-w-0 flex-[1.7_1_666px] flex-wrap gap-7 rounded-3xl bg-[radial-gradient(120%_90%_at_0%_0%,rgba(79,209,190,0.14),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-8">
                    <div className="flex min-w-0 flex-[1_1_250px] flex-col items-start gap-4">
                        <div className="flex items-center gap-2.5">
                            <ServiceIcon icon={Headphones} tone="teal" />
                            <span className="rounded-full bg-m-peach/[0.14] px-2.5 py-1 font-mono text-[11.5px] uppercase tracking-[0.06em] text-m-peach">
                                Most popular
                            </span>
                        </div>
                        <CardTitle>IT &amp; Tech Support</CardTitle>
                        <CardText>Keep your business running with reliable help when things break or slow down.</CardText>
                        <ul className="m-0 mt-1 grid w-full list-none grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-4 gap-y-2.5 p-0 text-[14.5px] text-[#D3DDDB]">
                            {supportFeatures.map((f) => (
                                <li key={f} className="flex items-start gap-2">
                                    <CheckIcon className="mt-[3px]" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div aria-hidden="true" className={`${insetPanel} flex min-w-0 flex-[1_1_314px] flex-col gap-2.5 p-4`}>
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[12.5px] text-m-subtle">
                            <span>Support chat</span>
                            <span className="inline-flex items-center gap-1.5 text-m-teal-soft">
                                <span className="h-1.5 w-1.5 rounded-full bg-m-teal" />
                                Online
                            </span>
                        </div>
                        <div className="max-w-[85%] self-end rounded-[14px_14px_4px_14px] bg-white/[0.08] px-3.5 py-2.5 text-[14px] text-[#E4ECEA]">
                            Our front-desk printer won’t connect.
                        </div>
                        <div className="flex max-w-[92%] items-end gap-2">
                            <Image
                                src="/images/team-sadat-shahriar-bari.jpg"
                                alt=""
                                width={26}
                                height={26}
                                className="h-[26px] w-[26px] flex-none rounded-full object-cover"
                            />
                            <div className="rounded-[14px_14px_14px_4px] border border-m-teal/25 bg-m-teal/[0.16] px-3.5 py-2.5 text-[14px] text-[#E4F7F3]">
                                On it. Connecting remotely now.
                            </div>
                        </div>
                        <div className="mt-1 flex items-center gap-2 rounded-xl bg-m-teal/[0.08] px-3 py-2.5 text-[13px] text-m-teal-soft">
                            <Check size={15} strokeWidth={2.4} />
                            Resolved the same day
                        </div>
                    </div>
                </article>

                {/* SaaS Services */}
                <article className="m-glass flex min-w-0 flex-[1_1_406px] flex-col gap-4 rounded-3xl p-8">
                    <ServiceIcon icon={Cloud} tone="peach" />
                    <CardTitle>SaaS Services</CardTitle>
                    <CardText>Subscribe to ready-made platforms or let us host and manage software for you.</CardText>
                    <div aria-hidden="true" className={`${insetPanel} mt-auto flex flex-col gap-2 !rounded-2xl p-3.5`}>
                        {saasToggles.map((t) => (
                            <div key={t} className="flex items-center justify-between gap-2.5 rounded-[10px] bg-white/[0.03] px-2.5 py-2 text-[13.5px]">
                                <span>{t}</span>
                                <span className="relative h-[18px] w-8 flex-none rounded-full bg-m-teal-deep">
                                    <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-white" />
                                </span>
                            </div>
                        ))}
                    </div>
                </article>

                {/* Remaining capabilities (names pending) */}
                <article className="m-glass flex min-w-0 flex-[1_1_406px] flex-col gap-4 rounded-3xl p-8">
                    <ServiceIcon icon={Plus} tone="neutral" />
                    <CardTitle>And three more</CardTitle>
                    <CardText>Not sure what you need? Tell us the problem and we’ll recommend the right fit.</CardText>
                    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                        {moreCapabilities.map((c) => (
                            <li key={c} className="rounded-[10px] border border-dashed border-white/[0.22] px-3 py-[7px] text-[14px] text-m-soft">
                                {c}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#contact"
                        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-[15px] font-medium text-m-text transition-colors hover:text-m-teal-light"
                    >
                        Talk to the team
                        <ArrowRight size={16} />
                    </Link>
                </article>

                {/* Custom Software */}
                <article className="m-glass flex min-w-0 flex-[1.7_1_666px] flex-wrap gap-7 rounded-3xl bg-[radial-gradient(120%_90%_at_100%_100%,rgba(140,170,255,0.12),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-8">
                    <div className="flex min-w-0 flex-[1_1_250px] flex-col items-start gap-4">
                        <ServiceIcon icon={Layers} tone="peri" />
                        <CardTitle>Custom Software</CardTitle>
                        <CardText>Build tools that match how your business actually works, not generic off-the-shelf software.</CardText>
                        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                            {customSoftwareChips.map((c) => (
                                <li key={c} className="rounded-full border border-white/[0.08] bg-white/5 px-3 py-1.5 text-[13.5px] text-[#D3DDDB]">
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div aria-hidden="true" className={`${insetPanel} min-w-0 flex-[1_1_282px] overflow-hidden`}>
                        <WindowBar label="booking-app / api" />
                        <div className="flex flex-col gap-[9px] px-4 pb-5 pt-4">
                            {codeLines.map((line, i) => (
                                <div key={i} className="flex gap-1.5" style={{ paddingLeft: line.indent }}>
                                    {line.bars.map(([w, colour], j) => (
                                        <span key={j} className={`h-[7px] rounded ${colour}`} style={{ width: w }} />
                                    ))}
                                </div>
                            ))}
                            <div className="mt-2 flex items-center gap-2 rounded-[10px] bg-m-peri/10 px-3 py-[9px] font-mono text-[12px] text-[#C4D2FF]">
                                <Check size={14} strokeWidth={2.4} />
                                Deployed · tests passing
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Services;
