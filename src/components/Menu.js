<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react';
import { SelectCurrency } from '../utils/SelectCurrency';
import { Change } from '../utils/Change';
>>>>>>> 250a6f204bd30f30be21f07e62f2022d615350d6
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
<<<<<<< HEAD

                <GiHamburgerMenu className='hambur' onClick={() => setMenu(!menu)} />
                <ul style={{ visibility: menu ? "visible" : "hidden" }}>


                    <Change change={change} />
=======
                <ul>
<<<<<<< HEAD
                   <Change />
=======
                    <Change change={change}/>
>>>>>>> mario
>>>>>>> 250a6f204bd30f30be21f07e62f2022d615350d6
                    <li>Home</li>
                    <li>¿Quienes somos?</li>
                    <li>Destinos</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                    <li><SelectCurrency /></li>
                </ul>
            </div>

        </nav>
    )
}
