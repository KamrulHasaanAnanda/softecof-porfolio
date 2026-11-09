import { processSteps } from "./data";
import { Accent, Eyebrow, SectionTitle } from "./ui";

const Process = () => {
    return (
        <section id="process" className="d-wrap pt-section">
            <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px] text-center">
                <Eyebrow>How it works</Eyebrow>
                <SectionTitle>
                    From first call to <Accent>ongoing</Accent> support
                </SectionTitle>
                <p className="m-0 text-[18px] leading-[1.65] text-d-muted">A clear five-step journey. No surprises, no jargon, just progress you can track.</p>
            </div>

            {/* Cards on desktop; on phones each step becomes a compact row with the number on the left. */}
            <ol className="m-0 mt-14 grid list-none grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-3.5 p-0 max-[760px]:mt-10 max-[760px]:gap-2.5">
                {processSteps.map((step, i) => (
                    <li
                        key={step.title}
                        className={`relative flex flex-col gap-2.5 rounded-3xl border px-6 py-[26px] shadow-d-soft max-[760px]:grid max-[760px]:grid-cols-[48px_1fr] max-[760px]:gap-x-4 max-[760px]:gap-y-1 max-[760px]:px-5 max-[760px]:py-5 ${
                            step.ongoing ? "border-[#F6DEC4] bg-[#FFF1E3]" : "border-d-line bg-white"
                        }`}
                    >
                        <span
                            aria-hidden="true"
                            className={`font-serif text-[56px] italic leading-[0.9] max-[760px]:row-span-2 max-[760px]:text-[42px] ${
                                step.ongoing ? "text-d-peach-ink" : "text-d-teal"
                            }`}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.ongoing && (
                            <span className="absolute right-6 top-[39px] rounded-full bg-white px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.04em] text-d-peach-ink max-[760px]:right-4 max-[760px]:top-4">
                                Ongoing
                            </span>
                        )}
                        <h3
                            className={`m-0 mt-2 text-[18.5px] font-extrabold leading-[1.25] tracking-[-0.025em] max-[760px]:mt-0.5 max-[760px]:text-[17px] ${step.ongoing ? "max-[760px]:pr-20" : ""}`}
                        >
                            <span className="sr-only">Step {i + 1}: </span>
                            {step.title}
                        </h3>
                        <p className="m-0 text-[14.5px] leading-[1.6] text-d-muted">{step.desc}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Process;
