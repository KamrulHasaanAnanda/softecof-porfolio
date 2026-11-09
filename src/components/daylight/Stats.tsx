import { industries, industryTints, stats, statTints } from "./data";
import { tint, tintInk } from "./ui";

const Stats = () => {
    return (
        <section aria-label="Softecof at a glance" className="d-wrap relative z-[2] -mt-16">
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-px overflow-hidden rounded-3xl border border-d-line bg-d-line shadow-[0_1px_2px_rgba(12,26,25,0.05),0_30px_60px_-30px_rgba(12,26,25,0.3)]">
                {stats.map((s, i) => (
                    <div key={s.label} className="flex flex-col-reverse gap-1 bg-white px-7 py-[26px] max-[480px]:px-5 max-[480px]:py-5">
                        <dt className="text-[14.5px] font-medium text-d-muted">{s.label}</dt>
                        <dd className={`m-0 text-[42px] font-extrabold leading-none max-[480px]:text-[34px] tracking-[-0.045em] ${tintInk[statTints[i]]}`}>{s.value}</dd>
                    </div>
                ))}
            </dl>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
                <h2 className="m-0 mr-1.5 text-[13px] max-[760px]:mr-0 max-[760px]:basis-full max-[760px]:text-center font-bold uppercase tracking-[0.08em] text-d-subtle">Industries we serve</h2>
                <ul className="contents list-none">
                    {industries.map(({ label, icon: Icon }, i) => (
                        <li
                            key={label}
                            className="inline-flex items-center gap-2 rounded-full border border-d-line bg-white py-2 pl-2.5 pr-4 text-[14.5px] font-semibold"
                        >
                            <span className={`flex h-6 w-6 items-center justify-center rounded-full ${tint[industryTints[i]]}`}>
                                <Icon size={13} strokeWidth={2.2} />
                            </span>
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Stats;
