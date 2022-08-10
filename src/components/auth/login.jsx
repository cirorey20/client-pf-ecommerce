import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  console.log(input);
  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault(e);

    dispatch(loginUser(input));
    setInput({
      email: "",
      password: "",
    });

    //navigate("/home");
    // window.location.reload();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button type="submit">LOGIN</button>
      </form>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Login;
