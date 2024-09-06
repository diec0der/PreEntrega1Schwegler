import React from "react";
import "./ImageShow.css";

function ImageShow ({image}) {
    return (
        <div className="image-card">
            <div 
                className="image-card-img" 
                style={{ backgroundImage: `url(${image.urls.small})` }}
            ></div>
            <div className="image-card-info">
                <h3 className="image-titulo">{image.description || "Sin título"}</h3>
                <p className="image-detalle">{image.alt_description || "Sin detalles"}</p>
                <p className="image-precio">Precio: ${image.likes * 10}</p>
                <a href="#" className="btn-comprar">Comprar</a>
            </div>
        </div>
    );
}

export default ImageShow;