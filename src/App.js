import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import UserInfo from "./components/Profile/UserInfo";
import ViewCart from "./components/Cart/ViewCart";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import Login from "./components/auth/login.jsx";
import Users from "./components/auth/users";
import Auth from "./components/auth/auth";
import Profile from "./components/auth/profile.jsx";
import AuthContextProvider from "./config/authContext";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginUser } from "./redux/actions/auth";


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getLoginUser());
  },[])


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/logged/userInfo" element={<UserInfo />} />
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/update/:idProduct" element={<CreateProduct />} />
        <Route path="/product/DashBoard" element={<DashBoard />} />
        <Route path="/createUser" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
//element={<AuthContextProvider element={<Home />}
