import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import { addProductToCart } from "../../redux/actions/cart";

const Cart = ({ stateCart }) => {
  // console.log(countCart)
  return (
    <Fragment>
      <div className="md:container md:mx-auto">
        <Link to={"/cart"}>
          <div className="float-right  bg-[#0f172a] text-white hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {stateCart.length} Carrito
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Cart;
