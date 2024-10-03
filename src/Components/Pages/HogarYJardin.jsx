import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import "./Pages.css";

function HogarYJardin({ img }) {
    const { onSearch } = useOutletContext(); 

    useEffect(() => {
        onSearch("hogar y jardin"); 
    }, [onSearch]);

    return (
        <div className="page">
            <h1>Hogar y Jardín</h1>
            <ImageList images={img} />
        </div>
    );
}

export default HogarYJardin;