import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        if (!item || !item.id || !item.price) {
            return;
        }

        if (isInCart(item.id)) {
            const updatedCart = cart.map(prod => 
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => cart.some(item => item.id === id);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
};