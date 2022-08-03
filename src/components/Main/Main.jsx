import React from "react";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";
import mainVideo from "../../assets/video/mainVideo.mp4";
import NavButton from "./CustomTemplates/NavButton/NavButton";
import i18next from "i18next";

const Main = () => {
  const text = i18next.t("buttonMooreAboutUs");
  return (
    <main>
      <Carousel />
      <About video={mainVideo} />
      <NavButton path="/about" text={text} />
      <OurServices />
      <Employees />
      <Reviews />
    </main>
  );
};

export default Main;
