import { whyItems } from "./data";
import { Accent, Eyebrow, SectionTitle } from "./ui";

const WhySoftecof = () => {
    return (
        <section aria-labelledby="why-heading" className="px-[clamp(12px,2vw,24px)] pt-section">
            <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[40px] bg-d-deep text-[#F4F8F7] max-[480px]:rounded-[28px]">
                <div className="d-wrap py-[clamp(56px,8vw,104px)]">
                    <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
                        <div className="flex min-w-0 flex-[1_1_520px] flex-col items-start gap-[18px]">
                            <Eyebrow className="bg-white/10 text-d-on-deep-mint">Why Softecof</Eyebrow>
                            <SectionTitle id="why-heading" className="text-white">
                                Built <Accent className="text-d-peach">differently</Accent> from enterprise IT vendors
                            </SectionTitle>
                        </div>
                        <p className="m-0 min-w-0 flex-[0_1_400px] text-[17.5px] leading-[1.65] text-d-on-deep">
                            We focus exclusively on SMEs: practical solutions, honest pricing, and people who actually respond.
                        </p>
                    </div>

                    <ul className="m-0 mt-12 grid list-none grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-10 gap-y-8 p-0 max-[760px]:mt-10 max-[760px]:gap-y-7">
                        {whyItems.map(({ title, desc, icon: Icon }) => (
                            <li key={title} className="flex gap-4">
                                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-white/[0.12] text-d-on-deep-mint">
                                    <Icon size={21} />
                                </span>
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="m-0 text-[19px] font-extrabold leading-[1.3] tracking-[-0.025em] text-white">{title}</h3>
                                    <p className="m-0 text-[15px] leading-[1.6] text-d-on-deep">{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhySoftecof;
