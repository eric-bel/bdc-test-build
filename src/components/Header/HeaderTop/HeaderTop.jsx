import React from "react";
import LanguagesComp from "./LanguagesComp/LanguagesComp";
import Location from "./Location/Location";
import Number from "./Number/Number";
import Schedule from "./Schedule/Schedule";

const HeaderTop = () => {
  return (
    <div className="headertop_container bg-[#091D3E] text-white">
      <div
        className="headertopinner_container flex justify-between
      desc:text-[11.3px]"
      >
        <div className="flex h-full items-center gap-7">
          <Number />
          <Location />
        </div>
        <div className="flex h-full items-center gap-7">
          <Schedule />
          <LanguagesComp />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
