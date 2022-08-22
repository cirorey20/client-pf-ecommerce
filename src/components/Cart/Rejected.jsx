/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar"
// import { resetCart } from "../../redux/actions/cart.js";
// import { useDispatch } from "react-redux";

const Rejected = () => {
  // const dispatch = useDispatch();
  // useEffect =()=> {
  //    dispatch(resetCart);
  // }
  return (
    <div>

      <NavBar />
      <div className="flex justify-center ">
        <div className="mt-56 mr-4 rounded-xl shadow-lg ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3GBZDUtQZG18toaC2NipX6amg40YFi0dXrGCC1f2BVGnwHX7Nvh3Uavuos8V0oUhpls&usqp=CAU"
            className="w-max mt-9"
          />
        </div>
        
        <div className="rounded-xl shadow-lg w-70 mt-56">
          <div className="w-80 p-8">
            <h1>Sorry</h1>
            <h3>Your buy has been wrong</h3>
          </div>
          <div>
            <div className="pt-12 pr-7 ">
              <Link
                to="/home"
                className=" ml-8 mb-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-black"
              >
                Return to homePage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rejected;
