import React, { useEffect, useState } from "react";
import { getUsers, promoteUser } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import { getCategories } from "../../redux/actions/categories";
import { getLoginUser } from "../../redux/actions/auth";
import NavAdmin from "./NavAdmin";
import './categories.css'
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

  return (
    <div>
      <NavAdmin />
      <div className="md:container mx-auto pt-10">
        <div class="flex justify-around ">
          <button class="bg-green-700 hover:bg-green-600 text-white text-xs font-medium py-1 px-10 rounded-full">
            CREATE NEW
          </button>
          <buttom class="bg-violet-700 hover:bg-violet-600 text-white text-xs font-medium py-2 px-32 rounded-full">
            SEARCH
          </buttom>
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

      <div class="containerCategories mt-20">
        {productsOfNow.map((e) => {
          return (
            <div
              key={e.id}
              className="flex justify-between bg-zinc-200 rounded-full my-1 p-2"
            >
              <div class="mt-3 mr-32 ml-5 text-1xl">{e.name}</div>

              <div className="flex flex-row mr-2 pb-2 ">
                <button
                  key={e.id}
                  className="h-8  mt-2  md:mr-2  p-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  EDIT
                </button>
                <button
                  key={e.id}
                  className="h-8  mt-2 ml-1 md:mr-2  p-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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