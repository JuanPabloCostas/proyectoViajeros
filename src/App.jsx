import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Indice from "./mainWindows/Indice"
import FormatoMov from "./mainWindows/FormatoMov"
import Resultados_mov from "./mainWindows/Resultados_mov"
import Login from "./mainWindows/Login"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Indice />} />
          <Route path="/formatomovilidad" element={<FormatoMov />} />
          <Route path="/resultados_mov" element={<Resultados_mov />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App