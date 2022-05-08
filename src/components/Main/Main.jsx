import React from "react";
import About from "./About/About";
// import Cards from "./Cards/Cards";
import Carousel from "./Carousel/Carousel";
import Employees from "./Employees/Employees";
import OurServices from "./OurServices/OurServices";
import Reviews from "./Reviews/Reviews";
import team from "../../assets/team.jpg";
import mainVideo from "../../assets/video/mainVideo.mp4";

const Main = () => {
  return (
    <main>
      <Carousel />
      {/* <Cards /> */}
      <About img={team} video={mainVideo} />
      <OurServices />
      <Employees />
      <Reviews />
    </main>
  );
};

export default Main;
