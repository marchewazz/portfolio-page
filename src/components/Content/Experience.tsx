import strings from "../../utilities/strings";

export default function Experience() {
    return (
        <section id="experience">
            <h4 className="dark:text-gold text-3xl font-bold text-center">
                { strings.experience.header }
            </h4>
            <div className="flex flex-col divide-y-2 dark:divide-gold divide-dashed">
                { strings.experience.jobs.map((job) => {
                    return (
                        <div className="text-lg py-4">
                            <p className="dark:text-gold">
                                { job.position }, <span className="font-bold italic">{ job.company }</span>
                            </p>
                            <p  className="dark:text-light-text font-semibold">
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