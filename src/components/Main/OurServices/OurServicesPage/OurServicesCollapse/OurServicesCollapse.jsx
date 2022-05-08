import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "./OurServicesCollapseList/OurServicesCollapseList";
import { FaTooth } from "react-icons/fa";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const genExtra = () => (
  <FaTooth
    className="text-sky-500"
    size={16}
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const OurServicesCollapse = ({ t }) => {
  return (
    <div className="px-20 mob:px-2 tab:px-5">
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
      <Collapse onChange={callback}>
        <Panel header={t("serviceList.treatTitle")} key="1" extra={genExtra()}>
          <OurServicesCollapseList
            listOfServices={t("serviceList.treatList", {
              returnObjects: true,
            })}
          />
        </Panel>
        <Panel
          header={t("serviceList.implantTitle")}
          key="2"
          extra={genExtra()}
        >
          <OurServicesCollapseList
            listOfServices={t("serviceList.implantList", {
              returnObjects: true,
            })}
          />
        </Panel>
        <Panel
          header={t("serviceList.surgeryTitle")}
          key="3"
          extra={genExtra()}
        >
          <OurServicesCollapseList
            listOfServices={t("serviceList.surgery", {
              returnObjects: true,
            })}
          />
        </Panel>
        <Panel
          header={t("serviceList.correctionTitle")}
          key="4"
          extra={genExtra()}
        >
          <OurServicesCollapseList
            listOfServices={t("serviceList.correctionList", {
              returnObjects: true,
            })}
          />
        </Panel>
        <Panel
          header={t("serviceList.children'sDentistryTitle")}
          key="5"
          extra={genExtra()}
        >
          <OurServicesCollapseList
            listOfServices={t("serviceList.children'sDentistryList", {
              returnObjects: true,
            })}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default withTranslation()(OurServicesCollapse);
