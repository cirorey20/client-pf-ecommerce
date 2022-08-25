import React, { Fragment } from "react";
import NavAdmin from "./NavAdmin";
import { Link } from "react-router-dom";
import "./homeAdmin.css";

const HomeAdmin = () => {
  return (
    <div>
      <NavAdmin />
      <div className="admin_container">
        <div className="admin_option">
          <Link to={"/product/dashBoard"} className="">
            <h5>PRODUCTS</h5>
          </Link>
        </div>
        <div className="admin_option">
          <Link to={"/users/dashboard"} className="">
            <h5>USERS</h5>
          </Link>
        </div>
        <div className="admin_option">
          <Link to={"/orders"} className="">
            <h5>ORDERS</h5>
          </Link>
        </div>
        <div className="admin_option">
          <Link to={"/product/categories"} className="">
            <h5>CATEGORIES</h5>
          </Link>
        </div>
        {/* <Link to={'/product/dashBoard'} className="">
                        <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                            <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">PRODUCTS</h5>
                        </div>
                    </Link>
                    <Link to={'/users/dashboard'} className="">
                        <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                            <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">USERS</h5>
                        </div>
                    </Link>
                    <Link to={'/orders'} className="">
                        <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                            <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">ORDERS</h5>
                        </div>
                    </Link>
                    <Link to={'/product/categories'} className="">
                        <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                            <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">CATEGORIES</h5>
                        </div>
                    </Link> */}
      </div>
    </div>
  );
};

export default HomeAdmin;
