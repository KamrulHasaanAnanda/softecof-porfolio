import ClassicHome from "@/components/classic/ClassicHome";
import { CONTACT, SITE_DESCRIPTION, SITE_URL } from "@/lib/site-content";

/** Structured data so search engines can show Softecof's contact details. */
const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Softecof",
    url: SITE_URL,
    logo: `${SITE_URL}/images/softecof-mark.png`,
    image: `${SITE_URL}/images/about-team-working.jpg`,
    description: SITE_DESCRIPTION,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    email: CONTACT.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: "GEC",
        addressLocality: "Chittagong",
        addressCountry: "BD",
    },
    areaServed: ["BD", "Worldwide"],
};

// Earlier options are kept in src/components/daylight and src/components/midnight; see src/components/Header.tsx to switch.
export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
            <ClassicHome />
        </>
    );
}
