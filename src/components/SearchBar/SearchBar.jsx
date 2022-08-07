
import {React, useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProducts, resetPage } from "../../redux/actions/products";

export default function SearchBar() {

    const [searchName, setSearchName] = useState("");
    console.log(searchName)
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPage())
    dispatch(getNameProducts(searchName))
    setSearchName("")
  };

    return (
        <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => onHandleChange(e)}
                />
                <button className="px-4 text-white bg-[#cbd5e1] border-l rounded hover:bg-[#0f172a]"
                onClick={(e) => onHandleSubmit(e)}>Search</button>
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