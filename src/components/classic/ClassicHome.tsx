import AgentDriven from "./AgentDriven";
import Hero from "./Hero";
import Services from "./Services";
import WhySoftecof from "./WhySoftecof";
import Work from "./Work";
import Process from "./Process";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";

/** Option E · Classic homepage. Pair with classic/Header via src/components/Header.tsx. */
export default function ClassicHome() {
    return (
        <>
            <Hero />
            <AgentDriven />
            <Services />
            <WhySoftecof />
            <Work />
            <Process />
            <Team />
            <Contact />
            <Footer />
            <MobileActionBar />
        </>
    );
}
