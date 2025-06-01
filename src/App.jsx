import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import CountryDetails from "./pages/CountryDetails"



function App() {
  

  return (
    <section className='bg-light-bg min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path=":countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </section>
  )
}

export default App
