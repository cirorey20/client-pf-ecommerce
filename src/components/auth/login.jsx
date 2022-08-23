/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, loginUserGoogle } from "../../redux/actions/auth";
import useGsi from "./useGsi";
import NavBar from "../NavBar/NavBar";
import { redirectionByRol } from "./redirection";
import "./login.css";
import texture from "../../cloudinary/bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  // console.log(userLogin);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleCredentialResponse = (response) => {
    // console.log("Encoded JWT ID token: " + response.credential);
    dispatch(loginUserGoogle({ response }));
  };

  useGsi("https://accounts.google.com/gsi/client", () => {
    redirectionByRol(navigate);
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
      }
    );
    // window.google.accounts.id.prompt();
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //console.log(userLogin.user);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (input.email && input.password) {
      dispatch(loginUser(input));
      setInput({
        email: "",
        password: "",
      });
      redirectionByRol(navigate);
    } else {
      alert("te faltan espacios por llenar");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="loginPage_container">
        <div className="loginContainer">
          Login
          <input
            className="input_login"
            placeholder="Enter your email"
            type="text"
            name="email"
            value={input.email.toLowerCase()}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
          <input
            className="input_login"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={input.password.toLowerCase()}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            //required
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="login_button"
            type="submit"
          >
            Login
          </button>
          <Link to={"/home"}>
            <button className="login_button">Home</button>
          </Link>
          <div id="buttonDiv" className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className=" px-72 py-10 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">

          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>

              <div className="mb-6">

              </div>
              
            </form>


            
          </div>
        </div>
      </div> */
}
