import React from "react";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";
import mainImg from "../../assets/pageHeaderImg/mainImg.png";


const Main = () => {
  return (
    <main>
      <Carousel />
      <h2 className="text-center font-bold text-2xl mt-10">Альтерантива есть всегда!</h2>
      <About img={mainImg} />
      <OurServices />
      <Employees />
      <Reviews />
    </main>
  );
};

export default Main;
