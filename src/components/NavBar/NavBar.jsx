/* This example requires Tailwind CSS v2.0+ */
import { useSelector } from "react-redux";
import { Popover } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import SearchBtn from "../SearchBar/SearchBar";
import { GrCart } from "react-icons/gr";

import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import "./NavBarCart.css";

export default function LandingPage() {
  // const { isAuthenticated, isLoading } = useAuth0();
  const stateCart = useSelector((state) => state.cartReducer.cart);
  const { user } = useSelector((state) => state.authReducer.userLogin);

  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-evenly items-center border-b-4 h-28 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Link to={"/"}>
            <img
              className="h-20 w-25"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Universal-Pictures-Logo.svg"
              alt=""
            />
          </Link>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to={"/home"}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-[#0f172a]"
            >
              Home
            </Link>
          </div>

          <SearchBtn />
          <NavLink to="/cart" activeclassname="activeLink">
            <div className="cartIcon">
              <GrCart className="menuIcon" />
              <span className="itemCount">{stateCart.length}</span>
            </div>
          </NavLink>
          {/* <<<<<<< HEAD
          {/* {isAuthenticated ? <Profile /> : <Login />} */}

          {/* {!users.user ? (
            <div>
              <Link to={"/login"}>
                <button>LOGIN</button>
              </Link>
              <Link to={"/createUser"}>
                <button>REGISTER</button>
              </Link>
            </div>
          ) : (
            <Link to={"/Profile"}>
              <button class="p-5 border-4">
                <div>
                  <img class="w-10" src={users.user.avatar} alt="" />
                </div>
                <div>{users.user.name}</div>
              </button>
            </Link>
          )} */}
          {user && Object.keys(user || {})?.length > 0 ? (
            <Profile />
          ) : (
            <div class="flex">
              <div>
                <Login />{" "}
              </div>
              <div>
                <Link to={"/createUser"}>
                  <button class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-[#0f172a]">
                    REGISTER
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Popover>
  );
}
