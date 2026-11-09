import Link from "next/link";
import { AI_SERVICE, agentFlow, agentTypes, contactHref } from "./data";

const AgentDriven = () => {
    return (
        <section id="agents" aria-labelledby="agents-title" className="c-wrap c-section">
            <div className="grid gap-x-14 gap-y-5 min-[901px]:grid-cols-[1.2fr_1fr] min-[901px]:items-end">
                <h2 id="agents-title" className="c-h2">
                    Agent-driven work for SME teams
                </h2>
                <div>
                    <p className="m-0">Everything we do is AI-driven. We build AI agents that take on the jobs SME teams repeat every day, and we stay responsible for how they run.</p>
                    <Link href={contactHref(AI_SERVICE)} className="c-link mt-2 inline-block">
                        Ask about AI agents
                    </Link>
                </div>
            </div>

            <ul className="m-0 mt-9 grid list-none gap-x-8 gap-y-7 p-0 min-[641px]:grid-cols-2 min-[1021px]:grid-cols-4">
                {agentTypes.map((a) => (
                    <li key={a.title} className="c-reveal border-t-2 border-c-teal pt-4">
                        <h3 className="c-h3">{a.title}</h3>
                        <p className="m-0 mt-1.5 text-[16px]">{a.desc}</p>
                    </li>
                ))}
            </ul>

            <div className="c-reveal c-on-dark mt-10 rounded-[12px] bg-c-night p-[clamp(20px,3vw,36px)] text-white">
                <p className="c-mono m-0 text-[14px] text-c-mint">How an agent handles a task</p>
                <ol className="m-0 mt-5 grid list-none gap-x-6 gap-y-5 p-0 min-[641px]:grid-cols-2 min-[1021px]:grid-cols-4">
                    {agentFlow.map((step, i) => (
                        <li key={step.title} className="flex gap-3">
                            <span
                                aria-hidden="true"
                                className="c-flow-step c-mono flex h-8 w-8 flex-none items-center justify-center rounded-full border border-c-mint/50 bg-c-night-raised text-[14px] text-c-mint"
                                style={{ animationDelay: `${i * 2}s` }}
                            >
                                {i + 1}
                            </span>
                            <div className="min-w-0">
                                <h3 className="m-0 text-[17px] font-semibold leading-[1.3]">{step.title}</h3>
                                <p className="m-0 mt-1 text-[15px] leading-[1.45] text-c-on-night">{step.desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default AgentDriven;
