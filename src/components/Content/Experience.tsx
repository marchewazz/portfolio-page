import strings from "../../utilities/strings";

export default function Experience() {
    return (
        <section id="experience">
            <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4 transition-all duration-200 ease-in-out">
                { strings.experience.header }
            </h4>
            <div className="flex flex-col divide-y-2 divide-main-purple dark:divide-gold divide-dashed transition-all duration-200 ease-in-out">
                { strings.experience.jobs.map((job) => {
                    return (
                        <div key={job.position} className="text-lg py-4">
                            <p className="text-main-purple dark:text-gold transition-all duration-200 ease-in-out">
                                { job.position }, <span className="font-bold italic">{ job.company }</span>
                            </p>
                            <p  className="text-dark-text dark:text-light-text font-semibold transition-all duration-200 ease-in-out">
                                { job.time }
                            </p>
                            <p className="text-dark-text dark:text-gold transition-all duration-200 ease-in-out mt-2">
                                { job.description }
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}