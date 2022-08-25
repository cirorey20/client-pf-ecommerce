import React, { useEffect, useState } from "react";
import { getUsers, promoteUser } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import { getCategories } from "../../redux/actions/categories";
import { getLoginUser } from "../../redux/actions/auth";
import NavAdmin from "./NavAdmin";
import { createCategory, updateCategory } from "../../redux/actions/categories";
import "./categories.css";
import Swal from "sweetalert2";

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

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.name) {
      await dispatch(createCategory(input));
      setInput("");
      await dispatch(getCategories())
      setInput({name: ""})
      return Toast.fire({
        icon: "success",
        title: "Successfully created"
      });

    } else {
      return Toast.fire({
        icon: "warning",
        title: "Spaces to be filled"
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <NavAdmin section={'Categories'}/>
      <br/>

      <div className="md:container mx-auto pt-10">
        <div className="flex justify-around ">
          <div className="absolute left-40">
            <input
            className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="ingrese categoria"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-green-700 py-3 hover:bg-green-600 text-white text-xs font-medium py-1 px-10 rounded-full"
            >
              Crear
            </button>
          </div>
          <div className="absolute right-40">
          <input type="search" id="default-search" class="block p-4 pl-10 w-full h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
          </div>
        </div>
      </div>
      <div>
        <div className="home_pagination pt-12">
          <Paginate
            productsPage={productsPage}
            allProducts={allCategories.length}
            paged={paged}
            currentPage={currentPage}
          />
        </div>
      </div>

      <div className="containerCategories mt-20">
        {productsOfNow.map((e) => {
          return (
            <div
              key={e.id}
              className="flex justify-between bg-zinc-200 rounded-full my-1 p-2"
            >
              <div className="mt-3 mr-32 ml-5 text-1xl">{e.name}</div>

              <div className="flex flex-row mr-2 pb-2 ">
                <button
                  key={e.id}
                  className="h-8  mt-2  md:mr-2  p-1 text-xs font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  EDIT
                </button>
                <button
                  key={e.id}
                  className="h-8  mt-2 ml-1 md:mr-2  p-1 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
