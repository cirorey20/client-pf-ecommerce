/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categories";
import { getProducts } from "../../redux/actions/products";
import NavBar from "../NavBar/NavBar";

const createProducts = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const allProducts = useSelector((state) => state.productReducer.products);
  console.log(allProducts);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts(search));
  }, [dispatch, search]);

  return (
    <div>
      <NavBar />

      <div class="py-10 flex justify-evenly">
        <div>Categories</div>
        <Link to={`/product/create`}>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Crear Producto
          </button>
        </Link>
      </div>

      <div>
        <div>
          {allProducts.map((e) => {
            return (
              <div
                key={e.id}
                class=" flex justify-evenly bg-white-100 rounded-xl shadow-lg p-8"
              >
                <div>
                  <img class="w-28" src={e.image} alt="" />
                </div>

                <div>
                  <div class="font-bold">Name</div>
                  {e.name}
                </div>
                <div>
                  <div class="font-bold">Description</div>
                  {e.description}
                </div>
                <div>
                  <div class="font-bold">Stock</div>
                  {e.stock}
                </div>
                <div>
                  <div class="font-bold">Precio</div>
                  {e.price}
                </div>
                <div>
                  <div class="font-bold"> Categorias</div>
                  {e.ProductCategories.map((e) => e.Category.name)}
                </div>

                <div>
                  <Link to={`/product/update/${e.id}`}>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      UPDATE
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default createProducts;
