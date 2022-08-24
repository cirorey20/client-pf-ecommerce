import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import SliderShow from "../SliderShow/SliderShow";
import ProductsView from "../ProductsView/ProductsView";
import NewSection from "../NewSection/NewSection";
import MostWanted from "../MostWanted/MostWanted";

export default function LandingPage() {
  return (
    <div className=" justify-center flex flex-col min-h-screen">
      {" "}
      <NavBar />
      <SliderShow />
      <ProductsView />
      <MostWanted />
      <NewSection />
      <Footer />
    </div>
  );
}
