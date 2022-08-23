import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import "./homeClient.css";
import NavBar from "../NavBar/NavBar";
import { BsHeartFill } from "react-icons/bs";


const HomeClient = () => {

    return (
        <Fragment>
            
            <NavBar />

            <br /><br /><br />
            <div className=" z-1">
                <Link to={'/user/myshopping'} className="">
                    <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                        <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">MY SHOPPINGS</h5>
                    </div>
                </Link>
                <Link to={'/favorites'} className="">
                    <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                        <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">FAVORITES ❤</h5>
                    </div>
                </Link>
                <Link to={'/logged/userInfo'} className="">
                    <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                        <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">PROFILE</h5>❤
                    </div>
                </Link>
            </div>

        </Fragment>
    )
}

export default HomeClient;