import React from 'react'
import "./Menu.css";


export const Menu = () => {
    return (
        <nav className='menu-top' >
            <div className='logo'>
                <img src="./img/logo-next-travel.png" />

            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>¿Quienes somos?</li>
                    <li>Destinos</li>
                    <li>Programas</li>
                    <li>Contacto</li>
                </ul>
            </div>

        </nav>
    )
}
