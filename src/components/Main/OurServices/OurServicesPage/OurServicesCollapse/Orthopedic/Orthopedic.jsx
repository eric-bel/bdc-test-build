import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "../OurServicesCollapseList/OurServicesCollapseList";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Orthopedic = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.orthopedicTitle")} key="5">
        <OurServicesCollapseList
          listOfServices={t("serviceList.orthopedicList", {
            returnObjects: true,
          })}
        />
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Orthopedic);
