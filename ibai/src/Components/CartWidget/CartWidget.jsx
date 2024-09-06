import "./CartWidget.css"
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return <span className="carrito">
        <Link className= "nav-link" to="*">
        <i className="bi bi-cart3"/> Carrito</Link>
    </span>
};