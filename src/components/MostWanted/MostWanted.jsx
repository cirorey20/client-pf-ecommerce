import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/cart";
import { addFavorites } from "../../redux/actions/wishlist";
import "./MostWanted.css";
import { BsHeartFill } from "react-icons/bs";
import "flowbite";
import Swal from "sweetalert2";

export default function MostWanted({ favorite }) {
  const allProducts = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const handlerAddToFav = (favorite) => {
    dispatch(addFavorites(favorite));
  };

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(4);
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;
  const productsOfNow = allProducts.slice(firstPage, lastPage);

  function handlerAddToCart(product) {
    let productDes = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const obtener = JSON.parse(localStorage.getItem("product")) || [];

    const localStores = localStorage.setItem(
      "product",
      JSON.stringify([...obtener, productDes])
    );

    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: productDes.name,
      text: `Added to Cart`,
    });

    dispatch(addProductToCart(productDes));
  }

  return (
    <div className="">
      <div className="relative flex pt-10 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 px-3 text-xl text-gray-400">
          Más buscados
        </span>
        <div className="flex-grow border-t border-gray-400 "></div>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {productsOfNow.map((e, i) => {
          return (
            <div className="flex flex-wrap justify-center">
              <div className="min-h-80 flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 product-cardLan ">
                <img src={e.image} alt="" className="h-28 m-6 imgLan" />

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${e.id}`}>
                        <h2>{e.name}</h2>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Stock {e.stock}
                    </p>
                  </div>
                  <div className="badge2">${e.price} </div>
                </div>
                <button onClick={() => handlerAddToFav(favorite)}>
                  <BsHeartFill className="wishListTrue" />
                </button>

                <button
                  className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handlerAddToCart(e)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
