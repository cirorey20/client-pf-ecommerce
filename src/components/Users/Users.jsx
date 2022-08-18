import React, { useEffect, useState } from "react";
import { getUsers, promoteUser } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.authReducer.users);

  console.log(allUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handlePromote = (e) => {
    dispatch(promoteUser(e));
    window.location.reload();
  };

  return (
    <div>
      <div class="py-10 flex justify-evenly bg-slate-500">
        <div>
          <Link to={`/home`}>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Home
            </button>
          </Link>
        </div>
        <div>
          <Link to={`/product/dashBoard`}>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              DashBoard
            </button>
          </Link>
        </div>
      </div>
      <div>
        {allUsers.map((e) => {
          return (
            <div
              key={e.id}
              class=" flex justify-evenly bg-white-100 rounded-xl shadow-lg p-8"
            >
              <div>
                <img class="w-28" src={e.avatar} alt="" />
              </div>

              <div>
                <div class="font-bold">Name</div>
                {e.name}
              </div>
              <div>
                <div class="font-bold">Last Name</div>
                {e.last_name}
              </div>
              <div>
                <div class="font-bold">EMAIL</div>
                {e.email}
              </div>
              <div>
                <div class="font-bold">ROL</div>
                {e.rol}
              </div>

              <div>
                <button
                  key={e.id}
                  onClick={() => handlePromote(e.id)}
                  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  PROMOTE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
