import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer.jsx";
import "./MyShopping.css";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";

import ProductContainer from "./ProductContainer";
import { getOrdersByUser } from "../../redux/actions/orders.js";

const MyShopping = () => {
  const ordersByUser = useSelector((state) => state.ordersReducer.ordersUser);
  const userLogin = useSelector((state) => state.authReducer.userLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersByUser(userLogin.user?.id));
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="myshopping_title">My Shoppings</h1>
      <div className="myshopping_productContainer">
        <div className="myshopping_container">
          {ordersByUser.length === 0 ? "There isn't any purchases" : ""}
          {ordersByUser.map((e, id) => {
            return (
              <>
                <ProductContainer
                  key={id}
                  id={e.id}
                  image={e.image.map((e) => e)}
                  description={e.description.map((e) => e)}
                  state={e.state}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyShopping;
