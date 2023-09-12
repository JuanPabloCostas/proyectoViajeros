import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import InfromacionJuanPa from './mainWindows/InfromacionJuanPa'
import InformacionJesus from './mainWindows/InformacionJesus'
import Indice from "./mainWindows/Indice"
import FormatoMov from "./mainWindows/FormatoMov"






function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Indice />} />
          <Route path="/formatomovilidad" element={<FormatoMov />} />
          <Route path="/informacionJesus" element={<InformacionJesus />} />
          <Route path="/chiste" element={<h1>JAHAHAHHAHA</h1>} />

        </Routes>
      </Router>
    </>
  )
}

export default App