import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import "./RateProduct.css";
import { detailOrder } from "../../redux/actions/orders.js";
import { createReview } from "../../redux/actions/review";


const RateProduct = () => {
  const navigate = useNavigate()
  //  const stateCart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  const details = useSelector((state) => state.ordersReducer.orderDetail);
  console.log(details)
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  console.log("reviews"+reviews)
  const idProduct = details.ProductOrders?.map((e) => e.Product?.id);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [ input, setInput ] = useState({
    description: "",
    rating: "",
  });
  //console.log(input)

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
   const getStar = stars.find(star => star.checked)
  }
  
  function onSumbit(e){
    e.preventDefault();
    const getStar = stars.find(star => star.checked===true)
    console.log("getStar"+getStar)
    var descriptionString = description.toString()
    var title = "hola"
    dispatch(
      createReview(
        {description:descriptionString, title, ranking:getStar.value, UserId:details.User.id, ProductId:idProduct.toString() }));
      navigate("/user/myshopping")
      }

  const [stars, setStars] = useState([
    {
      name: "1",
      value: 1,
      checked: false,
    },
    {
      name: "2",
      value: 2,
      checked: false,
    },
    {
      name: "3",
      value: 3,
      checked: false,
    },
    {
      name: "4",
      value: 4,
      checked: false,
    },
    {
      name: "5",
      value: 5,
      checked: false,
    }]
  );
  

  
 

  const { idOrder } = useParams();

  //Product personal comments
  var reviewsOfProduct = reviews.filter((e) => e.ProductId === details.id);

  //Calc stars of rating
  var sumRating = reviewsOfProduct.reduce((sum, e) => e.rating + sum, 0);
  var indice = reviewsOfProduct.filter((e) => e.rating !== null);
  var cantValores = indice.length;
  var puntaje = sumRating / cantValores;
  var valor = Math.round(puntaje);

  useEffect(() => {
    if (idOrder) {
      dispatch(detailOrder(idOrder));
      
    }
  }, []);

 /*  const newCategories = form?.categories?.map((category) => {
    if (e.target.value === category.name)
    category.checked = e.target.checked;
    return category;
  }); */

  function onHandleChange(e) {
    const allStars = stars.map((element, id) => {
      if (e.target.name === element.name){
        element.checked = e.target.checked
      }
      else{
        element.checked = false
      }
      return element
      //return Object.assign({}, element)

    });
    setStars([...allStars]);
    console.log(allStars)
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



  const image = details.ProductOrders?.map((e) => e.Product?.image);
  const price = details.ProductOrders?.map((e) => e.Product?.price);
  const name = details.ProductOrders?.map((e) => e.Product?.name);
  const description = details.ProductOrders?.map((e) => e.Product?.description);
  const quantity = details.ProductOrders?.map((e) => e.quantity);
  const time = details.time;
  const paymentMethod = details.payment_method;

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className="flex justify-center italic">
        <div className="relative w-30">
          <h1 className="text-5xl ">Comment your purchase:</h1>
        </div>
      </div>
      <br />

        
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img src={image} alt="product image" className="object-cover w-full h-56 rounded shadow-lg sm:h-96"/>
            </div>
            <div className="flex flex-col justify-center ml-4">
              <div className=" max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {name}
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Detail: {description}
                    <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                </p>
              </div>
              <div className="grid gap-5 border-8 border-black">
                <div className="bg-black text-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 w-100 border border-l-0 rounded-r">
                    
                    {/* <p className="text-sm text-gray-900">★★★★★</p> */}
                    
                    <form onSubmit={(e) => onSumbit(e)}>
                    <p className="my-2 flex flex-left ml-16">Review this product ★ </p>
                      <textarea
                        rows="6"
                        placeholder="What do you think?"
                        className="w-96 border-4 border-black"
                        value={input.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="grid grid-cols-5 mx-14 my-2">
                  {stars.map((e, id) => {
                    return (
                        <div key={id} className="">
                      <input
                        name={e.name}
                        className="m-2"
                        type="radio"
                        value={e.value}
                        onChange={onHandleChange}
                        checked={e.checked}
                      />
                      {e.name}
                    </div>
                  );
                })}
                </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="sumbit"
                disabled={disabled}
                //onChange={(e) => handleChange(e)}
              >
                Review
              </button>
                    </form>
                    
                  </div>
                </div>      
              </div>
              </div>
        </div>
    </div>
    </div>
  );
};

export default RateProduct;
{/* 
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
              <img src={image} alt="product image" className="object-cover w-full h-56 rounded shadow-lg sm:h-96"/>
            </div>
            <div className="flex flex-col justify-center ml-4">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {name}
                  <br className="hidden md:block" />
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Detail:{description}
                    <p>Quantity:{quantity}</p>
                <p>Price: {price}</p>
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">Rating:</h6>
                    {/* <p className="text-sm text-gray-900">★★★★★</p> */}
                    {/* <p className="text-4xl mt-4 text-gray-900">              
                    <form onSubmit={(e) => onSumbit(e)}>
                    <h3>Leave us your comments of the product buy ★</h3>
                      <textarea
                        rows="6"
                        className=""
                        value={input.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="">
                  {stars.map((e, id) => {
                    return (
                        <div key={id}>
                      <input
                        name={e.name}
                        type="radio"
                        value={e.value}
                        onChange={onHandleChange}
                        checked={e.checked}
                      />
                      {e.name}
                    </div>
                  );
                })}
              </div>
              <button
                className=""
                type="sumbit"
                disabled={disabled}
                //onChange={(e) => handleChange(e)}
              >
                Review
              </button>
                    </form>
                    </p>
                    
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
};  */}
