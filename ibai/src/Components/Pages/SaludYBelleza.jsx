import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import "./Pages.css";

function SaludYBelleza({ img }) {
    const { onSearch } = useOutletContext(); 

    useEffect(() => {
        onSearch("healty and beauty"); 
    }, [onSearch]);

    return (
        <div className="page">
            <h1>Salud y Belleza</h1>
            <ImageList images={img} />
        </div>
    );
}

export default SaludYBelleza;