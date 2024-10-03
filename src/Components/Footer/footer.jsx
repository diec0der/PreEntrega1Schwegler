import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-categories">
                    <h4>Categorías Populares</h4>
                    <ul>
                        <li><Link to="/Tecnologia">Tecnología</Link></li>
                        <li><Link to="/Moda">Moda</Link></li>
                        <li><Link to="/Deportes">Deportes</Link></li>
                        <li><Link to="/SaludYBelleza">Salud y Belleza</Link></li>
                    </ul>
                </div>

                <div className="footer-services">
                    <h4>Servicios</h4>
                    <ul>
                        <li><Link to="*">Envío y devoluciones</Link></li>
                        <li><Link to="/Canales">Atención al Cliente</Link></li>
                        <li><Link to="*">Garantías</Link></li>
                        <li><Link to="*">Ofertas y promociones</Link></li>
                    </ul>
                </div>

                <div className="footer-info">
                    <h4>Sobre Nosotros</h4>
                    <ul>
                        <li><Link to="*">Quienes Somos</Link></li>
                        <li><Link to="*">Trabaja con nosotros</Link></li>
                        <li><Link to="*">Política de privacidad</Link></li>
                        <li><Link to="*">Términos y condiciones</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 ibai. Todos los derechos reservados.</p>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;