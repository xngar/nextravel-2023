import React from "react";

const ApiNextravel = () => {
    return (<></>);
};

const obtenerToken = async() => {
    let rawLogin = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ Username: process.env.REACT_APP_API_NEXTRAVEL_USERNAME, 
                               Password: process.env.REACT_APP_API_NEXTRAVEL_PASSWORD }),
    };
   var retorno =  await fetch(`${process.env.REACT_APP_API_NEXTRAVEL_URL}/api/Auth/Login`, rawLogin);
   var respuesta = await retorno.json();
    return respuesta;
    
};

const sendEmail = async (token, email) => {
   //let token = await obtenerToken().then(auth => auth);
   console.log('Token: ', token.token);
   console.log('Datos del Email en el endPoint: ', email)

    let raw = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Name : email.name,  //"Mario GutierreZ",
            Phone : email.phone, //"123456789",
            Email : email.email, //"mario@upcode.cl",
            Subject : email.subject, //"Asunto de Testing 2",
            Message : email.message  //"Provando la API de servicio de correo"
        }),
    };
   var retorno =  await fetch(`${process.env.REACT_APP_API_NEXTRAVEL_URL}/api/Mail/Contacto`, raw);
   var respuesta = await retorno.json();
  
    return respuesta;
    
};

export {obtenerToken, sendEmail}
export default ApiNextravel;