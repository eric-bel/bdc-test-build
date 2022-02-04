import React from "react";
import { withTranslation } from "react-i18next";

const Location = ({ t }) => {
  return (
    <div>
      <div>{t("location")}</div>
    </div>
  );
};

export default withTranslation()(Location);
