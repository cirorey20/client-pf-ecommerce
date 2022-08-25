import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { getNameProducts, resetPage } from "../../redux/actions/products";
import { useNavigate } from "react-router-dom";
//import { getProductByName } from "../../redux/actions/products";

export default function SearchBar() {
  var navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  // console.log(searchName)
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(resetPage());
    dispatch(getNameProducts(searchName));
    //navigate("/Home");
    setSearchName("");
  };

  return (
    <div className="flex items-center">
      <input
        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 navbar_searchInput"
        type="text"
        placeholder="Search..."
        onChange={(e) => onHandleChange(e)}
      />
      <button onClick={(e) => onHandleSubmit(e)} className="button_search">
        SEARCH
      </button>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// //import { getVideogameByName } from "../actions";
// import style from "./SearchBar.module.css";

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");

//   function handleInputChange(e) {
//     e.preventDefault();
//     setName(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
// //    dispatch(getVideogameByName(name));
//     setName("");
//   }

//   return (
//     <div >
//       <input
//         className={style.input}
//         value={name}
//         type="text"
//         placeholder="Search a instrument..."
//         onChange={(e) => handleInputChange(e)}
//       />
//       <button
//         className={style.btn}
//         type="submit"
//         onClick={(e) => handleSubmit(e)}
//       >
//         Search
//       </button>
//     </div>
//   );
// }
