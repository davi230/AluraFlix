import { BrowserRouter, Route, Routes } from "react-router-dom";
import EstilosGlobais from "./Components/EstilosGlobais";
import Home from "./Pages/Home";
import NovoVideo from "./Pages/NovoVideo";
import { VideosProvider } from "./Context/VideosContext.jsx";

function App() {
  return (
    <VideosProvider>
      <BrowserRouter>
        <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NovoVideo" element={<NovoVideo />} />
        </Routes>
      </BrowserRouter>
    </VideosProvider>
  );
}

export default App;
