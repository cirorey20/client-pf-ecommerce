/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions/auth";
import NavBar from "../NavBar/NavBar";

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
    console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    if (input.name && input.last_name && input.email && input.password) {
      e.preventDefault(e);
      dispatch(createUser(input));
      setInput({
        name: "",
        last_name: "",
        email: "",
        password: "",
        avatar: "",
      });
      navigate("/login");
      // window.location.reload();
    } else {
      alert("Te faltan espacios por llenar");
    }
  }

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div>
        <NavBar />
      </div>

      <div class=" max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="border-8  bg-white px-10 py-10 rounded shadow-md text-slate-900 n w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
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
                class="block border border-grey-light w-full p-3 rounded mb-4"
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
                class="block border border-grey-light w-full p-3 rounded mb-4"
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
                class="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Ingrese password"
                type="password"
                name="password"
                value={input.password.toLowerCase()}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                //required
              />
            </div>
            <div>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Ingrese avatar"
                type="text"
                name="avatar"
                value={input.avatar.toLowerCase()}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                //required
              />
            </div>
            <button
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7a8592] hover:bg-[#0f172a]"
              type="submit"
            >
              Create
            </button>
          </form>
          <a
            class="my-3 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7a8592] hover:bg-[#0f172a]"
            href="../login"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default registerUser;
