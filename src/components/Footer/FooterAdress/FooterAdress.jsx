import React from "react";
import { withTranslation } from "react-i18next";

const Location = ({ t }) => {
  return (
    <div className="pr-[2px]">
      <p>Адрес:</p>
      <a href="https://yandex.com.ge/maps/-/CCUF5NhG0D">{t("shortLocation")}</a>
    </div>
  );
};

export default withTranslation()(Location);
