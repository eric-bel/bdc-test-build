import OurServicesComp from "./OurServicesComp/OurServicesComp";
import treat from "../../../assets/chair.png";
import implant from "../../../assets/implant2.png";
import surgery from "../../../assets/surgery.png";
import { withTranslation } from "react-i18next";

const OurServices = ({t}) => {
  return (
    //   main-container
    <div
      className="bg-[#091D3E] text-white mt-20
      mob:h-[950px]
      tab:h-[950px]
      md:h-[950px]
      lap:h-[950px]
      desc:h-[850px]
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
        mob:text-[6px]
        tab:text-[8px]
        md:text-[10px]
        lap:text-[12px]
        desc:text-[14px]
        xdesc:text-[16px]"
        >
          Высококачественный уход и безопасность пациентов
        </div>
        {/* title 2 */}
        <h3
          className="text-white text-[40px] font-medium 
      mob:text-[16px] mob:font-bold
      tab:text-[18px] tab:font-bold
      md:text-[20px] md:font-bold"
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
            listOfServices={t("serviceList.treatList", { returnObjects: true })}
          />
          <OurServicesComp
            icon={implant}
            title={t("serviceList.implantTitle")}
            listOfServices={t("serviceList.implantList", { returnObjects: true })}
          />
          <OurServicesComp
            icon={surgery}
            title={t("serviceList.surgeryTitle")}
            listOfServices={t("serviceList.surgery", { returnObjects: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(OurServices);
