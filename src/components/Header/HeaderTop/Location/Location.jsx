import React from "react";
import { withTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";

const Location = ({ t }) => {

  // { ns: 'translation' }
  return (
    <div className="flex items-center gap-2
    ">
      <MdLocationOn className="text-[#43D5CB]
      mob:text-[14px] 
      desc:text-[19px]
      " />
      <div>{t("location")}</div>
    </div>
  );
};

export default withTranslation()(Location);
