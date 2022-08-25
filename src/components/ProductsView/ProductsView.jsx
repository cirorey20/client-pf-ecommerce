import React from "react";
import { Link } from "react-router-dom";
import "flowbite";

export default function ProductsView() {
  return (
    <div className="flex space-x-5 md:container md:mx-auto mb-24 h-[68vh] shadow-gray-900">
      <Link to={"/home?categories=Cuerdas"}>
        <div className=" min-h-screen bg-[#e2e8f0]flex pt-8">
          <div className="border-2 my-5 w-70 h-min rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
            <img
              src="http://cdn1.appsisecommerce.com.br/clientes/cliente1614/produtos/137468/Z6581.jpg"
              alt=""
            />
            <div className=" bg-white">
              <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
                -15%
              </span>
              <h1 className="mt-4 font-bold text-2xl">Cuerdas</h1>
            </div>
          </div>
        </div>
      </Link>
      <Link to={"/home?categories=Acústico"}>
        <div className="min-h-screen bg-[#e2e8f0]flex pt-8">
          <div className="border-2 w-70 h-min  my-5 rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
            <img
              src="https://ih1.redbubble.net/image.2245188445.9470/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
              alt=""
            />
            <div className=" bg-white">
              <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
                -10%
              </span>
              <h1 className="mt-4 font-bold text-2xl">Acústicos</h1>
            </div>
          </div>
        </div>
      </Link>
      <Link to={"/home?categories=Percusión"}>
        <div className="min-h-screen bg-[#e2e8f0]flex pt-8">
          <div className="border-2 w-70 my-5 rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
            <img
              src="https://cdn1.coppel.com/images/catalog/mkp/147/3000/1471001-1.jpg"
              alt=""
            />
            <div className=" bg-white">
              <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
                -30%
              </span>
              <h1 className="mt-4 font-bold text-2xl">Percusión</h1>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/home?categories=Viento"}>
        <div className="min-h-screen bg-[#e2e8f0]flex pt-8">
          <div className="border-2 w-96 h-max my-5 rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Yamaha_Horn_YHR-314II.tif/lossy-page1-800px-Yamaha_Horn_YHR-314II.tif.jpg"
              alt=""
            />
            <div className=" bg-white">
              <span className="text-sm font-semibold text-red-50 bg-red-400 py-3 px-3 rounded-full">
                -5%
              </span>
              <h1 className="mt-4 font-bold text-2xl">Viento</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
