import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "../OurServicesCollapseList/OurServicesCollapseList";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const TherapeuticDentistry = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.treatTitle")} key="1" >
        <OurServicesCollapseList
          listOfServices={t("serviceList.treatList", {
            returnObjects: true,
          })}
        />
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(TherapeuticDentistry);
