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
                <ul className="m-0 mt-9 grid list-none gap-4 p-0 min-[641px]:grid-cols-2 min-[981px]:grid-cols-3">
                    {services.map((s) => {
                        const Icon = s.icon;
                        const featured = s.title === AI_SERVICE;
                        return (
                            <li
                                key={s.title}
                                className={`rounded-[12px] border p-6 transition-colors ${
                                    featured ? "border-c-teal bg-c-teal text-white min-[641px]:col-span-2 min-[981px]:col-span-3" : "border-c-line bg-white hover:border-c-teal"
                                }`}
                            >
                                <Icon size={24} className={featured ? "text-c-peach" : "text-c-teal"} aria-hidden="true" />
                                <h3 className={`c-h3 mt-3 ${featured ? "!text-[24px] !text-white" : ""}`}>{s.title}</h3>
                                <p className={`m-0 mt-1.5 ${featured ? "max-w-[640px] text-white" : ""}`}>{s.desc}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Services;
