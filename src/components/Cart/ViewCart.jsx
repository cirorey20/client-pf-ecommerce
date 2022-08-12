import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {
  deleteProductToCart,
  addProductToCart,
  deleteProduct,
} from "../../redux/actions/cart";

const ViewCart = () => {
  const dispatch = useDispatch();
  const stateCart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);

  function productDelete(id) {
    dispatch(deleteProduct(id));
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

  return (
    <Fragment>
      <NavBar />
      <div className="mt-5 text-2xl">Index Carrito</div>
      <br />
      <br />
      <div className="sm:container md:mx-auto bg-[#e2e8f0]">
        <div className="flex justify-center">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-40">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Quantity
                </th>
                <th scope="col" className="py-3 px-6">
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
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6">{item.name}</td>
                    <td className="py-4 px-6">$ {item.price}.00</td>
                    <td>
                      <button onClick={() => handlerDeleteToCart(item.id)}>
                        -
                      </button>
                      <div className="py-4 px-6">{item.quantity}</div>
                      <button onClick={() => add(item)}>+</button>
                    </td>
                    <td className="py-4 px-6">
                      <button onClick={() => productDelete(item.id)}>X</button>
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
        <Link to={`/product/carrito`}>
          <button className="absolute mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 rounded">
            Buy now
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default ViewCart;
