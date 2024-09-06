import React from "react";
import ImageShow from "../ImageShow/ImageShow";
import "./ImageList.css";

function ImageList({ images = [] }) {

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });

    return <div className="image-lista">{renderedImages}</div>;
}

export default ImageList;