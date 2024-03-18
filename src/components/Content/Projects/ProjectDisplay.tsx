import { useEffect, useRef, useState } from "react";
import strings from "../../../utilities/strings";

import { animate } from "framer-motion"

export default function ProjectDisplay(props: Readonly<{ project: {
    title: string;
    screen: string;
    technologies: string[];
    links: {
        title: string;
        link: string;
    }[];
}}>) {

    const [showLinks, setShowLinks] = useState<boolean>(false)

    const linksRef = useRef(null)

    function showLinksAnimation() {
        setShowLinks(true)    
    }

    useEffect(() => {
      if (showLinks) animate(linksRef.current, { y: [20, 0], opacity: [0, 1] }, { duration: 0.2 })
    }, [showLinks])
    

    function hideLinksAnimation() {
        animate(linksRef.current, { y: [0, 20], opacity: [1, 0] }, { duration: 0.2 }).then(() => {
            setShowLinks(false)
        })
    }

    return (
        <div className="flex flex-col sm:flex-row py-3 gap-4">
            <div className="relative sm:w-3/5">
                <div className="transition-all duration-200 ease-in-out absolute shadow-[inset_0_8px_8px_0] shadow-black w-full h-full z-40 rounded-3xl" />
                <img className="transition-all duration-200 ease-in-out aspect-video border-4 border-black rounded-3xl" src={props.project.screen} alt="" />
            </div>
            <div className="flex flex-col sm:w-1/2">
                <p className="text-main-purple dark:text-gold italic font-bold transition-all duration-200 ease-in-out">
                    { props.project.title }
                </p>
                <p className="text-dark-text dark:text-light-text transition-all duration-200 ease-in-out">
                    { props.project.technologies.join(", ")}
                </p>
                <div className="relative mt-2 sm:mt-auto flex justify-center">
                    <button className="text-light-text dark:bg-gold dark:text-dark-blue p-2 rounded-lg font-semibold border border-transparent w-36
                    transition-all duration-200 ease-in-out
                    bg-main-purple hover:border-main-purple hover:bg-light-background hover:text-main-purple
                    dark:hover:border-gold dark:hover:bg-dark-blue dark:hover:text-gold"
                    onClick={() => { if (showLinks) hideLinksAnimation(); else showLinksAnimation()}}>
                        { showLinks ? strings.projects.hide : strings.projects.showLinks }
                    </button>
                    {
                        showLinks && 
                        <div ref={linksRef} className="absolute flex flex-col bg-white bottom-[calc(100%+4px)] border border-black shadow-lg w-44 shadow-black z-50 rounded-lg">
                            { props.project.links.map((link) => {
                                return (
                                    <a className="p-2 font-semibold text-center
                                    transition-all duration-200 ease-in-out
                                    first:rounded-t-lg last:rounded-b-lg
                                    hover:bg-main-purple hover:text-light-text
                                    dark:text-dark-blue dark:hover:text-white
                                    dark:hover:bg-dark-blue" 
                                    href={link.link} target="_blank">{ link.title }</a>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}