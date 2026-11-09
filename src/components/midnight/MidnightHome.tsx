import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import WhySoftecof from "./WhySoftecof";
import Work from "./Work";
import Process from "./Process";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import { midnightFonts } from "./fonts";

/** Option B · Midnight homepage. Pair with midnight/Header (fixed) via src/components/Header.tsx. */
export default function MidnightHome() {
    return (
        <>
            {/* pt-[76px] reserves space for the fixed header (14px offset + 62px bar) */}
            <div className={`theme-midnight theme-midnight-page overflow-hidden bg-m-bg pt-[76px] text-[16px] leading-[1.55] text-m-text antialiased ${midnightFonts}`}>
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
        </>
    );
}
