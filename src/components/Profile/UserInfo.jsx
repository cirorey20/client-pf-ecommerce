import React from "react";
import UserProfile from "../UserProfile/UserProfile";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";

export default function UserInfo() {
  return (
    <div className="page-shopping">
      <div className="nav_page_user">
        <NavBar />
      </div>
      <div className="user_page_container">
        <UserProfile />
      </div>
      <div className="footer_page_user">
        <Footer />
      </div>
    </div>
  );
}
