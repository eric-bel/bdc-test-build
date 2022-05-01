import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const FooterPhoneNumbers = () => {
  return (
    <div
      className="flex gap-1 flex-col
      md:flex-row md:gap-4
      tab:flex-row tab:gap-3
      "
    >
      <div className="flex gap-3
      
      ">
        <FaPhoneAlt
          className=" text-[#43D5CB] mt-1
          mob:text-[12px]
          "
        />
        <a className="text-lg font-semibold" href="tel:+995577500535">+995 577 50 05 35;</a>
      </div>{" "}
      <div className="flex gap-3">
        <FaPhoneAlt
          className=" text-[#43D5CB] mt-1
          mob:text-[12px]
          "
        />
        <a className="text-lg font-semibold" href="tel:+0422258787">+0422 25 87 87</a>
      </div>
    </div>
  );
};

export default FooterPhoneNumbers;
