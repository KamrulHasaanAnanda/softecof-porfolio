interface PageHeroProps {
    eyebrow: string;
    title: string;
    description: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
    return (
        <section className="pt-32 pb-20 surface-dark relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
            <div className="container-site relative">
                <div className="line-accent mb-6" />
                <p className="section-eyebrow-light">{eyebrow}</p>
                <h1 className="heading-xl text-white max-w-3xl">{title}</h1>
                <p className="mt-6 text-lg text-white/55 max-w-2xl leading-relaxed">{description}</p>
            </div>
        </section>
    );
};

export default PageHero;
