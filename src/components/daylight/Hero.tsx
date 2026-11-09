import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { CONTACT, heroAssurances } from "./data";
import { Accent, CheckDot } from "./ui";

const Hero = () => {
    return (
        <section id="top" className="relative bg-d-bg bg-[radial-gradient(55%_60%_at_100%_0%,rgba(247,200,154,0.30),transparent_70%),radial-gradient(45%_55%_at_0%_30%,rgba(122,196,182,0.22),transparent_70%)]">
            <div className="d-wrap flex flex-wrap items-center gap-x-16 gap-y-12 pb-[clamp(96px,10vw,140px)] pt-[clamp(40px,6vw,88px)]">
                <div className="flex min-w-0 flex-[1.15_1_520px] flex-col items-start gap-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-d-ink-2 shadow-[0_1px_2px_rgba(12,26,25,0.06),0_8px_24px_-12px_rgba(12,26,25,0.2)]">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-d-teal" />
                        50+ clients in Bangladesh &amp; worldwide
                    </span>

                    <h1 className="m-0 text-[length:clamp(40px,5.4vw,78px)] font-extrabold leading-[1.04] tracking-[-0.045em] text-balance">
                        The tech partner that <Accent>actually</Accent> picks up the phone
                    </h1>

                    <p className="m-0 max-w-[540px] text-[length:clamp(17px,1.4vw,19.5px)] leading-[1.65] text-d-muted text-pretty">
                        Tech support, custom software and SaaS platforms for small and medium businesses. One team, from today’s fix to
                        tomorrow’s build.
                    </p>

                    <div className="flex flex-wrap gap-3 max-[480px]:w-full max-[480px]:flex-col">
                        <Link
                            href="#contact"
                            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-d-teal px-7 text-[16.5px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(30,122,111,0.75)] transition hover:brightness-110"
                        >
                            Get a free quote
                            <ArrowRight size={17} strokeWidth={2.2} />
                        </Link>
                        <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-full border border-d-line-strong bg-white px-[26px] text-[16.5px] font-semibold transition-colors hover:text-d-teal"
                        >
                            <MessageCircle size={18} />
                            WhatsApp us
                        </a>
                    </div>

                    <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 text-[15px] font-semibold text-d-ink-2 hover:text-d-teal">
                        <Phone size={16} />
                        Or call {CONTACT.phoneDisplay}
                    </a>

                    <ul className="m-0 flex list-none flex-wrap gap-x-[22px] gap-y-2 p-0 text-[14.5px] font-medium text-d-muted">
                        {heroAssurances.map((a) => (
                            <li key={a} className="inline-flex items-center gap-2">
                                <CheckDot />
                                {a}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="min-w-0 flex-[1_1_420px]">
                    <Image
                        src="/images/about-team-working.jpg"
                        alt="The Softecof team working together"
                        width={682}
                        height={662}
                        priority
                        sizes="(max-width: 760px) 100vw, 560px"
                        className="block aspect-[4/3.6] w-full rounded-[32px] object-cover shadow-[0_40px_80px_-36px_rgba(12,26,25,0.55)] max-[760px]:aspect-[4/3]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
