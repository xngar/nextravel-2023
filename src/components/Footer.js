import React from 'react'
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs"


const Footer = () => {
    return (
        <footer>
            <div>
                <img src="./img/logo-next-travel.png" />
            </div>
            <div>
                <p>Copyright © 2023 NexTravel S.P.A. All rights reserved | This Site is made with by UP Code E.I.R.L.</p>
            </div>
            <div>
                <div>
                    <span><BsFacebook /></span>
                    <span><BsInstagram /></span>
                </div>
                <span>E-Mail: contacto@nextravel.cl</span>
                <span>Celular: 569 92804016</span>
            </div>
        </footer>
    )
}

export default Footer