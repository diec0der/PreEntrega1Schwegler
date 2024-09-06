import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import {ImagesNavBar} from "./components/ImagesNavBar";
// import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export const NavBar = ({ enSubmit }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ImagesNavBar/>
                    <Link className="navbar-brand" to="/">
                        <span className="logo-text">ibai</span>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <span className="navbar-top">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Buscar</Link>
                                </li>
                            </ul>
                            {/* <SearchBar enSubmit={enSubmit} /> comentado porque ahora está en ofertas  */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contactanos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/SoporteYFAQ" className="dropdown-item">Soporte y FAQ</Link></li>
                                        <li><Link to="/ContactForm" className="dropdown-item">Formulario de Contacto</Link></li>
                                        <li><hr className="dropdown-divider"></hr></li>
                                        <li><Link to="/Canales" className="dropdown-item">Canales de Comunicación</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <CartWidget/>
                    <a className="navbar-brand" href="#">
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/Tecnologia" className="nav-link" >Tecnología</Link>
                            <Link to="/Moda" className="nav-link" >Moda</Link>
                            <Link to="/Deportes" className="nav-link">Deportes</Link>
                            <Link to="/SaludYBelleza" className="nav-link">Salud y Belleza</Link>
                            <Link to="/HogarYJardin" className="nav-link">Hogar y Jardín</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};