import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import ProfileFav from "./ProfileFav";
import "./UserProfile.css";

export default function UserInfo() {
  const { user } = useSelector((state) => state.authReducer.userLogin);
  //const userProfile = useSelector((state) => state.userProfile);

  // const { user } = useAuth0();
  const [isFavorite, setIsFavorite] = useState(false);

  const [showPopupEditUser, setShowPopupEditUser] = useState(false);

  function toggleModal() {
    setShowPopupEditUser(!showPopupEditUser);
  }

  const toggleFav = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      {isFavorite ? (
        <ProfileFav />
      ) : (
        <div className="containerUserProfile">
          <div className="userProfileContainer">
            <div className="userImageContainer">
              <img src={user?.avatar} alt={user?.name} className="image" />
            </div>

            <div className="userInfo">
              <h1>My profile</h1>
            </div>

            <div className="userName">
              <p>User: {user.nickname}</p>
              <p>E-mail: {user.email}</p>
            </div>

            <div className="userInfo">
              <h2>Personal Information</h2>
            </div>

            {user ? (
              <div className="userName">
                <Link to="/editarCuenta">
                  <button className="userBtnTopRight" onClick={toggleModal}>
                    <FaRegEdit className="editIcon" />
                    Edit
                  </button>
                </Link>

                <p>First Name: {user[0]?.firstName}</p>
                <p>Last Name: {user[0]?.lastName}</p>
                <p>Gender: {user[0]?.gender}</p>
                <p>Nationality: {user[0]?.nationality}</p>
                <p>Birthdate: {user[0]?.birthDate}</p>
                <p>Address: {user[0]?.address}</p>
              </div>
            ) : null}

            <button
              className="btnOrders"
              onClick={() => toggleFav()}
              type="submit"
            >
              <BsHeartFill />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
