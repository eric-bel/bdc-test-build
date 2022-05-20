import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "../OurServicesCollapseList/OurServicesCollapseList";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Surgery = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.surgeryTitle")} key="3">
        <Collapse onChange={callback} className="font-bold text-sm w-full">
          <Panel header={t("serviceList.surgerySubtitleSaveTeeth")} key="3.1">
            <OurServicesCollapseList
              listOfServices={t("serviceList.surgerySubtitleSaveTeethList", {
                returnObjects: true,
              })}
            />
          </Panel>
        </Collapse>
        <OurServicesCollapseList
          listOfServices={t("serviceList.surgery", {
            returnObjects: true,
          })}
        />
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Surgery);
