import React from 'react';
import {useParams} from 'react-router-dom';


export const Programa =()=>{

    let {IdPrograma} = useParams();
    return(<>
         <h2>Programa consultado: {IdPrograma}</h2>
         
    </>);
}