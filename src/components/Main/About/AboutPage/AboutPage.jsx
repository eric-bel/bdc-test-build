import { withTranslation } from "react-i18next";
import About from "../About";
import teamParty from "../../../../assets/aboutImg/teamParty.jpg";
import AboutMore from "./AboutMore/AboutMore";
import logo from "../../../../assets/newlogo1.jpeg";

const AboutPage = ({ t }) => {
  return (
    <div className="mb-10">
      <img src={logo} alt="about us logo" className="w-3/5 mt-10 mx-auto"></img>
      <div className="italic font-bold text-[#ff00ff] text-[52px] mt-10 text-center">
        {t("aboutUsPage.tagline")}
      </div>
      <div className="main_container flex flex-col gap-3 items-center mt-14">
        <h2 className="text-center font-bold text-2xl mb-10">{t("tagline")}</h2>

        <img className="rounded w-4/5" src={teamParty} alt="team"></img>

        <div
          className="font-bold text-[15px] text-gray-500 text-center
      mob:text-[10px]
      tab:text-[12px]
      "
        >
          {t("aboutBlock.littleTitle")}
        </div>
        <h2
          className="text-[#091D3E] text-[40px] font-medium text-center w-3/4
        mob:text-[16px] mob:font-bold
        tab:text-[18px] tab:font-bold
        md:text-[20px] md:font-bold
        "
        >
          {t("aboutBlock.mainTitle")}
        </h2>
        <div
          className="font-bold text-[15px] text-[#091D3E] w-4/5
        mob:text-[10px] mob:w-full
        tab:text-[12px] tab:w-full
        md:text-[12px] md:w-5/6
      "
        >
          {t("aboutBlock.mainText1")}
        </div>
        <div
          className="text-[15px] font-medium text-gray-500 w-4/5
      mob:text-[10px] mob:w-full
      tab:text-[12px] tab:w-full
      md:text-[12px] md:w-5/6
      "
        >
          {t("aboutBlock.mainTextForPage")}
        </div>
      </div>
      <AboutMore />
    </div>
  );
};

export default withTranslation()(AboutPage);
