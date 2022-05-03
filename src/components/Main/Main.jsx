import React from "react";
import About from "./About/About";
// import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";
import ReviewsCarousel from "./Reviews/ReviewsCarousel/ReviewsCarousel";

const Main = () => {
  return (
    <main>
      <Carousel />
      {/* <Cards /> */}
      <About />
      <OurServices />
      <Employees />
      <ReviewsCarousel />
      <Reviews />
    </main>
  );
};

export default Main;
