import React from "react";
import "./ProductContainer.css";
import { useNavigate } from "react-router-dom";

const ProductContainer = ({ image, description, state, id }) => {
  const navigate = useNavigate();

  return (
    <div className="productContainer">
      <img className="imageProduct" src={image} height={"150px"} />
      <div className="productContainer_division description">
        <p className="productContainer_title">Description</p>
        {description}
      </div>
      <div className="productContainer_division status">
        <p className="productContainer_title">Status</p>
        {state}
      </div>
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
