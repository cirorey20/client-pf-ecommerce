/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions/auth";

const registerUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault(e);

    dispatch(createUser(input));
    setInput({
      name: "",
      last_name: "",
      email: "",
      password: "",
      avatar: "",
    });

    navigate("/home");
    // window.location.reload();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            placeholder="Ingrese Name"
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
        </div>
        <div>
          <input
            placeholder="Ingrese apellido"
            type="text"
            name="last_name"
            value={input.last_name.toLowerCase()}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
        </div>
        <div>
          <input
            placeholder="Ingrese email"
            type="text"
            name="email"
            value={input.email.toLowerCase()}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
        </div>
        <div>
          <input
            placeholder="Ingrese password"
            type="text"
            name="password"
            value={input.password.toLowerCase()}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
        </div>
        <div>
          <input
            placeholder="Ingrese avatar"
            type="text"
            name="avatar"
            value={input.avatar.toLowerCase()}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default registerUser;
