import React from 'react';
import {useParams} from 'react-router-dom';

export const Areas = () => {
    const {IdArea} = useParams();
    return(<>
     <div>
        <h2>Area que recibí: {IdArea}</h2>
     </div>
    </>);
}