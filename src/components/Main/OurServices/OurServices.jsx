import OurServicesComp from "./OurServicesComp/OurServicesComp";
import treat from "../../../assets/chair.png";
import implant from "../../../assets/implant2.png";
import surgery from "../../../assets/surgery.png";
import correct from "../../../assets/correct.png";
import child from "../../../assets/child.png";
import { withTranslation } from "react-i18next";

const OurServices = ({ t }) => {
  return (
    //   main-container
    <div
      className="bg-[#091D3E] text-white mt-20
      mob:h-[780px]
      tab:h-[870px]
      md:h-[1070px]
      lap:h-[1230px]
      desc:h-[890px]
      xdesc:h-[950px]
      min1920:h-[950px] 
        "
    >
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
        mob:flex-wrap mob:justify-evenly
        tab:flex-wrap tab:justify-evenly
        md:flex-wrap  md:justify-evenly
        lap:flex-wrap lap:justify-evenly
        desc:flex-wrap desc:justify-evenly
        "
        >
          {/* cards */}
          <OurServicesComp
            icon={treat}
            title={t("serviceList.treatTitle")}
            listOfServices={t("serviceList.treatList", { returnObjects: true })}
          />
          <OurServicesComp
            icon={implant}
            title={t("serviceList.implantTitle")}
            listOfServices={t("serviceList.implantList", {
              returnObjects: true,
            })}
          />
          <OurServicesComp
            icon={surgery}
            title={t("serviceList.surgeryTitle")}
            listOfServices={t("serviceList.surgery", { returnObjects: true })}
          />
          <OurServicesComp
            icon={correct}
            title={t("serviceList.correctionTitle")}
            listOfServices={t("serviceList.correctionList", {
              returnObjects: true,
            })}
          />
          <OurServicesComp
            icon={child}
            title={t("serviceList.children'sDentistryTitle")}
            listOfServices={t("serviceList.children'sDentistryList", {
              returnObjects: true,
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(OurServices);
