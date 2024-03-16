import { faBriefcase, faCode, faGraduationCap, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import strings from "../utilities/strings";

export default function NavigationButtons(props: { 
    darkModeChangeFunction: React.ChangeEventHandler<HTMLInputElement>, 
    innerRef: React.MutableRefObject<null> }) {

    function scrollTo(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    function changeLanguage(language: string): void {
        localStorage.setItem("language", language)
        window.location.reload();
    }

    return (
        <div ref={props.innerRef} className="absolute text-white flex sm:flex-col w-fit bottom-0 left-0 right-0 mx-auto sm:left-auto sm:right-0 sm:top-1/2 sm:bottom-auto z-50 
        border-r border-l border-t sm:border-b sm:border-r-0
        border-main-purple
        dark:border-white dark:bg-dark-blue
        rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl">
            <button onClick={() => scrollTo("about")} data-to-scrollspy-id="about" className="navigation-button rounded-tl-3xl">
                <FontAwesomeIcon icon={faUser} />
            </button>
            <button onClick={() => scrollTo("experience")} data-to-scrollspy-id="experience" className="navigation-button">
                <FontAwesomeIcon icon={faBriefcase} />
            </button>
            <button onClick={() => scrollTo("projects")} data-to-scrollspy-id="projects" className="navigation-button">
                <FontAwesomeIcon icon={faCode} />
            </button>
            <button onClick={() => scrollTo("education")} data-to-scrollspy-id="education" className="navigation-button">
                <FontAwesomeIcon icon={faGraduationCap} />
            </button>
            { strings.getLanguage() == "pl" ? (
                <button className="navigation-button" onClick={() => changeLanguage("en")}>
                    <img className="rounded-full" src="https://flagsapi.com/PL/shiny/32.png" />
                </button>
            ) : (
                <button className="navigation-button" onClick={() => changeLanguage("pl")}>
                    <img className="rounded-full" src="https://flagsapi.com/US/shiny/32.png" />
                </button>
            )}
            <button className="navigation-button rounded-tr-3xl sm:rounded-tr-none sm:rounded-bl-3xl group" onClick={props.darkModeChangeFunction}>
                <FontAwesomeIcon className="hidden dark:block" icon={faMoon} />
                <FontAwesomeIcon className="dark:hidden text-yellow-600 group-hover:text-white transition-all duration-200 ease-in-out" icon={faSun} />
            </button>
        </div>
    )
}