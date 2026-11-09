import Link from "next/link";
import AgentConsole from "./AgentConsole";
import { CONTACT, heroAssurances, stats } from "./data";

const Hero = () => {
    return (
        <section id="top" className="c-on-dark c-hero-bg text-white">
            <div className="c-wrap grid items-center gap-x-14 gap-y-10 pb-[clamp(40px,4.5vw,64px)] pt-[clamp(36px,4.5vw,64px)] min-[961px]:grid-cols-[1.12fr_1fr]">
                <div className="min-w-0">
                    <p className="c-mono m-0 mb-4 text-[14px] text-c-mint">AI-driven. Agent-driven. Built for SMEs.</p>
                    <h1 className="c-h1 !text-white">
                        We are an AI-driven company that <span className="text-c-peach">helps SMEs grow.</span>
                    </h1>
                    <p className="m-0 mt-5 max-w-[560px] text-[19px] leading-[1.55] text-c-on-night text-pretty">
                        Softecof helps small and medium companies put AI agents, custom software, SaaS and tech support to work. Agents take on the repetitive jobs, and our team picks up the phone when you need a person.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3 max-[480px]:flex-col">
                        <Link href="#contact" className="c-btn c-btn-accent">
                            Get a free quote
                        </Link>
                        <a href={CONTACT.phoneHref} className="c-btn c-btn-ghost">
                            Call {CONTACT.phoneDisplay}
                        </a>
                    </div>
                    <p className="m-0 mt-5 text-[15px] text-c-on-night">{heroAssurances.join(" · ")}</p>
                </div>
                <AgentConsole />
            </div>

            <div className="border-t border-white/15 bg-c-night">
                <dl className="c-wrap my-0 grid grid-cols-2 gap-x-8 gap-y-6 py-7 min-[761px]:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col">
                            <dt className="order-2 text-[15px] text-c-on-night">{s.label}</dt>
                            <dd className="m-0 text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">{s.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Hero;
