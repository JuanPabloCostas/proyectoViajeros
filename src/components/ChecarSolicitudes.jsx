import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from './download-button.png'

export const ChecarSolicitudes = () => {
    const [data, setdata] = useState([]);


    const getData = async () => {
        try {
            const response = await axios.get('https://mauazureapp.azurewebsites.net/solicitudes');
            console.log(response.data);
            setdata(response.data);
        } catch (error) {
            console.error(error);
            
        }

    }

    useEffect(() => {
        getData();
    }, [])

    // useEffect(() => {
    //     try {
    //         const getData = async () => {
    //             const response = await axios.get('https://mauazureapp.azurewebsites.net/solicitudes');
    //             console.log(response.data);
    //             setdata(response.data);
    //         }
    //         getData();

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, []);

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
                        <th>Aceptar / Rechazar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <>
                        {<tr>
                            <td>{row.expediente}</td>
                            <td className='text-center'><a href={`https://olmos.blob.core.windows.net/files/${row.file1}`} target="_blank"><img src={img} alt="download" className='mx-auto'/></a></td>
                            <td className='text-center'><a href={`https://olmos.blob.core.windows.net/files/${row.file1}`} target="_blank"><img src={img} alt="download" className='mx-auto'/></a></td>
                            <td className='text-center'><a href={`https://olmos.blob.core.windows.net/files/${row.file3}`} target="_blank"><img src={img} alt="download" className='mx-auto'/></a></td>
                            {row.status == 0 ? 
                                <td className='flex justify-center gap-7'><button className='rounded bg-lime-600 shadow-lg w-20' onClick={async(e) => {
                                e.preventDefault();
                                try {
                                    const response = await axios.put(`https://mauazureapp.azurewebsites.net/solicitudes/status/${row.expediente}`, {status: 1});
                                    alert('Solicitud aceptada');
                                    console.log(response);
                                    // Reload data
                                    getData();

                                    
                                } catch (error) {
                                    console.log(error);
                                }
                                
                            }}>Aceptar</button>
                            <button className='rounded bg-red-600 shadow-lg w-20' onClick={async(e) => {
                                e.preventDefault();
                                try {
                                    const response = await axios.put(`https://mauazureapp.azurewebsites.net/solicitudes/status/${row.expediente}`, {status: 2});
                                    alert('Solicitud rechazada');
                                    console.log(response);
                                    getData();
                                    
                                } catch (error) {
                                    console.log(error);
                                    
                                }
                                
                            }}>Rechazar</button></td>
                            : row.status == 1 ? <td>Aceptada</td> : <td>Rechazada</td>
                        }
                            
                        </tr>}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
