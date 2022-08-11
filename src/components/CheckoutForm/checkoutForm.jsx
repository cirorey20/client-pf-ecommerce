/* import React from "react";
//import {loadStripe} from '@stripe/stripe-js';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from "axios";


//const stripePromise = loadStripe("pk_test_51LVJYJHeLDBhzI8Lq31jc8ysAX8rt772XLyBE6QcT2RSHemM1qKzefj0dtCwowXnfIrvwUcDpV5L75iKMGjCVQEm00vRY3grND")


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
    <form onSubmit={handleSubmit} >
         <CardElement/>
         <button>Buy</button>
    </form>
    );
};


export default CheckoutForm; */