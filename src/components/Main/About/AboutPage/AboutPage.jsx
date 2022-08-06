import { withTranslation } from "react-i18next";
import About from "../About";
import teamParty from "../../../../assets/aboutImg/teamParty.jpg";
import AboutMore from "./AboutMore/AboutMore";
import logo from "../../../../assets/newlogo1.jpeg";

const AboutPage = ({ t }) => {
  return (
    <div className="mb-10">
      <img
        src={logo}
        alt="about us logo"
        className="w-3/5 mt-10 mx-auto"
      ></img>
      <div className="italic font-bold text-[#ff00ff] text-[52px] mt-10 text-center">{t("aboutUsPage.tagline")}</div>
      <About img={teamParty} />
      <AboutMore />
    </div>
  );
};

export default withTranslation()(AboutPage);
