import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import UserInfo from "./components/Profile/UserInfo";
import ViewCart from "./components/Cart/ViewCart";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import CheckoutForm from "./components/Cart/getBuy";
import Login from "./components/auth/login.jsx";
import RegisterUser from "./components/auth/auth.jsx";
import Users from "./components/Users/Users";
import AuthContextProvider from "./config/authContext";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginUser } from "./redux/actions/auth";

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
        <Route
          path="/users/dashboard"
          element={<AuthContextProvider element={<Users />} />}
        />
        <Route
          path="/product/create"
          element={<AuthContextProvider element={<CreateProduct />} />}
        />

        <Route
          path="/product/update/:idProduct"
          element={<AuthContextProvider element={<CreateProduct />} />}
        />
        <Route
          path="/product/dashBoard"
          element={<AuthContextProvider element={<DashBoard />} />}
        />
        <Route path="/createUser" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
//element={<AuthContextProvider element={<Home />}
// //
