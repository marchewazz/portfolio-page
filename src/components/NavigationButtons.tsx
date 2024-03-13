import { faBriefcase, faCode, faGraduationCap, faMoon, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import strings from "../utilities/strings";

export default function NavigationButtons(props: { darkModeChangeFunction: React.ChangeEventHandler<HTMLInputElement>, innerRef: React.MutableRefObject<null> }) {

    function changeLanguage(language: string): void {
        localStorage.setItem("language", language)
        window.location.reload();
    }

    return (
        <div ref={props.innerRef} className="absolute text-white flex sm:flex-col w-fit bottom-0 left-0 right-0 mx-auto sm:left-auto sm:right-0 sm:top-1/2 sm:bottom-auto bg-dark-blue z-50 
        border-r border-l border-t md:border-b md:border-r-0 border-white
        rounded-t-3xl sm:rounded-tr-none md:rounded-l-3xl">
            <button data-to-scrollspy-id="about" className="navigation-button rounded-tl-3xl">
                <FontAwesomeIcon icon={faUser} />
            </button>
            <button data-to-scrollspy-id="experience" className="navigation-button">
                <FontAwesomeIcon icon={faBriefcase} />
            </button>
            <button data-to-scrollspy-id="projects" className="navigation-button">
                <FontAwesomeIcon icon={faCode} />
            </button>
            <button data-to-scrollspy-id="education" className="navigation-button">
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
            <button className="navigation-button rounded-tr-3xl sm:rounded-tr-none sm:rounded-bl-3xl" onClick={props.darkModeChangeFunction}>
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </div>
    )
}