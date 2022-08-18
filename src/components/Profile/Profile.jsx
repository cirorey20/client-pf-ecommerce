import React, { useRef } from "react";
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.authReducer.userLogin);
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
        <button onClick={onClick} className="menu-trigger">
          <span>{getName(user.name)}</span>
          <img className="img" src={user.avatar} alt={getName(user.name)} />
        </button>

        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <Link to={"/user/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/logged/userInfo"}>My Profile</Link>
            </li>

            <li>
              <a href="#">
                <Logout />
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  );
}
