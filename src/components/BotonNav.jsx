import React from 'react'
import { useNavigate } from 'react-router'

const BotonNav = (props) => {
    const navigate = useNavigate()

  return (
    <button type="button" onClick={() => navigate("/"+props.href)}>{props.texto}</button>
  )
}

export default BotonNav