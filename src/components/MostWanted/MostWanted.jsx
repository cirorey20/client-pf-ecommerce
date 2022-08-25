import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites } from "../../redux/actions/wishlist";
import "./MostWanted.css";
import { BsHeartFill } from "react-icons/bs";
import "flowbite";

export default function MostWanted({ favorite }) {
  const allProducts = useSelector((state) => state.productReducer.products);

  console.log(">>>>>>>>>>", allProducts);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage] = useState(4);

  return (
    <div className="">
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 px-3 text-xl text-gray-400">
          Más buscados
        </span>
        <div className="flex-grow border-t border-gray-400 "></div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center">
        <div className="gap-12 flex flex-wrap justify-center">
          <div className="min-h-60 flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 product-cardLan ">
            <Link to={`/product/3d680ea0-cd5c-4509-9b08-ae8eb4087c17`}>
              <img
                src="https://cdn.pixabay.com/photo/2015/08/29/14/18/bass-913092_960_720.jpg"
                alt="guitarrs Small"
                className="max-h-40 w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
              <div className="mt-4 pb-3">
                <span className="text-sm text-gray-700">Small Wooden Hat</span>
              </div>
              <div className="badge2">$832 </div>
            </Link>
          </div>
          <div className="min-h-60 flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 product-cardLan ">
            <Link to={`/product/b1104d50-ccb7-4c6a-ba1e-5cb45d59e9e0`}>
              <img
                src="https://cdn.pixabay.com/photo/2016/08/10/17/40/guitar-1583851_960_720.jpg"
                alt=""
                className="max-h-40 w-full h-full object-center object-cover lg:w-full lg:h-full"
              />

              <div className="mt-4 pb-3">
                <span className="text-sm text-gray-700">
                  Ergonomic Steel Tuna
                </span>
              </div>

              <div className="badge2">$832 </div>
            </Link>
          </div>
          <div className="min-h-60 flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 product-cardLan ">
            <Link to={`/product/05fe0195-bd99-40f0-9cb8-63f7ebe54289`}>
              <img
                src="https://cdn.pixabay.com/photo/2017/05/10/19/42/guitar-2301723_960_720.jpg"
                alt=""
                className="max-h-40 w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
              <div className="mt-4 pb-3">
                <span className="text-sm text-gray-700">
                  Gorgeous Frozen Cheese
                </span>
              </div>

              <div className="badge2">$832 </div>
            </Link>
          </div>
          <div className="min-h-60 flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 product-cardLan ">
            <Link to={`/product/7c2f101a-6582-489f-a14f-3721ba0ea9f5`}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/16/18/17/music-2149880_960_720.jpg"
                alt=""
                className="max-h-40 w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
              <div className="mt-4 pb-3">
                <span className="text-sm text-gray-700">
                  Intelligent Rubber Chips
                </span>
              </div>

              <div className="badge2">$832 </div>
            </Link>
          </div>
          <div className="min-h-60 flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 product-cardLan ">
            <Link to={`/product/90c5095b-ab20-4aeb-a9a9-58e63313acd4`}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/28/23/13/guitar-2183684_960_720.jpg"
                alt=""
                className="max-h-40 w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
              <div className="mt-4 pb-3">
                <span className="text-sm text-gray-700">
                  Ergonomic Rubber Hat
                </span>
              </div>

              <div className="badge2">$832 </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
