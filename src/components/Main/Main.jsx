import React from "react";
import About from "./About/About";
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import ServicesComp from "./ServicesComp/ServicesComp";

const Main = () => {
  return (
    <>
      <Carousel />
      <Cards />
      <About />
      <ServicesComp />
    </>
  );
};

export default Main;
