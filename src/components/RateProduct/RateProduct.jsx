import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import "./RateProduct.css";
import { detailOrder } from "../../redux/actions/orders.js";
import { getReview } from "../../redux/actions/review";

const RateProduct = () => {
  //  const stateCart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  const details = useSelector((state) => state.ordersReducer.orderDetail);
  console.log(details.User.id)
  const reviews = useSelector((state) => state.reviewReducer.reviews);
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
    const getStar = stars.find(star => star.checked)
    dispatch(getReview({...input, rating: getStar.value, UserId:details.User.id }));
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
      <div className="rateProduct_container">
        <h1 className="rateProduct_title">Purchase Details</h1>

        <div className="rateProduct_innerContainer">
          <div className="productDetails_container">
            <img src={image} alt="product image" width={"400px"} />
            <p>{name}</p>
            <p>
              asdlakjsdl;kjsd;sadijf;oaijdf;lasdjfl;akjdf;laskjdfl;sakjdfal;skdjf;laksdjfaasoidj;psaiojdoisudopaisudopAIDOAPISD[aiposjdpoasjdopajskdl'ojkasd'lkjas'djklask;ldjla;skjd;laksjd;laksjd]
            </p>
            <p>Quantity:{quantity}</p>
            <p>Price: {price}</p>
            {/* <p>Payment Method:{paymentMethod}</p> */}
            {/* <p>{time}</p> */}
          </div>
          <hr />

          <form onSubmit={(e) => onSumbit(e)}>
          <div className="any">
            <div className="rateProduct_innerContainer_division">
              <h3>Leave your comment</h3>
              <textarea
                rows="6"
                className="review"
                value={input.description}
                name="description"
                onChange={(e) => handleChange(e)}
              />
              
            </div>
            
            <div className="rateProduct_innerContainer_division">
              <div className="stars_container">
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
              {/* <button className="generic_button"
                      type="sumbit"
              >Rate</button> */}
            </div>
          </div>
          <button
                className="generic_button"
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
  );
};

export default RateProduct;
