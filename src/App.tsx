import { useEffect, useRef, useState } from "react"
import Content from "./components/Content"
import NavigationButtons from "./components/NavigationButtons"
import strings from "./utilities/strings"

import { animate, stagger } from "framer-motion"

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") == "true" || false)
  const [languageReady, setLanguageReady] = useState<boolean>(false)
  
  const leftRectangleRef: React.MutableRefObject<null> = useRef(null)
  const contentRef: React.MutableRefObject<null> = useRef(null)
  const navigationButtonsRef: React.MutableRefObject<null> = useRef(null)
  const rightRectangleRef: React.MutableRefObject<null> = useRef(null)

  function changeDarkMode(): void {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", (!darkMode.valueOf()).toString())
  }  

  useEffect(() => {
    if (localStorage.getItem("language") == "pl" || localStorage.getItem("language") == "en") strings.setLanguage(localStorage.getItem("language") || "")
    else localStorage.setItem("language", strings.getLanguage())
    setLanguageReady(true)
  }, [])

  useEffect(() => {
    if (languageReady) {
      const sequence = [
        [leftRectangleRef.current, { x: [-200, 0], opacity: [0, 1], rotate: [0, 12] }],
        [rightRectangleRef.current, { x: [200, 0], opacity: [0, 1], rotate: [0, -12] }, { delay: stagger(0.5) }],
        [contentRef.current, { y: [-200, 50, 0], opacity: [0, 1] }, { delay: stagger(0.5) }],
        [navigationButtonsRef.current, { x: [200, 0], opacity: [0, 1]}, { at: "<" }],
      ]

      animate(sequence)
    }
  }, [languageReady])
  

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-white dark:bg-main-blue w-screen h-screen relative">
        { languageReady ? (
          <>
            <div ref={leftRectangleRef} className="bg-white dark:bg-light-blue w-full h-96 absolute rotate-12 -top-14 -left-16 rounded-3xl shadow-2xl shadow-black" />
            <Content innerRef={contentRef} />
            <NavigationButtons innerRef={navigationButtonsRef} darkModeChangeFunction={changeDarkMode}  />
            <div ref={rightRectangleRef} className="bg-white dark:bg-light-blue w-full h-96 absolute -rotate-12 -top-14 -right-16 rounded-3xl shadow-2xl shadow-black" />
          </>
        ) : (null)}
      </main>
    </div>
  )
}

export default App