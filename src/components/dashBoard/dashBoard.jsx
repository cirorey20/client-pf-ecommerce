/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categories";
import { getProducts } from "../../redux/actions/products";

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
      <h1 class="py-5 text-center bg-white-200  font-bold text-4xl">
        Crea un producto nuevo
      </h1>

      <div>
        <div>
          {allProducts.map((e) => {
            return (
              <div class="py-10 flex justify-between bg-white-100 rounded-xl shadow-lg p-8">
                <div>
                  <img class="w-28" src={e.image} alt="" />
                </div>
                <div>{e.name}</div>
                <div>{e.description}</div>
                <div>{e.stock}</div>
                <div>{e.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default createProducts;
