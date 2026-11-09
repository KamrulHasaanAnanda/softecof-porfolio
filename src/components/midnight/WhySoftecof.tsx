import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyItems } from "./data";
import { Eyebrow } from "./ui";

const WhySoftecof = () => {
    return (
        <section aria-labelledby="why-heading" className="relative border-y border-white/[0.06] bg-m-band">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[200px] top-[10%] h-[700px] w-[700px] bg-[radial-gradient(closest-side,rgba(63,182,165,0.16),transparent)]"
            />
            <div className="m-wrap relative flex flex-wrap gap-x-20 gap-y-14 py-section">
                <div className="flex min-w-0 flex-[1_1_360px] flex-col items-start gap-[18px]">
                    <Eyebrow>Why Softecof</Eyebrow>
                    <h2
                        id="why-heading"
                        className="m-0 text-[length:clamp(34px,4vw,52px)] font-semibold leading-[1.04] tracking-[-0.05em] text-m-head text-balance"
                    >
                        Built differently from enterprise IT vendors
                    </h2>
                    <p className="m-0 max-w-[420px] text-[18px] leading-[1.6] text-m-muted text-pretty">
                        We focus exclusively on SMEs: practical solutions, honest pricing, and people who actually respond.
                    </p>
                    <Link href="#contact" className="m-btn-primary mt-2 min-h-[50px] px-[22px] text-[15.5px]">
                        Get a free quote
                        <ArrowRight size={16} strokeWidth={2.2} />
                    </Link>
                </div>

                <ul className="m-0 flex min-w-0 flex-[1.4_1_480px] list-none flex-col p-0">
                    {whyItems.map(({ title, desc, icon: Icon }) => (
                        <li key={title} className="flex gap-5 border-t border-white/[0.08] py-6 last:border-b">
                            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[13px] border border-m-teal/[0.28] bg-[linear-gradient(180deg,rgba(79,209,190,0.18),rgba(79,209,190,0.05))] text-m-teal-light">
                                <Icon size={20} strokeWidth={1.9} />
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="m-0 text-[19px] font-semibold tracking-[-0.025em]">{title}</h3>
                                <p className="m-0 text-[15.5px] leading-[1.6] text-m-muted">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhySoftecof;
