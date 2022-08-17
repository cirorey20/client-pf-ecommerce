import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import  "../../assets/tailwind.css";

const HomeAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    return (
        <Fragment>
            <div className="lg:mx-auto px-2 sm:px-6 lg:px-8">

                <div className="flex justify-between p-5">
                    <div className="text-sky-400 ">
                        {
                        <Link to={"/admin/home"}>
                            <img className="" width={150} src={'https://upload.wikimedia.org/wikipedia/commons/4/4f/Universal-Pictures-Logo.svg'} alt="" />
                        </Link>
                        }
                    </div>
                    <div className="place-content-center">
                        <div className="text-4xl pt-5">
                        dashboardadmin
                        </div>
                    </div>
                    <div className="float-right">
                        <span className="flex flex-nowrap pt-5">
                            <p className="text-2xl mt-2">nameadmin</p>
                            <button onClick={()=>onLogout()} className="text-1xl ml-5 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">logout</button>
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen z-index-1">
                <div className="">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#8A3FFC" d="M66.9,-23.1C75.1,3.6,62.2,35.7,39.9,51C17.6,66.2,-14.1,64.6,-29.5,51C-45,37.3,-44.2,11.6,-36.6,-14.3C-29,-40.1,-14.5,-66.1,7.4,-68.5C29.3,-70.9,58.7,-49.8,66.9,-23.1Z" transform="translate(100 100)" />
                </svg>
                </div>
            </div> */}
            <br /><br /><br />
            <div className="m-20 w-full md:container md:mx-auto bg-[#e2e8f0] rounded-xl shadow-lg">
                <div className="flex flex-row flex-wrap justify-center content-center ">

                    <div className="grid grid-cols-3 gap-4 content-center p-10">

                        <div className="bg-purple-700 ">
                            <Link to={'/product/dashBoard'} className="flex flex-row flex-wrap justify-center content-center h-40 bg-purple-700 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className=" mb-2 text-teal-50 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PRODUCTS</h5>
                            </Link>
                        </div>
                        <div className="bg-purple-700 ">
                            <Link to={'/users/dashboard'} className="flex flex-row flex-wrap justify-center content-center h-40 bg-purple-700 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-teal-50 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">USERS</h5>
                            </Link>
                        </div>
                        <div className="bg-purple-700">
                            <Link to={'/orders'} className="flex flex-row flex-wrap justify-center content-center h-40 bg-purple-700 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-teal-50 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MANAGERS ORDERS</h5>
                            </Link>
                        </div>
                        <div className="bg-purple-700 ">
                            <Link to={'/product/categories'} className="flex flex-row flex-wrap justify-center content-center h-40 bg-purple-700 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-teal-50 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CATEGORIES</h5>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default HomeAdmin;