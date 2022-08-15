import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { resetCart } from "../../redux/actions/cart.js";
import {URL_API} from '../../config/config';
import { useNavigate } from "react-router-dom";
import uno from "./1.jpg"


const CheckoutForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { cart:stateCart, total} = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.authReducer.userLogin)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      const allQuantity = stateCart.reduce((prev,curr)=> prev+curr.quantity,0);
      var allToPay = total;
      //console.log(allQuantity)
      try {
        axios.post(
          // `http://localhost:3001/api/checkout`, //NO PONER ASI LAS RUTAS!!
          `${URL_API}orders/checkout`,
          {
            id,
            amount: allToPay,
            stateCart,
            allQuantity,
            customer: user,
            allToPay
          }
        )
        .then(function(response) {
<<<<<<< HEAD
          console.log(response.data)
          //dispatch(resetCart);
          setLoading(false);
          navigate("/success")
        })
        .catch((error)=> {     
          // dispatch(resetCart);
          console.log(error)
=======
          console.log(response)
          dispatch(resetCart());
          setLoading(false);
          navigate("/success")
        })
        .catch(()=> {     
           dispatch(resetCart());
>>>>>>> 92242efdba9167709b465421d888b497ab128f12
          setLoading(false);
          navigate("/rejected")
        })
        //.finally(()=>{})
        // console.log(data);
        // elements.getElement(CardElement).clear();
        // dispatch(resetCart);
      } catch (error) {
        console.log(error);
      }
      
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-56 mr-8 rounded-xl shadow-lg">
            <img
              src={uno}
              className="w-max"
            />
      </div>
      <div className="border-2 w-96 mt-56 rounded-xl shadow-lg">
          <div className="">
            <Cart stateCart={stateCart} />
          </div>
          <form className=" w-93 mt-16 bg-gray-100">
            <div className="">
                <div className="flex justify-init ml-2 italic">
                    Put date's of your card:
                </div>
                <div>
                    <CardElement className="border-double border-4 border-black ml-2 mr-2" />
                </div>
                <div className="flex justify-center w-64 ml-10">
                <div className="auto-cols-min mr-2 mt-16 italic">
                  <div className="pr-16">
                      Name:  {user.name+" "+user.last_name}
                  </div>
                  
                  <div className="pl-4">
                    <h4>
                       Hotmail: {user.email}
                    </h4>
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
    </div>
  );
};

export default CheckoutForm;

// {loading ?
//   (
//     <svg
//       className="animate-spin h-5 w-5 mr-3 "
//       viewBox="0 0 24 24"
//       >
//       </svg>
//       )
//       :
//       "buy"
//       }
