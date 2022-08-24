import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer.jsx";
import "./MyShopping.css";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";


import ProductContainer from "./ProductContainer";
import { getOrdersByUser } from "../../redux/actions/orders.js";
import { ordersReducer } from "../../redux/reducers/orders.reducer.js";

const MyShopping = () => {
  const ordersByUser = useSelector((state) => state.ordersReducer.ordersUser);
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  console.log(userLogin);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getOrdersByUser(userLogin.user.id));
  }, [userLogin]);

  return (
    <div className="">
      <NavBar />
      <div className="myshopping_productContainer">
        <div className="myshopping_container">
          <h1 className="myshopping_title">My Shoppings</h1>

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
      </div>
      <div className="col-start-1 col-end-7">
      <footer class="sticky top-[100vh]"><Footer /></footer>
      </div>
    </div>
  );
};

export default MyShopping;
