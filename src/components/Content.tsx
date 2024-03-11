import strings from "../utilities/strings";
import About from "./Content/About";

export default function Content() {
    return (
        <div className="container bg-dark-blue lg:max-w-[600px] absolute z-50 right-0 left-0 top-10 bottom-10 rounded-2xl p-4 overflow-y-auto">
            <About />
        </div>
    )
}