import React, { useEffect, useState } from "react";
import { getUsers, promoteUser } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import { getCategories } from "../../redux/actions/categories";
import { getLoginUser } from "../../redux/actions/auth";
import { createCategory } from "../../redux/actions/categories";
const Categories = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(
    (state) => state.categoryReducer.categories
  );
  const userLogin = useSelector((state) => state.authReducer.userLogin);

  console.log(userLogin);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(getLoginUser());
  }, []);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(2);
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;
  const productsOfNow = allCategories.slice(firstPage, lastPage);
  const paged = (numPag) => {
    setCurrentPage(numPag);
  };

  const [input, setInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.name) {
      dispatch(createCategory(input));
      setInput("");
      alert("Se creado con exito");
      window.location.reload();
    } else {
      alert("te faltan espacios por llenar");
    }
  };

  return (
    <div>
      <div class="py-24 flex justify-evenly ">
        <div class="flex-none h-14">
          <img
            class="w-44 top-4"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Universal-Pictures-Logo.svg"
            alt=""
          />
        </div>
        <div class="flex-initial w-96">
          <div class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
            CATEGORIES
          </div>
        </div>
        <div class=" flex flex-initial ">
          <button class=" text-black font-bold py-3 px-10 mx-5 rounded-full ">
            {userLogin?.user?.name}
          </button>
          <button class=" bg-violet-400 hover:bg-blue-700 text-white font-bold py-3  px-10 rounded-full">
            <div>LOGOUT</div>
          </button>
        </div>
      </div>
      <div class="flex justify-between py-16">
        <button class="absolute right-40 bg-violet-400 hover:bg-blue-700 text-white font-bold py-3   px-32 rounded-full ">
          SEARCH
        </button>
      </div>
      <div>
        <div className="home_pagination">
          <Paginate
            productsPage={productsPage}
            allProducts={allCategories.length}
            paged={paged}
            currentPage={currentPage}
          />
        </div>
      </div>
      <div class="my-24">
        {productsOfNow.map((e) => {
          return (
            <div
              key={e.id}
              class="bg-zinc-200 flex justify-evenly bg-white-100  mx-96 border-4  rounded-full my-6 p-5"
            >
              <div class="text-2xl">{e.name}</div>

              <div>
                <button
                  key={e.id}
                  class="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-5"
                >
                  EDIT
                </button>
                <button
                  key={e.id}
                  class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                >
                  DESTROY
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
