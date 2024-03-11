import Content from "./components/Content"
import NavigationButtons from "./components/NavigationButtons"

function App() {
  return (
    <main className="bg-main-blue w-screen h-screen relative">
      <div className="dark:bg-light-blue w-full h-96 absolute rotate-12 -top-14 -left-16 rounded-3xl border" />
      <Content />
      <NavigationButtons />
      <div className="dark:bg-light-blue w-full h-96 absolute -rotate-12 -top-14 -right-16 rounded-3xl border" />
    </main>
  )
}

export default App
