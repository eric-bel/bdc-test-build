import OurServicesComp from "./OurServicesComp/OurServicesComp";
import treat from "../../../assets/chair.png";
import implant from "../../../assets/implant2.png";
import surgery from "../../../assets/surgery.png";
import correct from "../../../assets/correct.png";
import child from "../../../assets/child.png";
import { withTranslation } from "react-i18next";
import NavButton from "../CustomTemplates/NavButton/NavButton";

const OurServices = ({ t }) => {
  return (
    <div className="bg-[#091D3E] text-white mt-20 overflow-auto overflow-x-auto h-auto">
      {/* main-container-2 */}
      <div
        className="min1920:max-w-[1520px] text-white 
    min1920:mx-auto xdesc:mx-[170px] desc:mx-[120px] lap:mx-[40px] md:mx-[32px] tab:mx-[20px] mob:mx-[16px]
    h-full"
      >
        {/* title 1 */}
        <div
          className="font-semibold text-sky-500 pt-28 ml-[2px]
        mob:text-[7px] mob:pt-9 mob:text-center
        tab:text-[8px] tab:pt-16
        md:text-[10px] md:pt-16
        lap:text-[12px] lap:pt-20
        desc:text-[14px]
        xdesc:text-[16px]"
        >
          Высококачественный уход и безопасность пациентов
        </div>
        {/* title 2 */}
        <h3
          className="text-white text-[40px] font-medium 
      mob:text-[16px] mob:font-bold mob:mb-4 mob:text-center
      tab:text-[18px] tab:font-bold tab:mb-6
      md:text-[20px] md:font-bold md:mb-4 
      lap:text-[35px] lap:font-bold lap:mb-4
      "
        >
          Наши услуги
        </h3>
        {/* card-container */}
        <div
          className="flex justify-between
        mob:flex-wrap 
        tab:flex-wrap
        md:flex-wrap
        lap:flex-wrap
        desc:flex-wrap 
        "
        >
          {/* cards */}
          <OurServicesComp
            icon={treat}
            title={t("serviceList.treatTitle")}
            listOfServices={t("serviceList.treatInfoForAboutComponent")}
          />
          <OurServicesComp
            icon={implant}
            title={t("serviceList.implantTitle")}
            listOfServices={t("serviceList.implantInfoForAboutComponent")}
          />
          <OurServicesComp
            icon={surgery}
            title={t("serviceList.surgeryTitle")}
            listOfServices={t("serviceList.surgeryInfoForAboutComponent")}
          />
          <OurServicesComp
            icon={correct}
            title={t("serviceList.correctionTitle")}
            listOfServices={t("serviceList.correctionInfoForAboutComponent")}
          />
          <OurServicesComp
            icon={child}
            title={t("serviceList.children'sDentistryTitle")}
            listOfServices={t("serviceList.childrenInfoForAboutComponent")}
          />
          <OurServicesComp
            icon={correct}
            title={t("serviceList.aestheticDentistryTitle")}
            listOfServices={t("serviceList.aestheticInfoForAboutComponent")}
          />
        </div>
        <NavButton path="/services" text={"Подробнее Об Услугах"} />
      </div>
    </div>
  );
};

export default withTranslation()(OurServices);
