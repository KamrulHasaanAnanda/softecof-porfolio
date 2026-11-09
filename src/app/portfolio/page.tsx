import PageHeader from "@/components/classic/PageHeader";
import ProjectList from "@/components/classic/ProjectList";
import PageCta from "@/components/classic/PageCta";
import { allProjects } from "@/components/classic/data";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta, projectsJsonLd } from "@/lib/seo";

export const metadata = pageMeta(
    "Work we have shipped",
    "Websites, SaaS platforms, and custom software Softecof has shipped, including Shishubela, Muscle Power Gym, and Checkbox.live.",
    "/portfolio/",
);

export default function PortfolioPage() {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Portfolio", path: "/portfolio/" },
                ])}
            />
            <JsonLd data={projectsJsonLd("Platforms, websites, and systems built by Softecof", allProjects)} />
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
