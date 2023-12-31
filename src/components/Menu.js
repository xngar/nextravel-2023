import React from 'react';
import { SelectCurrency } from '../utils/SelectCurrency';
import { Change } from '../utils/Change';
import "./Menu.css";


export const Menu = () => {
    return (
        <nav className='menu-top' >
            <div className='logo'>
                <img src="./img/logo-next-travel.png" />
            </div>
            <div>
                <ul>
                   <Change />
                    <li>Home</li>
                    <li>¿Quienes somos?</li>
                    <li>Destinos</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                    <li><SelectCurrency/></li>
                </ul>
            </div>

        </nav>
    )
}
