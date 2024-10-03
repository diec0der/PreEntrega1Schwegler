import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import "./Pages.css";

function Tecnologia({ img }) {
    const { onSearch } = useOutletContext();

    useEffect(() => {
        onSearch("tecnología");
    }, [onSearch]);

    return (
        <div className="page">
            <h1>Tecnología</h1>
            <ImageList images={img} />
        </div>
    );
}

export default Tecnologia;