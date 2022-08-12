import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { useSelector } from "react-redux";
import axios from 'axios'
import {useState} from 'react'
import Cart from "../Cart/Cart";



const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const stateCart = useSelector((state) => state.cartReducer.cart);


  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
    })
    setLoading(true)
    if (!error) {
      const {id} = paymentMethod
      const allQuantity = stateCart.length
      var allToPay = 300
      for (var i=0;i<stateCart.length;i++) allToPay = allToPay + stateCart[i].price
      console.log(allToPay)
      try{
      const {data} = await axios.post('http://localhost:3001/api/checkout', {
        id,
        stateCart,
        allQuantity,
        allToPay
      })
      console.log(data)
      elements.getElement(CardElement).clear()
    }catch(error){
      console.log(error)
    }
    setLoading(false)
  }
}
  
  return (
    <div className="flex justify-center">
      <div className="border-2 w-100 h-72 mt-24" >
      <Cart stateCart={stateCart} />
      <form onSubmit={handleSubmit} className=" w-96 h-64 mt-36 border-2">
        <div className="">
          <div className="flex justify-initial" >
            Put date's of your card:
          </div>
          <div>
            <CardElement  className="border-2"/>
          </div>
              <button 
                
                type="button" 
                className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded"
                >
                  Buy  
              </button>
        </div>
      </form>
    </div>
    </div>
  )
}

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
