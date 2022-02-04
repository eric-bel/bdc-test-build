import { t } from "i18next";
import React from "react";
import { withTranslation } from "react-i18next";

const Schedule = () => {
  return <div>{t("schedule")}</div>;
};

export default withTranslation()(Schedule);
