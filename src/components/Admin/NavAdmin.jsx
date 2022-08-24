import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import Logo from "../../assets/logoUM.jpg";
import "./NavAdmin.css";

const NavAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("rol");

    navigate("/login");
  };
  return (
    <div className="navbaradmin_container">
      <div className="navbar_innerContainer_logo">
        {
          <Link to={"/admin/home"}>
            <img width={90} className="rounded-full neon" src={Logo} alt="" />
          </Link>
        }
      </div>

      <div className="text-4xl pt-5  ">Admin Dashboard</div>
      <div className="float-right">
        <span className="flex flex-nowrap pt-1 md:pt-5">
          {/* <p className="text-2xl mt-2 invisible md:visible">Admin</p> */}
          <button onClick={() => onLogout()} className="select_styles">
            logout
          </button>
        </span>
      </div>
    </div>
  );
};

export default NavAdmin;
