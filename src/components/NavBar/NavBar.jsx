/* This example requires Tailwind CSS v2.0+ */
import { useSelector } from "react-redux";
import { Popover } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import SearchBtn from "../SearchBar/SearchBar";
import Cart from "./cart-73-32.ico";
// import Logo from "../../assets/logo.svg.png";
import Logo from "../../assets/logoUM.jpg";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

import "./NavBar.css";

export default function LandingPage() {
  // const { isAuthenticated, isLoading } = useAuth0();
  const stateCart = useSelector((state) => state.cartReducer.cart);
  const { user } = useSelector((state) => state.authReducer.userLogin);

  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar_container">
      <div className="navbar_innerContainer_logo">
        {
          <Link to={"/"}>
            <img width={90} className="rounded-full neon" src={Logo} alt="" />
          </Link>
        }
      </div>

      <div className="navbar_innerContainer_title">
        <p className="navbar_title">Universal Music</p>
      </div>

      <div className="navbar_innerContainer_searchBar">
        <SearchBtn />
      </div>

      <div className="navbar_innerContainer_home">
        <Link to={"/home"} className="navBar_linkContainer">
          HOME
        </Link>
      </div>

      <div className="navbar_innerContainer_buttons">
        {user && Object.keys(user || {})?.length > 0 ? (
          <div className="inner">
            <Profile />
          </div>
        ) : (
          <div className="inner">
            <Login />{" "}
            <Link to={"/createUser"}>
              <button className="navBar_linkContainer">REGISTER</button>
            </Link>
          </div>
        )}
      </div>

      <div className="">
        {theme === "bg-[#fbfbfccb]" ? (
          <MdDarkMode
            size={26}
            className="cursor-pointer mt-12"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <BsFillLightbulbFill
            size={22}
            className="cursor-pointer text-white mt-12"
            onClick={() => setTheme("bg-[#fbfbfccb]")}
          />
        )}
      </div>

      <div className="navbar_innerContainer_home">
        <NavLink to="/cart" activeclassname="activeLink" className="cart">
          <div className="cartIcon">
            <img src={Cart} title="Cart" alt="Cart" className="navBar_icon" />
            <span className="itemCount">
              {stateCart.reduce((prev, curr) => prev + curr.quantity, 0)}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
