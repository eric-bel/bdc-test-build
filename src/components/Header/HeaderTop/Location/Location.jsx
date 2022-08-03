import React from "react";
import { MdLocationOn } from "react-icons/md";
import { withTranslation } from "react-i18next";

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
      <a href="https://yandex.com.ge/maps/-/CCUF5NhG0D">
        {t("headertop.location")}
      </a>
    </div>
  );
};

export default withTranslation()(Location);

/** 

import { withTranslation } from "react-i18next";
{ t }
{t("headertop.location")}
export default withTranslation()(Location);

*/
