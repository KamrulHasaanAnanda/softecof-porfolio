import Faq from "@/components/classic/Faq";
import PageCta from "@/components/classic/PageCta";
import PageHeader from "@/components/classic/PageHeader";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, ENTITY_SUMMARY, pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-content";

export const metadata = pageMeta(
    "AI agents and custom software for SMEs",
    "Answers for companies hiring Softecof: AI agents, custom software, SaaS, websites, and IT support for SMEs in Bangladesh and worldwide.",
    "/faq/",
);

export default function FaqPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "FAQ", path: "/faq/" },
                ])}
            />
            <PageHeader title="Questions clients ask before hiring Softecof" description={ENTITY_SUMMARY} />
            <Faq showIntro={false} pageUrl={`${SITE_URL}/faq/`} />
            <PageCta />
            <Footer />
        </>
    );
}
