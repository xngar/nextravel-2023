import React from "react";
import { useTokenContext, useCurrencyContext } from "../components/contexto/ContextoDatos";

import { pedirMoneda } from "../components/api/Apis";
import { useQuery } from "@tanstack/react-query";


 export const Change  = () =>{
        const token = useTokenContext();
        const curencyCode = useCurrencyContext();
        const currency = useQuery({
                queryKey:['currency'],
                queryFn: () => pedirMoneda(token)   
             });
  
        return(<>
            {currency && <p>{`Cambio Contado: $${currency.data?.CambioContado} | Cambio Crédito: $${currency.data?.CambioCredito}`}</p>}    
        </>);
}