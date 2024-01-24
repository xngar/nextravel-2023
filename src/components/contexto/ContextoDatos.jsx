import React, { useContext, useEffect, useState} from "react";
import { useQuery } from "@tanstack/react-query";

import { obtenerToken } from "../api/Apis";



const tokenContext = React.createContext();
const currencyContext = React.createContext();

export function useTokenContext(){
    return useContext(tokenContext);
}

export function useCurrencyContext(){
    return useContext(currencyContext);
}

export function ContextoDatos(props){

    const [auth, setAuth] = useState('');
    const [currencyCode, setCurrencyCode] = useState(''); 

const token = useQuery({
    queryKey: ["user"],
    queryFn: () => obtenerToken()
  });


useEffect (()=>{
    setAuth(token.data?.value)
}, []);
console.log('Token en Component ContextoDatos: ', token.data?.value)
    return(<tokenContext.Provider value={auth}>
        <currencyContext.Provider value={currencyCode}>
            {props.children}
        </currencyContext.Provider>
    </tokenContext.Provider>);
}