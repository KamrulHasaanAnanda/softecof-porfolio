import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { aboutStats, team } from "./data";
import { Eyebrow } from "./ui";

const iconLink =
    "flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-m-nav transition-colors hover:border-m-teal/40 hover:text-m-teal-light";

const Team = () => {
    return (
        <section id="team" className="m-wrap pt-section">
            <div className="flex flex-wrap gap-x-[72px] gap-y-12">
                <div className="flex min-w-0 flex-[1_1_340px] flex-col items-start gap-[18px]">
                    <Eyebrow>About &amp; team</Eyebrow>
                    <h2 className="m-0 text-[length:clamp(32px,3.6vw,48px)] font-semibold leading-[1.06] tracking-[-0.05em] text-m-head text-balance">
                        Your global partner for practical technology
                    </h2>
                    <p className="m-0 text-[16.5px] leading-[1.65] text-m-muted text-pretty">
                        Softecof serves small and medium businesses worldwide with reliable technology, without the cost and complexity of enterprise
                        vendors. Whether your systems need fixing or your business needs building, one team handles it all.
                    </p>
                    <dl className="m-0 mt-1.5 flex gap-8">
                        {aboutStats.map((s) => (
                            <div key={s.label} className="flex flex-col-reverse gap-0.5">
                                <dt className="text-[14px] text-m-subtle">{s.label}</dt>
                                <dd className="m-0 text-[36px] font-semibold leading-none tracking-[-0.05em]">{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <ul className="m-0 grid min-w-0 flex-[1.7_1_520px] list-none grid-cols-[repeat(auto-fit,minmax(min(190px,100%),1fr))] gap-3 p-0">
                    {team.map((m) => (
                        <li key={m.name} className="m-glass-soft flex flex-col items-start gap-3.5 rounded-[20px] p-5">
                            <span className="rounded-full bg-[linear-gradient(135deg,#5FE0CB,#F4CDA5)] p-0.5">
                                <Image
                                    src={m.image}
                                    alt={m.name}
                                    width={68}
                                    height={68}
                                    className="block h-[68px] w-[68px] rounded-full border-2 border-[#0A1313] object-cover"
                                />
                            </span>
                            <div className="flex flex-col gap-0.5">
                                <h3 className="m-0 text-[16px] font-semibold tracking-[-0.02em]">{m.name}</h3>
                                <p className="m-0 text-[13.5px] text-m-subtle">{m.role}</p>
                            </div>
                            <div className="flex gap-1.5">
                                <a
                                    href={m.linkedin ?? "#team"}
                                    aria-label={`${m.name} on LinkedIn`}
                                    className={iconLink}
                                    {...(m.linkedin && { target: "_blank", rel: "noopener noreferrer" })}
                                >
                                    <Linkedin size={16} />
                                </a>
                                <a href={m.email ? `mailto:${m.email}` : "#team"} aria-label={`Email ${m.name}`} className={iconLink}>
                                    <Mail size={16} />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Team;
