import React, { useRef } from 'react'
import "./Destinos.css"
import { Link } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const Destinos = () => {

    const figura = useRef(null);
    const figura2 = useRef(null);


    function figuraAnim(figura) {
        figura.current.classList.add('activo');
    }

    function figuraRemove(figura) {
        figura.current.classList.remove('activo');
    }

    return (
        <div className='wrapperDestinos'>
            <div>
                <h2>Destinos</h2>
            </div>
            <div className='container'>



                <figure onMouseEnter={() => figuraAnim(figura)} onMouseLeave={() => figuraRemove(figura)} ref={figura} >
                    <div></div>
                    <img src='./img/mexico-destino.png' />
                    <span>Mexico</span>
                </figure>

                <figure onMouseEnter={() => figuraAnim(figura2)} onMouseLeave={() => figuraRemove(figura2)} ref={figura2} >
                    <div></div>
                    <img src='./img/mexico-destino.png' />
                    <span>Mexico</span>
                </figure>




            </div>
        </div>
    )
}

export default Destinos