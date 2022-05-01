import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Social = (props) => {
  return (
    <div className="flex flex-col gap-5">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/DentalClinicBatumi"
      >
        <ImFacebook2 className="text-[#43D5CB] text-[40px]
        md:text-[35px]

        " />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/batumidentalclinic/"
      >
        <BsInstagram className="text-[#43D5CB] text-[40px]
        md:text-[35px]
        " />
      </a>
    </div>
  );
};

export default Social;
