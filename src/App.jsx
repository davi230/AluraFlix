import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./Components/EstilosGlobais"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import NovoVideo from "./Pages/NovoVideo"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
    <BrowserRouter>
      <EstilosGlobais />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/NovoVideo" element={<NovoVideo/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
