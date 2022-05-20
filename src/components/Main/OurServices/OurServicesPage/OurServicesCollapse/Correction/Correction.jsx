import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "../OurServicesCollapseList/OurServicesCollapseList";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Correction = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.correctionTitle")} key="4">
        <OurServicesCollapseList
          listOfServices={t("serviceList.correctionList", {
            returnObjects: true,
          })}
        />
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Correction);
