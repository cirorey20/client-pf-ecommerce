import React, { useEffect, useState } from "react";
import { getUsers, promoteUser } from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
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
            USERS
          </div>
        </div>
        <div class=" flex flex-initial ">
          <button class=" text-black font-bold py-3 px-10 mx-5 rounded-full ">
            NAMEUSER
          </button>
          <button class=" bg-violet-400 hover:bg-blue-700 text-white font-bold py-3  px-10 rounded-full">
            <div>LOGOUT</div>
          </button>
        </div>
      </div>
      <div class="flex justify-between py-16">
        <div>
          <button class="absolute left-40 bg-violet-400 hover:bg-blue-700 text-white font-bold py-3  px-10 rounded-full">
            ALFHABATIC
          </button>
        </div>
        <buttom class="absolute right-40 bg-violet-400 hover:bg-blue-700 text-white font-bold py-3   px-32 rounded-full ">
          SEARCH
        </buttom>
      </div>
      <div>
        <div className="home_pagination">
          <Paginate
            productsPage={productsPage}
            allProducts={allUsers.length}
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
              <div>
                <img class="w-28 " src={e.avatar} alt="" />
              </div>

              <div>{e.name}</div>
              <div>{e.last_name}</div>
              <div>{e.email}</div>
              <div>{e.rol}</div>

              <div>
                <button
                  key={e.id}
                  onClick={() => handlePromote(e.id)}
                  class="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-5"
                >
                  PROMOTE
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

export default Users;
