import React, { Fragment, useEffect, useState } from "react";
import Paginate from "../Paginate/Paginate";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProducts, getByFilters } from "../../redux/actions/products";
import { addFavorites } from "../../redux/actions/wishlist";
import Filters from "../Filters/Filters";
import FilterCategories from "../Filters/FilterCategories";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import Loader from "../Loader/Loader";
import { getCategories } from "../../redux/actions/categories";
import { addProductToCart } from "../../redux/actions/cart";
import { BsHeartFill } from "react-icons/bs";
import { createAdmin } from "../../redux/actions/auth";
import Swal from "sweetalert2";
import "./Home.css";

//comment
const Home = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productReducer.products);
  const [loading, setLoading] = useState(false);

  const allCategories = useSelector(
    (state) => state.categoryReducer.categories
  );

  const stateCart = useSelector((state) => state.cartReducer.cart);
  const favorites = useSelector((state) => state.wishlistReducer);
  const { user } = useSelector((state) => state.authReducer.userLogin);

  useEffect(() => {
    dispatch(createAdmin());
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(5);
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;
  const productsOfNow = allProducts.slice(firstPage, lastPage);

  const paged = (numPag) => {
    setCurrentPage(numPag);
  };

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

  function handlerFilters(filter) {
    dispatch(getByFilters(filter));
  }

  const [isFavorite, setIsFavorite] = useState(null);
  const handlerAddToFav = (e) => {
    dispatch(addFavorites(e));
  };

  useEffect(() => {
    dispatch(getProducts(search));
    // console.log(allProducts);
    dispatch(getCategories());
    paged(1);
  }, [dispatch, search]);

  return (
    <div className="home_container">
      <NavBar />

      <br />
      <div className="flex mb-6 ">
        <div className="filters_container">
          <p className="home_subtitle">Order</p>
          <hr />
          <Filters handlerFilters={handlerFilters} />
          <p className="home_subtitle">Filter</p>
          <hr />
          <FilterCategories allCategories={allCategories} />
        </div>
        <div className="flex-initial w-full md:container md:mx-auto bg-[#e2e8f0] rounded-xl shadow-lg">
          {loading ? (
            <Loader />
          ) : (
            <div className="m-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 home_productContainer">
              <div className="home_pagination">
                <Paginate
                  productsPage={productsPage}
                  allProducts={allProducts.length}
                  paged={paged}
                  currentPage={currentPage}
                />
              </div>
              <div className="home_products">
                {allProducts.length <= 0 ? (
                  <div>NO HAY PRODUCTOS...</div>
                ) : (
                  productsOfNow.map((e, i) => {
                    if (e.enable === true) {
                      return (
                        <div key={i} className="  ">
                          <div className="relative m-5 group ">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                              <img
                                src={e.image}
                                alt="NOT_FOUND"
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                              />
                            </div>

                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <Link to={`/product/${e.id}`}>
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    />
                                    {e.name}
                                  </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  Stock {e.stock}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                ${e.price}
                              </p>
                            </div>
                          </div>
                          {user &&
                            Object.keys(user || {})?.length > 0 &&
                            (favorites.some(
                              (element) => element.id === e.id
                            ) ? (
                              <div onClick={() => handlerAddToFav(e)}>
                                <BsHeartFill className="wishListTrue" />
                              </div>
                            ) : (
                              <div onClick={() => handlerAddToFav(e)}>
                                <BsHeartFill className="wishListFalse" />
                              </div>
                            ))}

                          <button
                            className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handlerAddToCart(e)}
                          >
                            Add Cart
                          </button>
                        </div>
                      );
                    }
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

/*
    allProducts.map((e, i) => {
        return(
            <div key={i} className="group relative m-5">

                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                    src={e.image}
                    alt="NOT_FOUND"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {e.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Stock</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${e.price}</p>
                </div>
            </div>
        )
    })

*/
