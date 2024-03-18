import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare, faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import strings from "../../utilities/strings";

import resume from "../../assets/random.pdf"
import FrontSwiper from "./Skills/FrontSwiper";
import OtherSwiper from "./Skills/OtherSwiper";
import JSSwiper from "./Skills/JSSwiper";
import { useState } from "react";

export default function About() {

    const [showReadMore, setShowReadMore] = useState<boolean>(false)

    return (
        <section id="about">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
                <div>
                    <p className="text-main-purple dark:text-gold text-3xl sm:text-4xl font-semibold transition-colors duration-200 ease-in-out">
                        Mateusz <br /> Marchewczyk
                    </p>
                    <p className="text-dark-text dark:text-light-text text-lg sm:text-xl transition-colors duration-200 ease-in-out">
                        Junior Front-end Developer
                    </p>
                </div>
                <img className="rounded w-24 sm:w-auto" src="https://picsum.photos/100" alt="" />
            </div>
            <div className="mx-4 md:mx-8 lg:mx-12">
                <div className="mt-4 mb-2 flex justify-between text-gold">
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
                <div className="flex flex-col gap-2 justify-between sm:flex-row text-gold">
                    <a className="resume-link group" href={resume} target="_blank" rel='noopener noreferrer'>
                        { strings.about.englishCV }
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="hidden group-hover:block" size="lg" />
                    </a>
                    <a className="resume-link group" href={resume} target="_blank" rel='noopener noreferrer'>
                        { strings.about.polishCV }
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="hidden group-hover:block" size="lg" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col">
                <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4 transition-colors duration-200 ease-in-out">
                    { strings.about.header }
                </h4>
                <p className="text-dark-text dark:text-gold mb-4 transition-colors duration-200 ease-in-out">
                    { strings.about.paragraphs[0] }
                </p>
                <p className="text-dark-text dark:text-gold mb-4 transition-colors duration-200 ease-in-out">
                    { strings.about.paragraphs[1] }
                </p>
                <p className="text-dark-text dark:text-gold mb-4 transition-colors duration-200 ease-in-out">
                    { strings.about.paragraphs[2] }
                </p>
                <div className={`${showReadMore ? "max-h-96" : "max-h-0"} transition-all duration-500 ease-in-out overflow-hidden`}>
                    <p className="text-dark-text dark:text-gold mb-4 transition-colors duration-200 ease-in-out">
                        { strings.about.paragraphs[3] }
                    </p>
                    <p className="text-dark-text dark:text-gold mb-4 transition-colors duration-200 ease-in-out">
                        { strings.about.paragraphs[4] }
                    </p>
                </div>
                <p className="text-dark-text dark:text-gold mb-4 transition-colors duration-200 ease-in-out">
                    { strings.about.paragraphs[5] }
                </p>
                <button className="text-light-text dark:bg-gold dark:text-dark-blue p-2 rounded-lg font-semibold border border-transparent self-center px-12 flex items-center justify-center gap-4
                transition-colors duration-200 ease-in-out
                bg-main-purple hover:border-main-purple hover:bg-light-background hover:text-main-purple
                dark:hover:border-gold dark:hover:bg-dark-blue dark:hover:text-gold" 
                onClick={() => setShowReadMore(!showReadMore)}>
                    { showReadMore ? strings.about.readLess : strings.about.readMore }
                    <FontAwesomeIcon icon={faChevronDown} className={`${showReadMore ? "rotate-180" : ""} transition-all duration-200 ease-in-out`} />
                </button>
            </div>
            <div>
                <h4 className="text-main-purple dark:text-gold text-2xl sm:text-3xl font-bold text-center my-4 transition-all duration-200 ease-in-out">
                    { strings.about.skills }
                </h4>
                <FrontSwiper />
                <JSSwiper />
                <OtherSwiper />
            </div>
        </section>
    )
}