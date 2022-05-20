import { withTranslation } from "react-i18next";
import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Radiography = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.radiographyTitle")} key="5">
        <div className="text-[13px] font-medium pb-2">
          {t("serviceList.radiographyInfo1")}
        </div>
        <div className="text-[13px] font-medium pb-2">
          {t("serviceList.radiographyInfo2")}
        </div>
        <div className="text-[13px] font-medium pb-2">
          {t("serviceList.radiographyInfo3")}
        </div>
        <strong className="text-[13px] font-bold pb-2">
          {t("serviceList.radiographyInfo4")}
        </strong>
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Radiography);
