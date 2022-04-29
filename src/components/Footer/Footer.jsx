import React from "react";
import FooterFirstRow from "./FooterFirstRow/FooterFirstRow";
import FooterFourthRow from "./FooterFourthRow/FooterFourthRow";
import FooterSecondRow from "./FooterSecondRow/FooterSecondRow";
import FooterThirdRow from "./FooterThirdRow/FooterThirdRow";

const FooterComp = () => {
  return (
    <div
      className="bg-[#091D3E] text-white
      mob:min-h-[150px] 
      tab:min-h-[350px] 
      md:min-h-[500px]
      lap:min-h-[550px]
      desc:min-h-[550px]
      xdesc:min-h-[650px]
      min1920:min-h-[650px]"
    >
      <div
        className="min1920:max-w-[1520px] text-white 
    min1920:mx-auto xdesc:mx-[170px] desc:mx-[120px] lap:mx-[40px] md:mx-[32px] tab:mx-[20px] mob:mx-[16px]
    h-full"
      >
        <div className="">
          <FooterFourthRow />
          <div className="h-4/5 py-10 px-28
          tab:px-0 tab:text-sm
          mob:px-0 mob:text-[12px]
          ">
            <div className="h-[250px] flex flex-col justify-between
            mob:justify-around
            ">
              <FooterFirstRow />
              <FooterSecondRow />
              <FooterThirdRow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
