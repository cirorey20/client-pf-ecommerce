import React from "react";
import { Link } from "react-router-dom";
import "flowbite";

export default function ProductsView() {
  return (
    <div className="flex space-x-5 md:container md:mx-auto mb-24 h-[68vh] bg-[#fbfbfccb] shadow-gray-900">
      <Link to={"/home?categories=Cuerdas"}>
        <div className="min-h-screen bg-[#e2e8f0]flex pt-16">
          <div className="border-2 w-70 h-min rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
            <img
              src="https://i.pinimg.com/originals/b7/4e/d1/b74ed19a92a174d85c3fa1879b1e361e.jpg"
              alt=""
            />
            <div className=" bg-white">
              <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
                -30%
              </span>
              <h1 className="mt-4 font-bold text-2xl">Bajos</h1>
            </div>
          </div>
        </div>
      </Link>
      <div className="min-h-screen bg-[#e2e8f0]flex pt-16">
        <div className="border-2 w-70 h-min rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
          <img
            src="https://ih1.redbubble.net/image.2245188445.9470/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
            alt=""
          />
          <div className=" bg-white">
            <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
              -30%
            </span>
            <h1 className="mt-4 font-bold text-2xl">Pianos</h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#e2e8f0]flex pt-16">
        <div className="border-2 w-70 h-min rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
          <img
            src="https://cdn1.coppel.com/images/catalog/mkp/147/3000/1471001-1.jpg"
            alt=""
          />
          <div className=" bg-white">
            <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
              -30%
            </span>
            <h1 className="mt-4 font-bold text-2xl">Baterias</h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#e2e8f0]flex pt-16">
        <div className="border-2 w-70 h-min rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
          <img
            src="https://ih1.redbubble.net/image.3051489577.3866/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg"
            alt=""
          />
          <div className=" bg-white">
            <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
              -30%
            </span>
            <h1 className="mt-4 font-bold text-2xl">Guitarras</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
