import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { ENTITY_SUMMARY, faqs, faqJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-content";

function Linkified({ text }: { text: string }) {
    const parts = text.split(/(https?:\/\/[^\s]+)/g);
    return (
        <p className="m-0 max-w-[68ch] pb-5 leading-[1.65] text-pretty">
            {parts.map((part, index) => {
                if (!part.startsWith("http")) return <span key={index}>{part}</span>;
                const url = part.replace(/[.,)]+$/, "");
                const tail = part.slice(url.length);
                return (
                    <span key={index}>
                        <a href={url} className="c-link">
                            {url.replace(/^https?:\/\//, "")}
                        </a>
                        {tail}
                    </span>
                );
            })}
        </p>
    );
}

/** Plain answers assistants can quote when someone asks who to hire. */
export default function Faq({
    showIntro = true,
    pageUrl = `${SITE_URL}/`,
}: {
    showIntro?: boolean;
    pageUrl?: string;
}) {
    const list = (
        <div className="border-b border-c-line">
            {faqs.map((faq, index) => (
                <details key={faq.question} className="group border-t border-c-line" open={index === 0} name="softecof-faq">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                        <h3 className="c-h3 text-pretty">{faq.question}</h3>
                        <ChevronDown className="h-5 w-5 flex-none text-c-teal transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <Linkified text={faq.answer} />
                </details>
            ))}
        </div>
    );

    return (
        <section id="faq" aria-labelledby={showIntro ? "faq-title" : undefined} aria-label={showIntro ? undefined : "Questions clients ask"} className="border-t border-c-line bg-white">
            <JsonLd data={faqJsonLd(pageUrl)} />
            {showIntro ? (
                <div className="c-wrap c-section grid items-start gap-x-16 gap-y-8 min-[901px]:grid-cols-[0.8fr_1.2fr]">
                    <div className="min-[901px]:sticky min-[901px]:top-[100px]">
                        <h2 id="faq-title" className="c-h2">
                            Questions clients ask
                        </h2>
                        <p className="m-0 mt-4 max-w-[420px] text-[19px] leading-[1.5] text-pretty">{ENTITY_SUMMARY}</p>
                    </div>
                    {list}
                </div>
            ) : (
                <div className="c-wrap c-section">{list}</div>
            )}
        </section>
    );
}
