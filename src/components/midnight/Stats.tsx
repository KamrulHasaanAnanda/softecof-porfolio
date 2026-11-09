import { industries, stats } from "./data";

const Stats = () => {
    return (
        <section aria-label="Softecof at a glance" className="m-wrap pb-section pt-10">
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-px overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.08]">
                {stats.map((s) => (
                    <div key={s.label} className="flex flex-col-reverse gap-1 bg-m-tile px-7 py-[26px]">
                        <dt className="text-[14.5px] text-m-subtle">{s.label}</dt>
                        <dd className="m-0 text-[44px] font-semibold leading-none tracking-[-0.05em]">{s.value}</dd>
                    </div>
                ))}
            </dl>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-9 gap-y-3.5">
                <h2 className="m-0 font-mono text-[12px] font-normal uppercase tracking-[0.08em] text-m-dim">Industries we serve</h2>
                <ul className="contents list-none">
                    {industries.map(({ label, icon: Icon }) => (
                        <li key={label} className="inline-flex items-center gap-2 text-[15px] font-medium text-m-nav">
                            <Icon size={18} strokeWidth={1.8} />
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Stats;
