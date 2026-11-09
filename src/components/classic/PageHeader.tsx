/** Title block for the inner pages. */
export default function PageHeader({ title, description }: { title: string; description: string }) {
    return (
        <section className="c-on-dark c-hero-bg">
            <div className="c-wrap py-[clamp(44px,5.5vw,76px)]">
                <h1 className="c-h1 max-w-[920px] !text-white">{title}</h1>
                <p className="m-0 mt-4 max-w-[680px] text-[19px] leading-[1.55] text-c-on-night text-pretty">{description}</p>
            </div>
        </section>
    );
}
