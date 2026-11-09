/** Visible copy stays in the page. This only restates it for search and answer engines. */
export default function JsonLd({ data }: { data: unknown }) {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
