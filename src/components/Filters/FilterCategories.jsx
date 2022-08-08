import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    allCategories = allCategories.map((category) => ({
      ...category,
      checked: false,
    }));
    // console.log(checksCategory)
    const urlSearchParams = new URLSearchParams(search);
    const arrayCategories = urlSearchParams.getAll("categories");
    const newState = allCategories.map((category) => {
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
    <div>
      <div class="flex justify-start">
        {checksCategory.map((category) => {
          return (
            <div key={category.id}>
              <input
                type="checkbox"
                id={`custom-checkbox-${category.id}`}
                name={category.name}
                value={category.id}
                checked={category.checked}
                onChange={() => onChangeCheck(category.id)}
              />
              <label htmlFor={`custom-checkbox-${category.id}`}>
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onClickFilter}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Filter
      </button>
      <button
        type="button"
        onClick={onClickReset}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Reset
      </button>
    </div>
  );
}
