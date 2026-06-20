import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Portfolio - Softecof",
    description: "SaaS platforms, custom software, and business systems delivered by Softecof.",
};

export default function PortfolioPage() {
    return (
        <>
            <PageHero
                eyebrow="Our work"
                title="Platforms and systems we've built"
                description="From SaaS products to custom business software—real projects delivered for clients across healthcare, education, agriculture, and more."
            />
            <Portfolio showAll />
            <CtaBanner />
            <Footer />
        </>
    );
}
