import React from 'react';

function Archivos() {
  const subeArchivos = (nombreDocumento) => {
    
    console.log(`Subiendo archivo:${nombreDocumento}`);
  };

  return (
    <div className='w-screen flex flex-col justify-center'>
      <p className='text-center text-6xl'>Archivos</p>
      <table className='w-3/4 mx-auto text-center'>
        <thead>
          <tr className='border-b-2 border-[#767676]'>
            <th className='w-1/2 border-r-2 border-[#767676]'>Documento</th>
            <th className='w-1/2'>Envio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='w-1/2'>Documento1</td>
            <td>
              <input
                type='file'
                accept='.pdf'  
                onChange={(e) =>  subeArchivos('Documento1', e.target.files)}
              />
            </td>
          </tr>
          <tr>
            <td className='w-1/2'>Documento2</td>
            <td>
              <input
                type='file'
                accept='.pdf'
                onChange={(e) =>  subeArchivos('Documento2', e.target.files)}
              />
            </td>
          </tr>
          <tr>
            <td className='w-1/2'>Documento3</td>
            <td>
              <input
                type='file'
                accept='.pdf'
                onChange={(e) =>  subeArchivos('Documento3', e.target.files)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Archivos;
