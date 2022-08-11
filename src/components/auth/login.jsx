import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, loginUserGoogle } from "../../redux/actions/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, GoogleLogout } from "@react-oauth/google";
import useGsi from "./useGsi";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });



  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    navigate("/home");
    dispatch(loginUserGoogle({ response }));
  };

  useGsi("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "677723278728-s1jkmrbpvjhqf98nolkmji6ir1256ql9.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      auto_select: false,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        theme: "outline",
        size: "medium",
      }
    );
    // window.google.accounts.id.prompt();
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

  const responseGoogle = (response) => {
    console.log(response);
  };
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

      <div id="buttonDiv"></div>
    </div>
  );
};

export default Login;
