import React, { Fragment, useState } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from "axios";
//import { Link } from "react-router-dom";
// import { addProductToCart } from "../../redux/actions/cart";


const CheckoutForm = () => {

  const stripe = useStripe()
  const element = useElements()

  const handleSubmit = async (e) => {
      e.preventDefault();

      const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: "card",
          card: element.getElement(CardElement)
      })
      if(!error){
          
          const {id} = paymentMethod

          const {data} = await axios.post('http://localhost:3001/api/checkout',{
              id,
              amount: 1000
          });
          console.log(data);
          console.log(paymentMethod)
      }
  }
  return (
    <div className="flex justify-center">
    <form onSubmit={handleSubmit} className=" w-96 h-80 p-8 mt-36 border-2">
        <div className="" >
          <CardElement  className="border-2"/>
        </div>
            <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded"> 
                  buy 
            </button>
    </form>
  </div>
  );
};

/* const Cart = ({ stateCart }) => {
  // console.log(countCart)
  return (
    <Fragment>
      <div className="md:container md:mx-auto">
        <Link to={"/cart"}>
          <div className="float-right  bg-[#0f172a] text-white hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {stateCart.length} Carrito
          </div>
        </Link>
      </div>
    </Fragment>
  );
}; */

export default CheckoutForm;
