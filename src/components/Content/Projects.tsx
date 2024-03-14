import strings from "../../utilities/strings";
import ProjectDisplay from "./Projects/ProjectDisplay";

export default function Projects() {
    return (
        <div id="projects">
            <h4 className="text-main-purple dark:text-gold text-3xl font-bold text-center">
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