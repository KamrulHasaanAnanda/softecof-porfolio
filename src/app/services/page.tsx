import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhySoftecof from "@/components/WhySoftecof";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Services - Softecof",
    description: "IT support, custom software, SaaS, web development, and maintenance for SMEs.",
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                eyebrow="Our services"
                title="Tech support, custom software & SaaS for your business"
                description="Six core services covering everything from fixing your systems today to building the platforms that run your business tomorrow."
            />
            <Services showIntro={false} />
            <WhySoftecof />
            <Process />
            <CtaBanner />
            <Footer />
        </>
    );
}
