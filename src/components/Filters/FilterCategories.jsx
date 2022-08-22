import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Filters.css";
import FilterRange from "./FilterRange";
// const categories = [
//     {
//         id: '123456-1234-1234-1234-123456789011',
//         name: 'cat1',
//         image: 'image.com',
//         checked: false

//     },
//     {
//         id: '123456-1234-1234-1234-123456789012',
//         name: 'cat2',
//         image: 'image.com',
//         checked: false
//     },
//     {
//         id: '123456-1234-1234-1234-123456789013',
//         name: 'cat3',
//         image: 'image.com',
//         checked: false

//     },
//     {
//         id: '123456-1234-1234-1234-123456789014',
//         name: 'cat4',
//         image: 'image.com',
//         checked: false

//     },
//     {
//         id: '123456-1234-1234-1234-123456789015',
//         name: 'cat5',
//         image: 'image.com',
//         checked: false

//     }
// ]

export default function FilterCategory({ allCategories }) {
  const { search } = useLocation();
  const [checksCategory, setChecksCategory] = useState([]);
  const navigate = useNavigate();

  // useEffect(()=>{
  //     allCategories = allCategories.map(category => ({ ...category, checked: false }));
  //     setChecksCategory(allCategories);
  // },[allCategories]);

  useEffect(() => {
    allCategories = allCategories?.map((category) => ({
      ...category,
      checked: false,
    }));
    // console.log(checksCategory)
    const urlSearchParams = new URLSearchParams(search);
    const arrayCategories = urlSearchParams.getAll("categories");
    const newState = allCategories?.map((category) => {
      if (arrayCategories.includes(category.name)) category.checked = true;
      return Object.assign(category);
    });

    setChecksCategory([...newState]);
  }, [allCategories]);

  function onChangeCheck(id) {
    let newState = checksCategory.map((category) => Object.assign(category));
    for (let category of newState) {
      if (category.id === id) {
        category.checked = !category.checked;
      }
    }
    setChecksCategory([...newState]);
  }

  function onClickFilter() {
    const joinCategories = checksCategory.reduce((prev, curr) => {
      if (curr.checked) {
        return [...prev, `categories=${curr.name}`];
      }
      return prev;
    }, []);

    let oldUrl = search.split("&").filter((v) => !v.includes("categories"));

    oldUrl.push(...joinCategories);

    oldUrl = oldUrl.join("&");
    oldUrl =
      oldUrl[0] === "&"
        ? `?${oldUrl.slice(1)}`
        : oldUrl[0] !== "?"
        ? `?${oldUrl}`
        : oldUrl;

    navigate(oldUrl);
  }

  function onClickReset() {
    const newState = checksCategory.map((category) => ({
      ...category,
      checked: false,
    }));
    setChecksCategory([...newState]);

    const joinCategories = newState.reduce((prev, curr) => {
      if (curr.checked) {
        return [...prev, `categories=${curr.name}`];
      }
      return prev;
    }, []);

    let oldUrl = search.split("&").filter((v) => !v.includes("categories"));

    oldUrl.push(...joinCategories);

    oldUrl = oldUrl.join("&");
    oldUrl =
      oldUrl[0] === "&"
        ? `?${oldUrl.slice(1)}`
        : oldUrl[0] !== "?"
        ? `?${oldUrl}`
        : oldUrl;

    navigate(oldUrl);
  }

  return (
    <div className="inputs_container  ">
      <div className="">
      <div className=" grid auto-cols-max mb-6 mt-3">
      {checksCategory.map((category) => {
        return (
          <div key={category.id} className="flex justify-start">
            <input
              type="checkbox"
              id={`custom-checkbox-${category.id}`}
              name={category.name}
              value={category.id}
              checked={category.checked}
              onChange={() => onChangeCheck(category.id)}
            />
            <label className="ml-2 " htmlFor={`custom-checkbox-${category.id}`}>
              {category.name}
            </label>
          </div>
        );
      })} 
      </div>
      </div>
      <div className="filter_flexColumn">
        <button type="button" onClick={onClickFilter} className="select_styles">
          Filter
        </button>
        <button type="button" onClick={onClickReset} className="select_styles">
          Reset
        </button>
      </div>
      <FilterRange/>
    </div>
  );
}
