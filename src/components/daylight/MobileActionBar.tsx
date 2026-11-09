"use client"
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "./data";

/** Phone-only call/WhatsApp bar that slides in once the visitor scrolls past the hero. */
export default function MobileActionBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const contact = document.getElementById("contact");
            const pastHero = window.scrollY > 640;
            // Hide while the contact section (which has the same actions) is on screen
            const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 && contact.getBoundingClientRect().bottom > 0 : false;
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
            className={`fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-40 flex gap-2 rounded-full border border-d-line bg-white/95 p-1.5 shadow-[0_18px_40px_-16px_rgba(12,26,25,0.45)] backdrop-blur-md transition-all duration-300 min-[761px]:hidden motion-reduce:transition-none ${
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"
            }`}
        >
            <a
                href={CONTACT.phoneHref}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-d-teal text-[15px] font-bold text-white"
            >
                <Phone size={17} />
                Call us
            </a>
            <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-d-sand text-[15px] font-bold text-d-ink"
            >
                <MessageCircle size={17} />
                WhatsApp
            </a>
        </div>
    );
}
