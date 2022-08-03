import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { getVideogameByName } from "../actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
//    dispatch(getVideogameByName(name));
    setName("");
  }
  
  return (
    <div >
      <input
        className={style.input}       
        value={name}
        type="text"
        placeholder="Search a instrument..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={style.btn}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}