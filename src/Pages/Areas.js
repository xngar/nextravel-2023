import React, {useRef} from 'react';
import '../components/Destinos.css';
import {useParams} from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { useQuery } from "@tanstack/react-query";
import {getDestinos} from '../components/api/Apis';
import userEvent from '@testing-library/user-event'


export const Areas = () => {
    const {IdArea} = useParams();

    const figura = useRef(null);
    const figura2 = useRef(null);


    function figuraAnim(figura) {
        figura.current.classList.add('activo');
    }

    function figuraRemove(figura) {
        figura.current.classList.remove('activo');
    }
//llamar el end point de los destinos.

const destiny = useQuery({
    queryKey:['destiny'],
    queryFn: ()=> getDestinos(IdArea)
});

console.log('Destiny: ', destiny.data)

 const handleClick =(Id)=>{
    var url = document.location.origin;
    if (Id) {
           url += `/Programas/${IdArea}/${Id}`;
       }else{url = 'http://localhost:3000/'}
       window.location.replace(url);
   }

 return (<>
       
        {destiny.isLoading ?  
             <HashLoader
            color={'#d3761b'}
            loading={destiny.isLoading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{ float: 'center' }}
  
          /> : 
          <div className='wrapperDestinos'>
          <div>
              <h2>Destinos</h2>
          </div>
          <div className='container'>
                {destiny.data?.map((item, i)=> {
                    return(<>
                        <figure key={i} onClick={()=>handleClick(item.Id)} onMouseEnter={() => figuraAnim(figura)} onMouseLeave={() => figuraRemove(figura)} ref={figura} >
                        <div></div>
                       
                        <img src={`${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Imagen}`} />
                        <span>{item.Destino}</span>
                      
                    </figure>
                     <h3><a href={'http://localhost:3000/'}>BACK</a>{}</h3>
                     </> );
                })}
             

          </div>
      </div>
        }
       
       </>)
}