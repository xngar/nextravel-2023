import React from "react";
import { pedirMoneda } from "../components/api/Apis";
import { useQuery } from "@tanstack/react-query";

 export const Change  = (token) =>{
    
    const t = token.token.token;
    const currency = useQuery({
        queryKey:['currency'],
        queryFn: () => pedirMoneda(t)   
     });
  
        return(<>
                <p>{`Cambio Contado: $${currency.data?.CambioContado} | Cambio Crédito: $${currency.data?.CambioCredito}`}</p>
        </>);
}