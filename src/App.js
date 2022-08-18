import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import UserInfo from "./components/Profile/UserInfo";
import ViewCart from "./components/Cart/ViewCart";
import Success from "./components/Cart/Success";
import Rejected from "./components/Cart/Rejected";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import CheckoutForm from "./components/Cart/getBuy";
import Login from "./components/auth/login.jsx";
import RegisterUser from "./components/auth/auth.jsx";
import AuthContextProvider from "./config/authContext";
import HomeAdmin from "./components/Admin/HomeAdmin";
import Users from "./components/Admin/Users";
import Categories from "./components/Admin/CategoriesAdmin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginUser } from "./redux/actions/auth";
import { Orders } from "./components/Admin/Orders/Orders";
import { OrderDetail } from "./components/Admin/Orders/OrderDetail";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginUser());
  }, []);

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
        <Route
          path="/product/create"
          element={<AuthContextProvider element={<CreateProduct />} />}
        />

        <Route
          path="/product/update/:idProduct"
          element={<AuthContextProvider element={<CreateProduct />} />}
        />
<<<<<<< HEAD
        <Route
          path="/admin/home"
=======

        {/* Panel Admin */}
        <Route 
          path="/admin/home" 
>>>>>>> 5ad89652eaa7552a7575c80a41ac3f8c0038a3d5
          element={<AuthContextProvider element={<HomeAdmin />} />}
        />
        <Route path="/product/categories" element={<Categories />} />
        <Route
          path="/users/dashboard"
          element={<AuthContextProvider element={<Users />} />}
        />

        
        <Route
          path="/product/dashBoard"
          element={<AuthContextProvider element={<DashBoard />} />}
        />
        <Route path="/createUser" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:idOrder" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
//element={<AuthContextProvider element={<Home />}
// //
