import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, serviceTints } from "./data";
import { Accent, CheckDot, Eyebrow, SectionTitle, tint } from "./ui";

const Services = () => {
    return (
        <section id="services" className="d-wrap pt-section">
            <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px] text-center">
                <Eyebrow>Services</Eyebrow>
                <SectionTitle>
                    Full-stack technology for <Accent>growing</Accent> businesses
                </SectionTitle>
                <p className="m-0 max-w-[560px] text-[18px] leading-[1.65] text-d-muted text-pretty">
                    From fixing a printer today to building the software that runs your business tomorrow. One partner, six core capabilities.
                </p>
            </div>

            <ul className="m-0 mt-14 grid list-none grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5 p-0 max-[760px]:mt-10 max-[760px]:gap-4">
                {services.map(({ title, desc, features, icon: Icon, popular }, i) => {
                    const tone = serviceTints[i];
                    return (
                        <li key={title} className="d-lift relative flex flex-col gap-3.5 rounded-[28px] border border-d-line bg-white p-7 shadow-d-card max-[480px]:p-6">
                            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint[tone]}`}>
                                <Icon size={22} />
                            </span>
                            {popular && (
                                <span className="absolute right-6 top-7 rounded-full bg-d-ink px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.04em] text-white">
                                    Most popular
                                </span>
                            )}
                            <h3 className="m-0 mt-1 text-[23px] font-extrabold leading-[1.15] tracking-[-0.035em]">{title}</h3>
                            <p className="m-0 text-[15.5px] leading-[1.6] text-d-muted">{desc}</p>
                            <ul className="m-0 mt-1 flex list-none flex-col gap-[9px] p-0 text-[15px] font-medium">
                                {features.map((f) => (
                                    <li key={f} className="flex items-center gap-2.5">
                                        <CheckDot tone={tone} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>

            <p className="m-0 mt-8 text-center text-[16px] text-d-muted">
                Not sure what you need?{" "}
                <Link href="#contact" className="inline-flex min-h-11 items-center gap-1.5 font-bold text-d-teal hover:underline">
                    Tell us the problem
                    <ArrowRight size={15} strokeWidth={2.2} />
                </Link>
            </p>
        </section>
    );
};

export default Services;
