import { useEffect, useRef, useState } from "react"
import Content from "./components/Content"
import NavigationButtons from "./components/NavigationButtons"
import strings from "./utilities/strings"

import { animate, stagger } from "framer-motion"

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") == "true" || false)
  const [languageReady, setLanguageReady] = useState<boolean>(false)
  
  const [languageState, setlanguageState] = useState<string>("")

  const leftRectangleRef: React.MutableRefObject<null> = useRef(null)
  const contentRef: React.MutableRefObject<null> = useRef(null)
  const navigationButtonsRef: React.MutableRefObject<null> = useRef(null)
  const rightRectangleRef: React.MutableRefObject<null> = useRef(null)

  function changeDarkMode(): void {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", (!darkMode.valueOf()).toString())
  }  

  
  function changeLanguage(language: string): void {
    localStorage.setItem("language", language)
    strings.setLanguage(language)
    setlanguageState(language);
  }

  useEffect(() => {
    if (localStorage.getItem("language") == "pl" || localStorage.getItem("language") == "en") strings.setLanguage(localStorage.getItem("language") || "")
    else localStorage.setItem("language", strings.getLanguage())
    setlanguageState(strings.getLanguage())
    setLanguageReady(true)
  }, [])

  useEffect(() => {
    if (languageReady) {

      if (window.innerWidth >= 640) {
        const sequence = [
          [leftRectangleRef.current, { x: [-200, 0], opacity: [0, 1], rotate: [0, 12] }],
          [rightRectangleRef.current, { x: [200, 0], opacity: [0, 1], rotate: [0, -12] }, { delay: stagger(0.5) }],
          [contentRef.current, { y: [-200, 50, 0], opacity: [0, 1] }, { delay: stagger(0.5) }],
          [navigationButtonsRef.current, { x: [200, 0], opacity: [0, 1]}, { at: "<" }],
        ]

        animate(sequence)
      } else {
        const sequence = [
          [leftRectangleRef.current, { x: [-200, 0], opacity: [0, 1], rotate: [0, 12] }],
          [rightRectangleRef.current, { x: [200, 0], opacity: [0, 1], rotate: [0, -12] }, { delay: stagger(0.5) }],
          [contentRef.current, { y: [-200, 50, 0], opacity: [0, 1] }, { delay: stagger(0.5) }],
          [navigationButtonsRef.current, { y: [100, 0], opacity: [0, 1]}, { delay: stagger(0.5) }],
        ]

        animate(sequence)
      }
    }
  }, [languageReady])

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-white dark:bg-main-blue w-screen h-screen relative transition-colors duration-200 ease-in-out">
        { languageReady ? (
          <>
            <div ref={leftRectangleRef} className="bg-white dark:bg-light-blue w-full h-96 absolute rotate-12 -top-14 -left-16 rounded-3xl shadow-2xl shadow-black transition-colors duration-200 ease-in-out" />
            <Content innerRef={contentRef} />
            <NavigationButtons changeLanguageFunction={changeLanguage} innerRef={navigationButtonsRef} darkModeChangeFunction={changeDarkMode}  />
            <div ref={rightRectangleRef} className="bg-white dark:bg-light-blue w-full h-96 absolute -rotate-12 -top-14 -right-16 rounded-3xl shadow-2xl shadow-black transition-colors duration-200 ease-in-out" />
          </>
        ) : (null)}
      </main>
    </div>
  )
}

export default App