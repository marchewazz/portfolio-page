import ScrollSpy from "react-ui-scrollspy";
import About from "./Content/About";
import Experience from "./Content/Experience";
import Projects from "./Content/Projects";
import Education from "./Content/Education";
import { useRef } from "react";

export default function Content(props: { innerRef: React.MutableRefObject<null> }) {

    const scrollRef = useRef(null)

    return (
        <div ref={props.innerRef} className="container bg-light-background dark:bg-dark-blue max-w-[calc(100vw-30px)] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[650px] absolute z-50 right-0 left-0 top-2 sm:top-10 bottom-16 sm:bottom-10 rounded-2xl pl-2 py-4 shadow-inner shadow-black transition-colors duration-100 ease-in-out">
            <div ref={scrollRef} className="overflow-y-auto max-h-full">
                <ScrollSpy offsetTop={100} offsetBottom={200} updateHistoryStack={false} parentScrollContainerRef={scrollRef}>
                    <About />
                    <Experience />
                    <Projects />
                    <Education />
                </ScrollSpy>
            </div>
        </div>
    )
}