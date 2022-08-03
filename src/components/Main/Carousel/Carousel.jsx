import React from "react";
import mainImg from "../../../assets/mainImg.png";
import { withTranslation } from "react-i18next";

const Carousel = ({ t }) => {
  return (
    <div className="relative h-full min1920:mx-auto min1920:max-w-[1780px]">
      <img className="w-full" src={mainImg} alt="mainImg"></img>

      <h1
        className="absolute font-semibold text-[#16a34a]
        mob:top-[35px] mob:left-[35%] mob:text-[8px]
        tab:top-[75px] tab:left-[35%] tab:text-[12px]
        md:top-[103px] md:left-[35%] md:text-[15px]
        lap:top-[143px] lap:left-[40%] lap:text-[15px]
        desc:top-[10%] desc:left-[43.6%] desc:text-[20px]
        xdesc:top-[140px] xdesc:left-[41%] xdesc:text-[25px]
        "
      >
        {t("mainImgText.clinicName")}
      </h1>
      <h2
        className="absolute font-bold text-sky-600 leading-[16px]
        mob:top-[50px] mob:left-[35%] mob:text-[15px]
        tab:top-[95px] tab:left-[35%] tab:text-[22px] tab:leading-[20px]
        md:top-[135px] md:left-[35%] md:text-[35px] md:leading-[34px]
        lap:top-[180px] lap:left-[40%] lap:text-[40px] lap:leading-[40px]
        desc:top-[15%] desc:left-[43%] desc:text-[55px] desc:leading-[60px]
        xdesc:top-[190px] xdesc:left-[41%] xdesc:text-[75px] xdesc:leading-[75px]
        "
      >
        {t("mainImgText.mainTitle1")} <br></br> {t("mainImgText.mainTitle2")}{" "}
        <br></br> {t("mainImgText.mainTitle3")}
      </h2>
      <h2
        className="absolute font-bold text-[#091D3E] 
        mob:top-[104px] mob:left-[35%] mob:text-[6px]
        tab:top-[165px] tab:left-[35%] tab:text-[12px] tab:leading-[12px]
        md:top-[248px] md:left-[35%] md:text-[13px] md:leading-[15px]
        lap:top-[320px] lap:left-[40%] lap:text-[15px] lap:leading-[17px]
        desc:top-[40%] desc:left-[43%] desc:text-[17px]
        xdesc:top-[440px] xdesc:left-[41%] xdesc:text-[17px]
      "
      >
        {t("mainImgText.subTitle1")} <br></br> {t("mainImgText.subTitle2")}
      </h2>
    </div>
  );
};

export default withTranslation()(Carousel);
