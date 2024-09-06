import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import "./Pages.css";

function Moda({ img }) {
    const { onSearch } = useOutletContext(); 

    useEffect(() => {
        onSearch("clothes"); 
    }, [onSearch]);

    return (
        <div className="page">
            <h1>Moda</h1>
            <ImageList images={img} />
        </div>
    );
}

export default Moda;