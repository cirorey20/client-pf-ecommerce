import React from "react";
import "./ProductContainer.css";

const ProductContainer = ({ image, description, state, id }) => {
  return (
    <div className="productContainer_container">
      <img
        className="productContainer_division image"
        src={image}
        height={"200px"}
      />
      <div className="productContainer_division description">{description}</div>
      <div className="productContainer_division status">{state}</div>
      <div className="productContainer_division button">
        <button className="rate_button">Rate</button>
      </div>
    </div>
  );
};

export default ProductContainer;
