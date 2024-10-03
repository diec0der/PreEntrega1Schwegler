import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ImageShow.css";
import { useCart } from "../CartContext/CartContext";
function ImageShow({ image }) {
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const onAdd = (quantity) => {
        if (!image.id || !image.precio) {
            console.error("El producto no tiene ID o precio.");
            return;
        }
        
        const productToAdd = {
            id: image.id,
            img: image.img,
            name: image.producto,
            price: image.precio,
            quantity,
        };
        
        addItem(productToAdd, quantity);
        setAdded(true);
    };

    return (
        <div className="image-card">
            <Link to={`/Producto/${image.id}`}>
                <div 
                    className="image-card-img" 
                    style={{ backgroundImage: `url(${image.img || 'default-image-url'})` }}
                ></div>
            </Link>
            <div className="image-card-info">
                <h3 className="image-titulo">{image.producto || "Sin título"}</h3>
                <p className="image-detalle">{image.descripcion || "Sin detalles"}</p>
                <p className="image-precio">Precio: ${image.precio || "N/A"}</p>
                <p className="image-stock">Stock: {image.stock || "N/A"}</p>
                <Link to={`/Producto/${image.id}`} className="btn-vermas">+ Ver más</Link>
                {!added ? (
                    <ItemCount stock={image.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart" className="btn-terminar">
                        <button className="add-to-cart-button">Terminar mi compra</button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ImageShow;