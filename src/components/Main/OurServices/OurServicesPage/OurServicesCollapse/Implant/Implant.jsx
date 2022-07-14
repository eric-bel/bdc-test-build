import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "../OurServicesCollapseList/OurServicesCollapseList";
import implantswiss from "../../../../../../assets/implants/implantswiss.jpeg";
import implantmono from "../../../../../../assets/implants/implantmono.jpeg";
import neobiotech from "../../../../../../assets/implants/neobiotech.jpeg";
import implantmis from "../../../../../../assets/implants/implantmis.jpeg";
import sgc from "../../../../../../assets/implants/sgc.jpeg";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Implant = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.implantTitle")} key="2">
        <p className="text-[12px] font-medium pb-2">
          {t("serviceList.implantServiceDescription")}
        </p>
        <Collapse>
          <Panel header={"IMPLANTSWISS MONO"} key="2.1">
            <img src={implantmono} alt="IMPLANT SWISSMONO"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={"IMPLANTSWISS"} key="2.2">
            <img src={implantswiss} alt="IMPLANTSWISS"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={"IMPLANT NEOBIOTECH"} key="2.3">
            <img src={neobiotech} alt="IMPLANT NEOBIOTECH"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={"IMPLANT MIS"} key="2.4">
            <img src={implantmis} alt="IMPLANT MIS"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={"IMPLANT SGC"} key="2.5">
            <img src={sgc} alt="IMPLANT SGC"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={t("serviceList.implantBoneGraftingTitle")} key="2.6">
            <p className="text-[12px] font-medium pb-2">
              {t("serviceList.implantBoneGraftingDescription")}
            </p>
            <OurServicesCollapseList
              listOfServices={t("serviceList.implantBoneGraftingList", {
                returnObjects: true,
              })}
            />
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Implant);
