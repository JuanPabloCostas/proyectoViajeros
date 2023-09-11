import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import InfromacionJuanPa from './mainWindows/InfromacionJuanPa'
import InformacionJesus from './mainWindows/InformacionJesus'




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"/>
          <Route path="/informacionJuanPa" element={<InfromacionJuanPa />} />
          <Route path="/informacionJesus" element={<InformacionJesus />} />
          <Route path="/chiste" element={<h1>JAHAHAHHAHA</h1>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
