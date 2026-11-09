import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/site-content";

export const metadata = { title: "Page not found" };

export default function NotFound() {
    return (
        <>
            <section className="theme-daylight bg-d-bg text-d-ink">
                <div className="d-wrap flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
                    <span className="font-serif text-[96px] italic leading-none text-d-teal">404</span>
                    <h1 className="m-0 text-[length:clamp(30px,4vw,44px)] font-extrabold tracking-[-0.04em]">We couldn’t find that page</h1>
                    <p className="m-0 max-w-[440px] text-[17px] leading-[1.65] text-d-muted">
                        The link may be out of date. Head back home, or message us and we’ll point you in the right direction.
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                        <Link href="/" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-d-teal px-6 font-bold text-white hover:brightness-110">
                            <ArrowLeft size={17} />
                            Back to home
                        </Link>
                        <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-d-line-strong bg-white px-6 font-semibold hover:text-d-teal"
                        >
                            <MessageCircle size={17} />
                            WhatsApp us
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
