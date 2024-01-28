import React from "react";
<<<<<<< HEAD
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
    
=======


 export const Change  = ({change}) =>{
      return(<>
            {change && <p>{`Cambio Contado: $${change.data?.CambioContado} | Cambio Crédito: $${change.data?.CambioCredito}`}</p>}    
        </>);
>>>>>>> mario
}