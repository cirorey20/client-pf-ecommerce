import React, { Fragment } from "react";
import NavAdmin from "./NavAdmin";
import { Link } from "react-router-dom";
import "./homeAdmin.css";

const HomeAdmin = () => {

    return (
        <div className="contenParehnt">

            <div className="contenFull relative">
                <NavAdmin section={'Admin'}/>

                <br /><br /><br />
                <div className="containerBox z-1 ">
                    <Link to={'/product/dashBoard'} className="">
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
                    </Link>
                </div>

            </div>
                <div className="static wave  ">
                    <div className="relative bottom-15 left-0">

                        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#e7008a" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,149.3C640,117,800,107,960,112C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>
        </div>
    )
}

export default HomeAdmin;