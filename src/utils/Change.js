import React, {useContext} from "react";
import { pedirMoneda } from "../components/api/Apis";
import { useQuery } from "@tanstack/react-query";
import { contexto } from "../components/contexto/contexto";
//import Cookies from "universal-cookie";

 const Change  = () =>{
    
   // const cookie = new Cookies();   <--- Reemplazar por Context
   const context = useContext(contexto);
   
    const currency = useQuery({
        queryKey:['currency'],
        queryFn: () => pedirMoneda(context.token)   
     });

        return(<>
                <p>{`Cambio Contado: $${currency.data?.CambioContado} | Cambio Crédito: $${currency.data?.CambioCredito}`}</p>
        </>);
    
}

export default Change;