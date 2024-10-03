import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import "./Pages.css";

function Producto() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id);
                setProduct(productData);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchProduct();
    }, [id]);

    const onAdd = (quantity) => {
        if (!product || !product.id || !product.precio) {
            console.error("El producto no tiene ID o precio.");
            return;
        }
        
        const productToAdd = {
            id: product.id,
            name: product.producto,
            price: product.precio,
            img: product.img,
            quantity,
        };

        addItem(productToAdd, quantity);
        setAdded(true);
    };

    return (
        <div className="page">
            {product ? (
                <div className="product-container">
                    <h1>{product.producto}</h1>
                    <img
                        className="product-image"
                        src={product.img || "default-image-url"}
                        alt={product.producto}
                    />
                    <div className="product-details">
                        <p className="product-price">Precio: ${product.precio}</p>
                        <p className="product-stock">Stock disponible: {product.stock}</p>
                        <p className="product-description">{product.descripcion}</p>
                        {!added ? (
                            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                        ) : (
                            <Link to="/cart">
                                <button className="add-to-cart-button-term">Terminar mi compra</button>
                            </Link>
                        )}
                        <button className="back-button" onClick={() => window.history.back()}>Seguir comprando</button>
                    </div>
                </div>
            ) : (
                <div className="spinner-container-prod">
                    <div className="spinner-border custom-spinner-prod" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Producto;