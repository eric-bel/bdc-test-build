import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <div
      className="flex flex-col gap-5 
    md:flex-row
    tab:flex-row
    mob:flex-row
    "
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/DentalClinicBatumi"
      >
        <ImFacebook2
          className="text-[#43D5CB] text-[30px] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]	
        md:text-[25px]
        mob:text-[25px]
        "
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/batumidentalclinic/"
      >
        <BsInstagram
          className="text-[#43D5CB] text-[30px]
        md:text-[25px]
        mob:text-[25px]
        "
        />
      </a>
    </div>
  );
};

export default Social;
