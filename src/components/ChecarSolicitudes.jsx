import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from './download-button.png'

export const ChecarSolicitudes = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        try {
            const getData = async () => {
                const response = await axios.get('http://127.0.0.1:3000/solicitudes');
                console.log(response.data);
                setdata(response.data);
            }
            getData();

        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div className='w-screen flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl m-8'> Checar solicitudes</h1>

            {/* map data in a table */}
            {/* Example row: {
                "id": 1,
                "expediente": 307081,
                "file1": "9VWM209soDkH3NShERoYS65.pdf",
                "file2": "WJS8Cywn7DHIG0wexleA4PC.pdf",
                "file3": "v99lRdVUj98Ke4P4gxfl8VI.pdf",
                "status": 0
            } */}
            {/* Download buttons for file1, file2 and file3 each*/}
            {/* Instead of status, 2 columns with a green or red button */}

            <table className='text-center items-center justify-center w-3/4'>
                <thead>
                    <tr>
                        <th>Expediente</th>
                        <th>Cuadro de Homologación</th>
                        <th>Certificado de Lengua</th>
                        <th>Carta de Razones</th>
                        <th>Aceptar</th>
                        <th>Rechazar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <>
                        {row.status == 0 && <tr>
                            <td>{row.expediente}</td>
                            <td className='text-center'><a href={`https://olmos.blob.core.windows.net/files/${row.file1}`} target="_blank"><img src={img} alt="download" className='mx-auto'/></a></td>
                            <td className='text-center'><a href={`https://olmos.blob.core.windows.net/files/${row.file2}`} target="_blank"><img src={img} alt="download" className='mx-auto'/></a></td>
                            <td className='text-center'><a href={`https://olmos.blob.core.windows.net/files/${row.file3}`} target="_blank"><img src={img} alt="download" className='mx-auto'/></a></td>
                            <td ><button className='rounded bg-lime-600 shadow-lg w-20' onClick={async(e) => {
                                e.preventDefault();
                                const response = await axios.put(`http://127.0.0.1:3000/solicitudes/status/${row.expediente}`, {status: 1});
                                alert('Solicitud aceptada');
                                console.log(response);
                            }}>Aceptar</button></td>
                            <td><button className='rounded bg-red-600 shadow-lg w-20' onClick={async(e) => {
                                e.preventDefault();
                                const response = await axios.put(`http://127.0.0.1:3000/solicitudes/status/${row.expediente}`, {status: 2});
                                alert('Solicitud rechazada');
                                console.log(response);
                            }}>Rechazar</button></td>
                        </tr>}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
