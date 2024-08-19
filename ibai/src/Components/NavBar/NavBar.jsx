import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import {ImagesNavBar} from "./components/ImagesNavBar";

export const NavBar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <ImagesNavBar/>
                    <span class="logo-text">ibai</span>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <span class="navbar-top">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Inicio</a>
                            </li>
                        </ul>
                        <form class="d-flex search-form" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar productos..." aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contactanos
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Soporte y FAQ</a></li>
                                    <li><a class="dropdown-item" href="#">Formulario de Contacto</a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" href="#">Canales de Comunicación</a></li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>
                <a class="navbar-brand" href="#">
                    <CartWidget/>
                </a>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Ofertas</a>
                        <a class="nav-link" href="#">Tecnología</a>
                        <a class="nav-link" href="#">Moda</a>
                        <a class="nav-link" href="#">Deportes</a>
                        <a class="nav-link" href="#">Salud y Belleza</a>
                        <a class="nav-link" href="#">Hogar y Jardín</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
};