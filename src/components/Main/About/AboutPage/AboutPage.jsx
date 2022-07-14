import { withTranslation } from "react-i18next";
import About from "../About";
import teamParty from "../../../../assets/aboutImg/teamParty.jpg";
import AboutMore from "./AboutMore/AboutMore";
import logo from "../../../../assets/logo.png";

// { t }

const AboutPage = () => {
  return (
    <div className="mb-10">
      <img src={logo} alt="about us logo" className="w-1/2 mt-10"></img>
      <About img={teamParty} />
      <AboutMore />
    </div>
  );
};

export default withTranslation()(AboutPage);
