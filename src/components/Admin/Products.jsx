/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import NavAdmin from "./NavAdmin";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, createCategory } from "../../redux/actions/categories";
import Filters from "../Filters/Filters";
import {
  getByFilters,
  getProducts,
  desBanendUser,
  banendUser,
} from "../../redux/actions/products";
// import NavAdmim from '../../../'
import FilterCategory from "../Filters/FilterCategories";
import Paginate from "../Paginate/Paginate";
import { getLoginUser } from "../../redux/actions/auth";
import SearchBar from "../SearchBar/SearchBar";
import "./Product.css";

const ProductsAdmin = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const allProducts = useSelector((state) => state.productReducer.products);
  const userLogin = useSelector((state) => state.authReducer.userLogin);
  // console.log(allProducts);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts(search));
    dispatch(getLoginUser());
  }, [dispatch, search]);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(4);
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;
  const productsOfNow = allProducts.slice(firstPage, lastPage);
  const paged = (numPag) => {
    setCurrentPage(numPag);
  };

  const handleBaned = (e) => {
    dispatch(banendUser(e));
    window.location.reload();
  };
  const handleDesbaned = (e) => {
    dispatch(desBanendUser(e));
    window.location.reload();
  };
  function handlerFilters(filter) {
    dispatch(getByFilters(filter));
  }

  return (
    <div>
      <NavAdmin section={"Products"} />
      <div className="adminProduct_maincontainer">
        <div className="admin_controllers">
          <div>
            <Filters handlerFilters={handlerFilters} />
            <FilterCategory allCategories={categories} />
          </div>
        </div>
        <div className="admin_productcontainer">
          {/* Search and CreateProduct inputs */}
          <div className="admin_searchinput">
            <SearchBar />
            <Link to="/product/create">
              <button className="select_styles">Create Product</button>
            </Link>
          </div>
          <div className="home_pagination">
            <Paginate
              productsPage={productsPage}
              allProducts={allProducts.length}
              paged={paged}
              currentPage={currentPage}
            />
            {/* Products Container */}
            {productsOfNow.map((e) => {
              return (
                <div style={{ paddingTop: "20px" }}>
                  <div className="item_container">
                    <div>
                      <img className="w-28" src={e.image} alt="" />
                    </div>
                    <div className="font-bold">{e.name}</div>
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
                    <div className="admin_editban">
                      <Link
                        className="select_styles"
                        to={`/product/update/${e.id}`}
                      >
                        EDIT
                      </Link>

                      <button
                        onClick={() =>
                          e.enable === true
                            ? handleBaned(e.id)
                            : handleDesbaned(e.id)
                        }
                        className="select_styles"
                      >
                        {e.enable === true ? "BANNED" : "UNBAN"}
                      </button>
                    </div>
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

export default ProductsAdmin;

{
  /* <div key={e.id} className="adminProductDetails_container">
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
                    <Link
                      className="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-5"
                      to={`/product/update/${e.id}`}
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        e.enable === true
                          ? handleBaned(e.id)
                          : handleDesbaned(e.id)
                      }
                      className="h-8 mt-2  md:p-1  text-xs font-medium text-center text-white bg-red-700 hover:bg-red-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {e.enable === true ? "BANEND" : "DESBANED"}
                    </button>
                  </div>
                </div> */
}

{
  /* 

<div className="flex ">

  <div className="flex-initial w-full">
    <div>
      
    </div>
  </div>
</div>
</div>  
        </div>
      </div> */
}
