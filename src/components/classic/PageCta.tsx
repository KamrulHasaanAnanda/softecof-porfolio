import Link from "next/link";
import { CONTACT } from "./data";

/** Closing call to action for the inner pages. */
export default function PageCta() {
    return (
        <section className="border-t border-c-line">
            <div className="c-wrap c-section flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
                <div className="min-w-0 flex-[1_1_380px]">
                    <h2 className="c-h2">Tell us what your company needs</h2>
                    <p className="m-0 mt-2">We respond within 24 hours with a clear next step.</p>
                </div>
                <div className="flex flex-wrap gap-3 max-[480px]:w-full max-[480px]:flex-col">
                    <Link href="/#contact" className="c-btn c-btn-primary">
                        Get a free quote
                    </Link>
                    <a href={CONTACT.phoneHref} className="c-btn c-btn-secondary">
                        Call {CONTACT.phoneDisplay}
                    </a>
                </div>
            </div>
        </section>
    );
}
