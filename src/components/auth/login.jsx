/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, loginUserGoogle } from "../../redux/actions/auth";
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

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (input.email && input.password) {
      dispatch(loginUser(input));
      setInput({
        email: "",
        password: "",
      });
      navigate("/");
      //window.location.reload();
    } else {
      alert("te faltan espacios por llenar");
    }
  };

  return (
    <section>
      <div class=" px-72 py-60 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://freedesignfile.com/upload/2014/10/Hand-drawn-colored-musical-instruments-vector-03.jpg"
              class="w-max"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="mb-6">
                <input
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Ingrese email"
                  type="text"
                  name="email"
                  value={input.email.toLowerCase()}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  //required
                />
              </div>
              <div class="mb-6">
                <input
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Ingrese password"
                  type="text"
                  name="password"
                  value={input.password.toLowerCase()}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  //required
                />
              </div>
              <button
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                type="submit"
              >
                LOGIN
              </button>
            </form>
            <Link to={"/home"}>
              <button class="inline-block px-7 py-3 my-5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                Home
              </button>
            </Link>

            <div id="buttonDiv"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
