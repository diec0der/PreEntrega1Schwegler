import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Pages.css";

function Producto() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id);
                setProduct(productData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const onAdd = (quantity) => {
        setAdded(true);
        // Lógica para añadir el producto al CartContext
    };

    if (loading) {
        return <div className="page"><p>Cargando...</p></div>;
    }

    if (error) {
        return (
            <div className="page">
                <h1>Error 404</h1>
                <p className="error-text">{error}</p>
            </div>
        );
    }

    return (
        <div className="page">
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
                            <button>Terminar mi compra</button>
                        </Link>
                    )}
                    <button className="back-button" onClick={() => window.history.back()}>Volver</button>
                </div>
            </div>
        </div>
    );
}

export default Producto;