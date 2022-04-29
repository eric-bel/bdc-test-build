import React from "react";
import { withTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";

const Location = ({ t }) => {
  return (
    <div
      className="flex items-center gap-2
    "
    >
      <MdLocationOn
        className="text-[#43D5CB]
      mob:text-[14px] 
      desc:text-[19px]
      "
      />
      <a href="https://yandex.com.ge/maps/-/CCUF5NhG0D">{t("location")}</a>
    </div>
  );
};

export default withTranslation()(Location);
