import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Folder, LayoutDashboard, MessageCircle, Server, Ticket, Users } from "lucide-react";
import { CONTACT, heroAssurances, heroRequests, team, uptimeBars } from "./data";
import { CheckIcon, toneTile, type Tone } from "./ui";

const sidebar = [
    { label: "Overview", icon: LayoutDashboard, active: true },
    { label: "Support requests", icon: Ticket },
    { label: "Projects", icon: Folder },
    { label: "Systems", icon: Server },
    { label: "Your team", icon: Users },
];

const statusPill: Record<Tone, string> = {
    teal: "bg-m-teal/[0.14] text-m-teal-soft",
    peach: "bg-m-peach/[0.14] text-m-peach",
    peri: "bg-m-peri/[0.14] text-m-peri-light",
    neutral: "bg-white/[0.07] text-m-soft",
    green: "bg-[#A0D278]/[0.14] text-[#C2E3A6]",
};

/** Illustration of a client dashboard. Not a real product screen, so it is hidden from assistive tech. */
function DashboardMock() {
    const avatars = team.filter((m) => ["Izaz Bin Azam", "Kamrul Hassan", "Monjurul Alam"].includes(m.name));

    return (
        <div aria-hidden="true" className="flex overflow-hidden rounded-2xl border border-white/[0.06] bg-m-panel text-left">
            <div className="flex w-[235px] flex-none flex-col gap-1 border-r border-white/[0.06] bg-[#091111] px-3 py-[18px] max-[760px]:hidden">
                <div className="flex items-center gap-[9px] px-2 pb-4 pt-1">
                    <Image src="/images/softecof-mark.png" alt="" width={22} height={22} />
                    <span className="text-[14px] font-semibold tracking-[-0.02em]">Softecof</span>
                </div>
                {sidebar.map(({ label, icon: Icon, active }) => (
                    <span
                        key={label}
                        className={`flex items-center gap-2.5 rounded-[9px] px-2.5 py-2 text-[13.5px] ${active ? "bg-white/[0.06] text-[#F2F6F5]" : "text-m-subtle"}`}
                    >
                        <Icon size={15} />
                        {label}
                    </span>
                ))}
            </div>

            <div className="flex min-w-0 flex-auto flex-col gap-3.5 p-[18px]">
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-[16px] font-semibold tracking-[-0.02em]">Overview</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-m-teal/25 bg-m-teal/10 px-[11px] py-[5px] text-[12.5px] text-m-teal-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-m-teal shadow-[0_0_8px_var(--color-m-teal)]" />
                        All systems operational
                    </span>
                </div>

                <div className="flex flex-wrap gap-3.5">
                    <div className="min-w-0 flex-[1.6_1_322px] overflow-hidden rounded-[14px] border border-white/[0.07] bg-white/[0.03]">
                        <div className="flex justify-between border-b border-white/[0.06] px-4 py-3 text-[12.5px] text-m-subtle">
                            <span>Requests</span>
                            <span className="font-mono">One team for all of it</span>
                        </div>
                        {heroRequests.map(({ title, kind, status, icon: Icon, tone, statusTone = tone }, i) => (
                            <div
                                key={title}
                                className={`flex items-center gap-3 px-4 py-3 ${i < heroRequests.length - 1 ? "border-b border-white/5" : ""}`}
                            >
                                <span className={`flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] ${toneTile[tone]}`}>
                                    <Icon size={15} />
                                </span>
                                <div className="flex min-w-0 flex-1 flex-col">
                                    <span className="text-[14px] font-medium">{title}</span>
                                    <span className="text-[12.5px] text-m-dim">{kind}</span>
                                </div>
                                <span className={`flex-none rounded-full px-2.5 py-[3px] text-[12px] font-medium ${statusPill[statusTone]}`}>{status}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-3.5">
                        <div className="flex flex-1 flex-col gap-2.5 rounded-[14px] border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
                            <div className="flex justify-between text-[12.5px] text-m-subtle">
                                <span>Uptime SLA</span>
                                <span className="font-mono">30 days</span>
                            </div>
                            <span className="text-[34px] font-semibold leading-none tracking-[-0.04em]">99.9%</span>
                            <div className="flex h-[34px] items-end gap-[3px]">
                                {uptimeBars.map((b, i) => (
                                    <span
                                        key={i}
                                        style={{ height: `${b.h}%` }}
                                        className={`flex-1 rounded-[2px] ${b.dip ? "bg-[#E8B98A]" : i === uptimeBars.length - 1 ? "bg-m-teal" : "bg-m-teal-deep"}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-[14px] border border-white/[0.07] bg-white/[0.03] px-4 py-3">
                            <div className="flex flex-none">
                                {avatars.map((m, i) => (
                                    <Image
                                        key={m.name}
                                        src={m.image}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className={`h-8 w-8 rounded-full border-2 border-m-panel object-cover ${i ? "-ml-2" : ""}`}
                                    />
                                ))}
                            </div>
                            <span className="text-[12.5px] leading-[1.4] text-m-muted">Real people on your account, not a ticket queue</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Hero = () => {
    return (
        <section id="top" className="relative px-gutter pt-[clamp(64px,8vw,112px)]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-260px] h-[900px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(63,182,165,0.30),rgba(63,182,165,0.06)_55%,transparent_75%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_20%,transparent_75%)]"
            />

            <div className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-7 text-center">
                <Link
                    href="#work"
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] py-1.5 pl-1.5 pr-2 text-[14px] text-m-soft transition-colors hover:text-m-teal-light"
                >
                    <span className="rounded-full bg-m-teal/[0.16] px-2.5 py-[3px] font-mono text-[11.5px] uppercase tracking-[0.06em] text-m-teal-light">
                        Global SME partner
                    </span>
                    15+ products delivered worldwide
                    <ArrowRight size={14} />
                </Link>

                <h1 className="m-0 max-w-[1000px] text-[length:clamp(44px,6.8vw,96px)] font-semibold leading-[0.98] tracking-[-0.055em] text-m-head text-balance">
                    Technology that moves your business <span className="m-gradient-text">forward.</span>
                </h1>

                <p className="m-0 max-w-[620px] text-[length:clamp(17px,1.5vw,20px)] leading-[1.6] text-m-muted text-pretty">
                    Tech support, custom software and SaaS platforms for small and medium businesses worldwide, delivered by a team that actually
                    picks up the phone.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        href="#contact"
                        className="m-btn-primary min-h-[52px] px-[26px] text-[16px] shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_12px_40px_-8px_rgba(95,224,203,0.45)]"
                    >
                        Get a free quote
                        <ArrowRight size={16} strokeWidth={2.2} />
                    </Link>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="m-btn-ghost min-h-[54px] px-6 text-[16px]">
                        <MessageCircle size={17} />
                        Chat on WhatsApp
                    </a>
                </div>

                <ul className="m-0 flex list-none flex-wrap justify-center gap-x-[22px] gap-y-2 p-0 text-[14px] text-m-subtle">
                    {heroAssurances.map((a) => (
                        <li key={a} className="inline-flex items-center gap-[7px]">
                            <CheckIcon />
                            {a}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative mx-auto mt-[clamp(56px,6vw,80px)] max-w-[1120px]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[10%] right-[10%] top-[8%] h-[70%] bg-[radial-gradient(closest-side,rgba(79,209,190,0.32),transparent)] blur-[40px]"
                />
                <div className="relative rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-2 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]">
                    <DashboardMock />
                </div>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-0.5 left-0 right-0 h-[140px] bg-[linear-gradient(180deg,rgba(6,12,12,0),var(--color-m-bg))]"
                />
            </div>
        </section>
    );
};

export default Hero;
