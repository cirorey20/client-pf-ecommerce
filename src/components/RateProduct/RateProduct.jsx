import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import "./RateProduct.css";
import { detailOrder } from "../../redux/actions/orders.js";

const RateProduct = () => {
  //  const stateCart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  const details = useSelector((state) => state.ordersReducer.orderDetail);
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const [loading, setLoading] = useState(false);
  const [stars, setStars] = useState([
    {
      name: 1,
      value: 1,
      checked: false,
    },
    {
      name: 2,
      value: 2,
      checked: false,
    },
    {
      name: 3,
      value: 3,
      checked: false,
    },
    {
      name: 4,
      value: 4,
      checked: false,
    },
    {
      name: 5,
      value: 5,
      checked: false,
    },
  ]);

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
  }, [dispatch]);

  function renderRadioButtons() {
    for (let i = 0; i <= stars.length; i++) {
      return <input type="radio" value={stars[i].value} />;
    }
  }

  function onHandleChange(e) {
    const hey = stars.map((e) => e.name);
    console.log(hey);
    //setStars([{ name: { checked: true } }]);
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
    <div className="rateProduct_container">
      <NavBar />
      <h1 className="rateProduct_title">Purchase Details</h1>
      <div className="rateProduct_innerContainer">
        <p>{time}</p>
        <p>{name}</p>
        {<img src={image} alt="product image" width={"200px"} />}
        <p>{description}</p>
        <p>Quantity:{quantity}</p>
        <p>Price: {price}</p>
        <p>Payment Method:{paymentMethod}</p>
        <div className="rate_review">
          <textarea rows="6" className="review" />
          <div className="stars_container">
            {renderRadioButtons()}
            {/*             {stars.map((e, id) => {
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
            })} */}
          </div>
          <button className="generic_button">Review</button>
          <button className="generic_button">Rate</button>
        </div>
      </div>
    </div>
  );
};

export default RateProduct;
