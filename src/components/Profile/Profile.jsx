import React, { useRef } from "react";
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    isAuthenticated && (
      <div className="container z-50">
        <div>
          <button onClick={onClick} className="menu-trigger">
            {/* <span>{user.name}</span> */}
            <img className="img" src={user.pcture} alt={user.name} />
          </button>

          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <Link to={"/logged/userInfo"}>My Profile</Link>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
              <li>
                <a href="#">
                  <Logout />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  );
}
