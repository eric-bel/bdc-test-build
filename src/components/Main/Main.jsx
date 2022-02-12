import React from "react";
import About from "./About/About";
import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";

const Main = () => {
  return (
    <>
      <Carousel />
      <Cards />
      <About />
    </>
  );
};

export default Main;
