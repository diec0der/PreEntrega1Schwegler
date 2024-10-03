import React, { useEffect } from "react";
import ImageList from "../ImageList/ImageList";
import SearchBar from "../SearchBar/SearchBar";
import { getStockProducts } from "../../api";
import "./Pages.css";

function Ofertas({ img, onSearch }) {
    const handleSearch = (term) => {
        onSearch(term);
    };

    useEffect(() => {
        const fetchStockProducts = async () => {
            const saleProducts = await getStockProducts();
            onSearch(""); // 
        };

        fetchStockProducts();
    }, [onSearch]);

    return (
        <div className="page">
            <h1>IBAI SHOP</h1>
            <SearchBar enSubmit={handleSearch} />
            
            {img.length > 0 ? (
                <ImageList images={img} />
            ) : (
                <p className="error-text2">Cargando...</p>
            )}
        </div>
    );
}

export default Ofertas;