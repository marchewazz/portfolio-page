import { faBriefcase, faCode, faGraduationCap, faMoon, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavigationButtons(props: {
    darkModeChangeFunction: React.ChangeEventHandler<HTMLInputElement>;
  }) {
    return (
        <div className="absolute text-white flex flex-col right-0 top-1/2 bg-dark-blue z-50">
            <button>
                <FontAwesomeIcon icon={faUser} />
            </button>
            <button>
                <FontAwesomeIcon icon={faBriefcase} />
            </button>
            <button>
                <FontAwesomeIcon icon={faCode} />
            </button>
            <button>
                <FontAwesomeIcon icon={faGraduationCap} />
            </button>
            <button>
                <img className="rounded-full" src="https://flagsapi.com/US/shiny/32.png" />
            </button>
            <button onClick={props.darkModeChangeFunction}>
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </div>
    )
}