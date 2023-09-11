import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const InformacionJesus = () => {

    const navigate = useNavigate()

  return (
    <>
        <h1>Hola, me llamo Jesus</h1>
        <h3>Me gusta la programacion</h3>
        <button type="button" onClick={() => navigate("/informacionJuanPa")}>Regresar a Juan Pablo</button>
        <button type="button" onClick={() => navigate("/chiste")}>Mostrar chiste</button>
    </>
  )
}

export default InformacionJesus