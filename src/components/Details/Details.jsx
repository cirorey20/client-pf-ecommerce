import React, { Fragment, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../../redux/actions/products";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
//import Cart from "../Cart/Cart";
import { addProductToCart } from "../../redux/actions/cart";

const Details = () => {
  //  const stateCart = useSelector((state) => state.cartReducer.cart);
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.productReducer.productDetail);
  let { id } = useParams();
  let history = useNavigate();
  useEffect(() => {
    dispatch(detailProduct(id));
  }, [dispatch, id]);

  function handlerAddToCartdos(product) {
    let productDes = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    dispatch(addProductToCart(productDes));
    history("/cart");
  }

  return (
    <Fragment>
      <NavBar />
      <br />
      <br />
      <div className="flex justify-center italic">
        <div className="relative w-30">
          <h1 className="text-6xl">{details.name}</h1>
        </div>
      </div>
      <br />

      <div className=" ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={details.image}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  ${details.price}
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  {details.description}
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">Rating:</h6>
                    <p className="text-sm text-gray-900">★★★★★</p>
                  </div>
                </div>

                <div className="bg-white ">
                  <div className=" h-full p-5 ">
                    <button
                      className="m-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handlerAddToCartdos(details)}
                    >
                      Add Cart
                    </button>
                    {userLogin?.user?.name ? (
                      <Link to={`/product/carrito`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Buy
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Details;
