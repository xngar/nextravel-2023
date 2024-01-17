import React from "react";
import { pedirMoneda } from "../components/api/Api";
import { useQuery } from "@tanstack/react-query";
import Cookies from "universal-cookie";

export const Change  = () =>{
    
    const cookie = new Cookies();
   
    const currency = useQuery({
        queryKey:['currency'],
        queryFn: () => pedirMoneda(cookie.get('token'))
     });

        return(<>
                <p>{`Cambio Contado: $${currency.data?.CambioContado} | Cambio Crédito: $${currency.data?.CambioCredito}`}</p>
        </>);
    
}