import { useState } from "react"
import Content from "./components/Content"
import NavigationButtons from "./components/NavigationButtons"

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") == "true" || false)

  function changeDarkMode(): void {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", (!darkMode.valueOf()).toString())
  }  

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-main-blue w-screen h-screen relative">
        <div className="bg-white dark:bg-light-blue w-full h-96 absolute rotate-12 -top-14 -left-16 rounded-3xl border" />
        <Content />
        <NavigationButtons darkModeChangeFunction={changeDarkMode}  />
        <div className="bg-white dark:bg-light-blue w-full h-96 absolute -rotate-12 -top-14 -right-16 rounded-3xl border" />
      </main>
    </div>
  )
}

export default App
