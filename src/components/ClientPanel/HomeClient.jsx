import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import "./homeClient.css";

const HomeClient = () => {

    return (
        <Fragment>
            {/* <NavAdmin /> */}

            <br /><br /><br />
            <div className=" z-1">
                <Link to={'/'} className="">
                    <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                        <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">ORDERS</h5>
                    </div>
                </Link>
                <Link to={'/'} className="">
                    <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                        <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">FAVORITES</h5>
                    </div>
                </Link>
                <Link to={'/'} className="">
                    <div className="h-60 w-60 bg-[#1B0FC5] hover:bg-violet-800 m-5 rounded-lg grid justify-items-center content-center">
                        <h5 className="  mb-2 text-2xl font-bold tracking-tight text-white">PROFILE</h5>
                    </div>
                </Link>
            </div>

        </Fragment>
    )
}

export default HomeClient;