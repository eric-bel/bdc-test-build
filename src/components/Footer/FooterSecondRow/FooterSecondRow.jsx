import FooterAdress from "../FooterAdress/FooterAdress";
import FooterSchedule from "../FooterSchedule/FooterSchedule";

const FooterSecondRow = (props) => {
  return (
    <div className="flex justify-between">
      <FooterAdress />
      <FooterSchedule />
    </div>
  );
};

export default FooterSecondRow;
