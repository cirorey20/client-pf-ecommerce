import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsHeartFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import ProfileFav from "./ProfileFav";
import { useDispatch } from "react-redux";
import "./UserProfile.css";
import { profileUpdate } from "../../redux/actions/auth";

export default function UserInfo() {
  const { user } = useSelector((state) => state.authReducer.userLogin);
  const dispatch = useDispatch();

  //const userProfile = useSelector((state) => state.userProfile);

  // const { user } = useAuth0();
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
  console.log(user);

  if (isFavorite) {
    return <ProfileFav toggleFav={toggleFav} />;
  }
  if (!isFavorite) {
    return (
      <div>
        <>
          {isEdit && (
            <form action="" onSubmit={onSubmit} className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="name"
                    onChange={editProfile}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    LastName
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    name="lastName"
                    onChange={editProfile}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-slate-700 hover:bg-slate-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
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
      </div>
    );
  }
}
