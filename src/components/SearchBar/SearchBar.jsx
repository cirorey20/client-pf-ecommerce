import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { getNameProducts, resetPage } from "../../redux/actions/products";
import { useNavigate } from "react-router-dom";
//import { getProductByName } from "../../redux/actions/products";

export default function SearchBar() {
  var navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  console.log(searchName);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(resetPage());
    dispatch(getNameProducts(searchName));
    navigate("/Home");
    setSearchName("");
  };

  return (
    <div>
      <div>
        <input
          className="seachBar_input"
          type="text"
          placeholder="Find your instrument..."
          onChange={(e) => onHandleChange(e)}
        />
        <button className="searchBar_button" onClick={(e) => onHandleSubmit(e)}>
          Search
        </button>
      </div>
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
