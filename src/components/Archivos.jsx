import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Archivos({expediente}) {

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const [show, setshow] = useState(true);

  // Función para manejar el cambio del archivo 1
  const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
  };

  // Función para manejar el cambio del archivo 2
  const handleFile2Change = (e) => {
    setFile2(e.target.files[0]);
  };

  // Función para manejar el cambio del archivo 3
  const handleFile3Change = (e) => {
    setFile3(e.target.files[0]);
  };

  // Función para enviar el formulario
  const submitForm = async () => {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('file3', file3);

    try {
      const response = await fetch(`http://127.0.0.1:3000/solicitudes/${expediente}`, {
        method: 'POST',
        body: formData,
      });

      // Manejar la respuesta del servidor según sea necesario
      console.log('Server response:', response);
      alert('Archivos subidos correctamente');
      setshow(false);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  // Verificar si el formulario ha sido enviado previamente por este usuario
  useEffect(() => {
    const checkIfFormSubmitted = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/solicitudes/${expediente}`);
        console.log(response);
        
        if (response.data && show) {
          setshow(false);
        }

      } catch (error) {
        console.error(error);
      }
    };
    checkIfFormSubmitted();
  }, []);

  return (
    <div className='w-screen flex flex-col justify-center align-middle'>
      <p className='text-center text-6xl'>Archivos</p>
      <form action="" method="post">
        <table className='w-3/4 mx-auto text-center'>
          <thead>
            <tr className='border-b-2 border-[#767676]'>
              <th className='w-1/2 border-r-2 border-[#767676]'>Documento</th>
              <th className='w-1/2'>Envio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='w-1/2'>Cuadro de homologación</td>
              <td>
                <input
                  name='file1'
                  id='file1'
                  type='file'
                  accept='.pdf'
                  onChange={handleFile1Change}
                />
              </td>
            </tr>
            <tr>
              <td className='w-1/2'>Certificado de Lengua</td>
              <td>
                <input
                  name='file2'
                id='file2'
                type='file'
                accept='.pdf'
                onChange={handleFile2Change}
              />
            </td>
          </tr>
          <tr>
            <td className='w-1/2'>Carta de Razones</td>
            <td>
              <input
                name='file3'
                id='file3'
                type='file'
                accept='.pdf'
                onChange={handleFile3Change}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {show &&
      <div className='bg-green-500 text-white font-bold py-2 px-4 rounded text-center w-1/6 m-auto hover: cursor-pointer'
      onClick={submitForm} >Enviar</div>}
      </form>
      <div className='m-auto'>
      {!show && <p className='text-red-600 font-bold'>Ya subiste tus archivos</p>}
      </div>
      
      
    </div>
  );
}

export default Archivos;
