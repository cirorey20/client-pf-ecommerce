import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import Logo from "../../assets/logoUM.jpg";

const NavAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout());
        localStorage.removeItem('rol');
        
        navigate("/login");
    };
    return (
        <Fragment>
            <div className="lg:mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between mt-5 md:p-5">
                {/* p-5 */}
                    <div className="text-sky-400 ">
                        {
                            <Link to={"/admin/home"}>
                                <img width={90} className="rounded-full neon" src={Logo} alt="" />
                            </Link>
                        }
                    </div>
                    <div className="place-content-center invisible md:visible">
                    {/* pt-5 */}
                        <div className="text-4xl pt-5  ">
                            ADMIN
                        </div>
                    </div>
                    <div className="float-right">
                        <span className="flex flex-nowrap pt-1 md:pt-5">
                            <p className="text-2xl mt-2 invisible md:visible">nameadmin</p>
                            <button onClick={() => onLogout()} className="text-1xl ml-5 text-white bg-[#1B0FC5] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">logout</button>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavAdmin;