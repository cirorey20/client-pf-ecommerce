/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, createCategory } from "../../redux/actions/categories";
import { getProducts } from "../../redux/actions/products";
import NavBar from "../NavBar/NavBar";
import FilterCategory from "../Filters/FilterCategories";
import Paginate from "../Paginate/Paginate";
import { getLoginUser } from "../../redux/actions/auth";
const createProducts = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const allProducts = useSelector((state) => state.productReducer.products);
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  console.log(userLogin);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts(search));
    dispatch(getLoginUser());
  }, [dispatch, search]);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(2);
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;
  const productsOfNow = allProducts.slice(firstPage, lastPage);
  const paged = (numPag) => {
    setCurrentPage(numPag);
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
            PRODUCTS
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
      <div class="flex justify-between py-5">
        <div>
          <button class=" absolute left-40 bg-green-700 hover:bg-green-700 text-white font-bold py-3  px-10 rounded-full">
            CREATE NEW
          </button>
        </div>
        <buttom class="absolute right-40 bg-violet-400 hover:bg-blue-700 text-white font-bold py-3   px-32 rounded-full ">
          SEARCH
        </buttom>
      </div>
      <div className="home_pagination">
        <Paginate
          productsPage={productsPage}
          allProducts={allProducts.length}
          paged={paged}
          currentPage={currentPage}
        />
      </div>
      <div className="flex mb-6">
        <div className="flex-none  m-2 w-40  border-4">
          <FilterCategory allCategories={categories} />
        </div>
        <div className="flex-initial w-full">
          <div>
            {productsOfNow.map((e) => {
              return (
                <div
                  key={e.id}
                  className=" bg-zinc-200 flex justify-evenly bg-white-100  mx-44 border-4  rounded-full my-11 p-5"
                >
                  <div>
                    <img className="w-28" src={e.image} alt="" />
                  </div>

                  <div>
                    <div className="font-bold">Name</div>
                    {e.name}
                  </div>
                  <div>
                    <div className="font-bold">Description</div>
                    {e.description}
                  </div>
                  <div>
                    <div className="font-bold">Stock</div>
                    {e.stock}
                  </div>
                  <div>
                    <div className="font-bold">Precio</div>
                    {e.price}
                  </div>
                  <div>
                    <div className="font-bold"> Categorias</div>
                    {e.ProductCategories?.map((e) => e.Category.name)}
                  </div>

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
      </div>
    </div>
  );
};

export default createProducts;
