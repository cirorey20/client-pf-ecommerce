import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import UserInfo from "./components/Profile/UserInfo";
import ViewCart from "./components/Cart/ViewCart";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import DashBoard from "./components/DashBoard/DashBoard.jsx";
import CheckoutForm from "./components/Cart/getBuy"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />   
        <Route path="/product/:id" element={<Details />} />
        <Route path="/product/carrito" element={<CheckoutForm />} />
        <Route path="/logged/userInfo" element={<UserInfo />} />
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/update/:idProduct" element={<CreateProduct />} />
        <Route path="/product/DashBoard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
