/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import SearchBtn from "../SearchBar/SearchBar";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Logo from "../../assets/logo.svg.png";
import "./Navbar.css";

export default function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <Link to={"/"} className="link">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar_title">
        <Link to={"/"}>Universal Music</Link>
      </div>
      <div className="navbar_searchBar">
        <div className="inner_searchBar">
          <SearchBtn />
        </div>
        <div className="inner_home">
          <Link to={"/home"}>Home</Link>
        </div>
        <div className="inner_login">
          {isAuthenticated ? <Profile /> : <Login />}
        </div>
      </div>
    </div>
  );
}
