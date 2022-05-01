import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

const FooterPaymentMethods = () => {
  return (
    <>
      <div className="
      md:flex md:items-center md:gap-3
      tab:flex tab:items-center tab:gap-2
      ">
        <div className="flex gap-2">
          <FaCcMastercard className="text-[#43D5CB] text-[36px]" />
          <SiVisa className="text-[#43D5CB] text-[36px]" />
        </div>
        <p>Принимаем оплату наличным</p> <p>и безналичным расчетом</p>
      </div>
    </>
  );
};

export default FooterPaymentMethods;
