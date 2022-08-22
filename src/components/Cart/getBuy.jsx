import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { resetCart } from "../../redux/actions/cart.js";
import { URL_API } from "../../config/config";
import { useNavigate, Link } from "react-router-dom";
import uno from "./1.jpg";
import NavBar from "../NavBar/NavBar";
import "./getBuy.css";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { cart: stateCart, total } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.authReducer.userLogin);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;

      var quantity = stateCart.reduce((prev, next) => prev + next.quantity, 0);
      var detail = (
        stateCart.map(
          (e) =>
            " Prod:" +
            e.name +
            " Quant:" +
            e.quantity +
            " UnitPrice:$" +
            e.price
        ) +
        ". QTotal:" +
        quantity +
        " Total:$" +
        total
      ).toString();
      try {
        axios
          .post(
            // `http://localhost:3001/api/checkout`, //NO PONER ASI LAS RUTAS!!
            `${URL_API}orders/checkout`,
            {
              id,
              amount: total,
              stateCart,
              detail,
              customer: user,
            }
          )
          .then(function (response) {
            console.log(response.data);
            dispatch(resetCart());
            setLoading(false);
            navigate("/success");
          })
          .catch(() => {
            dispatch(resetCart());
            setLoading(false);
            navigate("/rejected");
          }); //.finally(()=>{})

      var quantity = stateCart.reduce((prev,next)=>prev+next.quantity,0)
      var detail = (stateCart.map((e)=> " Prod:"+e.name+" Quant:"+e.quantity+" UnitPrice:$"+e.price)+". QTotal:"+quantity+" Total:$"+total).toString();
      // console.log(stateCart)
      // console.log(total)
      try {
        axios.post(
          // `http://localhost:3001/api/checkout`, //NO PONER ASI LAS RUTAS!!
          `${URL_API}orders/checkout`,
          {
            id,
            amount: total,
            stateCart,
            detail,
            customer: user,
          }
        )
        .then(function(response) {
          console.log(response.data)
          if (response.data.estado){
          dispatch(resetCart());
          setLoading(false);
          navigate("/success")
          }else {
            dispatch(resetCart());
            navigate("/rejected")
          }
        })
        .catch(()=> {     
           dispatch(resetCart());
          setLoading(false);
          navigate("/rejected")
        })        //.finally(()=>{})

        // console.log(data);
        // elements.getElement(CardElement).clear();
        // dispatch(resetCart);
      } catch (error) {
        console.log(error);
      }
    }
    catch(error){
      console.log(error)
    }
  }
  };

  return (
    <>
      <NavBar />
      <div className="getBuy_container">
        <div className="getBuy_image">
          <div className="pr-8 price">
            <p className="billing_info">Your billing pay information</p>
            <h4>USD 1,180.00</h4>
          </div>
          <div className="product_info">Some product info</div>
          <div className="stripe">
            Powered by Stripe | Condiciones | Privacidad
          </div>
        </div>
        <div className="getBuy_form">
          {user?.Address?.city &&
          user?.Address?.province &&
          user?.Address?.locality &&
          user?.Address?.street_number &&
          user?.Address?.apartment_floor ? (
            <div className="creditCard">
              <CardElement className="border-double border-4 border-black ml-1 mr-1" />
              <div className="pr-8">{user.name + " " + user.last_name}</div>
              <div className="pr-8">
                <h4>{user.email}</h4>
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                className="absolute  mt-16 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded"
              >
                Pay
              </button>
            </div>
          ) : (
            <div>
              <p>debes actulizar tus datos para poder hacer la compra</p>
              <Link to="/logged/userInfo">
                <button>actaulizar datos</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex justify-center">
        <div className="mt-56 mr-8 rounded-xl shadow-lg">
          <img src={uno} className="w-max" />
        </div>
        <div className="border-2 w-96 mt-56 rounded-xl shadow-lg">
          <form className=" w-93 mt-16 bg-gray-100">
            <div className="">
              <div className="flex justify-init ml-2 italic">
                Put your card's date:
              </div>
              <div>
                <CardElement className="border-double border-4 border-black ml-2 mr-2" />
              </div>
              <div className="flex justify-center w-64 ml-10">
                <div className="auto-cols-min mr-2 mt-16 italic">
                  <div className="pr-16">
                    Name: {user.name + " " + user.last_name}
                  </div>

                  <div className="pl-4">
                    <h4>Email: {user.email}</h4>
                  </div>
                </div>
              </div>
              <div className="  pr-28 pb-8">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="absolute  mt-16 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded"
                >
                  Buy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default CheckoutForm;
