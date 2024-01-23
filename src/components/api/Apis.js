import React from "react";



export const Apis = () => {
return(<></>)
}

const obtenerToken = async () => {
    
    let rawLogin = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ Username: process.env.REACT_APP_API_TURISCLUB_USERNAME, 
                               Password: process.env.REACT_APP_API_TURISCLUB_PASSWORD }),
    };
    var retorno = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/auth`, rawLogin);
    var respuesta = await retorno.json();
  
    return respuesta;
  
};

const pedirMoneda = async (token) => {

  
    const configuracion = {
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



    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Parameters/Valores`, configuracion);
    var response = await result.json();
    return response.entities[0];
    // return fetch("https://apirest.turisclub.cl/api/Parameters/Valores", configuracion)
    //     .then((respuesta) => respuesta.json())
    //     .then((data) => data)
    //     .catch((err) => console.log(err))
    //     .finally(() => {

    //     });
};

const getSlider = async (token, CurrencyCode) => {
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Sort: ["Orden"],
            EqualityFilter: { "SiActivadoWeb": true, "IDTIpoBanner": 1 },
            CurrencyCode: CurrencyCode == null ? 'USD' : CurrencyCode
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Definitions/Banners`, configuracion);
    var response = await result.json();
    return response.entities;
}

const getBanners = async (token) => {
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Sort: ["Orden"],
            EqualityFilter: { "SiActivadoWeb": true, "IDTIpoBanner": 2 },
            CurrencyCode: "USD"
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Definitions/Banners`, configuracion);
    var response = await result.json();
    return response.entities;
}

const getDestinos = async (token, IDArea) => {
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            EqualityFilter: { "IDArea": IDArea }
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Definitions/Areas`, configuracion);
    var response = await result.json();
    return response.entities;
}

const getProgramList = async (token, IDArea, IDDestino, CurrencyCode) => {
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            EqualityFilter: { "IDArea": IDArea, "IdDestino": IDDestino },
            CurrencyCode: CurrencyCode == null ? 'USD' : CurrencyCode
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Programs/List`, configuracion);
    var response = await result.json();
    return response.entities;
}

const getProgramDetail = async (token, IDPrograma, CurrencyCode) => {

    const configuracion = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
        }
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Programs/retrieve/${IDPrograma}/${CurrencyCode == null ? 'USD' : CurrencyCode}`, configuracion);
    var response = await result.json();

    return response.entity;
}

export { obtenerToken, pedirMoneda, getSlider, getBanners, getDestinos, getProgramList, getProgramDetail };
export default Apis;
