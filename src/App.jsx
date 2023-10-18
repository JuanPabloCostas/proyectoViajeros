import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import InfromacionJuanPa from './mainWindows/InfromacionJuanPa'
import InformacionJesus from './mainWindows/InformacionJesus'
import Indice from "./mainWindows/Indice"
import FormatoMov from "./mainWindows/FormatoMov"
import Resultados_mov from "./mainWindows/Resultados_mov"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Indice />} />
          <Route path="/formatomovilidad" element={<FormatoMov />} />
          <Route path="/informacionJesus" element={<InformacionJesus />} />
          <Route path="/resultados_mov" element={<Resultados_mov />} />

        </Routes>
      </Router>
    </>
  )
}

export default App