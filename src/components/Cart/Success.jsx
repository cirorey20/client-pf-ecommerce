import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { resetCart } from "../../redux/actions/cart.js";
// import { useDispatch } from "react-redux";

const Success = () => {
    // const dispatch = useDispatch();  
    // useEffect =()=> {
    //    dispatch(resetCart);
    // }
    return (
    <div className="flex justify-center">
        
          <div className="mt-56 mr-4 rounded-xl shadow-lg">
            <img
              src="https://w7.pngwing.com/pngs/645/207/png-transparent-gray-and-green-check-logo-success-text-payment-grass-thumbnail.png"
              className="w-max"
            />
          </div>
        <div className="rounded-xl shadow-lg w-70 mt-56">
            <div className="w-80 p-8">
                <h1>Thank you</h1>
                <h3>Your buy has been success</h3>
            </div>
        <div>
        <div className="pt-12 pr-7 ">
            <Link
                to="/home"
                className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-black"
                 >
                Return to homePage
            </Link>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Success;
