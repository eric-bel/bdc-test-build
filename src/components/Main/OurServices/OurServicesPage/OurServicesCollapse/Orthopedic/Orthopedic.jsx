import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import metaloСeramica from "../../../../../../assets/servicesPage/orthopedic/coroana-dentara-metalo-ceramica-poza.jpg";
import prosthesis from "../../../../../../assets/servicesPage/orthopedic/prosthesis.jpeg";
import cirkon from "../../../../../../assets/servicesPage/orthopedic/cirkon.jpg";
import cirkon2 from "../../../../../../assets/servicesPage/orthopedic/cirkon2.jpg";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Orthopedic = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.orthopedicTitle")} key="5">
        <Collapse>
          <Panel header={t("serviceList.orthopedicList.service1")} key="123">
            <img src={metaloСeramica} alt="metaloСeramica"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={t("serviceList.orthopedicList.service2")} key="456">
            <img src={metaloСeramica} alt="metaloСeramica"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={t("serviceList.orthopedicList.service3")} key="456">
            <img src={cirkon} alt="cirkon"></img>
            <img src={cirkon2} alt="cirkon2"></img>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={t("serviceList.orthopedicList.service4")} key="456">
            <img src={prosthesis} alt="prosthesis"></img>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Orthopedic);
