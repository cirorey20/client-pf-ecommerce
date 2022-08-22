import React from "react";
import "./ProductContainer.css";
import { useNavigate } from "react-router-dom";

const ProductContainer = ({ image, description, state, id }) => {
  const navigate = useNavigate();

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
        <button
          className="rate_button"
          onClick={() => navigate(`/rateProduct/${id}`)}
        >
          Rate
        </button>
      </div>
    </div>
  );
};

export default ProductContainer;
