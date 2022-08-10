import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/auth";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.authReducer.users);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>
        {users?.map((e) => {
          return (
            <div key={e.id}>
              <div>
                <div>{e.name}</div>
              </div>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export default Users;
