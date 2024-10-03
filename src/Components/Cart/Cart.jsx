import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import { createOrder, updateStock } from '../../api';
import Spinner from 'react-bootstrap/Spinner';

const Cart = () => {
    const { cart, removeItem, clear } = useCart();
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false); 

    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer({
            ...buyer,
            [name]: value 
        });
    };

    const handleCompletePurchase = async () => {
        if (!buyer.name || !buyer.phone || !buyer.email) {
            alert("Por favor completa todos los datos del comprador.");
            return;
        }

        setLoading(true);

        const order = {
            buyer,
            items: cart.map(item => ({
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                price: item.price
            })),
            date: new Date().toISOString(),
            total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        };

        try {
            const id = await createOrder(order);
            setOrderId(id);

            await updateStock(order.items);

            clear();
            setPurchaseCompleted(true);
        } catch (error) {
            console.error("Error durante la compra: ", error);
        } finally {
            setLoading(false);
        }
    };

    if (purchaseCompleted) {
        return (
            <div className="empty-cart-container">
                <div className="empty-cart">
                    <h2>Felicitaciones, has completado tu compra!</h2>
                    <p>Tu ID de orden es: <strong>{orderId}</strong></p>
                    <Link to="/">
                        <button>Volver a la tienda</button>
                    </Link>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart-container">
                <div className="empty-cart">
                    <h2>Tu carrito está vacío</h2>
                    <p>No has añadido ningún producto aún.</p>
                    <Link to="/">
                        <button>Volver a la tienda</button>
                    </Link>
                </div>
            </div>
        );
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="cart-container">
            <h2 className="cart-header">Carrito</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img
                        src={item.img || 'https://via.placeholder.com/100'}
                        alt={item.name}
                    />
                    <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <div className="cart-total">Total: ${total}</div>

            <div className="buyer-info-form">
                <h3>Datos del comprador</h3>
                <form>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={buyer.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            name="phone"
                            value={buyer.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={buyer.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </form>
            </div>

            <div className="cart-buttons">
                <button onClick={clear}>Vaciar Carrito</button>

                {loading ? (
                    <Spinner animation="border" role="status" className="custom-spinner">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                ) : (
                    <button 
                        className="complete-purchase-button" 
                        onClick={handleCompletePurchase}
                    >
                        Terminar compra
                    </button>
                )}
            </div>
        </div>
    );
};

export default Cart;