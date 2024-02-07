import React from 'react'
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs"


const Footer = () => {
    let uri = document.location.origin;
    return (
        <footer>
            <div>
                <img src={`${uri}/img/logo-next-travel.png`} />
            </div>
            <div>
                <p>Copyright © 2023 NexTravel S.P.A. All rights reserved | This Site is made by <a href='https://upcode.cl' target='_blank'>UP Code E.I.R.L.</a></p>
            </div>
            <div>
                <div>
                    <span><BsFacebook /></span>
                    <span><BsInstagram /></span>
                </div>
                <span>E-Mail: contacto@nextravel.cl</span>
                <span>Mobile: 569 92804016</span>
            </div>
        </footer>
    )
}

export default Footer