import React from "react";
import slide1 from "../../../assets/slide22.jpg";

const Carousel = () => {
  // main_container
  return (
    <div className="relative h-full min1920:mx-auto min1920:max-w-[1780px]">
      <img className="w-full" src={slide1} alt="slide1"></img>
      <h1
        className="absolute font-semibold text-sky-500
        mob:top-[35px] mob:left-[21px] mob:text-[8px]
        tab:top-[75px] tab:left-[23px] tab:text-[12px]
        md:top-[103px] md:left-[35px] md:text-[15px]
        lap:top-[143px] lap:left-[46px] lap:text-[15px]
        desc:top-[120px] desc:left-[120px] desc:text-[20px]
        xdesc:top-[140px] xdesc:left-[186px] xdesc:text-[25px]
        "
      >
        Batumi Dental Clinic
      </h1>
      <h2
        className="absolute font-bold text-[#091D3E] leading-[16px]
        mob:top-[50px] mob:left-[20px] mob:text-[15px]
        tab:top-[95px] tab:left-[23px] tab:text-[22px] tab:leading-[20px]
        md:top-[135px] md:left-[33px] md:text-[35px] md:leading-[34px]
        lap:top-[180px] lap:left-[43px] lap:text-[40px] lap:leading-[40px]
        desc:top-[160px] desc:left-[120px] desc:text-[55px] desc:leading-[60px]
        xdesc:top-[190px] xdesc:left-[180px] xdesc:text-[75px] xdesc:leading-[75px]
        "
      >
        Яркая Улыбка Для <br></br> Здорового <br></br> Образа Жизни
      </h2>
      <h2
        className="absolute font-bold text-[#091D3E] 
        mob:top-[104px] mob:left-[20px] mob:text-[6px]
        tab:top-[165px] tab:left-[23px] tab:text-[12px] tab:leading-[12px]
        md:top-[248px] md:left-[35px] md:text-[13px] md:leading-[15px]
        lap:top-[320px] lap:left-[43px] lap:text-[15px] lap:leading-[17px]
        desc:top-[360px] desc:left-[120px] desc:text-[17px]
        xdesc:top-[440px] xdesc:left-[180px] xdesc:text-[17px]
      "
      >
        Доступная и безопасная стоматология <br></br> для взрослых и детей
      </h2>
    </div>
  );
};

export default Carousel;
