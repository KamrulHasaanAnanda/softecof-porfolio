import PageHeader from "@/components/classic/PageHeader";
import ProjectList from "@/components/classic/ProjectList";
import PageCta from "@/components/classic/PageCta";
import { allProjects } from "@/components/classic/data";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Portfolio",
    description: "SaaS platforms, custom software, and business systems delivered by Softecof.",
    alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
    return (
        <>
            <PageHeader
                title="Platforms and systems we’ve built"
                description="SaaS products and custom software delivered for SMEs and other clients across healthcare, education, agriculture, and more."
            />
            <section aria-label="Projects" className="c-wrap c-section">
                <ProjectList projects={allProjects} />
            </section>
            <PageCta />
            <Footer />
        </>
    );
}
