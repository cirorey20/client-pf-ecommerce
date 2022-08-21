import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./MyShopping.css";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import ProductContainer from "./ProductContainer";

const MyShopping = () => {
  return (
    <div>
      <NavBar />
      <h1 className="myshopping_title">My Shoppings</h1>
      <div className="myshopping_productContainer">
        <div className="myshopping_container">
          {/* Mapear las compras de la base de datos */}
          <ProductContainer image description status />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default MyShopping;
