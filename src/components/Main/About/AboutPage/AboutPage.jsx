import { withTranslation } from "react-i18next";
import PageHeader from "../../CustomTemplates/PageHeader/PageHeader";
import About from "../About";
import teamParty from "../../../../assets/aboutImg/teamParty.jpg";
import aboutHeder from "../../../../assets/aboutImg/aboutHeder.jpg";
import AboutMore from "./AboutMore/AboutMore";

// { t }

const AboutPage = () => {
  return (
    <div className="mb-10">
      <PageHeader img={aboutHeder} />
      <About img={teamParty} />
      <AboutMore />
    </div>
  );
};

export default withTranslation()(AboutPage);
