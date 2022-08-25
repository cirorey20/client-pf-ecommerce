import React, { Fragment, useState, useEffect } from "react";
import { getByFilters } from "../../redux/actions/products";
import { useDispatch } from "react-redux";
import "./FilterRange.css";

const FilterRange = () => {
  const dispatch = useDispatch();
  // const allProducts = useSelector((state) => state.productReducer.products);
  const [input, setInput] = useState({
    min: null,
    max: null,
  });
  const [show, setShow] = useState("hidden");
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    // console.log(input);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (Number(input.max) < 1 || Number(input.min) < 1) {
      return alert("Insert price range");
    }
    if (Number(input.max) <= Number(input.min)) {
      return alert("Maximum to be greater than minimum");
    }

    dispatch(getByFilters(`?minrange=${input.min}&maxrange=${input.max}`));
    e.target[0].value = null;
    e.target[1].value = null;
    setShow("hidden");
  }
  useEffect(() => {
    if (input.min > 0) {
      setShow([]);
    }
  }, [input]);
  return (
    <div className="filterRange_container ">
      <label htmlFor="">By range</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={handleChange}
          type="number"
          name="min"
          placeholder="min"
          className="select_styles"
          min={0}
        />
        <input
          onChange={handleChange}
          type="number"
          name="max"
          placeholder="max"
          className="select_styles"
          min={0}
        />
        <button
          type="submit"
          className="rounded-lg border-solid border-2 border-white m-2 p-1 bg-transparent"
        >
          Get
        </button>
        {/* <button 
                    type="submit"
                    className="rounded-lg border-solid border-2 border-sky-500 m-2 p-1 bg-gray-300 hover:bg-gray-100"
                >Get</button> */}
      </form>
    </div>
  );
};

export default FilterRange;
