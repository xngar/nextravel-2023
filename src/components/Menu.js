import React, { useState } from 'react'
import "./Menu.css";
import { SelectCurrency } from '../utils/SelectCurrency';
import { Change } from '../utils/Change';
import { GiHamburgerMenu } from "react-icons/gi";


export const Menu = ({ change }) => {
    const [menu, setMenu] = useState(false);
    return (
        <nav className='menu-top' >
            <div className='logo'>
                <img src="./img/logo-next-travel.png" alt='' />

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
                    <li><SelectCurrency /></li>
                </ul >
            </div >

        </nav >
    )
}
