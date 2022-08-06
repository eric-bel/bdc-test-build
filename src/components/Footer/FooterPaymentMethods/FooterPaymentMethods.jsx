import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { withTranslation } from "react-i18next";

const FooterPaymentMethods = ({ t }) => {
  return (
    <>
      <div
        className="
      md:flex md:items-center md:gap-3
      tab:flex tab:items-center tab:gap-2
      mob:hidden
      "
      >
        <div className="flex gap-2">
          <FaCcMastercard className="text-[#43D5CB] text-[36px]" />
          <SiVisa className="text-[#43D5CB] text-[36px]" />
        </div>
        <p>{t("footer.paymentInfo.row1")}</p>{" "}
        <p>{t("footer.paymentInfo.row2")}</p>
      </div>
    </>
  );
};

export default withTranslation()(FooterPaymentMethods);
