import Portfolio from "@/components/Portfolio";
import Header from "@/components/Header";

export default function PortfolioPage() {
    return (
        <>
            <Header />
            <main className="pt-16 md:pt-20">
                <Portfolio />
            </main>
        </>
    );
}
