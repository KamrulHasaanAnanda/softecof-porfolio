import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { team, teamTints } from "./data";
import { Accent, Eyebrow, SectionTitle, tint } from "./ui";

const iconLink = "flex h-11 w-11 items-center justify-center rounded-full bg-d-sand text-d-ink transition-colors hover:bg-d-teal hover:text-white";

const Team = () => {
    return (
        <section id="team" className="d-wrap pt-section">
            <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
                <div className="flex min-w-0 flex-[1_1_520px] flex-col items-start gap-[18px]">
                    <Eyebrow>Our team</Eyebrow>
                    <SectionTitle>
                        The <Accent>people</Accent> behind Softecof
                    </SectionTitle>
                </div>
                <p className="m-0 min-w-0 flex-[0_1_440px] text-[17px] leading-[1.65] text-d-muted">
                    Your global partner for practical technology: 25+ experts across development, support and design, delivering for clients
                    worldwide for 8+ years.
                </p>
            </div>

            {/* Two columns on phones (150px min), six on desktop */}
            <ul className="m-0 mt-12 grid list-none grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-4 p-0 max-[760px]:mt-9 max-[760px]:gap-3">
                {team.map((m, i) => (
                    <li
                        key={m.name}
                        className="d-lift flex flex-col items-center gap-3 rounded-[26px] border border-d-line bg-white px-4 pb-5 pt-[26px] text-center shadow-d-soft max-[480px]:px-3 max-[480px]:pt-5"
                    >
                        <span className={`rounded-full p-1 ${tint[teamTints[i]]}`}>
                            <Image
                                src={m.image}
                                alt={m.name}
                                width={92}
                                height={92}
                                className="block h-[92px] w-[92px] rounded-full object-cover max-[480px]:h-[76px] max-[480px]:w-[76px]"
                            />
                        </span>
                        <div className="flex flex-col gap-0.5">
                            <h3 className="m-0 text-[16px] font-extrabold leading-[1.3] tracking-[-0.02em] max-[480px]:text-[15px]">{m.name}</h3>
                            <p className="m-0 text-[13.5px] font-medium leading-[1.4] text-d-muted max-[480px]:text-[12.5px]">{m.role}</p>
                        </div>
                        {/* Only render links that go somewhere; add URLs in src/lib/site-content.ts */}
                        {(m.linkedin || m.email) && (
                            <div className="flex gap-1.5">
                                {m.linkedin && (
                                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className={iconLink}>
                                        <Linkedin size={16} />
                                    </a>
                                )}
                                {m.email && (
                                    <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`} className={iconLink}>
                                        <Mail size={16} />
                                    </a>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Team;
