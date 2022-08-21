import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import "./MyShopping.css";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import ProductContainer from "./ProductContainer";
import { getOrdersByUser } from "../../redux/actions/orders.js";

const MyShopping = () => {
  const ordersByUser = useSelector((state) => state.ordersReducer.ordersUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersByUser("c545f64f-385f-4762-bf67-8ddfc7f415c6"));
  }, []);

  console.log(ordersByUser);

  return (
    <div>
      <NavBar />
      <h1 className="myshopping_title">My Shoppings</h1>
      <div className="myshopping_productContainer">
        <div className="myshopping_container">
          {ordersByUser.map((e) => {
            return (
              <ProductContainer
                id={e.id}
                image={e.image.map((e) => e)}
                description={e.description.map((e) => e)}
                state={e.state}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyShopping;
