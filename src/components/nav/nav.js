import './nav.css';

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><a href="/" className="active">Inicio</a></li>
                <li><a href="/about">Nosotros</a></li>
                <li><a href="/directive">Directiva</a></li>
                <li><a href="/gallery">Galer&iacute;a</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Nav;