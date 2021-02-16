import './nav.css';
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/" className="active">Inicio</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/directive">Directiva</Link></li>
                <li><Link to="/gallery">Galer&iacute;a</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;