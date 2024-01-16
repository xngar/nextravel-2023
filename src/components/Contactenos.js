import React from 'react'
import "./Contactenos.css"
import { useFormik } from 'formik'

const Contactenos = () => {

    const formil = useFormik({
        initialValues: {
            nombre: "",
            telefono: "",
            email: "",
            mensaje: "",
            asunto: ""
        },
        onSubmit: values => {
            //alert(JSON.stringify(values));
            alert(values);

        }
    })



    return (
        <div className='wrapper'>

            <div className='contenedor'>

                <form onSubmit={formil.handleSubmit}>
                    <h1>Contáctenos</h1>
                    <div className='superior'>
                        <input type='text' onChange={formil.handleChange} name='nombre' placeholder='Nombre' />
                        <input type='tel' onChange={formil.handleChange} name="telefono" placeholder='Telefono' />
                    </div>
                    <div className='inferior'>
                        <input type="email" onChange={formil.handleChange} name="email" placeholder='Email' />
                        <input type="text" onChange={formil.handleChange} name="asunto" placeholder='Asunto' />
                        <input type="textarea" onChange={formil.handleChange} name="mensaje" placeholder='Mensaje' />
                    </div>

                    <button>Enviar Mensaje</button>
                </form>
            </div>

        </div >
    )
}

export default Contactenos