import { useState, createContext } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import CountryDetails from "./pages/CountryDetails"


const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
      setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <section className={`bg-light-bg min-h-screen dark:bg-dark-bg ${theme === "dark" ? "dark" : ""}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path=":countryName" element={<CountryDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </section>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
