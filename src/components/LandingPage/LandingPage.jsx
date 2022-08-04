import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.jsx";
import SliderShow from "../SliderShow/SliderShow";
import Tendencia from "../Tendencia/Tendencia";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <SliderShow />
      <Tendencia />
      <Footer />
    </div>
  );
}
