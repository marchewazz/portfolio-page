import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import strings from "../../utilities/strings";

import resume from "../../assets/random.pdf"
import FrontSwiper from "./Skills/FrontSwiper";
import OtherSwiper from "./Skills/OtherSwiper";
import JSSwiper from "./Skills/JSSwiper";

export default function About() {
    return (
        <section id="about">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
                <div>
                    <p className="text-main-purple dark:text-gold text-3xl sm:text-4xl font-semibold">
                        Mateusz <br /> Marchewczyk
                    </p>
                    <p className="text-dark-text dark:text-light-text text-lg sm:text-xl">
                        Junior Front-end Developer
                    </p>
                </div>
                <img className="rounded w-24 sm:w-auto" src="https://picsum.photos/100" alt="" />
            </div>
            <div>
                <div className="mt-4 mb-2 flex justify-between sm:justify-around text-gold">
                    <a className="about-link group sm:hover:w-80" href="mailto:marchewczykmateusz24@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="sm:group-hover:hidden" size="lg" />
                        <span className="hidden sm:group-hover:block">marchewczykmateusz24@gmail.com</span>
                    </a>
                    <a className="about-link group sm:hover:w-40" href="tel:+48730396760">
                        <FontAwesomeIcon icon={faPhone} className="sm:group-hover:hidden" size="lg" />
                        <span className="hidden sm:group-hover:block text-nowrap">+48 730 396 760</span>
                    </a>
                    <a className="about-link group" href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a className="about-link group sm:hover:w-32" href="https://github.com/marchewazz" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="sm:group-hover:hidden" size="lg" />
                        <span className="hidden sm:group-hover:block text-nowrap">marchewazz</span>
                    </a>
                </div>
                <div className="flex justify-evenly text-gold">
                    <a className="resume-link group" href={resume} download="cv">
                        { strings.about.englishCV }
                        <FontAwesomeIcon icon={faFileArrowDown} className="hidden group-hover:block" size="lg" />
                    </a>
                    <a className="resume-link group" href={resume} download="cv">
                        { strings.about.polishCV }
                        <FontAwesomeIcon icon={faFileArrowDown} className="hidden group-hover:block" size="lg" />
                    </a>
                </div>
            </div>
            <div>
                <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4">
                    { strings.about.header }
                </h4>
                { strings.about.paragraphs.map((paragraph) => {
                    return (
                        <p className="text-dark-text dark:text-gold mb-4">
                            { paragraph }
                        </p>
                    )
                })}
            </div>
            <div>
                <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4">
                    { strings.about.skills }
                </h4>
                <FrontSwiper />
                <JSSwiper />
                <OtherSwiper />
            </div>
        </section>
    )
}