import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import "./users.css";
import {
  getNameUser,
  getByFiltersUsers,
  getUsers,
  promoteUser,
  banendUser,
  desBanendUser,
} from "../../redux/actions/auth";
import NavAdmin from "./NavAdmin";
import { resetPage } from "../../redux/actions/products";
const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.authReducer.users);

  console.log(allUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(2);
  const lastPage = currentPage * productsPage;
  const firstPage = lastPage - productsPage;
  const productsOfNow = allUsers.slice(firstPage, lastPage);

  const paged = (numPag) => {
    setCurrentPage(numPag);
  };

  const handlePromote = (e) => {
    dispatch(promoteUser(e));
    window.location.reload();
  };
  const handleBaned = (e) => {
    dispatch(banendUser(e));
    window.location.reload();
  };
  const handleDesbaned = (e) => {
    dispatch(desBanendUser(e));
    window.location.reload();
  };
  //SearchBar
  const [searchName, setSearchName] = useState("");
  // console.log(searchName)
  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPage());
    dispatch(getNameUser(searchName));
    setSearchName("");
  };

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(getByFiltersUsers(e.target.value));
  };
  return (
    <div>
      <NavAdmin section={'Users'}/>
      {/* <h1 className="rounded-full text-white placeholder:text-gray-300 bg-[#644b9c] border-none focus:ring-transparent mr-32 ml-32 text-7xl">USERS</h1> */}
      <br/>
      <div className="md:container mx-auto pt-10">
        <div className="flex justify-around ">
          {/* <button className="bg-violet-700 hover:bg-violet-600 text-white text-xs font-medium py-1 px-10 rounded-full">
            ALFHABATIC
          </button> */}
          <div>
            <select onChange={(e) => handleOrder(e)} id="select-order" className="bg-[#644b9c] hover:bg-violet-600 text-white text-xs font-medium py-3 px-10 rounded-full">
              <option value="all">Order Alphabetically</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              className="rounded-full text-white placeholder:text-gray-300 bg-[#644b9c] border-none focus:ring-transparent"
              type="text"
              placeholder="Input your date..."
              onChange={(e) => onHandleChange(e)}
            />
            <button
              onClick={(e) => onHandleSubmit(e)}
              className="rounded-full py-2   text-white placeholder:text-gray-300 bg-[#644b9c] border-none focus:ring-transparent"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home_pagination pt-12">
          <Paginate
            productsPage={productsPage}
            allProducts={allUsers.length}
            paged={paged}
            currentPage={currentPage}
          />
        </div>
      </div>
      <div className="mt-20 ">
        <div class="containerUser">
          {productsOfNow?.map((e) => {
            return (
              <div
                key={e.id}
                class="flex justify-between bg-zinc-200 rounded-full my-1 p-2"
              >
                <div className="flex flex-col md:flex-row invisible md:visible">
                  <img class="w-11 rounded-full pr-1" src={e.avatar} alt="" />
                </div>

                <div className="flex flex-col md:flex-row mt-2 ">
                  <div className="mr-5">{e.name}</div>
                  <div className="mr-5">{e.last_name}</div>
                  <div className="mr-5">{e.email}</div>
                  <div className="mr-5">{e.rol}</div>
                </div>

                <div className="flex flex-col mr-2 pb-2 md:flex-row ">
                  <button
                    onClick={() => handlePromote(e.id)}
                    className="h-8  mt-2 md:mr-2  p-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    PROMOTE
                  </button>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
