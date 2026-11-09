import ClassicHome from "@/components/classic/ClassicHome";
import JsonLd from "@/components/JsonLd";
import { featuredProjects } from "@/components/classic/data";
import { projectsJsonLd } from "@/lib/seo";

// Earlier options are kept in src/components/daylight and src/components/midnight; see src/components/Header.tsx to switch.
export default function Home() {
    return (
        <>
            <JsonLd data={projectsJsonLd("Selected work by Softecof", featuredProjects)} />
            <ClassicHome />
        </>
    );
}
