import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs";
import Footer from "../Footer/Footer.jsx";
import "./ViewCart.css";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import {
  deleteProductToCart,
  addProductToCart,
  deleteProduct,
} from "../../redux/actions/cart";

const ViewCart = () => {
  const dispatch = useDispatch();
  const stateCart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const userLogin = useSelector((state) => state.authReducer.userLogin);

  function productDelete(id) {
    dispatch(deleteProduct(id));
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "The product was removed from the cart!",
    });
  }

  function handlerDeleteToCart(id) {
    dispatch(deleteProductToCart(id));
  }

  function add(product) {
    let productDes = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    dispatch(addProductToCart(productDes));
  }

  console.log(userLogin?.user?.name);
  return (
    <Fragment>
      <NavBar />
      <h1 className="dark:text-white ">Shopping Cart</h1>
      <br />
      <br />
      {stateCart.length > 0 ? (
        <div className="sm:container md:mx-auto bg-[#e2e8f0]">
          <div className="flex justify-center">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-40">
                <tr>
                  <th scope="col" className="dark:text-white py-3 px-6">
                    Product
                  </th>
                  <th scope="col" className="dark:text-white py-3 px-6">
                    Price
                  </th>
                  <th scope="col" className="dark:text-white py-3 px-6">
                    Quantity
                  </th>
                  <th scope="col" className="dark:text-white py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr> */}

                {stateCart.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className=" dark:text-white bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td>
                        <img src={item.image} className="h-24 w-28" alt="" />
                      </td>
                      <td className=" py-4 px-6">{item.name}</td>
                      <td className="py-4 px-6">$ {item.price}.00</td>
                      <td>
                        <div className="flex flex-row">
                          <button onClick={() => handlerDeleteToCart(item.id)}>
                            -
                          </button>
                          <div className="py-4 px-6">{item.quantity}</div>
                          <button onClick={() => add(item)}>+</button>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <button onClick={() => productDelete(item.id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {/* </tr> */}
                <tr>
                  <td>TOTAL: $ {total}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {userLogin?.user?.name ? (
            <Link to={`/product/carrito`}>
              <button className="absolute mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 rounded">
                Buy now
              </button>
            </Link>
          ) : (
            "*Please register to complete your buy"
          )}
        </div>
      ) : (
        <div className="div_no_cartItem">
          <div className="icon_cartEmpty">
            <BsFillCartXFill />
          </div>
          <div>
            <h4>Shopping cart empty</h4>
          </div>
          <div>
            <NavLink className="keepShopping" to="/home">
              ¡Keep Shopping!
            </NavLink>
          </div>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default ViewCart;
