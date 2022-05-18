import React from "react";
import About from "./About/About";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";
import mainVideo from "../../assets/video/mainVideo.mp4";

const Main = () => {
  return (
    <main>
      <Carousel />
      <h2 className="text-center font-bold text-2xl mt-10">
        Альтернатива есть всегда!
      </h2>
      <About video={mainVideo} />
      <OurServices />
      <Employees />
      <Reviews />
    </main>
  );
};

export default Main;
