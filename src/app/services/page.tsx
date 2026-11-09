import AgentDriven from "@/components/classic/AgentDriven";
import PageHeader from "@/components/classic/PageHeader";
import ServiceList from "@/components/classic/ServiceList";
import Process from "@/components/classic/Process";
import WhySoftecof from "@/components/classic/WhySoftecof";
import PageCta from "@/components/classic/PageCta";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Services",
    description: "AI-driven services for SMEs: AI agents, IT support, custom software, SaaS, web development, and maintenance.",
    alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
    return (
        <>
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
