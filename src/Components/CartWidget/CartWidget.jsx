import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

export const CartWidget = () => {
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <span className="carrito">
            <Link className="nav-link" to="/cart">
                <i className="bi bi-cart3" /> {`${totalItems}`}
            </Link>
        </span>
    );
};