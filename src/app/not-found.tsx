import Link from "next/link";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/site-content";

export const metadata = { title: "Page not found" };

export default function NotFound() {
    return (
        <>
            <section className="c-wrap flex min-h-[60vh] flex-col justify-center py-20">
                <h1 className="c-h1">Page not found</h1>
                <p className="m-0 mt-4 max-w-[520px] text-[19px] leading-[1.55]">
                    The link may be out of date. Head back home, or message us and we’ll point you in the right direction.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/" className="c-btn c-btn-primary">
                        Back to home
                    </Link>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-secondary">
                        WhatsApp us
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
}
