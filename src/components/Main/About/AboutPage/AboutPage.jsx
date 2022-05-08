import { withTranslation } from "react-i18next";
import PageHeader from "../../CustomTemplates/PageHeader/PageHeader";
import About from "../About";

// { t }

const AboutPage = () => {
  return (
    <div className="mb-10">
      <PageHeader />
      <About />
    </div>
  );
};

export default withTranslation()(AboutPage);
