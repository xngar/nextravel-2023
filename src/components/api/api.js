
let rawLogin = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ Username: "Test1", Password: "testing.2022" }),
};

const login = () => {
    return fetch("https://apirest.turisclub.cl/api/auth", rawLogin)
        .then((respuesta) => respuesta.json())
        .then((data) => data)
        .catch((err) => console.log("error en la peticion"))
        .finally(() => {
            console.log("se cargo la informacion completa.");
        });

    // const response = await fetch("https://apirest.turisclub.cl/api/auth", raw);
    // const tok = await response.json();
    // console.log("Token", tok.value);
};



let configuracion = {
    method: "POST",
    headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        Take: 1,
        Sort: ["Id DESC"],
    }),
};

const pedirMoneda = () => {

    return fetch("https://apirest.turisclub.cl/api/Parameters/Valores", configuracion)
        .then((respuesta) => respuesta.json())
        .then((data) => data)
        .catch((err) => console.log(err))
        .finally(() => {

        });
};


export { pedirMoneda, login }