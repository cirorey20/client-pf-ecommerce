import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const users = useSelector((state) => state.authReducer.userLogin);
  return (
    <div>
      <div>
        <img class="w-96" src={users.user.avatar} alt="" />
      </div>
      <div>{users.user.name}</div>
      <div>{users.user.last_name}</div>
      <div>{users.user.email}</div>
      <div>
        <Link to="/home">
          <button>HOME</button>
        </Link>
      </div>
      <div>
        <button>LOGOUT</button>
      </div>
      <div>
        <button>UPDATE PROFILE</button>
      </div>
    </div>
  );
};

export default Profile;
