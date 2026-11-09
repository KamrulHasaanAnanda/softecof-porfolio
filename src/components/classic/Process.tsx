import { processSteps } from "./data";

/** One colour per step, darkening as the work builds, with the accent colour on the final step. */
const bars = [
    { surface: "bg-[#DCEEEA] text-c-ink", number: "text-c-teal", desc: "text-c-body", height: "min-[1181px]:min-h-[300px]" },
    { surface: "bg-[#B5DCD4] text-c-ink", number: "text-c-teal-dark", desc: "text-c-ink", height: "min-[1181px]:min-h-[350px]" },
    { surface: "bg-c-teal text-white", number: "text-c-peach", desc: "text-white", height: "min-[1181px]:min-h-[400px]" },
    { surface: "bg-c-night text-white", number: "text-c-peach", desc: "text-c-on-night", height: "min-[1181px]:min-h-[450px]" },
    { surface: "bg-c-peach text-c-ink", number: "text-c-night", desc: "text-c-ink", height: "min-[1181px]:min-h-[500px]" },
];

/** The steps read as a rising bar chart, with the heading in the space above the shortest bars. */
const Process = () => {
    return (
        <section id="process" aria-labelledby="process-title">
            <div className="c-wrap c-section relative">
                <h2 id="process-title" className="c-h2 max-w-[560px] min-[1181px]:absolute min-[1181px]:max-w-[44%]">
                    From first message to lasting growth
                </h2>
                <ol className="m-0 grid list-none gap-2 p-0 max-[1180px]:mt-7 min-[641px]:max-[1180px]:grid-cols-2 min-[1181px]:grid-cols-5 min-[1181px]:items-end">
                    {processSteps.map((step, i) => {
                        const bar = bars[i % bars.length];
                        return (
                            <li key={step.title} className={`c-reveal c-lift grid grid-cols-[42px_1fr] gap-x-3 rounded-[12px] p-4 min-[641px]:block min-[641px]:p-6 min-[641px]:max-[1180px]:last:col-span-2 ${bar.surface} ${bar.height}`}>
                                <span className={`row-span-2 block text-[38px] font-semibold leading-none tracking-[-0.03em] min-[641px]:text-[56px] ${bar.number}`}>{i + 1}</span>
                                <h3 className="m-0 text-[18px] font-semibold leading-[1.25] min-[641px]:mt-4 min-[641px]:text-[20px]">{step.title}</h3>
                                <p className={`m-0 mt-1 text-[15px] leading-[1.45] min-[641px]:mt-2 min-[641px]:text-[16px] min-[641px]:leading-[1.5] ${bar.desc}`}>{step.desc}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Process;
