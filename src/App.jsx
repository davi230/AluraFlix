import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./Components/EstilosGlobais"
import Home from "./Pages/Home"
import NovoVideo from "./Pages/NovoVideo"

function App() {
  return (
    <>
    <BrowserRouter>
      <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/NovoVideo" element={<NovoVideo/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
