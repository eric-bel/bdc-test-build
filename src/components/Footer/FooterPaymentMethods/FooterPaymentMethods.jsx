import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

const FooterPaymentMethods = () => {
  return (
    <>
      <div>
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
