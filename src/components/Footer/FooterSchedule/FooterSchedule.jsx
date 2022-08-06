import { BsCalendar2WeekFill } from "react-icons/bs";
import { withTranslation } from "react-i18next";


const FooterSchedule = ({ t }) => {
  return (
    <div>
      <div className="">
        <div className="flex items-center">
          <BsCalendar2WeekFill className="text-[#43D5CB] mob:text-[14px] desc:text-[16px]" />{" "}
          <div className="ml-2">{t("footer.schedule.firtsRow")}</div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end
          ">{t("footer.schedule.secondRow")}</div>
          <div className="flex justify-end
          ">{t("footer.schedule.thirdRow")}</div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(FooterSchedule);
