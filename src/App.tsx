import { useEffect, useState } from "react"
import Content from "./components/Content"
import NavigationButtons from "./components/NavigationButtons"
import strings from "./utilities/strings"

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") == "true" || false)
  const [languageReady, setLanguageReady] = useState<boolean>(false)
  
  function changeDarkMode(): void {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", (!darkMode.valueOf()).toString())
  }  

  useEffect(() => {
    if (localStorage.getItem("language") == "pl" || localStorage.getItem("language") == "en") strings.setLanguage(localStorage.getItem("language") || "")
    else localStorage.setItem("language", strings.getLanguage())
    setLanguageReady(true)
  }, [])

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-main-blue w-screen h-screen relative">
        { languageReady ? (
          <>
            <div className="bg-white dark:bg-light-blue w-full h-96 absolute rotate-12 -top-14 -left-16 rounded-3xl border" />
            <Content />
            <NavigationButtons darkModeChangeFunction={changeDarkMode}  />
            <div className="bg-white dark:bg-light-blue w-full h-96 absolute -rotate-12 -top-14 -right-16 rounded-3xl border" />
          </>
        ) : (null)}
      </main>
    </div>
  )
}

export default App
function setLanguageReady(arg0: boolean) {
  throw new Error("Function not implemented.")
}

