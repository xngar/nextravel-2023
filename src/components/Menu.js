import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Menu.css";
import { SelectCurrency } from '../utils/SelectCurrency';
import { Change } from '../utils/Change';
import { GiHamburgerMenu } from "react-icons/gi";


export const Menu = ({ change }) => {
    let uri = document.location.origin;
    const [menu, setMenu] = useState(true);
    const mostrarBoton = useRef(null);

    function abrirMenu() {
        mostrarBoton.current.classList.toggle("abrir");

    }

    return (
        <nav className='menu-top' >
            <div className='logo'>
                <a href='/'>
                    <img src={`${uri}/img/logo-next-travel.png`} alt='' />
                </a>

            </div>
            <div>

                <GiHamburgerMenu className='hambur' onClick={abrirMenu} />
                <ul ref={mostrarBoton}>
                    <Change change={change} />
                    <li>Home</li>
                    <li>¿Quienes somos?</li>
                    <li>Destinos</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                    {/* <li><SelectCurrency/></li> */}
                </ul>

            </div>

        </nav >
    )
}
