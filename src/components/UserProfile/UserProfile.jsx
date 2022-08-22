import React, { useState, useEffect, useDebugValue } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/auth";
import { profileUpdate } from "../../redux/actions/auth";
import EditForm from "../Favorite/EditForm";
import { BsHeartFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import ProfileFav from "./ProfileFav";
import "./UserProfile.css";

export default function UserInfo() {
  const { user } = useSelector((state) => state.authReducer.userLogin);
  const [userProfile, setUserProfile] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(updateUser(userProfile));
  };

  useEffect(() => {
    setUserProfile({ ...user?.Address, ...user });
  }, [user]);
  console.log(userProfile);

  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };
  //console.log(user);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const toggleFav = () => {
    setIsFavorite(!isFavorite);
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const [newProfile, setNewProfile] = useState({
    id: "",
    name: "",
    last_name: "",
  });
  const editProfile = (e) => {
    const newData = e.target.value;
    const dataType = e.target.name;
    if (dataType === "name") {
      setNewProfile({ ...newProfile, id: user.id, name: newData });
    }
    if (dataType === "lastName") {
      setNewProfile({ ...newProfile, id: user.id, last_name: newData });
    }
  };

  const onSubmit = (e) => {
    //e.preventDefault();
    dispatch(profileUpdate(newProfile));
  };
  //console.log(user);

  if (isFavorite) {
    return <ProfileFav toggleFav={toggleFav} />;
  }

  if (!isFavorite) {
    return (
      <div>
        <>
          {isEdit && (
            <EditForm
              onSubmit={onSubmit}
              editProfile={editProfile}
              toggleEdit={toggleEdit}
            />
          )}

          <div className="containerUserProfile">
            <div className="userProfileContainer">
              <div className="userImageContainer">
                <img src={user?.avatar} alt={user?.name} className="image" />
              </div>

              <div className="userInfo">
                <h1>My profile</h1>
              </div>

              <div className="userName">
                <p>E-mail: {user?.email}</p>
              </div>

              <div className="userInfo">
                <h2>Personal Information</h2>
              </div>

              {user ? (
                <div className="userName">
                  <button className="userBtnTopRight" onClick={toggleEdit}>
                    <FaRegEdit className="editIcon" />
                    Edit
                  </button>

                  <p>First Name: {user?.name}</p>
                  <p>Last Name: {user?.last_name}</p>
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
        </>

        <div>
          <img src={userProfile?.avatar} alt="" />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={userProfile?.name}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="last_name"
            type="text"
            value={userProfile?.last_name}
          />
        </div>
        <div>{userProfile?.email}</div>
        <div>
          <input
            onChange={handleChange}
            name="city"
            type="text"
            value={userProfile?.city}
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="locality"
            type="text"
            value={userProfile?.locality}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="province"
            type="text"
            value={userProfile?.province}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="street_number"
            type="text"
            value={userProfile?.street_number}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="apartment_floor"
            type="text"
            value={userProfile?.apartment_floor}
          />
        </div>

        <div>
          <button onClick={handleClick}>SAVE</button>
        </div>
      </div>
    );
  }
}
