import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../redux/actions/categories";
import {
  createProduct,
  detailProduct,
  // getProducts,
  updateProduct,
} from "../../redux/actions/products";
import NavBar from "../NavBar/NavBar";
import UpLoadImage from "../UpLoadImage/UpLoadImage";
import Swal from "sweetalert2";


function validate(form, categ){
  
  let err = {};

  const allChecked = categ.categories.filter(e => e.checked === true)
  
  

  if(!form.name.length){
    err.name = "⚠ Name is required"
  }
   else if(form.price <= 0){
      err.price = "⚠ Price can not be 0"
    }
   else if(form.stock <= 0){
      err.stock = "⚠ Stock can not be 0"
    }
   else if(!allChecked.length){
    err.categories = "⚠ Select only the existing Categories"
    }
   else if(!form.image.length){
      err.image = "⚠ Image is required"
    }
   else if(!form.description.length){
      err.description = "⚠ Description is required"
    } 
    return err;
};



const initialFormState = {
  name: "",
  price: 0,
  stock: 0,
  categories: [],
  image: "",
  description: "",
  enable: true,
};

export default function CreateProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const productDetail = useSelector((state) => state.productReducer.productDetail);
  const [form, setForm] = useState({...initialFormState, categories:[...categories]});
  const[err, setErr] = useState({});
  const[categ, setCateg] = useState("")
  const [url, setUrl] = useState("");
  const { idProduct } = useParams();

  useEffect(() => {
    dispatch(getCategories());
    if (idProduct) {
      dispatch(detailProduct(idProduct));
    }
  }, []);

  useEffect(() => {
    const newState = { ...form };
    newState.categories = categories.map((category) => ({
      ...category,
      checked: false,
    }));
    setForm(newState);
    setCateg(newState)
  }, [categories]);

  function getImage(url){
    setUrl(url)
  }

  useEffect(() => {
    if (
      !Array.isArray(productDetail) &&
      typeof productDetail === "object" &&
      productDetail !== null
    ) {
      const categoriesDetail = productDetail["ProductCategories"].map(
        (v) => v["Category"].name
      );
      const newState = { ...form };
      newState.categories = newState.categories.map((category) => {
        if (categoriesDetail.includes(category.name)) category.checked = true;
        return category;
      });
      newState.name = productDetail.name;
      newState.price = productDetail.price;
      newState.stock = productDetail.stock;
      newState.description = productDetail.description;
      newState.image = getImage();
      newState.enable = productDetail.enable;
      setForm({...newState})
      
    }
  }, [productDetail]);

 

  function onChangeValue(e) {

    if (!form.hasOwnProperty(e.target.name)) return;
    if (e.target.name !== "categories") {
      e.target.name === "price" && e.target.name === "stock"
        ? setForm({ ...form, [e.target.name]: Number(e.target.value) })
        : setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      const newCategories = form?.categories?.map((category) => {
        if (e.target.value === category.name)
        category.checked = e.target.checked;
        return category;
      });
      setForm({ ...form, categories: [...newCategories]});
    }
    
    setErr(validate({...form, [e.target.name]: e.target.value
    }, {...categ,  [e.target.checked]: e.target.value}))
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  
  function onSubmit(e) {
    e.preventDefault();
    const body = { ...form };
    if(Object.keys(err).length || !form.name || !form.price || !form.stock  || !form.image || !form.categories || !form.description){
      return Toast.fire({
        icon: "warning",
        title: "Please complete all required fields"
      });
    }

    body.categories = body.categories.reduce((prev, curr) => {
      if (curr.checked) return [...prev, curr.name];
      return prev;
    }, []);
    if (idProduct) {
      body.id = idProduct;
      dispatch(updateProduct(body));
      setForm(initialFormState);
      alert("Actualizado Correctamente");
      navigate("/product/DashBoard");
    } else {
      dispatch(createProduct(body));
      setForm(initialFormState);
      alert("Create Sucesfully");
      navigate("/product/DashBoard");
    }
  }

  function onChangeImage(url){
    setForm({ ...form, image: url});
  }

  return (
    <>
      <NavBar />

      <form className="w-full max-w-lg mx-auto mt-20">
        {idProduct && Object.keys(productDetail)?.length === 0 ? (
          <p className="text-red-500 text-xs italic">Product not found</p>
        ) : (
          <>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  value={form.name}
                  name="name"
                  onChange={onChangeValue}
                  className="border-red-500 appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Piano"
                />
                {err.name && <p className="text-red-500 text-xs italic">{err.name}</p>}
        
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  value={form.price}
                  name="price"
                  onChange={onChangeValue}
                  className="border-red-500 appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  min="0"
                  type="number"
                  placeholder="90210"
                />
                {err.price && <p className="text-red-500 text-xs italic">{err.price}</p>}
                
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  value={form.stock}
                  name="stock"
                  onChange={onChangeValue}
                  className="border-red-500 appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="stock"
                  min="0"
                  type="number"
                  placeholder="25"
                />
                {err.stock && <p className="text-red-500 text-xs italic">{err.stock}</p>}
               
              </div>

              <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0 mt-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Categories
                </label>
                <div className="w-full md:w-1/1 flex flex-wrap justify-center justify-evenly gap-4 rounded border-red-500 border-solid border p-4">
                 

                  {form?.categories?.length > 0 ? (
                    form.categories.map((category) => (
                      <div key={category.id}>
                        <label>
                          <input
                            type="checkbox"
                            value={category.name}
                            onChange={onChangeValue}
                            checked={category.checked}
                            className="mr-2 focus:ring-0 focus:ring-transparent rounded"
                            name="categories"
                          />
                          {category.name}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p className="text-red-500 text-xs italic">
                      There are no categories, please create one
                    </p>
                  )}
                </div>
                {err.categories && <p className="text-red-500 text-xs italic">{err.categories}</p>}
              
              </div>

              <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0 mt-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <UpLoadImage getImage={getImage} onChangeImage={onChangeImage}/>
               
                {err.image && <p className="text-red-500 text-xs italic">{err.image}</p>}
                
              </div>
              <div className="w-full md:w-1/1 px-3 mt-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  rows="10"
                  value={form.description}
                  name="description"
                  onChange={onChangeValue}
                  className="border-red-500 appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="description"
                  type="text"
                  placeholder="Description of the product to create..."
                />
                {err.description && <p className="text-red-500 text-xs italic" >{err.description}</p>}
                
              </div>
            </div>

            <Link to={"/product/DashBoard"}>
              <button
                onClick={onSubmit}
                className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                                   
              >
                {idProduct ? "Update" : "Create"}
              </button>
            </Link>
          </>
        )}
      </form>
    </>
  );
}
