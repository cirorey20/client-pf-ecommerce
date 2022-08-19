import React from "react";
import "./ProductContainer.css";

const ProductContainer = ({ image, description, status }) => {
  return (
    <div className="productContainer_container">
      <div className="productContainer_division image">{image}Imagen</div>
      <div className="productContainer_division description">
        {description}Descripcion
      </div>
      <div className="productContainer_division status">{status}Status</div>
      <div className="productContainer_division button">
        <button className="rate_button">Rate</button>
      </div>
    </div>
  );
};

export default ProductContainer;
