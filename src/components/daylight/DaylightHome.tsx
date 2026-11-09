import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import WhySoftecof from "./WhySoftecof";
import Work from "./Work";
import Process from "./Process";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";

/** Option C · Daylight homepage. Pair with daylight/Header (sticky) via src/components/Header.tsx. */
export default function DaylightHome() {
    return (
        <>
            <div className="theme-daylight overflow-hidden bg-d-bg text-[16.5px] leading-[1.6] text-d-ink antialiased">
                <Hero />
                <Stats />
                <Services />
                <WhySoftecof />
                <Work />
                <Process />
                <Team />
                <Contact />
            </div>
            <Footer />
            <MobileActionBar />
        </>
    );
}
