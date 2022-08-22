import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../../redux/actions/products";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
//import Cart from "../Cart/Cart";
import { addProductToCart } from "../../redux/actions/cart";
import { getReview } from "../../redux/actions/review";

const Details = () => {
  //  const stateCart = useSelector((state) => state.cartReducer.cart);
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.productReducer.productDetail);
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const [loading, setLoading] = useState(false);

  //Product personal comments
  var reviewsOfProduct = reviews.filter((e) => e.ProductId === details.id);

  //Calc stars of rating
  var sumRating = reviewsOfProduct.reduce((sum, e) => e.rating + sum, 0);
  var indice = reviewsOfProduct.filter((e) => e.rating !== null);
  var cantValores = indice.length;
  var puntaje = sumRating / cantValores;
  var valor = Math.round(puntaje);

  let { id } = useParams();
  let history = useNavigate();
  useEffect(() => {
    dispatch(detailProduct(id));
    dispatch(getReview());
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

  function handlerComment() {
    if (!loading) setLoading(true);
    else setLoading(false);
  }
  function dog(value) {
    return value === 1 ? (
      "★"
    ) : value === 2 ? (
      "★★"
    ) : value === 3 ? (
      "★★★"
    ) : value === 4 ? (
      "★★★★"
    ) : value === 5 ? (
      "★★★★★"
    ) : (
      <div className="text-xl">No ranked yet!</div>
    );
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={details.image}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center ml-4">
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
                    {/* <p className="text-sm text-gray-900">★★★★★</p> */}
                    <p className="text-4xl mt-4 text-gray-900">{dog()}</p>
                  </div>
                </div>

                <div className="bg-white ">
                  <div className=" h-full p-5 ">
                    <button
                      className="m-8 bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
          <button
            className=" mt-16 bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlerComment()}
          >
            Reviews display
          </button>
          {loading === false ? (
            ""
          ) : (
            <div className="border-l-4 border-r-2 p-4  shadow-sm border-deep-purple-accent-400 mt-10  rounded shadow-lg">
              <div className=" m-5 border-x-8 border-gray-100 pb-6  rounded">
                <div className=" text-xl ml-10 mr-10 grid grid-cols-4 h-24 pt-8">
                  <div className="bg-gray-200 w-30 rounded shadow-lg">
                    DATE{" "}
                  </div>
                  <div className="bg-gray-100 rounded shadow-lg">TITLE</div>
                  <div className="bg-gray-200 w-80 rounded shadow-lg">
                    DESCRIPTION
                  </div>
                  <div className="bg-gray-100 ml-12 w-18 rounded shadow-lg">
                    RATING
                  </div>
                </div>

                {reviewsOfProduct.length <= 0 ? (
                  <div className="mt-10">
                    NO COMMENTS YET FOR THIS PRODUCT...
                  </div>
                ) : (
                  reviewsOfProduct.map((e, i) => (
                    <div
                      key={i}
                      className="  mb-4 ml-10 mr-10 grid grid-cols-4 mt-3 h-22"
                    >
                      <div className="w-30 rounded shadow-lg">{e.date}</div>
                      <div className="rounded shadow-lg">{e.title}</div>
                      <div className="w-80 rounded shadow-lg">
                        {e.description}
                      </div>
                      <div className="ml-12 w-18  rounded shadow-lg">
                        {dog()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Details;
