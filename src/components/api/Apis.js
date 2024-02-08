import React from "react";



export const Apis = () => {
return(<></>)
}

 export const obtenerToken = async () => {
    let rawLogin = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            Username: process.env.REACT_APP_API_TURISCLUB_USERNAME, 
            Password: process.env.REACT_APP_API_TURISCLUB_PASSWORD }),
    };
    var retorno = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/auth`, rawLogin);
    var respuesta = await retorno.json();
  
    return respuesta;
 };

export const pedirMoneda = async () => {
    var token = await obtenerToken().then( auth => auth);
  const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
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
    
};

export const getSlider = async (CurrencyCode) => {
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
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

export const getBanners = async () => {
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
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

export const getCategoryHotel = async (entityId) => {
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            EntityId:entityId
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Definitions/CategoryHotel`, configuracion);
    var response = await result.json();
    return response.entity;
}

export const getHotel = async (entityId) => {
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            EntityId:entityId
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Definitions/Hotel`, configuracion);
    var response = await result.json();
    return response.entity;
}

export const getDestinos = async ( IDArea) => {
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
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

export const getProgramList = async (IDArea, IDDestino, CurrencyCode) => {
   
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            EqualityFilter: { "IDArea": IDArea, "IdDestino": IDDestino, "Activo": true},
            CurrencyCode: CurrencyCode == null ? 'USD' : CurrencyCode
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Programs/List`, configuracion);
    var response = await result.json();
    return response.entities;
}

export const getProgramDetail = async (IDPrograma, CurrencyCode) => {
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token.value,
            "Content-type": "application/json",
        }
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Programs/retrieve/${IDPrograma}/${CurrencyCode == null ? 'USD' : CurrencyCode}`, configuracion);
    var response = await result.json();

    return response.entity;
}

export const getProgramMoreViews = async () => {
   
    var token = await obtenerToken().then( auth => auth);
    const configuracion = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token.value,
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Take: 50,
            Sort:['Id desc'],
            EqualityFilter: { "Activo": true},
            CurrencyCode: 'USD'
        }),
    };

    var result = await fetch(`${process.env.REACT_APP_API_TURISCLUB_URL}/api/Programs/More-Views`, configuracion);
    var response = await result.json();
    return response.entities;
}

export default Apis;
