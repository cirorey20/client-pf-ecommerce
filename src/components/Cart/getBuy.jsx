import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from 'axios'
import {useState} from 'react'


const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
    })
    setLoading(true)
    if (!error) {
      const {id} = paymentMethod
      try{
      const {data} = await axios.post('http://localhost:3001/api/checkout', {
        id,
        amount: 10000,
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
      <form onSubmit={handleSubmit} className=" w-96 h-80 p-8 mt-36 border-2">
          <div className="" >
            <CardElement  className="border-2"/>
          </div>
              <button disable={!stripe} type="button" className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 py-2 px-4 rounded"> 
                    {loading ? (<svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg> ): "buy"} 
              </button>
      </form>
    </div>
  )
}

export default CheckoutForm;