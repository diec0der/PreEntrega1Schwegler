import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clear } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <p>No hay ítems en el carrito</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Carrito</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={clear}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;