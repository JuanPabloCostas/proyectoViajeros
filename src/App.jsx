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

      <main className='bg-[#2F4858] h-screen w-screen flex items-center justify-center'>
        <div className='bg-[#25639D] h-[90%] w-[100vh] flex flex-col items-center rounded-2xl shadow-lg'>
          <h1 className='text-5xl text-blue-400'>Hola Mundo</h1>

          <button className='rounded-full bg-slate-400 hover:bg-sky-700 shadow-lg' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <div className='bg-[#5E78C1] h-[10px] width-[20px]'>

          </div>
        </div>

      </main>
    </>
  )
}

export default App