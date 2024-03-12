import strings from "../../utilities/strings";

export default function Experience() {
    return (
        <section>
            <h4 className="dark:text-gold text-3xl font-bold text-center">
                { strings.experience.header }
            </h4>
            <div>
                { strings.experience.jobs.map((job) => {
                    return (
                        <div>
                            <p className="dark:text-gold">
                                { job.position }, { job.company }
                            </p>
                            <p  className="dark:text-light-text">
                                { job.time }
                            </p>
                            <p className="dark:text-gold">
                                { job.description }
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}