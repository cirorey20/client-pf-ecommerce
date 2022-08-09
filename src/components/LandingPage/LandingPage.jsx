import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import SliderShow from "../SliderShow/SliderShow";
import Tendencia from "../Tendencia/Tendencia";
import ProductsView from "../ProductsView/ProductsView";
import NewSection from "../NewSection/NewSection";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="body_container">
        <p className="item1">hey</p>
        <p className="item2">hey</p>
        <p className="item3">hey</p>
        <p className="item4">hey</p>
      </div>
      {/*       
      <SliderShow />
      <ProductsView />
      <Tendencia />
      <NewSection />
      <Footer /> */}
    </div>
  );
}
