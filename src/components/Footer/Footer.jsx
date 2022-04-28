import React from "react";
import Ymaps from "./Ymaps/Ymaps";

const FooterComp = () => {
  return (
    <div
      className="bg-[#091D3E] text-white
      mob:h-[500px]
      tab:h-[550px]
      md:h-[500px]
      lap:h-[550px]
      desc:h-[550px]
      xdesc:h-[550px]
      min1920:h-[650px]"
    >
      <div
        className="min1920:max-w-[1520px] text-white flex justify-between
    min1920:mx-auto xdesc:mx-[170px] desc:mx-[120px] lap:mx-[40px] md:mx-[32px] tab:mx-[20px] mob:mx-[16px]
    mob:flex-col-reverse
    tab:flex-col-reverse
    h-full"
      >
        <div className="w-1/2 h-1/2">TEL NUMBERS</div>
        <div className="w-1/2 h-1/2">SCHEDULE</div>
        <Ymaps />
      </div>
    </div>
  );
};

export default FooterComp;
