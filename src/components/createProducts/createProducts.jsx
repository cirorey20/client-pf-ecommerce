/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/actions/products";
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
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    categorie: [],
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);
  function handleSubmit(e) {
    e.preventDefault(e);
    if (input.name && input.description) {
      dispatch(createProduct(input));
      setInput({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        categories: [],
      });
    } else {
      return alert("Te faltan espacios por llenar");
    }
  }

  return (
    <div>
      <h1 class="py-5 text-center bg-white-200  font-bold text-4xl">
        Crea un producto nuevo
      </h1>
      <div class="bg-white-100 rounded-xl shadow-lg p-8">
        <form
          class="py-10 flex justify-around"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <div>
              <label class="text-lg font-bold ">Ingresa el nombre</label>
            </div>
            <input
              class="ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 py-4 px-2"
              placeholder="Ingrese Name"
              type="text"
              name="name"
              value={input.name.toLowerCase()}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div>
              <label class="text-lg font-bold ">Ingresa la description</label>
            </div>
            <input
              class="ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 py-4 px-2"
              placeholder="Ingrese description"
              type="text"
              name="description"
              value={input.description.toLowerCase()}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <div>
              <label class="text-lg font-bold ">Ingresa el stock</label>
            </div>
            <input
              class="ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 py-4 px-2"
              placeholder="Ingrese stock"
              type="number"
              name="stock"
              value={input.stock.toLowerCase()}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <div>
              <label class="text-lg font-bold ">Ingresa el precio</label>
            </div>
            <input
              class="ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 py-4 px-2"
              placeholder="Ingrese price"
              type="number"
              name="price"
              value={input.price.toLowerCase()}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <div>
              <label class="text-lg font-bold ">Ingresa image</label>
            </div>
            <input
              class="ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 py-4 px-2"
              placeholder="Ingrese image"
              type="text"
              name="image"
              value={input.image.toLowerCase()}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div>
              <label class="text-lg font-bold ">seleccion categorias</label>
            </div>

            <select name="Categories">
              <option>Categories</option>
              {categories.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            class="inline-block bg-red-500 text-white font-blod px-5 rounded-lg text-sm uppercase"
          >
            Create
          </button>
        </form>
      </div>

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
