import React from "react";
import { withTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";

const LanguagesComp = ({ t, i18n }) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="mt-10">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <hr />
      <div>
        <h1>{t("title")}</h1>
      </div>
      <div>{t("description.part1")}</div>
      <div>{t("description.part2")}</div>
    </div>
  );
};

export default withTranslation()(LanguagesComp);
