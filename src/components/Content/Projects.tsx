import strings from "../../utilities/strings";

export default function Projects() {
    return (
        <div>
            <h4 className="dark:text-gold text-3xl font-bold text-center">
                { strings.projects.header }
            </h4>
            <div>
                { strings.projects.projects.map((project) => {
                    return (
                        <div className="flex dark:text-gold">
                            <img src={project.screen} alt="" />
                            <p>
                                { project.title }
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}