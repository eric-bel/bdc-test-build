import React from "react";
import FooterFourthRow from "./FooterFourthRow/FooterFourthRow";
import FooterPaymentMethods from "./FooterPaymentMethods/FooterPaymentMethods";
import FooterPhoneNumbers from "./FooterPhoneNumbers/FooterPhoneNumbers";
import FooterSchedule from "./FooterSchedule/FooterSchedule";
import FooterSecondRow from "./FooterSecondRow/FooterSecondRow";
import Social from "./Social/Social";

const FooterComp = () => {
  return (
    <div
      className="bg-[#091D3E] text-white
      "
    >
      <div
        className="h-full"
      >
        <div className="">
          <FooterFourthRow />
          <div
            className="py-10 
          tab:px-0 tab:text-sm
          mob:px-0 mob:text-[12px] mob:py-5
          "
          >
            <div
              className="flex justify-between
             min1920:mx-auto xdesc:mx-[170px] desc:mx-[120px] lap:mx-[40px] md:mx-[32px] tab:mx-[20px] mob:mx-[16px]
             min1920:max-w-[1532px]
             md:flex-col md:items-center md:gap-5
             tab:flex-col tab:items-center tab:gap-3
             mob:flex-col mob:items-center mob:gap-2
            "
            >
              <Social />
              <FooterPhoneNumbers />
              <FooterSecondRow />
              <FooterSchedule />
              <FooterPaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
