import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Indice from "./mainWindows/Indice"
import FormatoMov from "./mainWindows/FormatoMov"
import Resultados_mov from "./mainWindows/Resultados_mov"
import Login from "./mainWindows/Login"
import TramitesHome from "./mainWindows/TramitesHome"

function App() {

  return (
    <>
      {/* Configuración de enrutamiento */}
      <Router>
        <Routes>
          {/* Rutas de la aplicación */}
          <Route path="/" element={<Indice />} />
          <Route path="/formatomovilidad" element={<FormatoMov />} />
          <Route path="/resultados_mov" element={<Resultados_mov />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tramiteshome" element={<TramitesHome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App