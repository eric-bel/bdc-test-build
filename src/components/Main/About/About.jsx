import React from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

const About = (props) => {
  return (
    <div className="main_container flex flex-col gap-3 items-center mt-14">
      <h2 className="text-center font-bold text-2xl mb-10">
        {i18next.t("tagline")}
      </h2>
      {props.hasOwnProperty("video") ? (
        <video
          className="rounded w-4/5 mob:w-full"
          src={props.video}
          muted
          autoPlay={true}
          loop={true}
        ></video>
      ) : (
        <img className="rounded w-4/5" src={props.img} alt="team"></img>
      )}
      <div
        className="font-bold text-[15px] text-gray-500 text-center
      mob:text-[10px]
      tab:text-[12px]
      "
      >
        {i18next.t("aboutBlock.littleTitle")}
      </div>
      <h2
        className="text-[#091D3E] text-[40px] font-medium text-center w-3/4
        mob:text-[16px] mob:font-bold
        tab:text-[18px] tab:font-bold
        md:text-[20px] md:font-bold
        "
      >
        {i18next.t("aboutBlock.mainTitle")}
      </h2>
      <div
        className="font-bold text-[15px] text-[#091D3E] w-4/5
        mob:text-[10px] mob:w-full
        tab:text-[12px] tab:w-full
        md:text-[12px] md:w-5/6
      "
      >
        {i18next.t("aboutBlock.mainText1")}
      </div>
      <div
        className="text-[15px] font-medium text-gray-500 w-4/5
      mob:text-[10px] mob:w-full
      tab:text-[12px] tab:w-full
      md:text-[12px] md:w-5/6
      "
      >
        {i18next.t("aboutBlock.mainText2")}
      </div>
    </div>
  );
};

export default withTranslation()(About);
