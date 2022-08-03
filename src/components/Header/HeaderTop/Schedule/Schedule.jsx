import { t } from "i18next";
import React from "react";
import { withTranslation } from "react-i18next";
import { AiFillClockCircle } from "react-icons/ai";

const Schedule = () => {
  return (
    <div className="flex items-center gap-2">
      {" "}
      <AiFillClockCircle
        className="text-[#43D5CB]
        mob:text-[13px]
      desc:text-[16px]
      "
      />
      {t("headertop.schedule")}
    </div>
  );
};

export default withTranslation()(Schedule);
