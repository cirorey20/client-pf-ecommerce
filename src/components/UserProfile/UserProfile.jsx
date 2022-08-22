import React, { useState, useEffect, useDebugValue } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/auth";

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
  return (
    <div>
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
