import React from "react";

const FooterComp = () => {
  return (
    <div
      className="bg-[#091D3E] text-white
      mob:h-[200px]
      tab:h-[250px]
      md:h-[300px]
      lap:h-[350px]
      desc:h-[400px]
      xdesc:h-[450px]
      min1920:h-[550px]"
    >
      <div
        className="min1920:max-w-[1520px] text-white flex justify-between
    min1920:mx-auto xdesc:mx-[170px] desc:mx-[120px] lap:mx-[40px] md:mx-[32px] tab:mx-[20px] mob:mx-[16px]
    h-full"
      >
        <div>Footer Works 1</div>
        <div>Footer Works 2</div>
        <div>Footer Works 3</div>
      </div>
    </div>
  );
};

export default FooterComp;
