import { useState } from "react";
import strings from "../../../utilities/strings";

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

    return (
        <div className="flex dark:text-gold py-3 gap-4">
            <div className="relative lg:w-1/2">
                <div className="absolute shadow-[inset_0_8px_8px_0] shadow-black w-full h-full z-40 rounded-3xl" />
                <img className="aspect-video border-4 border-black rounded-3xl" src={props.project.screen} alt="" />
            </div>
            <div className="flex flex-col lg:w-1/2">
                <p className="text-center italic font-bold">
                    { props.project.title }
                </p>
                <p className="text-white">
                    { props.project.technologies?.join(", ")}
                </p>
                <div className="relative mt-auto flex justify-center">
                    <button className="dark:bg-gold dark:text-dark-blue p-2 rounded-lg font-semibold border border-transparent
                    dark:hover:border-gold dark:hover:bg-dark-blue dark:hover:text-gold"
                    onClick={() => setShowLinks(!showLinks)}>
                        { showLinks ? strings.projects.hide : strings.projects.showLinks }
                    </button>
                    {
                        showLinks && 
                        <div className="absolute flex flex-col bg-white bottom-[calc(100%+4px)] border border-black shadow-lg shadow-black z-50 rounded-lg w-max">
                            { props.project.links.map((link) => {
                                return (
                                    <a className="p-2  font-semibold 
                                    dark:text-dark-blue dark:hover:text-white
                                    hover:bg-dark-blue " 
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