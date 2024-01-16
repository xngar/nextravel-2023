import { useContext } from "react";
import { contexto } from "../contexto/contexto";

const Api = () => {
    const contexto2 = useContext(contexto);

    // Resto del código...

    return (
        <div>api</div>
    );
};

const obtenerToken = () => {
    let rawLogin = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ Username: "Test1", Password: "testing.2022" }),
    };

    return fetch("https://apirest.turisclub.cl/api/auth", rawLogin)
        .then((respuesta) => respuesta.json())
        .then((data) => data)
        .catch((err) => console.log("error en la peticion"))
        .finally(() => {
            console.log("se cargo la informacion completa.");
        });
};

const pedirMoneda = () => {
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + contexto2.token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Take: 1,
            Sort: ["Id DESC"],
        }),
    };

    return fetch("https://apirest.turisclub.cl/api/Parameters/Valores", configuracion)
        .then((respuesta) => respuesta.json())
        .then((data) => data)
        .catch((err) => console.log(err))
        .finally(() => {

        });
};

export { obtenerToken, pedirMoneda };
export default Api;
