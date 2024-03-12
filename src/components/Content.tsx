import About from "./Content/About";
import Experience from "./Content/Experience";
import Projects from "./Content/Projects";

export default function Content(props: { innerRef: React.MutableRefObject<null> }) {
    return (
        <div ref={props.innerRef} className="container bg-dark-blue lg:max-w-[600px] absolute z-50 right-0 left-0 top-10 bottom-10 rounded-2xl p-4 overflow-y-auto shadow-inner shadow-black">
            <About />
            <Experience />
            <Projects />
        </div>
    )
}