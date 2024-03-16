import strings from "../../utilities/strings";

export default function Experience() {
    return (
        <section className="border-b-2 border-main-purple dark:border-gold border-dashed transition-all duration-200 ease-in-out" id="education">
            <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4 transition-all duration-200 ease-in-out">
                { strings.education.header }
            </h4>
            <div className="text-lg py-4">
                <p className="text-main-purple dark:text-gold transition-all duration-200 ease-in-out">
                    { strings.education.school }, <span className="font-bold italic">{ strings.education.profil }</span>
                </p>
                <p  className="text-dark-text dark:text-light-text font-semibold transition-all duration-200 ease-in-out">
                    { strings.education.time }
                </p>
            </div>
        </section>
    )
}