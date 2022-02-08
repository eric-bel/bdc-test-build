import React from "react";
import LanguagesComp from "./LanguagesComp/LanguagesComp";
import Location from "./Location/Location";
import Number from "./Number/Number";
import Schedule from "./Schedule/Schedule";

const HeaderTop = () => {
  return (
    <div
      className="headertop_container bg-[#091D3E] text-white"
    >
      <div
        className="headertopinner_container headertop_text flex justify-between
      desc:text-[11.3px]
      mob:flex-col
      tab:flex-col
      "
      >
        <div
          className="flex h-full items-center gap-8
        mob:flex-col mob:gap-1 mob:justify-between
        tab:justify-between
        "
        >
          <Number />
          <Location />
        </div>
        <div
          className="flex h-full items-center gap-7
        mob:flex-col  mob:gap-1 
        tab:justify-between
        "
        >
          <Schedule />
          <LanguagesComp />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
