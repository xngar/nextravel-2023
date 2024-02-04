import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Menu.css";
import { SelectCurrency } from '../utils/SelectCurrency';
import { Change } from '../utils/Change';


export const Menu = ({change}) => {
    let uri = document.location.origin;
    return (
        <nav className='menu-top' >
            <div className='logo'>
            <a href='/'>
            <img src={`${uri}/img/logo-next-travel.png`} alt=''/>
            </a>

            </div>
            <div>
                <ul>
                    <Change change={change}/>
                    <li>Home</li>
                    <li>¿Quienes somos?</li>
                    <li>Destinos</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                    {/* <li><SelectCurrency/></li> */}
                </ul>
                 
            </div>

        </nav>
    )
}
