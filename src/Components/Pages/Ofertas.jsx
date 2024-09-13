import React, { useState } from "react";
import ImageList from "../ImageList/ImageList";
import SearchBar from "../SearchBar/SearchBar";
import "./Pages.css";

function Ofertas({ img, onSearch }) {
    const handleSearch = (term) => {
        onSearch(term);
    };

    return (
        <div className="page">
            <h1>IBAI SHOP</h1>
            <SearchBar enSubmit={handleSearch} />
            {img.length > 0 ? <ImageList images={img} /> : <p>No se encontraron resultados</p>}
        </div>
    );
}

export default Ofertas;