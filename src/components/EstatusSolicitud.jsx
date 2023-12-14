import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Componente funcional EstatusSolicitud
function EstatusSolicitud({expediente}) {

    const [status, setstatus] = useState(5);

    // Función de fetch para obtener el estatus de la solicitud
    useEffect(() => {
      const checkIfFormSubmitted = async () => {
        try {
          const response = await axios.get(`https://mauazureapp.azurewebsites.net/solicitudes/${expediente}`);
          // console.log(response);
          if (response) {
            setstatus(response.data.status);
          }
  
        } catch (error) {
          console.error(error);
        }
  
      };
      checkIfFormSubmitted();
        
    }
    , []);

  return (
    <div  className='w-screen flex flex-col justify-center'>
        <p className='text-center text-6xl'>Estatus Solicitud</p>
        {status == 0 && <p className='text-center text-9xl'>En proceso</p>}
        {status == 1 && <p className='text-center text-9xl'>Aprobada</p>}
        {status == 2 && <p className='text-center text-9xl'>Rechazada</p>}
        {status == 5 && <p className='text-center text-9xl'>No has enviado tu solicitud</p>}
    </div>
  )
}

export default EstatusSolicitud