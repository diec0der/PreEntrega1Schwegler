import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <button onClick={handleDecrement}>-</button>
            <input type="text" value={count} readOnly />
            <button onClick={handleIncrement}>+</button>
            <button 
                className="add-to-cart-button"
                onClick={() => onAdd(count)}
            >
                Añadir
            </button>
        </div>
    );
}

export default ItemCount;