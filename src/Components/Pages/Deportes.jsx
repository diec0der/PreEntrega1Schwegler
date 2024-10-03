import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import "./Pages.css";

function Deportes({ img }) {
    const { onSearch } = useOutletContext(); 

    useEffect(() => {
        onSearch("deportes");
    }, [onSearch]);

    return (
        <div className="page">
            <h1>Deportes</h1>
            <ImageList images={img} />
        </div>
    );
}

export default Deportes;