import React, { useState } from 'react';
import './barnav.css'
import icon from '../../assets/images/opened.svg'
import icon_closed from '../../assets/images/closed.svg'
import logo from '../../assets/images/manoamigalogo2.webp'
 
import { useHistory } from "react-router-dom";

export default function Nav() {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [page, setpage] = useState("home");

    let history = useHistory()

    function updateIsMenuOpen() {
        setisMenuOpen(!isMenuOpen)
    }

    function updatePage(page) {
        setpage(page);
        setisMenuOpen(false)
        history.push("/"+page);
    }

    return (

        <nav>
            <div className="menu-mobile">
                 
                <div className="menu-mobile-title">
                    <img src={logo} height={56}/>
                </div>
                <button className="menu-mobile-icon" onClick={updateIsMenuOpen}>
                    <img src={isMenuOpen ? icon_closed : icon} width="25px" alt="Menu" />
                </button>
            </div>

            <ul className={isMenuOpen ? "dropdown-child active" : "dropdown-child"}>
                <li className={page === 'home' ? "active-item" : ""} onClick={() => updatePage("home")}>
                    <span>Inicio</span>
                </li>

                <li className={page === 'about' ? "active-item" : ""} onClick={() => updatePage("about")}>
                    <span>Nosotros</span>
                </li>

                <li className={page === 'directive' ? "active-item" : ""} onClick={() => updatePage("directive")}>
                    <span>Directiva</span>
                </li>

                <li className={page === 'gallery' ? "active-item" : ""} onClick={() => updatePage("gallery")}>
                    <span>Galer&iacute;a</span>
                </li>

                <li className={page === 'contact' ? "active-item" : ""} onClick={() => updatePage("contact")}>
                    <span>Contacto</span>
                </li>


            </ul>

        </nav>


    )

}