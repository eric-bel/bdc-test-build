import { withTranslation } from "react-i18next";
import { Collapse } from "antd";
import OurServicesCollapseList from "../OurServicesCollapseList/OurServicesCollapseList";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Aesthetic = ({ t }) => {
  return (
    <Collapse onChange={callback} className="font-bold text-sm w-full">
      <Panel header={t("serviceList.aestheticDentistryTitle")} key="6">
        <OurServicesCollapseList
          listOfServices={t("serviceList.aestheticDentistryList", {
            returnObjects: true,
          })}
        />
        <Collapse onChange={callback} className="font-bold text-sm w-full">
          <Panel header={t("serviceList.aestheticSubtitleVeneer")} key="6.1">
            <OurServicesCollapseList
              listOfServices={t("serviceList.aesthetiсVeneerList", {
                returnObjects: true,
              })}
            />
          </Panel>
        </Collapse>
        <Collapse onChange={callback} className="font-bold text-sm w-full">
          <Panel
            header={t("serviceList.aestheticArtisticRestorationTitle")}
            key="6.2"
          >
            <OurServicesCollapseList
              listOfServices={t(
                "serviceList.aestheticArtisticRestorationList",
                {
                  returnObjects: true,
                }
              )}
            />
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
};

export default withTranslation()(Aesthetic);
