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

const createProducts = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const allProducts = useSelector((state) => state.productReducer.products);
  console.log(allProducts);

  const [input, setInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.name) {
      dispatch(createCategory(input));
      setInput("");
      alert("Se creado con exito");
      // window.location.reload();
    } else {
      alert("te faltan espacios por llenar");
    }
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts(search));
  }, [dispatch, search]);

  return (
    <div>
      <NavBar />

      <div className="py-10 flex justify-evenly">
        <Link to={`/product/create`}>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Crear Producto
          </button>
        </Link>
        <div>
          <input
            type="text"
            placeholder="ingrese categoria"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Crear
          </button>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="flex-none  m-2 w-40 h-100">
          <FilterCategory allCategories={categories} />
        </div>
        <div className="flex-initial w-full">
          <div>
            {allProducts.map((e) => {
              return (
                <div
                  key={e.id}
                  className=" flex justify-evenly bg-white-100 rounded-xl shadow-lg p-8"
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
                    <Link to={`/product/update/${e.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
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
    </div>
  );
};

export default createProducts;
