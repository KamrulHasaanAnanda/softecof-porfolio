"use client"
import { useEffect, useState } from "react";
import { CONTACT } from "./data";

/** Phone-only call/WhatsApp bar, shown once the visitor scrolls past the hero. */
export default function MobileActionBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const contact = document.getElementById("contact")?.getBoundingClientRect();
            const pastHero = window.scrollY > 640;
            // Hide while the contact section (which has the same actions) is on screen
            const atContact = contact ? contact.top < window.innerHeight * 0.6 && contact.bottom > 0 : false;
            setVisible(pastHero && !atContact);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            inert={!visible}
            aria-hidden={!visible}
            className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-c-line bg-white px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2.5 min-[761px]:hidden ${visible ? "" : "hidden"}`}
        >
            <a href={CONTACT.phoneHref} className="c-btn c-btn-primary flex-1">
                Call us
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-secondary flex-1">
                WhatsApp
            </a>
        </div>
    );
}
