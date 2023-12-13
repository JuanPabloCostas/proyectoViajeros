import axios from 'axios';
import React, { useState } from 'react';

// Componente funcional para registrar un alumno
export const RegistrarAlumno = () => {
    // Estado para almacenar los datos del alumno
    const [alumno, setAlumno] = useState({
        expediente: '',
        nombre: '',
        password: '',
    });

    // Función para manejar el envío del formulario
    const handleSubmit = async () => {
        try {
            // Realizar una petición POST a la API para registrar al alumno
            const response = await axios.post('http://127.0.0.1:3000/alumnos', alumno);
            console.log(response);
            alert('Alumno registrado correctamente');
            // Reiniciar los valores del formulario
            setAlumno({
                expediente: '',
                nombre: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='w-screen flex flex-col justify-center align-middle'>
            <h1 className='text-center text-5xl m-8'>Registrar Alumno</h1>
            <div className='flex gap-4 flex-col m-auto max-w-5xl '>
                <label className='text-center font-bold text-4xl'>Expediente</label>
                <input
                    className='text-center text-4xl'
                    type="text"
                    name="expediente"
                    id="expediente"
                    value={alumno.expediente}
                    onChange={(e) => setAlumno({ ...alumno, expediente: e.target.value })}
                />

                <label className='text-center font-bold text-4xl'>Nombre</label>
                <input
                    className='text-center text-4xl'
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={alumno.nombre}
                    onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })}
                />

                <label className='text-center font-bold text-4xl'>Contraseña</label>
                <input
                    className='text-center text-4xl'
                    type="password"
                    name="password"
                    id="password"
                    value={alumno.password}
                    onChange={(e) => setAlumno({ ...alumno, password: e.target.value })}
                />

                <button
                    className='bg-green-500 text-white font-bold py-2 px-4 rounded  m-auto text-center text-4xl hover: cursor-pointer '
                    onClick={handleSubmit}
                >
                    Registrar
                </button>
            </div>
        </div>
    );
};
