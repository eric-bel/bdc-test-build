import { withTranslation } from "react-i18next";

const AboutMore = ({ t }) => {
  return (
    <div className="main_container">
      <div className="main_container">
        <strong
          className="text-[#091D3E] text-[30px] font-medium text-center w-3/4
          mob:text-[16px] mob:font-bold
          tab:text-[18px] tab:font-bold
          md:text-[20px] md:font-bold"
        >
          {t("aboutUsPage.aboutMore.title")}
        </strong>
        <ul
          className="text-[15px] font-medium text-gray-500 list-disc
      mob:text-[10px] mob:w-full
      tab:text-[12px] tab:w-full
      md:text-[12px] md:w-5/6"
        >
          <li>{t("aboutUsPage.aboutMore.li1")}</li>
          <li>{t("aboutUsPage.aboutMore.li2")}</li>
          <li>{t("aboutUsPage.aboutMore.li3")}</li>
          <li>{t("aboutUsPage.aboutMore.li4")}</li>
          <li>{t("aboutUsPage.aboutMore.li5")}</li>
          <li>{t("aboutUsPage.aboutMore.li6")}</li>
          <li>{t("aboutUsPage.aboutMore.li7")}</li>
          <li>
            <strong>{t("aboutUsPage.aboutMore.li8.title")}</strong>
            <p>{t("aboutUsPage.aboutMore.li8.li")}</p>
          </li>
          <li>
            <strong>{t("aboutUsPage.aboutMore.li9.title")}</strong>
            <p>{t("aboutUsPage.aboutMore.li9.li")}</p>
          </li>
          <li>{t("aboutUsPage.aboutMore.li10")}</li>
        </ul>
      </div>
    </div>
  );
};

export default withTranslation()(AboutMore);
