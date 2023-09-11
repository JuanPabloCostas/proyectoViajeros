import React from 'react'
import { useNavigate } from 'react-router-dom'

const InfromacionJuanPa = () => {

    const navigate = useNavigate()

  return (
    <>
    <h1>Hola, me llamo juan pablo</h1>
    <h3>Me gusta la programacion</h3>
    <button type="button" onClick={() => navigate("/informacionJesus")}>Regresar a Jesus</button>
    </>
  )
}

export default InfromacionJuanPa