/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions/auth";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";
import defaultImage from "../../assets/axel.jpg"


const registerUser = () => {
  //const defaultImage = 'https://scontent.fscl13-1.fna.fbcdn.net/v/t1.18169-9/13512181_623585791137546_6297130873815159109_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE0UE4M65cMocfw212Z9fqSDVJTiFfxMV8NUlOIV_ExXx4eJvJpFe-hxlgW6FmQW0Y&_nc_ohc=1WV957_HOY4AX_wOn9P&_nc_ht=scontent.fscl13-1.fna&oh=00_AT9VVKv2BBodyeqCxTNc5gpopYp88I3byESP5Tu0wB_s6g&oe=6329426E'
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
    //console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault(e);
    if (input.name && input.last_name && input.email && input.password) {
      if (!input.avatar) input.avatar=defaultImage
      dispatch(createUser(input));
      setInput({
        name: "",
        last_name: "",
        email: "",
        password: "",
        avatar: "",
      });
      navigate("/login");
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Usuario creado correctamente",
      }).then(e => {
        if(e.isConfirmed){
          Swal.fire({
            icon: 'info',
            title: '',
            text: 'A tu email se ha enviado el link de autenticación'
          })
        }
      })
      // window.location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tal vez te falten espacios por llenar",
      });
    }
  }

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div>
        <NavBar />
      </div>

      <div className=" max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="border-8  bg-white px-10 py-10 rounded shadow-md text-slate-900 n w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Ingrese Name"
                type="text"
                name="name"
                value={input.name=input.name.charAt(0).toUpperCase()+input.name.slice(1).toLowerCase()}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                //required
              />
            </div>
            <div>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Ingrese apellido"
                type="text"
                name="last_name"
                value={input.last_name=input.last_name.charAt(0).toUpperCase()+input.last_name.slice(1).toLowerCase()}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                //required
              />
            </div>
            <div>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
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
                className="block border border-grey-light w-full p-3 rounded mb-4"
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
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Ingrese avatar"
                type="text"
                name="avatar"
                value={input.avatar}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                //required
              />
            </div>
            <button
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7a8592] hover:bg-[#0f172a]"
              type="submit"
            >
              Create
            </button>
          </form>
          <a
            className="my-3 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7a8592] hover:bg-[#0f172a]"
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
