import React, { useRef } from 'react'
import "./Destinos.css"

import userEvent from '@testing-library/user-event'
import { HashLoader } from 'react-spinners';

const Destinos = ({items}) => {

    const figura = useRef(null);


    function figuraAnim(figura) {
        figura.current.classList.add('activo');
    }

    function figuraRemove(figura) {
        figura.current.classList.remove('activo');
    }

    const handleClick = (IdArea) => {
        var url = document.location.origin;
     if (IdArea != null) {
            url += `/Areas/${IdArea}`;
        }
        window.location.replace(url);
    }

 
    return (<>

        {items.isLoading ?  
             <HashLoader
            color={'#d3761b'}
            loading={items.isLoading}
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
                {items.data?.map((item, i)=> {
                    return(
                        <figure key={i} onClick={()=>handleClick(item.IdArea)} onMouseEnter={() => figuraAnim(figura)} onMouseLeave={() => figuraRemove(figura)} ref={figura} >
                        <div></div>
                       
                        <img  src={`${process.env.REACT_APP_TURISCLUB_PATH_MEDIA}${item.Src}`} />
                        <span>{item.Titulo}</span>
                       
                    </figure>
                    )
                })}
             

          </div>
      </div>
        }
       
       </>)
}

export default Destinos