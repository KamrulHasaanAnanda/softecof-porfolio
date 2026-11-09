import Link from "next/link";
import { contactHref, services } from "./data";

/** All six services written out in full for /services. */
export default function ServiceList() {
    return (
        <section aria-label="Our services" className="c-wrap c-section">
            <ul className="m-0 list-none border-b border-c-line p-0">
                {services.map((s) => (
                    <li key={s.title} className="grid gap-x-14 gap-y-4 border-t border-c-line py-8 min-[861px]:grid-cols-2">
                        <div>
                            <h2 className="c-h2 !text-[24px]">{s.title}</h2>
                            <p className="m-0 mt-2 max-w-[480px]">{s.desc}</p>
                            <Link href={contactHref(s.title)} aria-label={`Ask about ${s.title}`} className="c-link mt-3 inline-block">
                                Ask about this service
                            </Link>
                        </div>
                        <ul className="m-0 list-disc pl-5 marker:text-c-muted">
                            {s.features.map((f) => (
                                <li key={f} className="py-0.5">
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}
