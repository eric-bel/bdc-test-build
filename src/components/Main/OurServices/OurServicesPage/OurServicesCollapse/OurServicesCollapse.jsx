import { withTranslation } from "react-i18next";
import TherapeuticDentistry from "./TherapeuticDentistry/TherapeuticDentistry";
import Implant from "./Implant/Implant";
import Surgery from "./Surgery/Surgery";
import Correction from "./Correction/Correction";
import Children from "./Children/Children";
import Aesthetic from "./Aesthetic/Aesthetic";
import Orthopedic from "./Orthopedic/Orthopedic";
import Radiography from "./Radiography/Radiography";
import ListWrapper from "./ListWrapper/ListWrapper";

const OurServicesCollapse = ({ t }) => {
  return (
    <div className="px-28 mob:px-2 tab:px-5 lap:px-12 md:px-12">
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
      <h3
        className="text-white text-[40px] font-medium mb-20
      mob:text-[16px] mob:font-bold mob:mb-4 mob:text-center
      tab:text-[18px] tab:font-bold tab:mb-6
      md:text-[20px] md:font-bold md:mb-4 
      lap:text-[35px] lap:font-bold lap:mb-4
      "
      >
        Наши услуги
      </h3>
      <div className="flex justify-between flex-wrap gap-y-16 mob:flex-col mob:mt-10 mob:gap-9 tab:flex-col tab:mt-10 tab:items-center">
        <ListWrapper>
          <TherapeuticDentistry />
        </ListWrapper>
        <ListWrapper>
          <Implant />
        </ListWrapper>
        <ListWrapper>
          <Surgery />
        </ListWrapper>
        <ListWrapper>
          <Correction />
        </ListWrapper>
        <ListWrapper>
          <Children />
        </ListWrapper>
        <ListWrapper>
          <Aesthetic />
        </ListWrapper>
        <ListWrapper>
          <Orthopedic />
        </ListWrapper>
        <ListWrapper>
          <Radiography />
        </ListWrapper>
      </div>
    </div>
  );
};

export default withTranslation()(OurServicesCollapse);
