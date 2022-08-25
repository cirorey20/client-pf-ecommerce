import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import UserInfo from "./components/Profile/UserInfo";
import ViewCart from "./components/Cart/ViewCart";
import Success from "./components/Cart/Success";
import Rejected from "./components/Cart/Rejected";
import CheckoutForm from "./components/Cart/getBuy";
import Login from "./components/auth/login.jsx";
import RegisterUser from "./components/auth/auth.jsx";
import AuthContextProvider from "./config/authContext";

import AuthenticateAccount from "./components/AuthenticateAccount/AuthenticateAccount";
import ProfileFav from "./components/UserProfile/ProfileFav";


//ADMIN PANEL
import HomeAdmin from "./components/Admin/HomeAdmin";
import Users from "./components/Admin/Users";
import Products from "./components/Admin/Products.jsx";
import CreateProduct from "./components/Admin/CreateProduct";
import Categories from "./components/Admin/CategoriesAdmin";

//CLIENT PANEL
import HomeClient from "./components/ClientPanel/HomeClient";
import MyShopping from "./components/MyShopping/MyShopping.jsx";
import RateProduct from "./components/RateProduct/RateProduct.jsx";


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginUser } from "./redux/actions/auth";
import { Orders } from "./components/Admin/Orders/Orders";
import { OrderDetail } from "./components/Admin/Orders/OrderDetail";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginUser());
    const token = document.cookie.split("token=")[1];
    if (token === undefined) {
      localStorage.removeItem("rol");
    }
    // console.log("Este es el token", token);
  });

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/product/carrito" element={<CheckoutForm />} />
        <Route path="/logged/userInfo" element={<UserInfo />} />

        <Route path="/cart" element={<ViewCart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/rejected" element={<Rejected />} />

        {/* Panel Admin */}
        <Route
          path="/admin/home"
          element={
            <AuthContextProvider user={"admin"} element={<HomeAdmin />} />
          }
        />
        <Route
          path="/product/dashBoard"
          element={
            <AuthContextProvider user={"admin"} element={<Products />} />
          }
        />
        <Route
          path="/product/create"
          element={
            <AuthContextProvider user={"admin"} element={<CreateProduct />} />
          }
        />
        <Route
          path="/product/update/:idProduct"
          element={
            <AuthContextProvider user={"admin"} element={<CreateProduct />} />
          }
        />
        <Route path="/product/categories" element={<Categories />} />
        <Route
          path="/users/dashboard"
          element={<AuthContextProvider user={"admin"} element={<Users />} />}
        />

        {/* Panel Client  user/dashboard*/}
        <Route
          path="/user/dashboard"
          element={
            <AuthContextProvider user={"user"} element={<HomeClient />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <AuthContextProvider user={"user"} element={<ProfileFav />} />
            
          }
        />
        <Route
          path="/user/myshopping"
          element={
            <AuthContextProvider user={"user"} element={<MyShopping />} />
          }
        />
        <Route
          path="/orders"
          element={
            <AuthContextProvider
              user={"admin"}
              element={<Orders />}
            />
          }
        />

        {/* Admin y User pueder acceder a esta vista */}
        <Route
          path="/orders/:idOrder"
          element={
            <AuthContextProvider
              user={["admin", "user"]}
              element={<OrderDetail />}
            />
          }
        />

        {/* User puede calificar un producto */}
        <Route path="/rateProduct/:idOrder" element={<RateProduct />} />

        <Route path="/createUser" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account/authenticate/:idUser/:code"
          element={<AuthenticateAccount />}
        />
      </Routes>
    </div>
  );
}

export default App;
//element={<AuthContextProvider element={<Home />}
// //
