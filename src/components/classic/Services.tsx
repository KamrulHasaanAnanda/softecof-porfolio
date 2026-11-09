import Link from "next/link";
import { AI_SERVICE, services } from "./data";

const Services = () => {
    return (
        <section id="services" aria-labelledby="services-title" className="border-t border-c-line bg-c-tint">
            <div className="c-wrap c-section">
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                    <h2 id="services-title" className="c-h2">
                        How we help SMEs
                    </h2>
                    <Link href="/services" className="c-link">
                        All services
                    </Link>
                </div>
                <ul className="m-0 mt-7 grid list-none grid-cols-2 gap-3 p-0 min-[641px]:mt-9 min-[641px]:gap-4 min-[981px]:grid-cols-3">
                    {services.map((s) => {
                        const Icon = s.icon;
                        const featured = s.title === AI_SERVICE;
                        return (
                            <li
                                key={s.title}
                                className={`c-reveal c-lift rounded-[12px] border p-4 max-[360px]:p-3 min-[641px]:p-6 ${
                                    featured ? "col-span-2 border-c-teal bg-c-teal text-white min-[981px]:col-span-3" : "border-c-line bg-white hover:border-c-teal"
                                }`}
                            >
                                <Icon size={24} className={featured ? "text-c-peach" : "text-c-teal"} aria-hidden="true" />
                                <h3 className={`c-h3 mt-3 ${featured ? "!text-[22px] !text-white min-[641px]:!text-[24px]" : "max-[640px]:!text-[16.5px] max-[360px]:!text-[15px]"}`}>{s.title}</h3>
                                <p className={`m-0 mt-1.5 ${featured ? "max-w-[640px] text-white" : "max-[640px]:hidden"}`}>{s.desc}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Services;
