import React from "react";
import About from "./About/About";
// import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";
import ServicesComp from "./ServicesComp/ServicesComp";

const Main = () => {
  return (
    <>
      <Carousel />
      {/* <Cards /> */}
      <About />
      <OurServices />
      <ServicesComp />
      <Employees />
      <Reviews />
    </>
  );
};

export default Main;
