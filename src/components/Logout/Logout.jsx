import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import "./Logout.css";

export default function Logout() {
  // const { logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("rol");
    navigate("/");
  };

  return (
    <button className="logout_buttonText" onClick={() => onLogout()}>
      Log Out
    </button>
  );
}
