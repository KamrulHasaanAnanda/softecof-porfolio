import { processSteps } from "./data";
import { Eyebrow, SectionTitle } from "./ui";

const Process = () => {
    return (
        <section id="process" className="m-wrap pt-section">
            <div className="mx-auto flex max-w-[720px] flex-col items-center gap-[18px] text-center">
                <Eyebrow>How it works</Eyebrow>
                <SectionTitle>From first call to ongoing support</SectionTitle>
                <p className="m-0 text-[18px] leading-[1.6] text-m-muted">A clear five-step journey. No surprises, no jargon, just progress you can track.</p>
            </div>

            <ol className="m-0 mt-14 grid list-none grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-3 p-0">
                {processSteps.map((step, i) => (
                    <li
                        key={step.title}
                        className={`flex flex-col gap-3.5 rounded-[20px] p-6 ${
                            step.ongoing
                                ? "border border-m-peach/[0.22] bg-[linear-gradient(180deg,rgba(244,205,165,0.08),rgba(244,205,165,0.015))]"
                                : "m-glass-soft"
                        }`}
                    >
                        <span className="flex items-center gap-2.5">
                            <span
                                className={`flex h-[42px] w-[42px] items-center justify-center rounded-xl border font-mono text-[14px] ${
                                    step.ongoing ? "border-m-peach/40 bg-m-peach/10 text-m-peach" : "border-m-teal/[0.35] bg-m-teal/[0.08] text-m-teal-soft"
                                }`}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            {step.ongoing && <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-m-peach">Ongoing</span>}
                        </span>
                        <h3 className="m-0 text-[18px] font-semibold tracking-[-0.025em]">{step.title}</h3>
                        <p className="m-0 text-[14.5px] leading-[1.6] text-m-muted">{step.desc}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Process;
