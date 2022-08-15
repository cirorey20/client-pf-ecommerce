import React, { Fragment, useEffect, useState } from "react";
import Paginate from "../Paginate/Paginate";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProducts, getByFilters } from "../../redux/actions/products";
import Filters from "../Filters/Filters";
import FilterCategories from "../Filters/FilterCategories";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import Loader from "../Loader/Loader";
import { getCategories } from "../../redux/actions/categories";
import { addProductToCart } from "../../redux/actions/cart";
import Cart from "../Cart/Cart";
import Alert from "../Alert/Alert";
import Swal from "sweetalert2";

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

  // const obtener = localStorage.getItem("product");
  // console.log(obtener);
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

  //cart
  const [productsCart, setProductsCart] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  //alert
  const [alert, setAlert] = useState(false);
  const [textAlert, setTextAlert] = useState(null);

  function handlerAddToCart(product) {
    let productDes = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const obtener = JSON.parse(localStorage.getItem("product")) || [];
    // console.log(obtener);

    const localStores = localStorage.setItem(
      "product",
      JSON.stringify([...obtener, productDes])
    );
    // console.log(localStores);
     const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "The product was added to the cart!",
    });

    // console.log("Product", productDes);
    dispatch(addProductToCart(productDes));
    setTextAlert(productDes.name);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);

    // console.log(stateCart);
  }

  function handlerFilters(filter) {
    dispatch(getByFilters(filter));
  }

  useEffect(() => {
    dispatch(getProducts(search));
    // console.log(allProducts);
    dispatch(getCategories());
    paged(1);
  }, [dispatch, search]);

  return (
    <Fragment>
      <NavBar />
      <br />
      <br />
      <div className="mb-4">
        <Paginate
          productsPage={productsPage}
          allProducts={allProducts.length}
          paged={paged}
          currentPage={currentPage}
        />
      </div>
      <div className="flex mb-6">
        <div className="flex-none  m-2 w-40 h-100 ">
          <Filters handlerFilters={handlerFilters} />
          <FilterCategories allCategories={allCategories} />
        </div>
        <div className="flex-initial w-full md:container md:mx-auto bg-[#e2e8f0] rounded-xl shadow-lg">
          <Alert alert={alert} textAlert={textAlert} />

          {loading ? (
            <Loader />
          ) : (
            <div className="m-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
          )}
        </div>

        <div className="flex-none  m-2 w-40 h-100">
          <div className=" rounded-xl shadow-2xl p-8 h-40">
            {/* <Cart stateCart={stateCart} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
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
