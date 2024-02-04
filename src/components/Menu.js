<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> mario
import "./Menu.css";
import { SelectCurrency } from '../utils/SelectCurrency';
import { Change } from '../utils/Change';
import { GiHamburgerMenu } from "react-icons/gi";


<<<<<<< HEAD
export const Menu = ({ change }) => {
    const [menu, setMenu] = useState(false);
    return (
        <nav className='menu-top' >
            <div className='logo'>
                <img src="./img/logo-next-travel.png" alt='' />
=======
export const Menu = ({change}) => {
    let uri = document.location.origin;
    return (
        <nav className='menu-top' >
            <div className='logo'>
            <a href='/'>
            <img src={`${uri}/img/logo-next-travel.png`} alt=''/>
            </a>
>>>>>>> mario

            </div>
            <div>

                <GiHamburgerMenu className='hambur' onClick={() => setMenu(!menu)} />
                <ul style={{ visibility: menu ? "visible" : "hidden" }}>
                    <Change change={change} />
                    <li>Home</li>
                    <li>¿Quienes somos?</li>
                    <li>Destinos</li>
                    <li>Programas</li>
                    <li>Contacto</li>
<<<<<<< HEAD
                    <li><SelectCurrency /></li>
                </ul >
            </div >
=======
                    {/* <li><SelectCurrency/></li> */}
                </ul>
                 
            </div>
>>>>>>> mario

        </nav >
    )
}
