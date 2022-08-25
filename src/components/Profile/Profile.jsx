import React, { useRef } from "react";
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.authReducer.userLogin);
  // console.log(user);
  // const { user, isAuthenticated } = useAuth0();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const getName = (name) => {
    let result = name.split(" ");
    return result[0];
  };

  return (
    Object.keys(user || {}).length > 0 && (
      <>
        <button
          onClick={onClick}
          className="menu-trigger border-2 border-white"
        >
          <span>{getName(user.name)}</span>
          <img className="img" src={user.avatar} alt={getName(user.name)} />
        </button>

        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"} z-40`}
        >
          <ul className=" bg-black border-2 border-white font-bold rounded">
            <div className="">
              <li className="hover:bg-gray-400 border-4 border-black py-2 rounded">
                <Link to={"/logged/userInfo"}>
                  <div className="text-white">My Profile</div>
                </Link>
              </li>
              <li className="text-white hover:bg-gray-400 py-2 border-4 border-black rounded">
                <Link to={"/favorites"}>
                  <div className="text-white">Favourites ❤</div>
                </Link>
              </li>
              <li className="hover:bg-gray-400 border-4 border-black rounded">
                <Link to={"/user/myshopping"}>
                  <div className="text-white">My Shoppings</div>
                </Link>
              </li>

              <li className="hover:bg-blue-700 border-8 border-black rounded  py-4">
                <a href="#">
                  <div className="text-white">
                    <Logout />
                  </div>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </>
    )
  );
}
