/* This example requires Tailwind CSS v2.0+ */
import { useSelector } from "react-redux";
import { Popover } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import SearchBtn from "../SearchBar/SearchBar";
import Cart from "./cart-73-32.ico";
import Logo from "../../assets/logo.svg.png";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import "./NavBarCart.css";

export default function LandingPage() {
  // const { isAuthenticated, isLoading } = useAuth0();
  const stateCart = useSelector((state) => state.cartReducer.cart);
  const { user } = useSelector((state) => state.authReducer.userLogin);

  return (
    <div className="navbar_container">
      <div className="navbar_innerContainer_logo">
        {
          <Link to={"/"}>
            <img width={150} src={Logo} alt="" />
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
        <Link to={"/home"} className="link_container">
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
              <button className="link_container">REGISTER</button>
            </Link>
          </div>
        )}
      </div>

      <div className="navbar_innerContainer_home">
        <NavLink to="/cart" activeclassname="activeLink" className="cart">
          <div className="cartIcon">
            <img src={Cart} title="Cart" alt="Cart" />
            <span className="itemCount">
              {JSON.parse(localStorage.getItem("product"))?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
