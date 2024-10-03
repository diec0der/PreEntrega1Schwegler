import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

export const CartWidget = () => {
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    if (totalItems === 0) return null;

    return (
        <span className="carrito">
            <Link className="nav-link" to="/cart">
                <i className="bi bi-cart3" /> {totalItems} ítems
            </Link>
        </span>
    );
};