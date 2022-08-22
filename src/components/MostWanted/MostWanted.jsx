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

  return <div></div>;
}
