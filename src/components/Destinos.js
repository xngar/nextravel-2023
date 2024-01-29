import React from 'react'
import "./Destinos.css"
import { Link } from 'react-router-dom'

const Destinos = () => {
    return (
        <div className='wrapperDestinos'>
            <div className='container'>


                <figure >
                    <img src='./img/mexico-destino.png' />
                    <span>Mexico</span>
                </figure>

                <figure>
                    <img src='./img/mexico-destino.png' />
                    <span>Mexico</span>
                </figure>

                <figure>
                    <img src='./img/mexico-destino.png' />
                    <span>Mexico</span>
                </figure>

                <figure>
                    <img src='./img/mexico-destino.png' />
                    <span>Mexico</span>
                </figure>

            </div>
        </div>
    )
}

export default Destinos