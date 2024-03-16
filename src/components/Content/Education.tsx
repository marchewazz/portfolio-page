import strings from "../../utilities/strings";

export default function Experience() {
    return (
        <section className="border-b-2 border-main-purple dark:border-gold border-dashed" id="education">
            <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4">
                { strings.education.header }
            </h4>
            <div className="text-lg py-4">
                <p className="text-main-purple dark:text-gold">
                    { strings.education.school }, <span className="font-bold italic">{ strings.education.profil }</span>
                </p>
                <p  className="text-dark-text dark:text-light-text font-semibold">
                    { strings.education.time }
                </p>
            </div>
        </section>
    )
}