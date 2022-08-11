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
    if (input.email && input.password) {
      dispatch(loginUser(input));
      setInput({
        email: "",
        password: "",
      });
      navigate("/");
    } else {
      alert("te faltan espacios por");
    }

    // window.location.reload();
  }

  return (
    <div class="h-screen">
      <div class="border p-10  mt-96 md:w-24 lg:w-5/12 lg:ml-64">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
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
          <div>
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
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
