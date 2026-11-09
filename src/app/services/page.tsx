import AgentDriven from "@/components/classic/AgentDriven";
import PageHeader from "@/components/classic/PageHeader";
import ServiceList from "@/components/classic/ServiceList";
import Process from "@/components/classic/Process";
import WhySoftecof from "@/components/classic/WhySoftecof";
import PageCta from "@/components/classic/PageCta";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
    "Services for SMEs",
    "AI agents, IT support, custom software, SaaS, websites, business systems, and maintenance for SMEs. Softecof is based in Chittagong and works worldwide.",
    "/services/",
);

export default function ServicesPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Services", path: "/services/" },
                ])}
            />
            <PageHeader
                title="AI-driven services for SMEs"
                description="Seven core services that help small and medium companies, from fixing your systems today to running AI agents tomorrow."
            />
            <ServiceList />
            <AgentDriven />
            <WhySoftecof />
            <Process />
            <PageCta />
            <Footer />
        </>
    );
}
