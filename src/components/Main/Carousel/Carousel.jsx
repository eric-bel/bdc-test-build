import React from "react";
import slide1 from "../../../assets/slide22.jpg";

const Carousel = () => {
  // main_container
  return (
    <div className="relative h-full min1920:mx-auto min1920:max-w-[1780px]">
      <img className="" src={slide1} alt="slide1"></img>
      <h1
        className="absolute font-semibold text-blue-600
        mob:top-[30px] mob:left-[20px] mob:text-[8px]
        desc:top-[120px] desc:left-[120px] desc:text-[20px]
        "
      >
        Batumi Dental Clinic
      </h1>
      <h2
        className="absolute font-bold text-[#091D3E] leading-[16px]
        mob:top-[45px] mob:left-[20px] mob:text-[15px]
        desc:top-[160px] desc:left-[120px] desc:text-[55px]
        "
      >
        Яркая Улыбка Для <br></br> Здорового <br></br> Образа Жизни
      </h2>
      <h2
        className="absolute font-bold text-[#091D3E] 
        mob:top-[99px] mob:left-[20px] mob:text-[6px]
        desc:top-[340px] desc:left-[120px] desc:text-[17px]
      "
      >
        Доступная и безопасная стоматология <br></br> для взрослых и детей
      </h2>
    </div>
  );
};

export default Carousel;
