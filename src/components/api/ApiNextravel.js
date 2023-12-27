import { useContext } from "react";
import { contexto } from "../contexto/contexto";


const ApiNextravel = () => {
    const context1 = useContext(contexto);

    // Resto del código...
    return (
        <div> Servicio Nextravel</div>
    );
};

const obtenerToken = async() => {
    let rawLogin = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ Username: "appreact", Password: "appreact23" }),
    };
   var retorno =  await fetch("https://service.nextravel.cl/api/Auth/Login", rawLogin);
   var respuesta = await retorno.json();
    return respuesta;
    
};

const sendEmail = async(token, email) => {
    let rawLogin = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Name : email.name,  //"Mario GutierreZ",
            Phone : email.phone, //"123456789",
            Email : email.email, //"mario@upcode.cl",
            Subject: email.subject, //"Asunto de Testing 2",
            Message : email.message  //"Provando la API de servicio de correo"
        }),
    };
   var retorno =  await fetch("https://service.nextravel.cl/api/Auth/Login", rawLogin);
   var respuesta = await retorno.json();
    return respuesta;
    
};

export {obtenerToken, sendEmail}
export default ApiNextravel;