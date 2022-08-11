import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const initialSort = "CHOOSE A OPTION";

export default function Filters() {
  const [priceSort, setPriceSort] = useState(initialSort);
  const [nameSort, setNameSort] = useState(initialSort);
  const navigate = useNavigate();

  const { search } = useLocation();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(search);
    const price = urlSearchParams.get("price");
    const name = urlSearchParams.get("name");
    if (price) setPriceSort(price);
    if (name) setNameSort(name);
  }, []);

  function onChangedSelect(e) {
    let url = search[0] === "?" ? search.slice(1) : search;
    let chunckUrl = url.split("&");

    chunckUrl = chunckUrl.filter(
      (v) => !(v.includes("price") || v.includes("name"))
    );

    if (e.target.value !== "CHOOSE A OPTION") {
      if (e.target.name === "selectPriceSort") {
        setPriceSort(e.target.value);
        setNameSort(initialSort);
        chunckUrl.push(`price=${e.target.value}`);
      }

      if (e.target.name === "selectNameSort") {
        setNameSort(e.target.value);
        setPriceSort(initialSort);
        // chunckUrl.filter(v => !v.includes('nameSort'))
        chunckUrl.push(`name=${e.target.value}`);
      }
    } else {
      setNameSort(initialSort);
      setPriceSort(initialSort);
    }
    url = chunckUrl.join("&");
    url = url[0] === "&" ? `?${url.slice(1)}` : `?${url}`;
    navigate(url, { replace: false });
  }
  return (
    <div className="flex justify-center w-35 my-10  rounded-xl shadow-lg">
      <div className="">
        <div className="">
          <Link to={"/product/DashBoard"}>
            <button className="w-full border border-[#1d4ed8] flex justify-items-center m-1 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 bg-[#0f172a] text-white hover:bg-[#cbd5e1] hover:text-black">
              DashBoard
            </button>
          </Link>
          <div />
          <select
            name="selectPriceSort"
            value={priceSort}
            onChange={onChangedSelect}
            className="w-full border border-white text-gray-900 m-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#cbd5e1] text-white hover:bg-[#0f172a] hover:text-white"
          >
            <option>Order by price</option>
            <option value="asc">Price desc</option>
            <option value="desc">Price asc</option>
          </select>

          <select
            form="filter"
            name="selectNameSort"
            value={nameSort}
            onChange={onChangedSelect}
            className="w-full ml-1 border border-[#1d4ed8] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#0f172a] text-white hover:bg-[#cbd5e1] hover:text-black mb-10"
          >
            <option>Order by alphabet</option>
            <option value="A-Z">Product A-Z</option>
            <option value="Z-A">Product Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
}
