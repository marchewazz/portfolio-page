import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import strings from "../../utilities/strings";

import resume from "../../assets/random.pdf"

export default function About() {
    return (
        <section>
            <div className="flex justify-between">
                <div>
                    <p className="dark:text-gold text-4xl">
                        Mateusz <br /> Marchewczyk
                    </p>
                    <p className="dark:text-light-text text-xl">
                        Junior Front-end Developer
                    </p>
                </div>
                <img className="rounded" src="https://picsum.photos/100" alt="" />
            </div>
            <div>
                <div className="flex justify-evenly text-gold">
                    <a className="border border-gold rounded hover:w-14" href="mailto:marchewczykmateusz24@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a className="border border-gold rounded hover:w-14" href="tel:+48730396760">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a className="border border-gold rounded" href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="border border-gold rounded" href="https://github.com/marchewazz" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className="flex justify-evenly text-gold">
                    <a className="border border-gold rounded" href={resume} download="cv">{ strings.about.englishCV }</a>
                    <a className="border border-gold rounded" href={resume} download="cv">{ strings.about.polishCV }</a>
                </div>
            </div>
            <div>
                <h4 className="dark:text-gold text-3xl font-bold text-center">
                    { strings.about.header }
                </h4>
                { strings.about.paragraphs.map((paragraph) => {
                    return (
                        <p className="dark:text-gold">
                            { paragraph }
                        </p>
                    )
                })}
            </div>
            <div>
                <h4 className="dark:text-gold text-3xl font-bold text-center">
                    { strings.about.skills }
                </h4>
                <div className="flex justify-evenly">
                    <img className="rounded" src="https://picsum.photos/50" alt="" />
                    <img className="rounded" src="https://picsum.photos/50" alt="" />
                    <img className="rounded" src="https://picsum.photos/50" alt="" />
                    <img className="rounded" src="https://picsum.photos/50" alt="" />
                </div>
            </div>
        </section>
    )
}