import Hero from "@/components/Hero";
import About from "@/components/About";
// import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/ContactUs";
import Footer from "@/components/Footer";
import FloatingLanguageSwitcher from "./FloatingLanguageSwitcher";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Portfolio />
            <Team />
            <Contact />
            <Footer />
            <FloatingLanguageSwitcher />
        </div>
    );
};

export default Index; 