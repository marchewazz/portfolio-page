import strings from "../../utilities/strings";
import ProjectDisplay from "./Projects/ProjectDisplay";

export default function Projects() {
    return (
        <div id="projects">
            <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4">
                { strings.projects.header }
            </h4>
            <div>
                { strings.projects.projects.map((project) => {
                    return <ProjectDisplay project={project} />
                })}
            </div>
        </div>
    )
}