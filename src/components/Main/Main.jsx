import React from "react";
import About from "./About/About";
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import ServicesComp from "./ServicesComp/ServicesComp";

const Main = () => {
  return (
    <>
      <Carousel />
      <Cards />
      <About />
      <ServicesComp />
      <Employees />
    </>
  );
};

export default Main;
