import React from "react";


 export const Change  = ({change}) =>{
      return(<>
            {change && <p>{`Cambio Contado: $${change.data?.CambioContado} | Cambio Crédito: $${change.data?.CambioCredito}`}</p>}    
        </>);
}