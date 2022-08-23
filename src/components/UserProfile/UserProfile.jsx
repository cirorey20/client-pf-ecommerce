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
import AddressEditForm from "../Favorite/AddressEditForm";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";


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
  const [isEditAddress, setIsEditAddress] = useState(false);

  const toggleFav = () => {
    setIsFavorite(!isFavorite);
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const toggleEditAddress = () => {
    setIsEditAddress(!isEditAddress);
  };
  const [newProfile, setNewProfile] = useState({
    id: "",
    name: "",
    last_name: "",
  });

  const [newProfileAddress, setNewProfileAddress] = useState({
    AddressId: "",
    city: "",
    province: "",
    street_number: "",
    locality: "",
    apartment_floor: ""
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

  const editProfileAddress = (e) => {
    const newData = e.target.value;
    const dataType = e.target.name;
    if (dataType === "city") {
      setNewProfileAddress({ ...newProfileAddress, AddressId: user.AddressId, city: newData });
    }
    if (dataType === "province") {
      setNewProfileAddress({ ...newProfileAddress, AddressId: user.AddressId, province: newData });
    }
    if (dataType === "street_number") {
      setNewProfileAddress({ ...newProfileAddress, AddressId: user.AddressId, street_number: newData });
    }
    if (dataType === "locality") {
      setNewProfileAddress({ ...newProfileAddress, AddressId: user.AddressId, locality: newData });
    }
    if (dataType === "apartment_floor") {
      setNewProfileAddress({ ...newProfileAddress, AddressId: user.AddressId, apartment_floor: newData });
    }
  };

  const onSubmit = (e) => {
    //e.preventDefault();
    dispatch(profileUpdate(newProfile));
  };

  const onSubmitAddress = (e) => {
    //e.preventDefault();
    dispatch(profileUpdate(newProfileAddress));
  };
  //console.log(user);

  if (isFavorite) {
    return <ProfileFav toggleFav={toggleFav} />;
  }

  if (!isFavorite) {
    return (
      <div>
              <NavBar />
        <>
          {isEdit && (
            <EditForm
              onSubmit={onSubmit}
              editProfile={editProfile}
              toggleEdit={toggleEdit}
            />
          )}

          {isEditAddress && (
            <AddressEditForm
              onSubmit={onSubmitAddress}
              editProfile={editProfileAddress}
              toggleEdit={toggleEditAddress}
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

              <div className="userInfo">
                <h2>Address Information</h2>
              </div>

              {user ? (
                <div className="userName">
                  <button className="userBtnTopRight" onClick={toggleEditAddress}>
                    <FaRegEdit className="editIcon" />
                    Edit
                  </button>

                  <p>City: {user?.Address?.city || 'N/A'}</p>
                  <p>Province: {user?.Address?.province || 'N/A'}</p>
                  <p>Street number: {user?.Address?.street_number || 'N/A'}</p>
                  <p>Locality: {user?.Address?.locality || 'N/A'}</p>
                  <p>Apartment floor: {user?.Address?.apartment_floor || 'N/A'}</p>
                </div>
              ) : null}
              {console.log(user)}

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
        <Footer />
      </div>
    );
  }
}
