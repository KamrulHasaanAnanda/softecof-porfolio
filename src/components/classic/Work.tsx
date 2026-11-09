import Link from "next/link";
import { featuredProjects } from "./data";
import ProjectList from "./ProjectList";

const Work = () => {
    return (
        <section id="work" aria-labelledby="work-title" className="c-wrap c-section">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                <h2 id="work-title" className="c-h2">
                    Projects we’ve delivered
                </h2>
                <Link href="/portfolio" className="c-link">
                    View all work
                </Link>
            </div>
            <ProjectList projects={featuredProjects} />
        </section>
    );
};

export default Work;
