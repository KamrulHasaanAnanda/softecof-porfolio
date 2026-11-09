import Link from "next/link";
import { whyItems } from "./data";

const WhySoftecof = () => {
    return (
        <section aria-labelledby="why-title" className="c-on-dark bg-c-night text-white">
            <div className="c-wrap c-section grid items-start gap-x-16 gap-y-9 min-[901px]:grid-cols-[1fr_1.25fr]">
                <div className="min-[901px]:sticky min-[901px]:top-[100px]">
                    <h2 id="why-title" className="c-h2 !text-white">
                        Why SMEs choose Softecof
                    </h2>
                    <p className="m-0 mt-4 max-w-[420px] text-[19px] leading-[1.5] text-c-on-night text-pretty">AI-driven work at a price that suits an SME, from a team you can reach when you need them.</p>
                    <Link href="/#contact" className="c-btn c-btn-accent mt-7">
                        Get a free quote
                    </Link>
                </div>
                <ul className="m-0 list-none border-b border-white/15 p-0">
                    {whyItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.title} className="c-reveal flex gap-4 border-t border-white/15 py-5">
                                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[8px] bg-c-night-raised text-c-mint">
                                    <Icon size={21} aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="c-h3 !text-white">{item.title}</h3>
                                    <p className="m-0 mt-1 text-c-on-night">{item.desc}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default WhySoftecof;
