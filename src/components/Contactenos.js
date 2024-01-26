import React, { useState} from 'react'
import "./Contactenos.css"
//import { useFormik } from 'formik'
import { sendEmail } from './api/ApiNextravel'
//import { useQuery } from '@tanstack/react-query'
import {PulseLoader} from 'react-spinners';


const initialData = {
    name:'',
    phone:'',
    email:'',
    subject:'',
    message:''
  }


const Contactenos = (token) => {
  
    const [sent, setSent] = useState('');
    const [envelop, setEnvelop] = useState(initialData);
    const {name, phone, email, subject, message} = envelop;

   
    const handleChange = (name, value) => {
          setEnvelop((prevState)=>{
            return {
                ...prevState,
                [name]: value
            }
           });
    }

    const handleSend = async () => {
        const result = await sendEmail(token, envelop).then(respuesta => respuesta);
        setSent(result.value)
    }

  return (
        <div className='wrapper'>
            <div className='contenedor'>
                 <form onSubmit={e => e.preventDefault()}>
                    <h1>Contáctenos</h1>
                    <div className='superior'>
                        <input type='text' onChange={e => handleChange(e.target.name, e.target.value)} name='name' placeholder='Nombre' value={name} />
                        <input type='tel' onChange={e => handleChange(e.target.name, e.target.value)} name="phone" placeholder='Telefono' value={phone} />
                    </div>
                    <div className='inferior'>
                        <input type="email" onChange={e => handleChange(e.target.name, e.target.value)} name="email" placeholder='Email' value={email} />
                        <input type="text" onChange={e => handleChange(e.target.name, e.target.value)} name="subject" placeholder='Asunto' value={subject}/>
                        <input type="textarea" onChange={e => handleChange(e.target.name, e.target.value)} name="message" placeholder='Mensaje' value={message} />
                    </div>
                    <button onClick={()=> handleSend()}>Enviar Mensaje</button>
                    {sent.length === 0 ? <PulseLoader color="#d8741d" /> :  <div>  <h4 style={{color:'white'}}>{sent}</h4></div>}
                   
                </form>
               
            </div>

        </div >
    )
}

export default Contactenos